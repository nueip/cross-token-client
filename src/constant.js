// Token
export const ACCESS_TOKEN_NAME = "token_access_token";
// Refresh Token
export const REFRESH_TOKEN_NAME = "token_refresh_token";
// Token 建立時間
export const TOKEN_CREATE_TIME_NAME = "token_createtime";
// Token 過期時間
export const TOKEN_EXPIRED_NAME = "token_expires_in";
// Token 過期 前x秒 更新 - x = 2000+(0~300) (錯開時間以免同時更新)
export const TOKEN_REFRESH_BEFORE = parseInt(2000 + Math.random() * 300);
// Token 過期 前 x 秒 時， 每 y 秒 更新一次 - y = 300
export const TOKEN_AUTO_REFRESH_INTERVAL = 300;
// 每 x 毫秒 檢查是否需與後端同步Token - x = 500
export const TOKEN_AUTO_SYNC_INTERVAL = 500;
// Token 授權類型
export const TOKEN_TYPE = "token_type";
// Token 授權範圍
export const TOKEN_SCOPE = "token_scope";
// Token 檢查總時數
export const TOKEN_CHECK_SUM = "token_checksum";