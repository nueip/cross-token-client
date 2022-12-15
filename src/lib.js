/**
 * 是否為字串
 *
 * @param {string} str - 字串
 * @returns {boolean}
 */
export function isString(str) {
  return typeof str === 'string';
}

/**
 * 是否為函示類型
 *
 * @param {*} value
 * @return {boolean}
 */
export function isFunction(value) {
  return typeof value === 'function';
}

/**
 * 是否為原型物件
 *
 * @param {object} value - 物件參數
 */
export function isPlainObject(value) {
  if (typeof value !== 'object' || value === null) {
    return false;
  }

  const prototype = Object.getPrototypeOf(value);

  return (
    (prototype === null ||
      prototype === Object.prototype ||
      Object.getPrototypeOf(prototype) === null) &&
    !(Symbol.toStringTag in value) &&
    !(Symbol.iterator in value)
  );
}

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
 * @param  {object} target - 來源參數
 * @param  {*} args - 參數集合
 * @returns {object} 回傳重新組合的物件或陣列
 */
export const deepMerge =
  Object.assign ||
  function assign(target, ...args) {
    if (isPlainObject(target) && args.length > 0) {
      args.forEach((arg) => {
        if (isPlainObject(arg)) {
          Object.keys(arg).forEach((key) => {
            target[key] = arg[key];
          });
        }
      });
    }

    return target;
  };
