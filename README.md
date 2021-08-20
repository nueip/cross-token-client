# SSO-自有系統前端SSO封裝(SDK) Ver 2.0

# 主要

```text
dist/
├── token-injection-SDK.umd.js (UMD)
└── token-injection-SDK.umd.min.js (UMD, compressed)
src/
├── token-injection.js
└── lib.js
```

# 依賴

- **axios**
- **lodash/isPlainObject**
- **lodash/isFunction**
- **lodash/assignIn**
- **lodash/forEach**
- **js-cookie**
- **promise.prototype.finally**

Note: 依賴套件已打包進 `token-injection-SDK.umd.js` | `token-injection-SDK.umd.min.js`

# 使用說明

## 安裝

```html
<!-- CDN引入 -->
<script src="token-injection-SDK.umd.min.js"></script>
```

## 用法

```js
// 實體化
var tokenInjection = new TokenInjection(options);
    
```

- **options**
  - Type: `Object`
  - 參考 [options](#options).

## 範例

```js
// SSO 伺服器
var SSO_URL =
    system_meta && system_meta.sso.url 
    ? system_meta.sso.url.replace(/\/$/, "")
    : "";
// Cookie前綴
var COOKIE_DEFAULT_PREFIX = 
    system_meta && system_meta.cookie.prefix
    ? system_meta.cookie.prefix 
    : "";
  
// 實體化 TokenInjection
var tokenInjection = new TokenInjection({
    SSO_URL: SSO_URL,
    COOKIE_DEFAULT_PREFIX: COOKIE_DEFAULT_PREFIX
});

$(document).ready(function() {
  
    // 綁定登入頁面事件
    $('#login').on('click', function() {
        tokenInjection.loginIAM();
    });

    // 綁定登出頁面事件
    $('#logout').on('click', function() {
        tokenInjection.logoutIAM();
    });

    // 綁定驗證事件
    $('#validte').on('click', function() {
        // 驗證Token
        validate();
    });

    // 綁定取得Token事件
    var ScheduleEvent = 1;
    $('#tokenSync').on('click', function() {
        // 取得Token資料

        if (ScheduleEvent == null) {
        // 開啟自動同步
            ScheduleEvent = 1;
            tokenInjection.autoSync();
            $(this).val('tokenSync On');
        } else {
            // 關閉自動同步
            ScheduleEvent = null
            tokenInjection.autoSyncStop();
            $(this).val('tokenSync Off');
        }
    });

    // 綁定更新Token事件
    $('#refresh').on('click', function() {
        try {
            // 更新Token資料
            tokenInjection.refresh();
        } catch (e) {
            console.log( '[' + e.code + '] ' + e.message );
        }
    });

    // 定期更新頁面 - 顯示Token資料
    setInterval(showToken, 100);
});

/**
 * 顯示Token資料 - 從LocalStorage
 */
function showToken()
{
    // localStorage.getItem('token_checksum') 與 $('#token_checksum').val() 相同時不更新
    if (localStorage.getItem('token_checksum') == $('#token_checksum').val()) {
      return true;
    }

    var token = {
        'token_refresh_token' : '',
        'token_scope' : '',
        'token_type' : '',
        'token_expires_in' : '',
        'token_access_token' : '',
        'token_checksum' : '',
        'token_createtime' : '',
    };

    // 清除Token驗證狀態、Token內容
    $('#token-status').text('');
    $('#token-detail').text('');

    // 印出資料
    $.each(token, function (key, value) {
        // 寫到本Domain的localStorage
        value = localStorage.getItem( key);

        $('<div>').text(key + ': ' + value).appendTo($    ('#token-detail'));
        if (key == 'token_access_token') {
            // 更新Token - Validate用
            $('#token').val(value);
        } else if (key == 'token_refresh_token') {
            // 更新 Refresh Token - 更新Token用
            $('#token_refresh').val(value);
        } else if (key == 'token_checksum') {
            // 比對顯示資料&LocalStorage資料用
            $('#token_checksum').val(value);
        }
    });
}

/**
 * 驗證Token
 */
function validate()
{
    // 清除Token驗證狀態
    $('#token-status').text('');

    var successCallback = function(res) {
        $('#token-status').html('Success: ' + res.data).css({color:'blue'});
    };

    var failCallback = function(err) {
        $('#token-status').html('Error: ' + err).css({color:'red'});
    }

    tokenInjection.validate($('#token').val(), successCallback, failCallback);
}

```

# Options

### SSO_URL

- Type: `String`
- Default: `null`
- note: SSO 伺服器

### COOKIE_DEFAULT_PREFIX

- Type: `String`
- Default: `null`
- note: Cookie前綴，正式環境: 空字串； 測試環境：'dev_'

# Methods

## sync()

同步 Token 內容 - oAuth & 前端 - 執行一次
- 向 oAuth Server 同步Token資訊
- 同步錯誤時，檢查是否為登入狀態，否時刪除Token
### @params
- **successCallback( response )**
  - Type: `Function`
  - Args: `response`
    - type: `Object`
  - Note: 同步成功的回調函式
- **failCallback( error )**
  - Type: `Function`
  - Args: `error`
    - type: `Object`
  - Note: 同步失敗的回調函式

### @returns
- **jqXHR**

## autoSync(interval)

同步 Token 內容 - oAuth & 前端 - 定期執行
- 向 oAuth Server 同步Token資訊
- 執行條件
  - Cookie 中 tkchecksum 是否與LocalStorage中的 token_checksum 不一樣
  - ajax未執行過或已執行完成
- 多視窗時有可能同時執行，待觀察
- 執行錯誤時關閉自動同步3秒後重啟

### @param
- **interval**
  - Type: `Number`
  - Note: 多少個間隔，每個間為500毫秒

## autoSyncStop()

停止 自動同步Token內容

## refresh()

刷新 Token - oAuth & 前端 - 執行一次
- 向 oAuth Server 執行 Refresh Token
- 執行條件
    - 必需有 refresh_token 金鑰: localStorage.token_refresh_token
    - 當 現在時間 超過 過期時間 - TokenRefreshBefore 時觸發更新token

### @params
- **successCallback( response )**
  - Type: `Function`
  - Args: `response`
    - type: `Object`
  - Note: 刷新成功的回調函式
- **failCallback( error )**
  - Type: `Function`
  - Args: `error`
    - type: `Object`
  - Note: 刷新失敗的回調函式
### @throws 
- 沒有Refresh Token時丟出例外
### @returns
- **jqXHR**

## autoRefresh(interval)

刷新 Token - oAuth & 前端 - 定期執行
- 向 oAuth Server 同步Token資訊
- 執行條件
  - 即將過期
  - ajax未執行過或已執行完成
- 多視窗時有可能同時執行，待觀察
- 執行錯誤時關閉自動同步3秒後重啟

### @param
- **interval**
  - Type: `Number`
  - Note: 多少秒

## autoRefreshStop

停止 自動刷新 Token

## getLocalStorageToken()

取得 Local Storage Token
### @return
- **token**
  - Type: `String`
  - Note: Local Storage 的 Token

## validate( token, successCallback, failCallback )

驗證 Token
### @params
- **token**
  - Type: `String`
  - Note: 本地端要被驗證的 Token
- **successCallback( response )**
  - Type: `Function`
  - Args: `response`
    - type: `Object`
  - Note: 驗證成功的回調函式
- **failCallback( error )**
  - Type: `Function`
  - Args: `error`
    - type: `Object`
  - Note: 驗證失敗的回調函式
### @returns
- **axios**

## loginIAM()

開啟登入頁面


## logoutIAM()

開啟登出頁面


# 瀏覽器支援

- ### Chrome (latest)

- ### Firefox (latest)

- ### ? ~~Safari (latest)~~

- ### Opera (latest)

- ### Edge (latest)

- ### ~~Internet Explorer 11~~