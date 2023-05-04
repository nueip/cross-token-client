# SSO-自有系統前端 SSO 封裝(SDK) Ver 2.0

# 主要

```text
dist/
├── cross-token-access.cjs.js (CommonJS)
├── cross-token-access.cjs.min.js (CommonJS, compressed)
├── cross-token-access.umd.js (UMD)
└── cross-token-access.umd.min.js (UMD, compressed)
```

# 依賴 & 注意事項

依賴：

- **axios**
- **lodash**
- **js-cookie**
- **promise.prototype.finally**

注意事項：

- 依賴套件已打包封裝，無需再外部引用
- API 採用 Axios 技術
- Axios 支援 finally，引用 promise.prototype.finally 方法
- Axios 攔截器 (interceptor) 有加入請求重複發送機制

# 跨域信任域名

- `nueip.com`
- `nueip.site`

# 使用說明

## 安裝

Script tag

```html
<script src="your-path/cross-token-access.umd.min.js"></script>
```

npm

```bash
npm install @nueip/cross-token-access
```

## 用法

```js
// 實體化
var tokenInjection = new TokenInjection(options);
```

- **options**
  - Type: `Object`
  - 參考 [options](#options)

## 範例

#### 方法示例

```js
// 實體化 TokenInjection
var tokenInjection = new TokenInjection({
  sso_url: "Your sso server url",
  cookie_prefix: "Your cookie prefix",
  redirect_url: "Your redirect url",
  onLogout: function() {
    tokenInjection.loginIAM();
  }
});

/**
 * 登入頁面
 */
function loginIAM() {
  tokenInjection.loginIAM();
}

/**
 * 登出頁面
 */
function logoutIAM() {
  tokenInjection.logoutIAM();
}

/**
 * 驗證 Token
 */
function validate() {
  // 取得本地 local storage 的 token
  var localToken = tokenInjection.getToken();

  // 持此 token 進行驗證
  tokenInjection
    .validate(localToken)
    .then(function (res) {
      // 驗證成功
      console.log("Success: " + res.data);
    })
    .catch(function (error) {
      // 驗證失敗
      console.log("Error: " + error);
    })
    .finally(function () {
      console.log("Always executed");
    });
}

/**
 * 取得 Token
 *
 * @param ScheduleEvent - flag, 是否開啟同步
 */
function tokenSync(ScheduleEvent = 1) {
  // 取得Token資料

  if (ScheduleEvent == null) {
    // 開啟自動同步
    ScheduleEvent = 1;
    tokenInjection.autoSync();
    console.log("tokenSync On");
  } else {
    // 關閉自動同步
    ScheduleEvent = null;
    tokenInjection.autoSyncStop();
    console.log("tokenSync Off");
  }
}

/**
 * 更新 Token
 */
function refresh() {
  try {
    // 更新Token資料
    tokenInjection.refresh();
  } catch (e) {
    console.log("[" + e.code + "] " + e.message);
  }
}
```

# Options

### autopilot

- Type: `Boolean`
- Default: `true`
- note: 是否自動初始化 & 刷新同步

### sso_url

- Type: `String`
- Default: `empty string`
- note: SSO 伺服器 URL

### cookie_prefix

- Type: `String`
- Default: `empty string`
- note: Cookie 自定義前綴字串

### redirect_url

- Type: `String`
- Default: `empty string`
- note: 重新定向網址

### xhr_with

- Type: `Boolean`
- Default: `false`
- note: 是否配置 X-Requested-With 抬頭

### onLogout

- Type: `Function`
- Default: `null`
- note: 非登入狀態的回調函式

# Methods

## init()

- 初始化執行
  - 自動同步/刷新 Token
  - 自動登出倒數

## sync()

- return

  - Promise 方法

- 執行一次，向 oAuth Server 同步 Token 資訊，同步錯誤時，檢查是否為登入狀態，否時刪除 Token

## autoSync(interval)

- interval
  - Type: `Number`
  - Note: 多少個間隔，每個間為 1000 毫秒
- 定期執行，向 oAuth Server 同步 Token 資訊
- 執行條件
  - Cookie 中 tkchecksum 是否與 LocalStorage 中的 token_checksum 不一樣
  - Axios 未執行過或已執行完成
- 多視窗時有可能同時執行，待觀察
- 請求次數超過，自動登出
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
  - Note: 多少個間隔，每個間為 1000 毫秒
- 定期執行，向 oAuth Server 同步 Token 資訊
- 執行條件
  - 即將過期
  - Axios 未執行過或已執行完成
- 多視窗時有可能同時執行，待觀察
- 請求次數超過，自動登出
- 執行錯誤時關閉自動同步 3 秒後重啟

## autoRefreshStop

- 停止自動刷新 Token

## getToken()

- return
  - Type: `String`
  - Local Storage 中的 Token
- 取得 Local Storage Token

## getLang()

- return
  - Type: `String`
  - Cookie 中的語系代號
- 取得當前語系

## validate(token)

驗證 Token

- token
  - Type: `String`
  - 本地端要被驗證的 Token
- return
  - Promise 方法

## loginIAM()

- 開啟 IAM 登入頁面，另開新視窗
- 轉導自動帶入GET參數 redirect_uri={指定重新定向網址}

## logoutIAM()

- 開啟 IAM 登出頁面

## isLogin()

- return
  - Boolean
- 判斷是否為登入狀態

## axiosCreate()

- config
  - Type: `Object`
  - axios 請求參數
  - 只支援 baseURL, withCredentials, timeout, headers
- return
  - Boolean
- axios 全域設定輸入接口

# 瀏覽器支援

- ### Chrome (latest)

- ### Firefox (latest)

- ### Safari (latest)

- ### Edge (latest)

- ### ~~Internet Explorer 11~~
