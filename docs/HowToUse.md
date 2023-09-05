## av5ja

### 認証

以下に記述している多くの点はav5jaが自動で処理するのでライブラリを利用する上であまり考える必要はありません.

av5jaはランダム文字列の`state`及び同様にランダム文字列`verifier`から生成された`challenge`を含む認証用URLである`oauthURL`を返します. 

```ts
import { oauthURL } from '@salmonstats3/av5ja';

console.log(oauthURL.href)
```

> `oauthURL`は`string`ではなく`URL`であることに注意してください

`oauthURL`でログインをすると`session_token_code`と`state`の値が得られるCustom URL Schemeが得られます.

> Cusomt URL SchemeはNative AppであればHookして、それ以外であればコピー・アンド・ペーストすることで値を取得してください

得られた`session_token_code`と`state`を`authorize()`に与えます. このときに正規表現が利用できるのであれば、

```ts
const regexp = /&session_token_code=(.*)&state=(.*)$/;
const match = regexp.exec(scheme);
```

のようなコードでそれぞれの値を取得することができます.

```ts
import { authorize } from '@salmonstats3/av5ja';

const result: boolean = await autorize(session_token_code, state)
```

を呼べば認証に成功すれば`true`が返り、それ以外の場合であれば何らかのエラーが返ります. `true`しか返らないので`Promise<void>`でいいんじゃないかという考えもあります.

一度ログインに成功すればNintendo Switch OnlineのアカウントのID、パスワードなどの情報を変更して`session_token`がrevokeされない限り、730日間は一切の変更なしにSplatNet3のAPIを叩くことができます.

## リクエストへの対応状況

SplatNet3には100ほどのエンドポイントが存在しますが、必要と思われるものにのみ対応しています.

他にも必要だと思われるエンドポイントがある場合はIssueを立ててください.

以下の章で得られるレスポンスの生データと整形したデータのフォーマットが確認できます.

### Coop

- [x] [CoopHistoryQuery](https://github.com/salmonstats3/av5ja/blob/master/docs/CoopHistoryQuery.md)
- [x] [CoopHistoryDetailQuery](https://github.com/salmonstats3/av5ja/blob/master/docs/CoopHistoryDetailQuery.md)

### Stage

- [x] [StageScheudleQuery](https://github.com/salmonstats3/av5ja/blob/master/docs/StageScheduleQuery.md)

### メソッド

```ts
import { get_coop_history_groups, get_coop_schedules, get_coop_history_details } from '@salmonstats3/av5ja';

// 未取得のリザルトを取得してアップロード　
async function get_history_details(upload: boolean, force_fetch: boolean) {
  const history_details = await get_coop_history_details(upload, force_fetch)
  console.log(history_details)
}

// スケジュール一覧取得 
async function get_schedule() {
  const schedules = await get_coop_schedules()
  console.log(schedules)
}

// リザルト一覧取得
async function get_history() {
  const history_group = await get_coop_history_groups() 
  console.log(history_group)
}
```

## 便利な仕様

内部的にユーザーの認証情報をセキュアな領域に保存しているためクライアント側からは認証部分のロジックを考慮する必要がなく、純粋にアプリ開発に専念することができます.

上記コードを見てわかるように、リクエストの際にトークンを設定したり、再生成することを一切意識せずにコードを書くことができます.

トークンの再生成が必要な場合、av5jaは内部的に自動でトークンを書き換えてリクエストを送ります.

### 自動アップデート対応

NSOの認証に必要なパラメータのうち、変更される可能性があるのは、

- X-ProductVersion
- X-WebViewVer
- version (GraphQL)
- f生成アルゴリズム

の三つですが、av5jaはf生成アルゴリズム以外の全ての値を自動的にサーバーから取得するため、基本的に認証情報に関してライブラリは一切のアップデートを必要としません. 

### レスポンス

SplatNet3から取得されるリザルトはSplatNet2形式に比べて煩雑で、本来必要としている値のいくつかが抜けているため、署名を含むURLなどの削除した上で冗長な構造を取り除いて可能な限りシンプルなフォーマットを返します.

どのようなフォーマットが返ってくるかは[対応リクエスト](#リクエストへの対応状況)をご一読ください.

> また、本来のデータが必要な場合には`json()`のプロパティを参照することでオリジナルのデータが取得できます.

### 各種ID

各IDは意味もなくBase64でエンコードされています. 

また画像のURLはAWSのS3上に保存されているため、キーペアと署名なしにアクセスすることはできません.

> 署名の有効期限は半年ほどです

#### CoopHistoryDetailId

- CoopHistoryDetail
- u
- npln_user_id
- start_time
- uuid

```
Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDgyN1QxMDU2MzBfNzk1OWRiZGItZmUxZi00NTc2LWJjM2UtMGY0ZGZhMGI3YjBl
CoopHistoryDetail-u-a7grz65rxkvhfsbwmxmm:20230827T105630_7959dbdb-fe1f-4576-bc3e-0f4dfa0b7b0e
```

### PlayerId

- CoopHistoryDetail
- u
- npln_user_id
- start_time
- uuid
- npln_user_id

```
Q29vcFBsYXllci11LWE3Z3J6NjVyeGt2aGZzYndteG1tOjIwMjMwODI3VDEwNTYzMF83OTU5ZGJkYi1mZTFmLTQ1NzYtYmMzZS0wZjRkZmEwYjdiMGU6dS1hN2dyejY1cnhrdmhmc2J3bXhtbQ==
CoopPlayer-u-a7grz65rxkvhfsbwmxmm:20230827T105630_7959dbdb-fe1f-4576-bc3e-0f4dfa0b7b0e:u-a7grz65rxkvhfsbwmxmm
```

### BadgeId

```
QmFkZ2UtNTIwMDAwMg==
Badge-5200002
```

### NameplateBackgroundId

```
TmFtZXBsYXRlQmFja2dyb3VuZC0xMTAwMw==
NameplateBackground-11003
```

### CoopEnemyId

```
Q29vcEVuZW15LTQ=
CoopEnemy-4
```

### SpecialWeaponId

```
U3BlY2lhbFdlYXBvbi0yMDAxNA==
SpecialWeapon-20014
```

### CoopStageId

```
Q29vcFN0YWdlLTg=
CoopStage-8
```

### CoopEventWaveId

```
Q29vcEV2ZW50V2F2ZS0x
CoopEventWave-1
```

### ハッシュ

画像のURLはSHA256のハッシュです.

キーは内部ID(上で説明したIDではありません)から計算されているため、予めその値を予測することができます.

例えば、予想されるトキシラズいぶし工房の画像につけられるハッシュの値は以下のとおりです.

```
Cop_Shakelift
630d89698e3e260ef12cb2a32e1cb2c4c83c0e58fc882762da1fa2cea19a5260
```
