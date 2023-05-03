# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [2.2.1](https://github.com/nueip/cross-token-access/compare/v2.2.0...v2.2.1) (2023-05-03)

## [2.2.0](https://github.com/nueip/cross-token-access/compare/v2.1.10...v2.2.0) (2023-05-03)


### Features

* **lib:** 增加 `isSet()` 函式 ([15edea0](https://github.com/nueip/cross-token-access/commit/15edea01abe59ad6c5d84052839fd1f6fbddfced))
* 增加每分鐘同步/刷新 token 次數限制 ([8af0df0](https://github.com/nueip/cross-token-access/commit/8af0df04185929aa92aebde9d1ac0d5757e7f8af))


### Bug Fixes

* 修正 `autoRefresh()` 函式 ([d62b272](https://github.com/nueip/cross-token-access/commit/d62b2721428273c3f671a384be2f272e44b837f8))
* 修正 autoSync 同步回應狀態判斷 ([2348abc](https://github.com/nueip/cross-token-access/commit/2348abc09f072f3c522253f85977002fbe815d48))
* 修正 autoSync 檢核碼檢查函式 ([6960c18](https://github.com/nueip/cross-token-access/commit/6960c184f4993e195b9058137dc2cc7ea82744ca))
* 定期同步/刷新 token 重啟前先佔用，避免重啟期間再次執行函式時誤判問題 ([66f9957](https://github.com/nueip/cross-token-access/commit/66f9957c17dff814b41dcfe3179df2c5a9b1489c))

### 2.1.10(2022-12-15)
### Patch

* Improve `cookie_prefix` string  ([d280483](https://github.com/nueip/cross-token-access/pull/47/commits/d280483c058323c44f34937775570687679fe91b))

### 2.1.9 (2022-12-14)
### Patch

* Update package ([eafc5e5](https://github.com/nueip/cross-token-access/pull/46/commits/eafc5e5c1626e062a30e12d532f338e3d04dbcaf))

* Sync Initialization - Redirect to IAM logout page when logout status changes  ([4da5f16](https://github.com/nueip/cross-token-access/pull/46/commits/4da5f169636e31fbdc915e1979b9a3933396e5b4))

### 2.1.8 (2022-10-13)
### Patch

* Update package ([000f19b](https://github.com/nueip/cross-token-access/commit/b76750ebf4e3aca93917d393818898b0eeeb36ca))

### 2.1.7 (2022-10-13)
### Patch

* Update package ([000f19b](https://github.com/nueip/cross-token-access/commit/478e88009678f3c06ff9a4f3520eb4a7505cd010))

* Uninstall `lodash` and Optimize APIs url  ([f9cb2db](https://github.com/nueip/cross-token-access/commit/980180cdfa594f0c24d81b8aa17ae1f235b60730))

* Auto sync exclude 401 error  ([f5456d1](https://github.com/nueip/cross-token-access/commit/8e82247813660d972c06e1dc5dab35577f6e1d8c))

### 2.1.4 (2022-04-15)
### Patch

* Update package and improve rollup config  ([000f19b](https://github.com/nueip/cross-token-access/commit/000f19b135576bd664e4467c3aeb106983f7a9c4))

* Improve `cookie_prefix` options  ([f9cb2db](https://github.com/nueip/cross-token-access/commit/f9cb2db21f1e4966a2d214ff7bd3d2dca8433af7))

* Use `Promise` object to refresh token and validate token APIs  ([f5456d1](https://github.com/nueip/cross-token-access/commit/f5456d17f13f643debc7195bc8bc4214de13bb83))

### 2.1.2 (2022-04-08)
### Patch

* Changed `LOGOUT_TIME` to 12 hours ([c64a8fb8](https://github.com/nueip/cross-token-access/commit/c64a8fb8bbeefc6b9b6d67dc11dea223fd85a713))

* Optimize Eslint format and variable declaration ([b6ddc72c](https://github.com/nueip/cross-token-access/commit/b6ddc72c65a5400d63ca6da081cf87fcf5fff768))


### 2.1.1 (2022-03-03)
### Doc

* Add `getLang()` method usage

### 2.1.0 (2022-03-01)
### Features

* Add `getLang()` method ([468f7abd](https://github.com/nueip/cross-token-access/commit/468f7abdddb7ab818c5e23165ea22846bdc1299b))
