import { assignIn } from 'lodash';

/**
 * 參數序列化
 *
 * @param {object} params - 參數物件
 * @returns {string} 序列化字串
 */
export function queryString(params) {
  return Object.keys(params)
    .map((key) => `${key}=${params[key]}`)
    .join('&');
}

/**
 * 亂數產生器
 *
 * @param {number} min - 最小值
 * @param {number} max - 最大值
 * @returns {number} 產生的亂數值
 */
export function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * 合併物件或陣列
 *
 * @param  {*} args - 參數集合
 * @returns {object} 回傳重新組合的物件或陣列
 */
export function deepMerge(...args) {
  return assignIn(null, ...args);
}
