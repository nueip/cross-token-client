## PR 建立者確認清單:

- [ ] Trello 卡片: `將卡片連結複製貼上`
- [ ] 更新分支 `git fetch --all && git rebase origin/main --autostash` 若有更新請記得 `git push`
- [ ] 設定 PR 的 Reviewers (審核者) 與 Assignees (所有 committers 比如 PR 建立者自己)
- [ ] 設定 PR 的 Labels 如：`PR-review-needed`
- [ ] Create pull request 按鈕右側選單選擇「Create draft pull request」
- [ ] 再檢查一遍 PR changes (若有更新請記得 `git push`)，確認沒問題後將此 PR 連結附在 trello 卡片中的待確認清單:
    - `[Code Review](https://github.com/nueip/cross-token-access/pull/XXXX) 20XX-XX-XX`
- [ ] 通知審核者進行審核

## 審核者確認清單:

- [ ] 進行審核與提出調整建議
    - 開始審核後，移除 `PR-review-needed` 標籤，並增加 `PR-reviewing` 標籤
- [ ] 若有調整建議則通知 PR 建立者 確認並調整
- [ ] 確認沒問題後移卡送測
    - 移卡送測後移除 `PR-reviewing` 標籤，並增加 `QA-testing` 標籤

## PR 建立者收到上線通知確認清單

> 此部分待 PR 建立者收到上線通知後在處理

- [ ] 移除 `QA-testing` 標籤
- [ ] 更新分支 `git fetch --all && git rebase origin/main --autostash` 若有更新請記得 `git push`
- [ ] 設定標籤，如要合併到 `main` 分支則增加 `ready-to-merge: main` 標籤
- [ ] 通知上線人員進行合併 (通知時請附上此 PR 連結)

---

> GitHub Code Review 範例: https://trello.com/c/unFVGSos
