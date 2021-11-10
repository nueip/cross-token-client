/**
 * Token Injection Client side
 *
 * @author Grace.Wang
 */
import cookies from 'js-cookie';
import * as TC from './constant';
import { rand, deepMerge, queryString } from './lib';
import {
  api,
  httpRequset,
  removePending,
  addPending,
  cancelRequest,
  isCancel,
} from './helpers/request';
import { setTokens, removeTokens } from './helpers/token';
import webStorage from './helpers/storage';

// Axios 支援 finally 方法
require('promise.prototype.finally').shim();

// 初始預設值
const DEFAULTS = Object.freeze({
  // 單一登入網址
  sso_url: '',
  // 自定義 Cookie 前綴字串
  cookie_prefix: '',
  // 重新定向網址
  redirect_url: '',
  // 是否配置 X-Requested-With 抬頭
  xhr_with: false,
});

class TokenInjection {
  /**
   * 建構子
   *
   * @param {object} options
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

    // 暫存執行中的請求
    this.axiosPending = new Map();

    // Schedule cache
    this.intervalSync = null;
    this.intervalRefresh = null;

    // 自動同步/刷新 Token 請求次數計數
    this.syncTimes = 0;
    this.refreshTimes = 0;

    // 實例化 axios
    this.rest = httpRequset({
      baseURL: this.options.sso_url,
      // 判斷是否為 Ajax 非同步請求，跨域時須自行配置此 header access
      headers: { 'X-Requested-With': 'XMLHttpRequest' },
    });

    // Axios 攔截器
    this.#interceptors();
    this.init();
  }

  /**
   * 初始化 TokenInjection 實例
   */
  async init() {
    const instance = this;

    await instance
      .sync()
      .then((res) => {
        // 載入後執行 定期同步 Token 內容
        instance.autoSync();

        // 載入後執行 定期刷新 Token
        instance.autoRefresh();

        // 載入後執行 自動登出倒數
        instance.#autoLogout();

        return res;
      })
      .catch((error) => {
        return error;
      });
  }

  /**
   * 同步 Token 內容 - 執行一次
   *
   * - 向 oAuth Server 同步 Token 資訊
   * - 同步錯誤時，檢查是否為登入狀態，否時刪除 Token
   *
   * @returns {Promise}
   */
  sync() {
    const instance = this;
    const { rest, tokenKeys } = this;

    // 抓取資料
    return new Promise((resolve, reject) => {
      rest
        .get(api.sync)
        .then((res) => {
          const tokenInfo = res.data || {};

          // 暫存執行中的請求
          instance.axiosPending.set('sync', {
            readyState: res.request.readyState,
          });

          // 請求次數超過最大限制，回應錯誤
          if (instance.syncTimes >= TC.MAX_REQUEST_TIMES) {
            reject(res);
          }

          // 請求次數計數
          instance.syncTimes += 1;
          res.syncTimes = instance.syncTimes;

          // 設置 Token Keys (LocalStorage)
          setTokens(tokenKeys, tokenInfo);
          resolve(res);
        })
        .catch((error) => {
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
    const { rest } = this;

    // Refresh Token 值
    let refreshToken = webStorage.get(TC.REFRESH_TOKEN_NAME); //eslint-disable-line

    // 金鑰不存在時丟出例外
    if (!refreshToken) {
      throw instance.#exception('Need Refresh Token !', 401);
    }

    // 執行刷新金鑰
    return new Promise((resolve, reject) => {
      rest
        .post(
          `${api.refresh}?v=${rand(11111, 99999)}`,
          queryString({ refresh_token: refreshToken }),
          {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          }
        )
        .then((res) => {
          // 暫存執行中的請求
          instance.axiosPending.set('refresh', {
            readyState: res.request.readyState,
          });

          // 請求次數超過最大限制，回應錯誤
          if (instance.refreshTimes >= TC.MAX_REQUEST_TIMES) {
            reject(res);
          }

          // 請求次數計數
          instance.refreshTimes += 1;
          res.refreshTimes = instance.refreshTimes;

          resolve(res);
        })
        .catch((error) => {
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
   * - 執行錯誤時關閉自動同步3秒後重啟
   *
   * @param {number} interval - 多少個間隔，每個間為500毫秒
   */
  autoSync(interval = 0) {
    const instance = this;
    const { options } = this;
    const tkCheckSum = `${options.cookie_prefix}tkchecksum` || 'tkchecksum'; //eslint-disable-line
    const syncPending = instance.axiosPending.get('sync');

    // 檢查 LocalStroage 金鑰檢核碼與 Cookie 金鑰檢核碼是否一致
    const checkSumNoEqual = () => {
      return cookies.get(tkCheckSum) !== webStorage.get('token_checksum');
    };

    // 定期執行 (Cookie 中的金鑰檢核碼必須存在)
    if (!instance.intervalSync) {
      instance.intervalSync = setInterval(async () => {
        // tkchecksum != token_checksum , axios已執行完成
        if (!checkSumNoEqual() && syncPending.readyState === 4) return;

        await instance
          .sync()
          .then()
          .catch((error) => {
            // 請求次數超過最大限制，自動登出
            if (error.syncTimes && error.syncTimes >= TC.MAX_REQUEST_TIMES) {
              alert(TC.MAX_REQUEST_MESSAGE);
              instance.logoutIAM();
            }

            // 執行錯誤時關閉自動同步30秒後重啟
            instance.autoSyncStop();
            setTimeout(() => instance.autoSync(), 30000);
          });
      }, interval * 500 || TC.TOKEN_AUTO_SYNC_INTERVAL);
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
      const refreshPending = instance.axiosPending.get('refresh');

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
          if (nowTime >= refreshTime && refreshPending.readyState === 4) {
            instance
              .refresh()
              .then()
              .catch((error) => {
                // 請求次數超過最大限制，自動登出
                // eslint-disable-next-line prettier/prettier
                if (error.refreshTimes && error.refreshTimes >= TC.MAX_REQUEST_TIMES) {
                  alert(TC.MAX_REQUEST_MESSAGE);
                  instance.logoutIAM();
                }

                refreshStop();
              });
          }
        } catch (e) {
          // 例外訊息
          console.log(`[${e.code}]${e.message}`);
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
    const { rest } = this;
    const validateToken = token || '';

    return new Promise((resolve, reject) => {
      rest
        .get(`${api.validate}?v=${rand(11111, 99999)}`, {
          headers: {
            Authorization: `Bearer ${validateToken}`,
          },
        })
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        })
        .finally(() => {
          // Always executed
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
   * 開啟登入頁面
   *
   * @param {string} target - _self | _blank
   */
  loginIAM(target = '') {
    const { options } = this;
    const ssoUrl = `${options.sso_url}/login?redirect_uri=${options.redirect_url}` || ''; //eslint-disable-line

    window.open(ssoUrl, target || '_self');
  }

  /**
   * 登出
   */
  logoutIAM() {
    const instance = this;
    const { options } = this;

    // 重置初始建構屬性 & 清除 Token's Info.
    instance.#reset().then(() => {
      // 轉導回 SSO 登出頁
      window.location.href = `${options.sso_url}/logout`;
    });
  }

  /**
   * 是否為登入狀態
   *
   * @returns {Boolean}
   */
  isLogin() {
    const { options } = this;
    const loginKey = `${options.cookie_prefix}login` || 'login'; //eslint-disable-line
    const loginCookie = cookies.get(loginKey);

    return loginCookie && loginCookie === '1';
  }

  /**
   * axios 全域設定方法
   *
   * @param {object} config - axios options
   */
  axiosCreate(config = {}) {
    const instance = this;
    instance.rest = httpRequset(config);

    return instance;
  }

  /**
   * Axios 攔截器
   */
  #interceptors() {
    const instance = this;
    const { options, rest } = this;

    // 請求攔截器
    rest.interceptors.request.use(
      (config) => {
        if (!options.xhr_with) delete config.headers['X-Requested-With'];

        // 先判斷是否有重複的請求要取消
        removePending(config);

        // 登入時，把此次請求加入暫存 反之取消請求
        if (instance.isLogin()) {
          addPending(config);
        } else {
          cancelRequest(config);
        }

        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // 回應攔截器
    rest.interceptors.response.use(
      (res) => {
        // 請求已完成，從暫存中移除
        removePending(res);
        return res;
      },
      (error) => {
        // 取消請求，重置初始建構並轉導 SSO 回登入頁
        if (isCancel(error)) {
          instance.#reset().then(() => {
            instance.loginIAM();
          });
        }

        return Promise.reject(error);
      }
    );
  }

  /**
   * 重置
   *
   * - 初始化建構屬性
   * - 清除 Token's Info.
   */
  async #reset() {
    const instance = this;

    // 刪除 Token Keys
    removeTokens(instance.tokenKeys);

    // 清除執行中的請求暫存
    instance.axiosPending.clear();

    // 清除定期器
    instance.intervalSync = null;
    instance.intervalRefresh = null;

    // 自動同步/刷新 Token 請求次數歸零
    instance.syncTimes = 0;
    instance.refreshTimes = 0;
  }

  /**
   * 自動登出 - 時間預設一天
   */
  #autoLogout() {
    const instance = this;
    setTimeout(() => instance.logoutIAM(), TC.LOGOUT_TIME);
  }

  /**
   * 例外物件
   *
   * @param {string} messageIpt 訊息
   * @param {number} codeIpt 例外代碼
   */
  #exception(messageIpt, codeIpt) {
    this.code = codeIpt || 200;
    this.message = messageIpt || 'OK';
    this.name = 'exception';
  }
}

export default TokenInjection;
