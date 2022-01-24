export default {
  // 參數型態錯誤
  typeVerify: (type) => `[Type Error]: Must be a '${type}'.`,
  // 同步刷新錯誤 - 重新請求次數超過最大限制
  maxRequest: 'Number of requests exceeded limit.',
};
