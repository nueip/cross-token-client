import axios from 'axios';
import { isPlainObject, deepMerge } from '../lib';

const baseConfig = {
  // 服務終端
  baseURL: '',
  // 跨域請求挾帶 cookies
  withCredentials: true,
  // 請求回應超時
  timeout: 30000,
  // 自定義抬頭
  headers: {},
};

// API url
export const api = {
  sync: '/oauth2/token/api',
  refresh: '/oauth2/token/api',
  validate: '/api/oauth2/token',
};

/**
 * Axios 請求參數檢查
 *
 * - 只支援 baseURL, withCredentials, timeout, headers
 *
 * @param {object} config - axios 請求參數
 * @returns {boolean}
 */
function checkConfig(config = {}) {
  const keysArr = [];

  Object.keys(config).forEach((key) => {
    if (!Object.prototype.hasOwnProperty.call(baseConfig, key)) {
      keysArr.push(key);
    }
  });

  const diff = keysArr.length && keysArr.length > 0;

  if (diff) console.error(`Request config error: [${keysArr}] not exists!`);

  return diff;
}

/**
 * 建立 axios 實體
 *
 * @param {object} config - axios 請求參數
 * @returns {*}
 */
export const httpRequest = (config) => {
  const keyExists = checkConfig(config);
  const newOptions = keyExists
    ? {}
    : deepMerge(baseConfig, isPlainObject(config) && config);

  return axios.create(newOptions);
};
