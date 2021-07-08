const CrossStorageClient = require('cross-storage').CrossStorageClient;
const axios = require('axios');
const isPlainObject = require('lodash/isPlainObject');
const isFunction = require('lodash/isFunction');
const assignIn = require('lodash/assignIn');
const forEach = require('lodash/forEach');
const cookies = require('js-cookie');
const promiseFinally = require('promise.prototype.finally');

import { queryString } from './lib.js';

promiseFinally.shim();

// 參數預設值
const DEFAULTS = {
    oauth_server: '',
    cookie_prefix: '',
};

class CrossTokenClient {
    /**
     * 建構子
     *
     * @param {Object} options - 選項參數
     */
    constructor(options = {}) {
        this.options = assignIn({}, DEFAULTS, isPlainObject(options) && options);

        // 初始化
        this.init();
    }

    /**
     * 初始化 CrossTokenClient 實例
     */
    init() {
        const { options } = this;
        const _this = this;

        this.cookiePrefix = `${options.cookie_prefix}tkchecksum`;
        this.crossAPI = `${options.oauth_server}/api/oauth2/cross_domain_storage`;
        this.refreshTokenAPI = `${options.oauth_server}/oauth2/token/api`;
        this.validateTokenAPI = `${options.oauth_server}/api/oauth2/token`;

        // CrossStorageClient 實例
        this.storage = new CrossStorageClient(this.crossAPI, {});

        // 取用主站 LocalStorage 資料
        this.storage.onConnect().then(function() {
            // 取得 Token 資料
            _this.getTokenSync();
        });
    }

    /**
     * 取得 Token 資料
     */
    getTokenSync() {
        const { cookiePrefix, storage } = this;

        // 當本地 Token 無變動時，不需更新
        if (localStorage.getItem('token_checksum') == cookies.get(cookiePrefix)) {
            return true;
        }

        const token = {
            token_refresh_token: '',
            token_scope: '',
            token_type: '',
            token_expires_in: '',
            token_access_token: '',
            token_checksum: '',
            token_createtime: '',
        };

        // 當本地cookie被竄改，清空本地local storage
        if (typeof cookies.get(cookiePrefix) == 'undefined') {
            // 印出資料
            forEach(
                assignIn({}, token, {
                    token_refresh_token: '',
                    token_scope: '',
                    token_type: '',
                    token_expires_in: '',
                    token_access_token: '',
                    token_checksum: '',
                    token_createtime: '',
                }),
                function(value, key) {
                    // 寫到本 Domain 的 localStorage
                    localStorage.setItem(key, value);
                }
            );

            return false;
        }

        // 從 Main Domain 更新 Token
        storage
            .get(
                'token_refresh_token',
                'token_scope',
                'token_type',
                'token_expires_in',
                'token_access_token',
                'token_checksum',
                'token_createtime'
            )
            .then(function(res) {
                // 印出資料
                forEach(
                    assignIn({}, token, {
                        token_refresh_token: res[0],
                        token_scope: res[1],
                        token_type: res[2],
                        token_expires_in: res[3],
                        token_access_token: res[4],
                        token_checksum: res[5],
                        token_createtime: res[6],
                    }),
                    function(value, key) {
                        // 寫到本 Domain 的 localStorage
                        localStorage.setItem(key, value);
                    }
                );
            })
            .catch(function(err) {
                console.log(err);
            });
    }

    /**
     * 更新 Token
     */
    refreshToken() {
        // 取得 Token 資料
        this.getTokenSync();

        const { refreshTokenAPI } = this;
        const _this = this;

        // 送出 Refresh Token
        axios
            .post(
                refreshTokenAPI,
                queryString({
                    refresh_token: localStorage.getItem('token_refresh_token'),
                }), {
                    withCredentials: true,
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                }
            )
            .then(function(response) {
                setTimeout(function() {
                    // 取得 Token 資料
                    _this.getTokenSync();
                }, 500);
            })
            .catch(function(error) {
                console.log(error);
            });
    }

    /**
     * 驗證 Token
     *
     * @param {String} token - 本地端要被驗證的 Token
     * @param {Function} successCallback - 驗證成功的回調函式
     * @param {Function} failCallback - 驗證失敗的回調函式
     * @returns {axios}
     */
    validate(token, successCallback, failCallback) {
        const { validateTokenAPI } = this;
        const validateToken = token || '';

        return axios
            .get(validateTokenAPI, {
                headers: { Authorization: 'Bearer ' + validateToken },
            })
            .then(function(response) {
                // 驗證成功的回調函式
                if (isFunction(successCallback)) {
                    successCallback(response);
                }
            })
            .catch(function(error) {
                // 驗證失敗的回調函式
                if (isFunction(failCallback)) {
                    failCallback(error);
                }
            })
            .finally(function(res) {
                // Always executed
            });
    }

    /**
     * 開啟login頁面
     */
    loginIAM() {
        const { options } = this;
        window.open(options.oauth_server, '_blank');
    }

    /**
     * 開啟logout頁面
     */
    logoutIAM() {
        const { options } = this;
        window.open(options.oauth_server + '/logout', '_blank');
    }
}

export default CrossTokenClient;