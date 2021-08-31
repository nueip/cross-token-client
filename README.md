# SSO-自有系統前端 SSO 封裝(SDK) Ver 2.0

# 主要

```text
dist/
├── token-injection-SDK.umd.js (UMD)
└── token-injection-SDK.umd.min.js (UMD, compressed)
src/
├── constant.js
├── lib.js
└── token-injection.js
```

# 依賴 & 注意事項

- **axios**
- **lodash/isPlainObject**
- **lodash/assignIn**
- **lodash/forEach**
- **js-cookie**
- **promise.prototype.finally**

注意事項：
- 依賴套件已打包封裝，無需再外部引用
- API 採用 Axios 技術
- Axios 支援 finally，引用 promise.prototype.finally 方法

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
#### jQuery 方法示例

```js

// 實體化 TokenInjection
var tokenInjection = new TokenInjection({
  SSO_URL: 'Your sso server url',
  COOKIE_DEFAULT_PREFIX: 'Your cookie prefix',
});

$(document).ready(function () {
  // 綁定登入頁面事件
  $("#login").on("click", function () {
    tokenInjection.loginIAM();
  });

  // 綁定登出頁面事件
  $("#logout").on("click", function () {
    tokenInjection.logoutIAM();
  });

  // 綁定驗證事件
  $("#validte").on("click", function () {
    // 驗證Token
    validate();
  });

  // 綁定取得Token事件
  var ScheduleEvent = 1;
  $("#tokenSync").on("click", function () {
    // 取得Token資料

    if (ScheduleEvent == null) {
      // 開啟自動同步
      ScheduleEvent = 1;
      tokenInjection.autoSync();
      $(this).val("tokenSync On");
    } else {
      // 關閉自動同步
      ScheduleEvent = null;
      tokenInjection.autoSyncStop();
      $(this).val("tokenSync Off");
    }
  });

  // 綁定更新Token事件
  $("#refresh").on("click", function () {
    try {
      // 更新Token資料
      tokenInjection.refresh();
    } catch (e) {
      console.log("[" + e.code + "] " + e.message);
    }
  });
});

/**
 * 驗證Token
 */
function validate() {
  // 清除Token驗證狀態
  $('#token-status').text('');

  tokenInjection.validate($('#token').val()).then(function(res){
    $('#token-status').html('Success: ' + res.data).css({color:'blue'});
  }).catch(function(error){
    $('#token-status').html('Error: ' + error).css({color:'red'});
  }).finally(function(){
    console.log('Always executed');
  });
}
```

# Options

### SSO_URL

- Type: `String`
- Default: `null`
- note: SSO 伺服器 URL

### COOKIE_DEFAULT_PREFIX

- Type: `String`
- Default: `null`
- note: Cookie 自定義前綴字串

# Methods

## sync()

- return
  - Promise 方法

- 執行一次，向 oAuth Server 同步 Token 資訊，同步錯誤時，檢查是否為登入狀態，否時刪除 Token

## autoSync(interval)

- interval
  - Type: `Number`
  - Note: 多少個間隔，每個間為 500 毫秒
- 定期執行，向 oAuth Server 同步 Token 資訊
- 執行條件
  - Cookie 中 tkchecksum 是否與 LocalStorage 中的 token_checksum 不一樣
  - API 未執行過或已執行完成
- 多視窗時有可能同時執行，待觀察
- 執行錯誤時關閉自動同步 3 秒後重啟


## autoSyncStop()

- 停止自動同步 Token 內容

## refresh()

- return
  - Promise 方法
- throw
  - 沒有 Refresh Token 時丟出
- 執行一次，向 oAuth Server 執行 Refresh Token
- 執行條件
  - 必需有 refresh_token 金鑰：localStorage.token_refresh_token
  - 當現在時間超過到期時間 - TokenRefreshBefore 時觸發更新 token

## autoRefresh(interval)

- interval
  - Type: `Number`
  - Note: 多少個間隔，每個間為 500 毫秒
- 定期執行，向 oAuth Server 同步 Token 資訊
- 執行條件
  - 即將過期
  - axios 未執行過或已執行完成
- 多視窗時有可能同時執行，待觀察
- 執行錯誤時關閉自動同步 3 秒後重啟

## autoRefreshStop

- 停止自動刷新 Token

## getLocalStorageToken()
- return
  - Type: `String`
  - Local Storage 中的 Token
- 取得 Local Storage Token


## validate(token)

驗證 Token
- token
  - Type: `String`
  - 本地端要被驗證的 Token
- return
  - Promise 方法 

## loginIAM()

- 開啟 IAM 登入頁面，另開新視窗

## logoutIAM()

- 開啟 IAM 登出頁面

# 瀏覽器支援

- ### Chrome (latest)

- ### Firefox (latest)

- ### Safari (latest)

- ### Edge (latest)

- ### ~~Internet Explorer 11~~
