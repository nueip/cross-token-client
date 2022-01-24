/**
 * Token Injection Client side
 *
 * @author Grace.Wang
 */
import cookies from 'js-cookie';
import * as TC from './constant';
import { rand, deepMerge, queryString } from './lib';
import { api, httpRequset } from './helpers/request';
import { setTokens, removeTokens } from './helpers/token';
import errorMsg from './helpers/error-message';
import webStorage from './helpers/storage';
import privateMethods from './privateMethods';

// Axios 支援 finally 方法
require('promise.prototype.finally').shim();

// 初始預設值
const DEFAULTS = {
  // 是否自動初始化 & 刷新同步
  autopilot: true,
  // 單一登入網址
  sso_url: '',
  // 自定義 Cookie 前綴字串
  cookie_prefix: '',
  // 重新定向網址
  redirect_url: '',
  // 是否配置 X-Requested-With 抬頭
  xhr_with: true,
  // 非登入狀態的 Callback
  onLogout: null,
};

class TokenInjection {
  /**
   * 建構子
   *
   * @param {object} options - 參數設定
   */
  constructor(options = {}) {
    // 選項屬性
    this.options = deepMerge(DEFAULTS, options);

    // Token Keys
    this.tokenKeys = [
      TC.ACCESS_TOKEN_NAME,
      TC.TOKEN_EXPIRED_NAME,
      TC.TOKEN_TYPE,
      TC.TOKEN_SCOPE,
      TC.REFRESH_TOKEN_NAME,
      TC.TOKEN_CHECK_SUM,
      TC.TOKEN_CREATE_TIME_NAME,
    ];

    // Schedule cache
    this.intervalSync = null;
    this.intervalRefresh = null;

    // 自動同步/刷新 Token 請求錯誤次數計數
    this.syncTimes = 0;
    this.refreshTimes = 0;

    // 暫存執行中的請求資訊
    this.axiosPending = new Map();

    // 實例化 axios
    this.rest = httpRequset({
      baseURL: this.options.sso_url,
      // 判斷是否為 Ajax 非同步請求，跨域時須自行配置此 header access
      headers: { 'X-Requested-With': 'XMLHttpRequest' },
    });

    // Axios 攔截器
    privateMethods.interceptors(this);

    // 自動初始化
    if (this.options.autopilot) {
      this.init();
    }
  }

  /**
   * 初始化 TokenInjection 實例
   *
   * @returns {Promise}
   */
  init() {
    const instance = this;

    return instance
      .sync()
      .then(() => {
        // 載入後執行 定期同步 Token 內容
        instance.autoSync();

        // 載入後執行 定期刷新 Token
        instance.autoRefresh();

        // 載入後執行 自動登出倒數
        privateMethods.autoLogout(instance);
      })
      .catch((error) => {
        // 捕獲錯誤為登出狀態，轉導回 IAM 登出頁
        if (error.isLogout) instance.logoutIAM();

        throw new Error(error);
      });
  }

  /**
   * 同步 Token 內容 - 執行一次
   *
   * - 向 oAuth Server 同步 Token 資訊
   * - 同步錯誤時，檢查是否為登入狀態，否時刪除 Token
   *
   * @returns {object}
   */
  sync() {
    const instance = this;
    const { rest, tokenKeys, options } = this;

    return new Promise((resolve, reject) => {
      // 抓取資料
      rest
        .get(`${options.sso_url}${api.sync}`)
        .then((res) => {
          let tokenInfo = res.data || {}; //eslint-disable-line

          // 執行完成，暫存請求響應狀態
          instance.axiosPending.set('sync', res.request.readyState);

          // 請求次數計數歸零
          instance.syncTimes = 0;

          // 預設清除 Token Keys
          removeTokens(tokenKeys);

          // 寫入 Token Keys 異常，清空 localStorage 後，執行登出
          try {
            setTokens(tokenKeys, tokenInfo);
          } catch (error) {
            webStorage.clear();
            instance.logoutIAM();
          }

          resolve(res);
        })
        .catch((error) => {
          // 請求次數計數
          instance.syncTimes += 1;

          // 請求次數超過最大限制，丟出例外錯誤
          if (instance.syncTimes >= TC.MAX_REQUEST_TIMES) {
            throw new Error(errorMsg.maxRequest, instance.syncTimes);
          }

          reject(error);
        });
    });
  }

  /**
   * 刷新 Token - 執行一次
   *
   * - 向 oAuth Server 執行 Refresh Token
   * - 執行條件
   * - 必需有 refresh_token 金鑰: localStorage.token_refresh_token
   * - 當 現在時間 超過 過期時間 - TokenRefreshBefore 時觸發更新 token
   *
   * @throws 沒有 Refresh Token 時丟出例外
   * @returns {Promise}
   */
  refresh() {
    const instance = this;
    const { rest, options } = this;

    // Refresh Token 值
    let refreshToken = webStorage.get(TC.REFRESH_TOKEN_NAME); //eslint-disable-line

    // 金鑰不存在時丟出例外
    if (!refreshToken) {
      throw privateMethods.exception(instance, 'Need Refresh Token !', 401);
    }

    // 執行刷新金鑰
    return new Promise((resolve, reject) => {
      rest
        .post(
          `${options.sso_url}${api.refresh}?v=${rand(11111, 99999)}`,
          queryString({ refresh_token: refreshToken }),
          {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          }
        )
        .then((res) => {
          // 請求次數計數歸零
          instance.refreshTimes = 0;

          // 執行完成，暫存請求響應狀態
          instance.axiosPending.set('refresh', {
            readyState: res.request.readyState,
          });

          resolve(res);
        })
        .catch((error) => {
          // 請求次數計數
          instance.refreshTimes += 1;

          // 請求次數超過最大限制，丟出例外錯誤
          if (instance.refreshTimes >= TC.MAX_REQUEST_TIMES) {
            throw new Error(errorMsg.maxRequest, instance.refreshTimes);
          }

          reject(error);
        });
    });
  }

  /**
   * 定期執行同步 Token 內容
   *
   * - 向 oAuth Server 同步Token資訊
   * - 執行條件
   * - Cookie 中 tkchecksum 是否與 LocalStorage 中的 token_checksum 不一樣
   * - axios未執行過或已執行完成
   * - 多視窗時有可能同時執行，待觀察
   * - 執行錯誤時關閉自動同步30秒後重啟
   *
   * @param {number} interval - 多少個間隔，每個間隔為1分鐘
   */
  autoSync(interval = 0) {
    const instance = this;
    const { options } = this;
    const tkCheckSum = `${options.cookie_prefix}tkchecksum`;
    const syncReadyState = instance.axiosPending.get('sync');
    const getSyncState = () => {
      return typeof syncReadyState === 'undefined' || syncReadyState === null;
    };

    // 檢查 LocalStroage 金鑰檢核碼與 Cookie 金鑰檢核碼是否一致
    const checkSumNoEqual = () => {
      return cookies.get(tkCheckSum) !== webStorage.get('token_checksum');
    };

    // 定期執行 (Cookie 中的金鑰檢核碼必須存在)
    instance.intervalSync =
      !instance.intervalSync &&
      setInterval(async () => {
        // tkchecksum !== token_checksum，axios未執行或以執行完成
        if (checkSumNoEqual() && (getSyncState() || syncReadyState === 4)) {
          await instance.sync().catch((error) => {
            // 取得 回覆資源
            const { response } = error;
            // 取得 錯誤狀態碼
            let errorCode = response ? response.status : 0; //eslint-disable-line

            // 執行錯誤時關閉自動同步 等待30秒鐘後重啟 (排除 401 Code：Token 失效發還狀態)
            if (errorCode !== 401) {
              instance.autoSyncStop();
              setTimeout(() => instance.autoSync(), TC.TOKEN_AUTO_SYNC_RESTART);
            }
          });
        }
      }, 1000 * 60 * Math.abs(interval) || TC.TOKEN_AUTO_SYNC_INTERVAL);
    }
  }

  /**
   * 停止 自動同步 Token 內容
   */
  autoSyncStop() {
    const instance = this;

    if (instance.intervalSync) {
      // 停止定期執行
      clearInterval(instance.intervalSync);
      instance.intervalSync = null;
      instance.axiosPending.delete('sync');
    }
  }

  /**
   * 定期刷新 Token
   *
   * - 向 oAuth Server 同步Token資訊
   * - 執行條件
   * - 即將過期
   * - axios未執行過或已執行完成
   * - 多視窗時有可能同時執行，待觀察
   * - 執行錯誤時關閉自動同步3秒後重啟
   *
   * @param {Number} interval - 多少秒
   */
  autoRefresh(interval = 0) {
    const instance = this;

    // 執行錯誤時關閉自動同步30秒後重啟
    const refreshStop = () => {
      instance.autoRefreshStop();
      setTimeout(() => instance.autoRefresh(), 30000);
    };

    // 定期執行
    if (!instance.intervalRefresh) {
      const refreshReadyState = instance.axiosPending.get('refresh');
      const getRefreshState = () => {
        return (
          typeof refreshReadyState === 'undefined' || refreshReadyState === null
        );
      };

      instance.intervalRefresh = setInterval(() => {
        try {
          // 現在時間
          const nowTime = parseInt(Date.now() / 1000, 10);

          // Token建立時間
          const createKey = webStorage.get(TC.TOKEN_CREATE_TIME_NAME);
          const createTime = parseInt(createKey, 10);

          // Token過期時間
          const expiredKey = webStorage.get(TC.TOKEN_EXPIRED_NAME);
          const expireTime = parseInt(expiredKey, 10);

          // 過期時間 - TokenRefreshBefore
          const refreshTime = createTime + expireTime - TC.TOKEN_REFRESH_BEFORE;

          // 當 現在時間 超過 過期時間 - TokenRefreshBefore 時觸發更新 Token
          if (
            nowTime >= refreshTime &&
            (getRefreshState() || refreshReadyState === 4)
          ) {
            instance.refresh().catch(() => {
              // 執行錯誤時關閉自動同步30秒後重啟
              refreshStop();
            });
          }
        } catch (e) {
          // 例外訊息
          console.error(`[${e.code}]${e.message}`);
          refreshStop();
        }
      }, interval * 1000 || TC.TOKEN_AUTO_REFRESH_INTERVAL * 1000);
    }
  }

  /**
   * 停止 自動刷新 Token
   */
  autoRefreshStop() {
    const instance = this;

    if (instance.intervalRefresh) {
      // 停止定期執行
      clearInterval(instance.intervalRefresh);
      instance.intervalRefresh = null;
      instance.axiosPending.delete('refresh');
    }
  }

  /**
   * 驗證Token
   *
   * @param {string} token - 本地端要被驗證的 Token
   * @returns {Promise}
   */
  validate(token) {
    const { rest, options } = this;
    let validateToken = token || ''; //eslint-disable-line

    return new Promise((resolve, reject) => {
      rest
        .get(`${options.sso_url}${api.validate}?v=${rand(11111, 99999)}`, {
          headers: {
            Authorization: `Bearer ${validateToken}`,
          },
        })
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  /**
   * 取得 LocalStorage Token
   *
   * @returns {string} Access Token
   */
  getToken() {
    return webStorage.get(TC.ACCESS_TOKEN_NAME);
  }

  /**
   * 取得當前語系
   *
   * @returns {string} 回傳語系代碼
   */
  getLang() {
    const { options } = this;
    return cookies.get(`${options.cookie_prefix}lang`) || 'en';
  }

  /**
   * 開啟登入頁面
   *
   * @param {string} target - _self | _blank
   */
  loginIAM(target = '') {
    const { options } = this;
    let ssoUrl = `${options.sso_url}/login?redirect_uri=${options.redirect_url}` || ''; //eslint-disable-line

    window.open(ssoUrl, target || '_self');
  }

  /**
   * 登出
   */
  logoutIAM() {
    const instance = this;
    const { options } = this;
    let ssoUrl = `${options.sso_url}/logout` || ''; //eslint-disable-line

    // 重置初始建構屬性 & 清除 Token's Info.
    privateMethods.reset(instance).then(() => {
      // 轉導回 SSO 登出頁
      window.location.href = ssoUrl;
    });
  }

  /**
   * 是否為登入狀態
   *
   * @returns {Boolean}
   */
  isLogin() {
    const { options } = this;
    const loginKey = `${options.cookie_prefix}login`;
    const loginCookie = cookies.get(loginKey);

    return loginCookie && loginCookie === '1';
  }

  /**
   * axios 全域設定方法
   *
   * @param {object} config - axios options
   * @returns {TokenInjection}
   */
  axiosCreate(config = {}) {
    const instance = this;

    instance.options.sso_url = config.baseURL || '';
    instance.rest = httpRequset(config);

    return instance;
  }
}

export default TokenInjection;
