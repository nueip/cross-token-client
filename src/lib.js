/**
 * 物件參數轉序列字串
 * 
 * @param {object} params - 參數物件
 * @returns {string} 參數序列字串
 */
 export function queryString ( params ) {
  return Object.keys( params )
    .map( ( key ) => key + '=' + params[key] )
    .join( '&' );
}
