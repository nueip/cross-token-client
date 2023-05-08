// Token
export const ACCESS_TOKEN_NAME = 'token_access_token';
// Refresh Token
export const REFRESH_TOKEN_NAME = 'token_refresh_token';
// Token 建立時間
export const TOKEN_CREATE_TIME_NAME = 'token_createtime';
// Token 過期時間
export const TOKEN_EXPIRED_NAME = 'token_expires_in';
// Token 過期 前x秒 更新 - x = 2000+(0~300) (錯開時間以免同時更新)
export const TOKEN_REFRESH_BEFORE = parseInt(2000 + Math.random() * 300, 10);
// Token 過期 前 x 秒 時， 每 y 秒 更新一次 - y = 300
export const TOKEN_AUTO_REFRESH_INTERVAL = 300;
// 每 1 分鐘 檢查是否需與後端同步Token
export const TOKEN_AUTO_SYNC_INTERVAL = 1000 * 60;
// Token 同步錯誤/異常重啟時間，預設等待ㄧ分鐘
export const TOKEN_AUTO_SYNC_RESTART = 1000 * 60;
// Token 授權類型
export const TOKEN_TYPE = 'token_type';
// Token 授權範圍
export const TOKEN_SCOPE = 'token_scope';
// Token 檢查總時數
export const TOKEN_CHECK_SUM = 'token_checksum';
// 自動登出時間 (12小時)
export const LOGOUT_TIME = 1000 * 43200;
// 同步刷新錯誤 重新請求次數最大限制
export const MAX_REQUEST_TIMES = 20;
