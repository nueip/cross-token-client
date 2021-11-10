import { isString } from 'lodash';

// 錯誤訊息
const errorMsg = {
  typeVerify: (type) => `[Type Error]: Must be a '${type}'.`,
};

/**
 * 檢查 輸入值是否為字串格式
 *
 * @param {*} string - 字串
 * @returns {boolean}
 */
const stringTypeVerify = (string) => {
  return !(!isString(string) && console.error(errorMsg.typeVerify('string')));
};

export default {
  /**
   * 設置 key|value
   *
   * @param {string} key - storage key
   * @param {*} value - 傳入值 (string or object)
   */
  set(key, value) {
    if (stringTypeVerify(key)) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  },

  /**
   * 取得指定 key 的值
   *
   * @param {string} key - storage key
   * @returns {*}
   */
  get(key) {
    return stringTypeVerify(key) ? JSON.parse(localStorage.getItem(key)) : null;
  },

  /**
   * 移除單一 key
   *
   * @param {string} key - storage key
   * @returns {*}
   */
  remove(key) {
    if (!stringTypeVerify(key)) {
      return;
    }

    localStorage.removeItem(key);
  },

  /**
   * 清除所有 key
   */
  clear() {
    localStorage.clear();
  },
};
