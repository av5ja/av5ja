<p align="center">
<img alt="CI" src="https://github.com/salmonstats3/av5ja/actions/workflows/ci.yaml/badge.svg">
<img alt="CD" src="https://github.com/salmonstats3/av5ja/actions/workflows/cd.yaml/badge.svg">
<img alt="Node" src="https://img.shields.io/badge/node-v18.0.0-green">
<img src="https://img.shields.io/badge/-NintendoSwitch-E60012.svg?logo=nintendoswitch&style=popout">
<img src="https://img.shields.io/badge/XProductVersion-2.7.0-8F8F8F.svg?logo=nintendoswitch&style=popout">
<img src="https://img.shields.io/badge/-Prettier-F7B93E.svg?logo=prettier&style=popout">
<img src="https://img.shields.io/badge/-Eslint-4B32C3.svg?logo=eslint&style=popout">
<img src="https://img.shields.io/badge/-Typescript-007ACC.svg?logo=typescript&style=popout">
<img src="https://img.shields.io/badge/-Node.js-339933.svg?logo=node.js&style=popout">
</p>

## av5ja

av5jaはSplatNet3のAPIに対応した非同期通信ライブラリです.

> 本ライブラリは任天堂株式会社の著作物を一切含んでおりません.

### 導入

動作条件は以下のとおりです.

- NodeJS >= 18.0.0
- npm >= 7.0.0
- yarn >= 1.22.0

各種パッケージマネージャに対応していますが、yarnを例に紹介します.

```yarn
yarn add @salmonstats3/av5ja
```

### NodeJSのバージョン切り替え

nvm(Node Version Manager)を使ってバージョン管理を行っています. NodeJSのバージョンを簡単に切り替えられるのでオススメです.

macOSの場合は以下のコマンドでnvmを導入できます.
```
brew install nvm
```

他のOSの場合は未検証ですが以下の方法で導入可能と思われます.

- [NVM for Windows](https://github.com/coreybutler/nvm-windows)
- [Node Version Manager](https://github.com/nvm-sh/nvm#installing-and-updating)

## 使い方/コード例

詳しくは[ドキュメント](https://github.com/salmonstats3/av5ja/blob/master/docs/HowToUse.md)をご参照ください.

### 機能

基本的な機能には概ね対応しています. 

- [x] 認証
  - [x] OAuth URL 
  - [x] Session Token
  - [x] Access Token
  - [x] f
  - [x] Game Service Token
  - [x] Game Web Token
  - [x] Bullet Token 
- [x] GraphQL
  - [ ] BankaraBattleHistoriesQuery
  - [ ] BankaraBattleHistoriesRefetchQuery
  - [ ] BattleHistoryCurrentPlayerQuery
  - [ ] CatalogQuery
  - [ ] CatalogRefetchQuery
  - [ ] ChallengeQuery
  - [ ] ChallengeRefetchQuery
  - [ ] CheckinQuery
  - [ ] CheckinWithQrCodeMutation
  - [ ] ConfigureAnalyticsQuery
  - [x] CoopHistoryDetailQuery
  - [ ] CoopHistoryDetailRefetchQuery
  - [x] CoopHistoryQuery
  - [ ] CoopPagerLatestCoopQuery
  - [ ] CoopRecordBigRunRecordContainerPaginationQuery
  - [ ] CoopRecordQuery
  - [ ] CoopRecordRefetchQuery
  - [ ] CreateMyOutfitMutation 
  - [ ] DetailFestRecordDetailQuery
  - [ ] DetailFestRefethQuery
  - [ ] DetailFestVotingStatusRefethQuery
  - [ ] DetailRankingQuery
  - [ ] DetailTabViewWeaponTopsArRefetchQuery
  - [ ] DetailTabViewWeaponTopsClRefetchQuery
  - [ ] DetailTabViewWeaponTopsGlRefetchQuery
  - [ ] DetailTabViewWeaponTopsLfRefetchQuery
  - [ ] DetailTabViewXrankingArRefetchQuery
  - [ ] DetailTabViewXrankingClRefetchQuery
  - [ ] DetailTabViewXrankingGlRefetchQuery
  - [ ] DetailTabViewXrankingLfRefetchQuery
  - [ ] DetailVotingStatusQuery
  - [ ] DownloadSearchReplayQuery
  - [ ] EventBattleHistoriesQuery
  - [ ] EventBattleHistoriesRefetchQuery
  - [ ] EventMatchRankingPeriodQuery
  - [ ] EventMatchRankingQuery
  - [ ] EventMatchRankingRefetchQuery
  - [ ] EventMatchRankingSeasonRefetchQuery
  - [ ] FestRecordQuery
  - [ ] FestRecordRefetchQuery
  - [ ] FriendListQuery
  - [ ] FriendListRefetchQuery
  - [ ] GesotownQuery
  - [ ] GesotownRefetchQuery
  - [ ] HeroHistoryQuery
  - [ ] HeroHistoryRefetchQuery
  - [ ] HistoryRecordQuery
  - [ ] HistoryRecordRefetchQuery
  - [ ] HomeQuery
  - [ ] JourneyChallengeDetailQuery
  - [ ] JourneyChallengeDetailRefetchQuery
  - [ ] JourneyQuery
  - [ ] JourneyRefetchQuery
  - [ ] LatestBattleHistoriesQuery
  - [ ] LatestBattleHistoriesRefetchQuery
  - [ ] MyOutfitCommonDataEquipmentsQuery
  - [ ] MyOutfitCommonDataFilteringConditionQuery
  - [ ] MyOutfitDetailQuery
  - [ ] MyOutfitsQuery
  - [ ] MyOutfitsRefetchQuery
  - [ ] PagerLatestVsDetailQuery
  - [ ] PagerUpdateBattleHistoriesByVsModeQuery
  - [ ] PhotoAlbumQuery
  - [ ] PhotoAlbumRefetchQuery
  - [ ] PrivateBattleHistoriesQuery
  - [ ] PrivateBattleHistoriesRefetchQuery
  - [ ] RankingHoldersFestTeamRankingHoldersPaginationQuery
  - [ ] RefetchableCoopHistoryCoopResultQuery
  - [ ] RegularBattleHistoriesQuery
  - [ ] RegularBattleHistoriesRefetchQuery
  - [ ] ReplayModalReserveReplayDownloadMutation
  - [ ] ReplayQuery
  - [ ] ReplayUploadedReplayListRefetchQuery
  - [ ] SaleGearDetailOrderGesotownGearMutation
  - [ ] SaleGearDetailQuery
  - [ ] SettingQuery
  - [ ] StageRecordQuery
  - [ ] StageRecordsRefetchQuery
  - [x] StageScheduleQuery
  - [ ] SupportButtonSupportChallengeMutation
  - [ ] UpdateMyOutfitMutation
  - [ ] UseCurrentFestQuery
  - [ ] UseShareMyOutfitQuery
  - [ ] VotesUpdateFestVoteMutation
  - [ ] VsHistoryDetailPagerRefetchQuery
  - [ ] VsHistoryDetailQuery
  - [ ] WeaponRecordQuery
  - [ ] WeaponRecordsRefetchQuery
  - [ ] XbattleHistoriesQuery
  - [ ] XbattleHistoriesRefetchQuery
  - [ ] XrankingDetailQuery
  - [ ] XrankingDetailRefetchQuery
  - [ ] XrankingQuery
  - [ ] XrankingRefetchQuery
- [x] SP2/SP3変換
  - [ ] CoopHistoryQuery
  - [x] CoopHistoryDetailQuery
  - [x] StageScheduleQuerey
- [x] Salmon Stats
  - [x] Upload

> サーモンランでの利用を目的としているため、SplatNet3に実装されている大部分のAPIには未対応です.

### 開発者向け

詳しくは[ドキュメント](https://github.com/salmonstats3/av5ja/blob/master/docs/Developer.md)をご参照ください.

## 貢献者

- @tkgstrator
