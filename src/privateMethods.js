import { LOGOUT_TIME } from './constant';
// eslint-disable-next-line prettier/prettier
import { removePending, addPending, cancelRequest, isCancel } from './helpers/request';
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
  instance.intervalSync = null;
  instance.intervalRefresh = null;

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
  instance.rest.interceptors.response.use(
    (res) => {
      // 請求已完成，從暫存中移除
      removePending(res);
      return res;
    },
    (error) => {
      // 取消請求，重置初始建構並轉導 SSO 回登入頁
      if (isCancel(error)) {
        reset(instance).then(() => {
          instance.loginIAM();
        });
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
}

export default { interceptors, reset, autoLogout, exception };
