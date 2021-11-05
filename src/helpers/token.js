import { forEach, includes } from 'lodash';
import webStorage from './storage';

/**
 * 設置 LocalStorage Tokens 資訊
 *
 * @param {array} accessKeys
 * @param {object} keys
 */
export const setTokens = function seTokens(accessKeys = [], keys = {}) {
  forEach(keys, (value, key) => {
    if (accessKeys.some((token) => includes(key, token))) {
      webStorage.set(key, value);
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
