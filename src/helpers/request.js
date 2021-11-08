import axios from 'axios';
import { isPlainObject } from 'lodash';
import { deepMerge } from '../lib';

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

// 暫存執行中的請求
const restPending = new Map();

/**
 * 暫存請求
 *
 * @param {object} config - API 回應內容
 */
export const addPending = (config) => {
  // 建立請求 key (method & url)
  const key = [config.method, config.url].join('&');

  // config 添加 cancelToken 屬性
  config.cancelToken = new axios.CancelToken((cancel) => {
    // 確認沒有相同的 key，把此次請求的 Cancel Func 暫存
    if (!restPending.has(key)) restPending.set(key, cancel);
  });
};

/**
 * 移除暫存中的請求
 *
 * 條件：有相同請求的 key
 *
 * @param {object} config - API 回應內容
 */
export const removePending = (config) => {
  const key = [config.method, config.url].join('&');

  // 如果有相同的 key，把先前暫存的 Cancel Func 回呼執行，並且從暫存中移除
  if (restPending.has(key)) {
    const cancel = restPending.get(key);
    cancel(key);
    restPending.delete(key);
  }
};

/**
 * 取消請求
 *
 * @param {object} config - API 請求內容
 */
export const cancelRequest = (config) => {
  const key = [config.method, config.url].join('&');

  // config 添加 cancelToken 屬性
  config.cancelToken = new axios.CancelToken((cancel) => {
    cancel(key);
  });
};

/**
 * 取消請求驗證
 *
 * @param {object} error - API 錯誤回應內容
 * @returns {boolean}
 */
export const isCancel = (error) => {
  return axios.isCancel(error);
};

/**
 * 建立 axios 實體
 *
 * @param {object} options - 初始化參數
 * @returns {*}
 */
export const httpRequset = (config) => {
  const newOptions = deepMerge(baseConfig, isPlainObject(config) && config);
  return axios.create(newOptions);
};
