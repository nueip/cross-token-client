import { forEach } from 'lodash';
import webStorage from './storage';

/**
 * 設置 LocalStorage Tokens 資訊
 *
 * @param {array} keyList - 設置金鑰清單
 * @param {object} keyObj - 金鑰內容
 */
export const setTokens = function seTokens(keyList = [], keyObj = {}) {
  keyList.forEach((key) => {
    if (key in keyObj) {
      webStorage.set(key, keyObj[key]);
    }
  });
};

/**
 * 移除 LocalStorage Tokens 資訊
 *
 * @param {array} keys - Token keys
 */
export const removeTokens = function removeToken(keys = []) {
  forEach(keys, (value) => {
    webStorage.remove(value);
  });
};
