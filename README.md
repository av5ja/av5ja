## av5ja

av5jaはSplatNet3のAPIに対応した非同期通信ライブラリです.

> 本ライブラリは任天堂株式会社の著作物を一切含んでおりません.

### 導入

> 現在執筆中です.


### 機能

- [ ] ログイン
- [ ] データ取得

## リリース

GitHubのPersonal Access Tokenが必要です.  このとき権限として, `repo`, `write:packages`, `read:packages`を付与しておいてください.

### npmを利用する方法

```
npm login --registry=https://npm.pkg.github.com
```

パスワードが要求されますが、Personal Access Tokenを入力してください.

```
npm publish --dry-run
```

> 実際にリリースする場合は`--dry-run`を外してください

### actを利用する方法

actを利用するにはDockerが必要です.

```
cp .secrets.example .secrets
```

`.secrets`ファイルにGitHubのPersonal Access Tokenを貼り付けます.
```
act --secret-file .secrets -j cd
```

## ローカルテスト

### actを利用する方法


以下のコマンドでGitHub Actionsに代わってローカルでCIが実行できます.

```
act --secret-file .secrets -j ci
```

## 貢献者

- @tkgstrator
