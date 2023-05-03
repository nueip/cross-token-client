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

/**
 * 檢查傳入的所有參數是否皆已設定值 (值非 null 或 undefined 表示有設定)
 *
 * @param {...*} values
 * @returns {boolean}
 *
 * @example
 * isSet(null) // false
 * isSet(undefined) // false
 * isSet(-123, 'hello') // true
 * isSet(() => {}, {}, []) // true
 * isSet(0, '', false, NaN) // true
 * isSet(0, '', false, NaN, null) // false
 */
export function isSet(...values) {
  if (values.length === 0) {
    throw new Error('You must pass at least one parameter');
  }

  for (const value of values) { // eslint-disable-line
    // 若找到未設定的值，則立即回傳 false
    if ((value ?? null) === null) {
      return false;
    }
  }

  // 全部傳入參數皆已設定，回傳 true
  return true;
}
