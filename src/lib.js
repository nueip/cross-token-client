/**
 * 參數序列化
 * 
 * @param {Object} params - 參數物件
 * @returns {string} 序列化字串
 */
export function queryString(params) {
    return Object.keys(params)
        .map((key) => key + "=" + params[key])
        .join("&");
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