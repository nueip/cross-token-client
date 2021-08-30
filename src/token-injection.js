/**
 * Token Injection Client side
 *
 * @see doc/07-component/01-system/02-sso-oauth/自有系統SSO簡化流程.md
 *
 * @author Mars.Hung & Chien.Lo
 */

const assignIn = require("lodash/assignIn");
const isPlainObject = require("lodash/isPlainObject");
const forEach = require("lodash/forEach");
const cookies = require("js-cookie");
const axios = require("axios").default;
const promiseFinally = require("promise.prototype.finally");

import * as TC from "./constant.js";
import { queryString, rand } from "./lib.js";

promiseFinally.shim();

// 初始預設值
const DEFAULTS = Object.freeze({
    SSO_URL: "",
    COOKIE_DEFAULT_PREFIX: "",
});

class TokenInjection {
    /**
     * 建構子
     *
     * @param {object} options
     */
    constructor(options = {}) {
        // 變更選項屬性
        this.options = assignIn({}, DEFAULTS, isPlainObject(options) && options);

        // LocalStorage Token資料Key值
        this.TokenKeys = [
            TC.ACCESS_TOKEN_NAME,
            TC.TOKEN_EXPIRED_NAME,
            TC.TOKEN_TYPE,
            TC.TOKEN_SCOPE,
            TC.REFRESH_TOKEN_NAME,
            TC.TOKEN_CHECK_SUM,
            TC.TOKEN_CREATE_TIME_NAME,
        ];

        // Axios cache
        this.axiosSync = null;
        this.axiosRefresh = null;
        this.axiosValidate = null;
        this.axiosSyncReadyState = null;
        this.axiosRefreshReadyState = null;

        // Schedule cache
        this.intervalSync = null;
        this.intervalRefresh = null;

        // 初始化 TokenInjection 實例
        this.init();
    }

    /**
     * 初始化 TokenInjection 實例
     */
    init() {
        // 載入後執行 同步 Token 內容 - oAuth & 前端 - 定期執行
        this.autoSync();

        // 載入後執行 刷新 Token - oAuth & 前端 - 定期執行
        this.autoRefresh();
    }

    /**
     * 開啟登入頁面
     */
    loginIAM() {
        const { options } = this;
        window.open(options.SSO_URL, "_blank");
    }

    /**
     * 登出
     */
    logoutIAM() {
        const { options } = this;
        window.open(options.SSO_URL + "/logout", "_blank");
    }

    /**
     * 同步 Token 內容 - oAuth & 前端 - 執行一次
     *
     * - 向 oAuth Server 同步 Token 資訊
     * - 同步錯誤時，檢查是否為登入狀態，否時刪除 Token
     *
     * @returns {Promise}
     */
    sync() {
        const self = this;
        const { options } = this;

        // 抓取資料
        self.axiosSync = axios
            .get(options.SSO_URL + "/oauth2/token/api", {
                // 允許跨域
                withCredentials: true,
            })
            .then((response) => {
                self.axiosSyncReadyState = response.request.readyState;

                const tokenInfo = response.data || {};

                // 寫至 LocalStorage
                forEach(tokenInfo, function(value, key) {
                    localStorage.setItem(key, value);
                });

                return response;
            })
            .catch((error) => {
                // 檢查-是否為登入狀態
                if (!self.isLogin()) {
                    // 非登入時刪除 token 資料
                    forEach(self.TokenKeys, function(key, value) {
                        localStorage.removeItem(key);
                    });
                }

                return error;
            });

        return self.axiosSync;
    }

    /**
     * 取得 Local Storage Token
     *
     * @returns {String} Access Token
     */
    getLocalStorageToken() {
        return localStorage.getItem(TC.ACCESS_TOKEN_NAME);
    }

    /**
     * 刷新 Token - oAuth & 前端 - 執行一次
     *
     * - 向 oAuth Server 執行 Refresh Token
     * - 執行條件
     * - 必需有 refresh_token 金鑰: localStorage.token_refresh_token
     * - 當 現在時間 超過 過期時間 - TokenRefreshBefore 時觸發更新 token
     *
     * @throws 沒有 Refresh Token 時丟出例外
     * @returns {Promise}
     */
    refresh() {
        const self = this;
        const { options } = this;

        // Refresh Token 值
        const refreshToken = localStorage.getItem(TC.REFRESH_TOKEN_NAME);

        // 金鑰不存在時丟出例外
        if (!refreshToken) {
            throw self.exception("Need Refresh Token !", 401);
        }

        // 執行刷新金鑰
        self.axiosRefresh = axios
            .post(
                options.SSO_URL + "/oauth2/token/api?v=" + rand(11111, 99999),
                queryString({
                    refresh_token: refreshToken,
                }), {
                    // 允許跨域
                    withCredentials: true,
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                }
            )
            .then((response) => {
                self.axiosRefreshReadyState = response.request.readyState;
                return response;
            })
            .catch((error) => {
                return error;
            });

        return self.axiosRefresh;
    }

    /**
     * 同步 Token 內容 - oAuth & 前端 - 定期執行
     *
     * - 向 oAuth Server 同步Token資訊
     * - 執行條件
     * - Cookie 中 tkchecksum 是否與 LocalStorage 中的 token_checksum 不一樣
     * - axios未執行過或已執行完成
     * - 多視窗時有可能同時執行，待觀察
     * - 執行錯誤時關閉自動同步3秒後重啟
     *
     * @param {number} interval - 多少個間隔，每個間為500毫秒
     */
    autoSync(interval = 0) {
        const self = this;
        const { options } = this;

        // 間隔毫秒數
        interval = interval * 500 || TC.TOKEN_AUTO_SYNC_INTERVAL;

        // 定期執行
        if (!self.intervalSync) {
            self.intervalSync = setInterval(function() {
                // tkchecksum != token_checksum , axios未執行過或已執行完成
                if (
                    cookies.get(options.COOKIE_DEFAULT_PREFIX + "tkchecksum") !=
                    localStorage.getItem("token_checksum") &&
                    (self.axiosSync == null || self.axiosSyncReadyState == 4)
                ) {
                    self.sync().catch((error) => {
                        // 執行錯誤時關閉自動同步3秒後重啟
                        self.autoSyncStop();
                        setTimeout(() => self.autoSync(), 3000);
                    });
                }
            }, interval);
        }
    }

    /**
     * 停止 自動同步Token內容
     */
    autoSyncStop() {
        const self = this;

        if (self.intervalSync) {
            // 停止定期執行
            clearInterval(self.intervalSync);
            self.intervalSync = null;
            self.axiosSync = null;
        }
    }

    /**
     * 刷新 Token - oAuth & 前端 - 定期執行
     *
     * - 向 oAuth Server 同步Token資訊
     * - 執行條件
     * - 即將過期
     * - axios未執行過或已執行完成
     * - 多視窗時有可能同時執行，待觀察
     * - 執行錯誤時關閉自動同步3秒後重啟
     *
     * @param {Number} interval - 多少秒
     */
    autoRefresh(interval = 0) {
        const self = this;

        // 執行錯誤時關閉自動同步3秒後重啟
        const refreshStop = function() {
            self.autoRefreshStop();
            setTimeout(() => self.autoRefresh(), 3000);
        };

        // 間隔秒數
        interval = interval * 1000 || TC.TOKEN_AUTO_REFRESH_INTERVAL * 1000;

        // 定期執行
        if (!self.intervalRefresh) {
            self.intervalRefresh = setInterval(function() {
                try {
                    // 現在時間
                    const nowTime = parseInt(Date.now() / 1000),
                        // Token建立時間
                        createTime = parseInt(
                            localStorage.getItem(TC.TOKEN_CREATE_TIME_NAME)
                        ),
                        // Token過期時間
                        expireTime = parseInt(localStorage.getItem(TC.TOKEN_EXPIRED_NAME));

                    // 當 現在時間 超過 過期時間 - TokenRefreshBefore 時觸發更新token
                    if (
                        nowTime >= createTime + expireTime - TC.TOKEN_REFRESH_BEFORE &&
                        (self.axiosRefresh == null || self.axiosRefreshReadyState == 4)
                    ) {
                        self.refresh().catch((error) => {
                            // 執行錯誤時關閉自動同步3秒後重啟
                            refreshStop();
                        });
                    }
                } catch (e) {
                    // 例外訊息
                    console.log("[" + e.code + "] " + e.message);

                    // 執行錯誤時關閉自動同步3秒後重啟
                    refreshStop();
                }
            }, interval);
        }
    }

    /**
     * 停止 自動刷新 Token
     */
    autoRefreshStop() {
        const self = this;

        if (self.intervalRefresh) {
            // 停止定期執行
            clearInterval(self.intervalRefresh);
            self.intervalRefresh = null;
            self.axiosRefresh = null;
        }
    }

    /**
     * 驗證Token
     *
     * @param {string} token - 本地端要被驗證的 Token
     * @returns {Promise}
     */
    validate(token) {
        const self = this;
        const { options } = this;
        const validateToken = token || "";

        // 驗證金鑰是否正確
        self.axiosValidate = axios
            .get(options.SSO_URL + "/api/oauth2/token", {
                headers: {
                    Authorization: "Bearer " + validateToken,
                },
                // 允許跨域
                withCredentials: true,
            })
            .then((response) => {
                return response;
            })
            .catch((error) => {
                return error;
            })
            .finally(() => {
                // Always executed
            });

        // 回傳 axios
        return self.axiosValidate;
    }

    /**
     * 檢查-是否為登入狀態
     *
     * @returns {boolean}
     */
    isLogin = function() {
        const { options } = this;
        return cookies.get(options.COOKIE_DEFAULT_PREFIX + "login") == "1";
    };

    /**
     * 例外物件
     *
     * @param {string} messageIpt 訊息
     * @param {number} codeIpt 例外代碼
     */
    exception(messageIpt, codeIpt) {
        this.code = codeIpt || 200;
        this.message = messageIpt || "OK";
        this.name = "exception";
    }
}

export default TokenInjection;