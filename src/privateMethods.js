import { isFunction } from './lib';
import { LOGOUT_TIME } from './constant';
import { removeTokens } from './helpers/token';

/**
 * 重置
 *
 * - 初始化建構屬性
 * - 清除 Token's Info.
 *
 * @param {TokenInjection} instance
 */
async function reset(instance) {
  // 刪除 Token Keys
  removeTokens(instance.tokenKeys);

  // 清除定期器
  instance.autoSyncStop();
  instance.autoRefreshStop();

  // 請求計數歸零
  instance.syncTimes = 0;
  instance.refreshTimes = 0;

  // 清除暫存執行中的請求資訊
  instance.axiosPending.clear();
}

/**
 * 自動登出 - 時間預設一天
 *
 * @param {TokenInjection} instance
 */
function autoLogout(instance) {
  setTimeout(() => instance.logoutIAM(), LOGOUT_TIME);
}

/**
 * Axios 攔截器
 *
 * @param {TokenInjection} instance
 */
function interceptors(instance) {
  // 請求攔截器
  instance.rest.interceptors.request.use(
    (config) => {
      if (!instance.options.xhr_with) {
        delete config.headers['X-Requested-With'];
      }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // 回應取消計數
  instance.cancelTimes = 0;

  // 回應攔截器
  instance.rest.interceptors.response.use(
    (res) => {
      return res;
    },
    (error) => {
      // 取得 回覆資源
      const { response } = error;
      // 取得 錯誤狀態碼
      let errorCode = response?.status ?? 0; //eslint-disable-line

      instance.cancelTimes += 1;
      // 捕獲錯誤 增加登出狀態
      error.isLogout = true;

      reset(instance).then(() => {
        // 非登入狀態的 Callback，避免自動排程持續執行，設置計數器強制執行一次
        if (
          isFunction(instance.options.onLogout) &&
          instance.cancelTimes === 1
        ) {
          instance.options.onLogout();
        }
      });

      if (errorCode === 401) {
        // 401 未授權的 Callback
        if (isFunction(instance.options.unauthorized)) {
          instance.options.unauthorized();
        }
      }

      return Promise.reject(error);
    }
  );
}

/**
 * 例外物件
 *
 * @param {TokenInjection} instance
 * @param {string} messageIpt 訊息
 * @param {number} codeIpt 例外代碼
 */
function exception(instance, messageIpt, codeIpt) {
  instance.code = codeIpt || 200;
  instance.message = messageIpt || 'OK';
  instance.name = 'exception';

  return instance;
}

export default { interceptors, reset, autoLogout, exception };
