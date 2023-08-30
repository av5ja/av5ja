## StageScheduleQuery 

ステージ情報からサーモンランの情報だけを抜き出して返します.

### レスポンス例

```json
[
   {
      "start_time":"2023-08-31T00:00:00.000Z",
      "end_time":"2023-09-02T00:00:00.000Z",
      "setting":{
         "coop_stage":{
            "hash":"1a29476c1ab5fdbc813e2df99cd290ce56dfe29755b97f671a7250e5f77f4961",
            "id":6
         },
         "weapons":[
            {
               "hash":"e6dbf73aa6ff9d1feb61fcabadb2d31e08b228a9736b4f5d8a5baeab9b493255"
            },
            {
               "hash":"0199e455872acba1ab8ef0040eca7f41afca48c1f9ad2c5d274323d6dbc49133"
            },
            {
               "hash":"0d2963b386b6da598b8da1087eab3f48b99256e2e6a20fc8bbe53b34579fb338"
            },
            {
               "hash":"fe2b351799aa48fcb48154299ff0ccf0b0413fc291ffc49456e93db29d2f1db5"
            }
         ]
      }
   }
]
```

### 生データ

```yaml
---
data:
  regularSchedules:
    nodes:
    - startTime: '2023-08-29T06:00:00Z'
      endTime: '2023-08-29T08:00:00Z'
      regularMatchSetting:
        __isVsSetting: RegularMatchSetting
        __typename: RegularMatchSetting
        vsStages:
        - vsStageId: 2
          name: ゴンズイ地区
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/898e1ae6c737a9d44552c7c81f9b710676492681525c514eadc68a6780aa52af_1.png?Expires=1704844800&Signature=VARrlX8cEiK9gO3mzdObd5piHAvt-oLE4E1u5WwlcqS4msSU7xSnIAWRryQjCIyNutwhZGleIzkc2eybTqy2TmCw0qVogwtBzHsreG9aZJeho9qKhqKU0yQ6sLNjSLoLRAgltInXXZ1p~AJQ5cVm3ft1ZWLAs3wYi8mHqMCviHphk4D~cv1Tp3--cBcZwdtsjyHfLwa8trxl3rzm1I~ju85IG74LfKBec2Y2FLq03CvnUVph6Ghfhk~0E9avRCFVnVwXGp2buWSVikd95s6A2U4z07RCkEPqkIHCDZoD6tFlZ~bztWlwHva3e8q9piRBRpI9QlzPbLXBZfaDoyyqpw__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS0y
        - vsStageId: 8
          name: タラポートショッピングパーク
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/f70e9f5af477a39ccfab631bfb81c9e2cedb4cd0947fe260847c214a6d23695f_1.png?Expires=1704844800&Signature=ZZS1aGrZP9CKNKiZesUOlv4m8~tG40peVlnwws1KnYsEXnIqaxE0425XGYE5WavtmDjh1n-h7TD9218sdN0pcxL9slIPkgg4OUvbNPBo8RDyTmTieEusdPx1LUK9YDBgjupz14CfuGc-aU9L6gouIRLklbbviGz7sS-dgQvPL2m0tZbNO380DNeC0AlPIm9Sp6jNZim9NeP1hHB8gMMTjkFhcPYyK3zc5LldS~UjYYYfXc3wP-0CkwYm4CsvfN28nZ4KkbZROhSSvHa1dxP7f7UyrOH2bkjZmrxqkik-cv12o5wMXpB-E8E~YWl4QpImdtgJLW8s15WE4x8m1yAUhQ__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS04
        vsRule:
          name: ナワバリバトル
          rule: TURF_WAR
          id: VnNSdWxlLTA=
      festMatchSetting:
    - startTime: '2023-08-29T08:00:00Z'
      endTime: '2023-08-29T10:00:00Z'
      regularMatchSetting:
        __isVsSetting: RegularMatchSetting
        __typename: RegularMatchSetting
        vsStages:
        - vsStageId: 6
          name: ナメロウ金属
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/de1f212e9ff0648f36cd3b8e0917ef36b3bd51445159297dcb948f34a09f2f05_1.png?Expires=1704844800&Signature=EdZVTUbhclUc4PiEtnbkbgC4UIOQrHKVw2euG716yzsM5er3zlFk8kK78rB2GlZF0wyBxu-xxkumP-e8M9USvxSeskk~HlIOcUYo6j5TeGLRgjYVeOp36q1XoywOgK2Zrf-eba430OKU4oxWTAGS41j~6JiJqAQlJobNoa9BLSRQW5eIdpcd-ugo6-yhQUdFvkJpw7-XOdMvzodle4ji836gzIfJNhiZudXEDZBnYmK6jS6WykAKDnXeL0jDQf6zYiwT5YctD4pcZGaObQaGqz14Bo~5pqzU0TkMxORw7UsPbFbLuHPnEkCnHETLOfaZeYsGnHFbRQv4kuOYxunNEg__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS02
        - vsStageId: 7
          name: クサヤ温泉
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/cd84d711b47a424334569ac20f33f8e0ab6a652dc07854dcd36508a0081e9034_1.png?Expires=1704844800&Signature=oHM01xDT2NZUZqB4wVATpNvrfITjFbV8VyrpBSnoBTyOzbsEP8Pkdvbv4XUk~74jXEvHSAoQLMIng-Mtx0Hp01H5USioaX6h-mtw3QbBN8My2jPl8XpGLmFb8MLSszY1-abcuIA-pTTpYKdzeuo29UpdiqYi9KMKOjaaOMIP7EldfCyCfhbamuV~xFoKugsa4PfT-lDnQ3mD31ul1Y-g7gIHA1TXYkN8~0vWNzc2rjI5SZ4RaAQM-Ky91fRJEP0YPmnSdN4wSnqUkK8eikrohY06TTLHjjU5F81xqfPOxcrg-Gls5fMte03O59r37eHKbNeYzUMd--LSK8B7~Ck~rg__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS03
        vsRule:
          name: ナワバリバトル
          rule: TURF_WAR
          id: VnNSdWxlLTA=
      festMatchSetting:
    - startTime: '2023-08-29T10:00:00Z'
      endTime: '2023-08-29T12:00:00Z'
      regularMatchSetting:
        __isVsSetting: RegularMatchSetting
        __typename: RegularMatchSetting
        vsStages:
        - vsStageId: 3
          name: ヤガラ市場
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/8dc2f16d39c630bab40cead5b2485ca3559e829d0d3de0c2232c7a62fefb5fa9_1.png?Expires=1704844800&Signature=AsjE-W4VBHKoSmhytIZjVH0lt9zMTkS1AJIj4xKaDIfYWSoGXXJjPRMbbb5eF0y7pZqu4WH2NbvTEuJljPfGS2gWc0GdST5g0a7c~ioBAywSAC9JsFXyOKqyGKxOmMNVHLxW9msJw3s~fLAzp~HZvje6rdIwIRdTyq9bKAo-JXRGsrYoN5hHgKWTStUFSMxgPIGexFY2V~wDKwyV6Rwhk2XJtUQZSDS22JK3R9njiazhhdGv5lvj~sZnz4QGdOkIZnHj99osGgtEo-lDYyX-zreTVUA1r93EmuaesBS8mxskPRaWIvL7Lc~m5XAtRUpvHVV5hLGNXXQdPaEupp5sdg__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS0z
        - vsStageId: 13
          name: 海女美術大学
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/40aba8b36a9439e2d670fde5b3478819ea8a94f9e503b9d783248a5716786f35_1.png?Expires=1704844800&Signature=Dg48KWpEwtvneFud-HqjoBLR-r3qRv-kV7IhHbHzobV6HW3TT7JSos6TdiTUjsJfxux52OtCW8YE1CVLcAG6tEZ2yIyHUkwRdq1xitXdumIIey4si3PEG41X~5puJbKCDSxsQ17-6uZ~4qwVoAYFz9teB2ZpHjtWG1CNhNg9NhT~TgmO9UuDO314hxHUwyXdV-iErtbo0XNwatLtyH4iUr4YzMqcAleRIHnMqIEkIOGimkfFdzF01o0hUnNvDUGgzOPPR68XApbSW1JdnRFYpUH90rcIHyUJAwJEslae9CYXNngrb8sikmEDXos-y-IsMggaU2CPD3ZoS56me-3cVA__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS0xMw==
        vsRule:
          name: ナワバリバトル
          rule: TURF_WAR
          id: VnNSdWxlLTA=
      festMatchSetting:
    - startTime: '2023-08-29T12:00:00Z'
      endTime: '2023-08-29T14:00:00Z'
      regularMatchSetting:
        __isVsSetting: RegularMatchSetting
        __typename: RegularMatchSetting
        vsStages:
        - vsStageId: 5
          name: ナンプラー遺跡
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/f14c2a64e49d243679fc0884af91e1a07dc65600f9b90aefe92d7790dcffb191_1.png?Expires=1704844800&Signature=G1qKgeh6~duqmYWKcCB-prudgobcg7t2z77Neem0TOeQQxky-6b8UcC7r6KvLdHzlqcUelqq4dKZWab8aKMyFTME8~X~quDb8McGhH1pp7i1-yyMpFtUZkWOYKz7jjPwkfdGo~YoNu~LIRGbyjmBREcz1o6gC9tmN0M9jzwr5UxmnfVPOWX~eG-OoZrN05TU0PPX66m5~bQgSvdPRJ22KLSoFfCVuQITQzTHNmGXLNSLLzZZvcZBu8yLQrBl2aO1wZA-zG1Kqw4nmJWWEtuzdCzFBN9hgzko4GCmeacgf~WEfivq~FjqyYr8P5eCkfAlCBv75tHfZIf1lgmamGbLlA__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS01
        - vsStageId: 17
          name: コンブトラック
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/7b3cf118bd9f45d141cd6db0ee75b06e697fa83945c7fe1e6f8483de6a591f5f_1.png?Expires=1704844800&Signature=M0cxKKhdz7zoyWFW9gVL3wUeuXWAT-eh-BWySXU~5WYx05LNpBYJasFGfhMgjCqVdtxqYkqMEB2KdaORpfU-kYLXw8yUKt7J2Kdi2nQRmcqqxMrHSueK-XkJlWuzRg6VW1Jlk3dhrJSBG2JlkVCOxuIr4tOFQSE3Yt4TTI9wfR2xVlQTZuRhCey9rGvNM28fGRGNuGKg0vsV0LKzKe2rqzS4HIleNNOl5T~lAjpLLvVt1z2G3576vbVf88py-r1ftQ9kIxG3wN0wBK7OXrY8E5huA22BMzU~yuZ~X~vQKY6QghMctZpHAWn1h1FTsQHbITYAWzWwPox5ZwFNx-OYag__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS0xNw==
        vsRule:
          name: ナワバリバトル
          rule: TURF_WAR
          id: VnNSdWxlLTA=
      festMatchSetting:
    - startTime: '2023-08-29T14:00:00Z'
      endTime: '2023-08-29T16:00:00Z'
      regularMatchSetting:
        __isVsSetting: RegularMatchSetting
        __typename: RegularMatchSetting
        vsStages:
        - vsStageId: 8
          name: タラポートショッピングパーク
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/f70e9f5af477a39ccfab631bfb81c9e2cedb4cd0947fe260847c214a6d23695f_1.png?Expires=1704844800&Signature=ZZS1aGrZP9CKNKiZesUOlv4m8~tG40peVlnwws1KnYsEXnIqaxE0425XGYE5WavtmDjh1n-h7TD9218sdN0pcxL9slIPkgg4OUvbNPBo8RDyTmTieEusdPx1LUK9YDBgjupz14CfuGc-aU9L6gouIRLklbbviGz7sS-dgQvPL2m0tZbNO380DNeC0AlPIm9Sp6jNZim9NeP1hHB8gMMTjkFhcPYyK3zc5LldS~UjYYYfXc3wP-0CkwYm4CsvfN28nZ4KkbZROhSSvHa1dxP7f7UyrOH2bkjZmrxqkik-cv12o5wMXpB-E8E~YWl4QpImdtgJLW8s15WE4x8m1yAUhQ__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS04
        - vsStageId: 9
          name: ヒラメが丘団地
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/488017f3ce712fca9fb37d61fe306343054449bb2d2bb1751d95f54a98564cae_1.png?Expires=1704844800&Signature=u~9tft7cU-OGgq8AP~3siYSSrZ6gwZYhOtDxw0lBO7mvlf0a5YI8~UeoWMzJhBtWt3UUFdNGFKLpvRv~s55zxf42zH~cmH3LxW-5FQ-nlMBY8K9KAXNcP4Y4MOFQkTU74fQNJeGMlnlWzhhFVSI2vknxTeII6hQm6fNeAcmzusMEAERlRo0HU8-GnfHZ2-cB29h2mq48N9mJLFAAixTrTnkebWiY2T2SMnpNAzQmSqR9qiao9MLJZ6vYDkBH5DD8re~VxzavWazVmeOlPB9UsHLdwiGvEtYgAU9dCPLm-C-AOX8b83GvWyXU3bQ9OCGODmB3Rfqg3wHwbFgdBJRzng__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS05
        vsRule:
          name: ナワバリバトル
          rule: TURF_WAR
          id: VnNSdWxlLTA=
      festMatchSetting:
    - startTime: '2023-08-29T16:00:00Z'
      endTime: '2023-08-29T18:00:00Z'
      regularMatchSetting:
        __isVsSetting: RegularMatchSetting
        __typename: RegularMatchSetting
        vsStages:
        - vsStageId: 11
          name: キンメダイ美術館
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/b9d8cfa186d197a27e075600a107c99d9e21646d116730f0843e0fff0aaba7dd_1.png?Expires=1704844800&Signature=lR4JzymizIeGnOoUsVBvLLOa77btb6OuIOkiBmmI6F-8zIuidYApv~CdTQnnN1Swl86aAuwNKCbGNU0BYAwfShcOpArEWnaEGl02KlXEDSlFEGtGYZOwqGFOrUlBafurvE1GN6TZBbhAX3VySd5T5c1JZqlSqrIfaNWAtUpf9NjrrSbQ7OJsZEMouWxpoTVi3KkJZdFiFVVxQLmMZQr-z6Hw4Mtycs6XrjgX3HXSWiz~2RIvAQXjt9nbNmoXw6pwYET5kwZcsO1~D-vyUC4kowXVTJD6BKKxhJkEUBk~5id8TP~9Sh2SRdX5FZf5OtvE5I27-E0t~cEUB~ew2LkoYg__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS0xMQ==
        - vsStageId: 15
          name: ザトウマーケット
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/a8ba96c3dbd015b7bc6ea4fa067245c4e9aee62b6696cb41e02d35139dd21fe7_1.png?Expires=1704844800&Signature=PuPLILXEiJ-srfggk9x5KODjKqNiAGYOQsZ9KlH4Jpv8YIDXnVSpUfMGhRe0f~EnVY6KHWUUnC7q5tSHEkZbcRQBVHIzMF~Lefcwojh6Vjgk1zL7VW--7z2umrruLYciIWAmKjc6YCfcRQaVAN-54MD6uaSLWNZMODBDbmNg8UIpePI1wttCVqyAY6B4r9tdDPeP1dcbbxYHmtvSUwvxTiMh16cQjWwMzVxDIs5L4AmG9vfCU~7hwqTc4DxxPjH3dkgKxCq-7IDmj2uWt~IYH8PnTeAs~HCDDB~US~jXzZuBjcJaegsx~xpknZZF~p5b~2bHSKqbjS0ey2uwRrVt~Q__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS0xNQ==
        vsRule:
          name: ナワバリバトル
          rule: TURF_WAR
          id: VnNSdWxlLTA=
      festMatchSetting:
    - startTime: '2023-08-29T18:00:00Z'
      endTime: '2023-08-29T20:00:00Z'
      regularMatchSetting:
        __isVsSetting: RegularMatchSetting
        __typename: RegularMatchSetting
        vsStages:
        - vsStageId: 7
          name: クサヤ温泉
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/cd84d711b47a424334569ac20f33f8e0ab6a652dc07854dcd36508a0081e9034_1.png?Expires=1704844800&Signature=oHM01xDT2NZUZqB4wVATpNvrfITjFbV8VyrpBSnoBTyOzbsEP8Pkdvbv4XUk~74jXEvHSAoQLMIng-Mtx0Hp01H5USioaX6h-mtw3QbBN8My2jPl8XpGLmFb8MLSszY1-abcuIA-pTTpYKdzeuo29UpdiqYi9KMKOjaaOMIP7EldfCyCfhbamuV~xFoKugsa4PfT-lDnQ3mD31ul1Y-g7gIHA1TXYkN8~0vWNzc2rjI5SZ4RaAQM-Ky91fRJEP0YPmnSdN4wSnqUkK8eikrohY06TTLHjjU5F81xqfPOxcrg-Gls5fMte03O59r37eHKbNeYzUMd--LSK8B7~Ck~rg__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS03
        - vsStageId: 16
          name: スメーシーワールド
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/61ea801fa4ed32360dcaf83986222ded46a72dbf56194acc6d0cf4659a92ba85_1.png?Expires=1704844800&Signature=BAK~vTPRw865rX9HTaiLp1y9UX8McIG~sgGk5d3fQaMXaCfMdDKpF7zsxA29Jlgitau6Oe0jxgmgJPnzicyrfz~T8IInMwYGzIxUw5YpM~UCDf8b1iziIgalYB4KkxkJrC4aNLrVEAAEsVH1cmFJNc3ACBBoCx6bkrQKAZvhfz8-IA2W7bC5hwjn44Z1M0Et2HHkc0psPLM5Zx8IBi6WdFyMqchlycPD58JLkn39r~APUVEMjqVucVQXBJ~8i1hNOfwOOUoEFqcKGImVt56OsqEX7u1IJoHd~7WC9mihaN6XlYz6jTHZ4u90NfStDXvOk1Ct~EcZb0oXv8wJoMKAsA__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS0xNg==
        vsRule:
          name: ナワバリバトル
          rule: TURF_WAR
          id: VnNSdWxlLTA=
      festMatchSetting:
    - startTime: '2023-08-29T20:00:00Z'
      endTime: '2023-08-29T22:00:00Z'
      regularMatchSetting:
        __isVsSetting: RegularMatchSetting
        __typename: RegularMatchSetting
        vsStages:
        - vsStageId: 1
          name: ユノハナ大渓谷
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/35f9ca08ccc2bf759774ab2cb886567c117b9287875ca92fb590c1294ddcdc1e_1.png?Expires=1704844800&Signature=s4VFO0VQXcLeOP6-7lNlyaekqqHKfLZNQoIrzAF3~eVwtvXgy5lh1-9BXYkNit1WWPLwuixhsgpCZgy9LCmf5DV2Rpd3hMcWxgkByrx50oFJjdGuD5E0zQLPCCi~BIBbM1mAQwK2KLbwGXNhQxYrVCNLilnjRcb-Jv52bWJ2qdZCFskUIwTLFiw4P0SryGXDVaJlc-a3uRc5wMfZjw9IN1AUOB9zw3VddA2WiUe0Bll-hwumnOOwcAEQTvfcip449t2xLUpX9NNgctPp4qzHdi0v2oSHaB8INQKrh3xeXoHH7cK4wKMCypnrtTByd0JAlGnprzbM5bKi8bP8mDJYLA__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS0x
        - vsStageId: 18
          name: マンタマリア号
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/0b7fd997781e03eb9d5bf1875ed070f698afc654f4fe929452c65aa26c0a35fd_1.png?Expires=1704844800&Signature=PVlficaVReTNu~Qud0BxpAxTCFxp1vNVPBV3-Yw0yb4cVUe8xcoLkC7T6cYNCmFnjOtHh5vJE3hxz1UxJUzIKouoi0UjL1WEkDlOQWxO-wx5EXHRg7qIg2Y4QG6u9WDcVhBw4Iu5OgFmTzk6KO0g4PDBJp~hhYrnYN~o65XC0EcghJzwnrPD1ibVdIsLVIzB5GSqhMewIDF~tYVpGKQGtOVLh2DxuD2BcXX7KC6JFljBTGj6toIbQHw92iRwRz31gijeCQpzMgYifnUKPwwpoNZLdK8hK7l92rgKnjdyZ36yAVljM7up8GVCi7~I4GDUDoOfip4Y~3jjxZCGX1RCIA__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS0xOA==
        vsRule:
          name: ナワバリバトル
          rule: TURF_WAR
          id: VnNSdWxlLTA=
      festMatchSetting:
    - startTime: '2023-08-29T22:00:00Z'
      endTime: '2023-08-30T00:00:00Z'
      regularMatchSetting:
        __isVsSetting: RegularMatchSetting
        __typename: RegularMatchSetting
        vsStages:
        - vsStageId: 5
          name: ナンプラー遺跡
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/f14c2a64e49d243679fc0884af91e1a07dc65600f9b90aefe92d7790dcffb191_1.png?Expires=1704844800&Signature=G1qKgeh6~duqmYWKcCB-prudgobcg7t2z77Neem0TOeQQxky-6b8UcC7r6KvLdHzlqcUelqq4dKZWab8aKMyFTME8~X~quDb8McGhH1pp7i1-yyMpFtUZkWOYKz7jjPwkfdGo~YoNu~LIRGbyjmBREcz1o6gC9tmN0M9jzwr5UxmnfVPOWX~eG-OoZrN05TU0PPX66m5~bQgSvdPRJ22KLSoFfCVuQITQzTHNmGXLNSLLzZZvcZBu8yLQrBl2aO1wZA-zG1Kqw4nmJWWEtuzdCzFBN9hgzko4GCmeacgf~WEfivq~FjqyYr8P5eCkfAlCBv75tHfZIf1lgmamGbLlA__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS01
        - vsStageId: 10
          name: マサバ海峡大橋
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/1db8ab338b64b464df50e7f9e270e59423ff8caac6f09679a24f1b7acf3a82f3_1.png?Expires=1704844800&Signature=NJSz0DQjs-c5zgJszLhktMSBq9g8d~J0lW2XQb6B0-d9U1dGdl7sZ--jRQSbnyCjM8Jb5OFCE5IrEdW31vxLuHGwf-D7hougKMDMXAy-3ZLMns~GigotKS4TyoJZUouZ-foPkoI6S7JSO4saU-uj5s8WbGojSAGaa7UyXBqk6oF2gcZeX3Vkpvzoa3kSp~Y~Xlhz5GmXA70ARXqwBbyOZctdFE8wNpYW0tX0zW2-As7BTPjcO7lMT1T1F0ep3b-mQ6KkfiICUIKk3s-diNlWvvnkDKsed0dxGx5oWTDJnOR3UJRlr6xnmtX-GTla8FOV6HadaBWnafaquoAXHzF67w__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS0xMA==
        vsRule:
          name: ナワバリバトル
          rule: TURF_WAR
          id: VnNSdWxlLTA=
      festMatchSetting:
    - startTime: '2023-08-30T00:00:00Z'
      endTime: '2023-08-30T02:00:00Z'
      regularMatchSetting:
        __isVsSetting: RegularMatchSetting
        __typename: RegularMatchSetting
        vsStages:
        - vsStageId: 4
          name: マテガイ放水路
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/9b1c17b2075479d0397d2fb96efbc6fa3a28900712920e5fe1e9dfc59c6abc5c_1.png?Expires=1704844800&Signature=AU6l5ITJAwTdgr7PsBucSZAhVTQo52taNdBJqesVXttz1PWvjR0Woq0pEogV8cxkgIdqzloxfkpiKoHVr80ocnm3VWWo9Ky7GudyuazTPEI96oyvuzrgK29wDscKkn0pVaslWrIPgvnqEo-rLhK5xp0lcrMif4VR8voh6Ixu3IqEm2sl4TOtJxuAgLL1wfWLGiT9UhnpK4w52~1SKF93Zf95c2gy0Gjp~21N5GeJEv8z0T1X83xgO2XO6BIm7Lt1Zv5b-9GPmI7gRp7QFoFtvKcTX7DG370h5td~Ca9FtC8KgFj3p98Qprc0IqhvLyQJUd~KsBDwlM7df9VSTcnDqw__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS00
        - vsStageId: 12
          name: マヒマヒリゾート＆スパ
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/8273118c1ffe1bf6fe031c7d8c9795dab52632c9b76e8e9f01f644ac5ae0ccc0_1.png?Expires=1704844800&Signature=kdHGsRD~RTvvy5JEwIdYANSANMvjMP27wPU-~ds956PHb34ov-WajxEKFiOgE6vDneLch9EGm2tjnHwgSyAxn9VKNiSSTmT1yEwUrimnDQRGqEi09GiY~kf9qbTHq71s6VEpZO1euAMbyCJFiKdHG80tvqKtZPM0HkxZoBiLlwSCOaDGvmGKWKYjNLaMxFgcHfsZRzq6FHWzUHl4XlyT-R1mDm-mLgt4rlZXW3d3mvswNSYekHRLNmIJI74cSTPh9mXeMZXAb22nXig8p2JFiMr02qYU83MlBR6TNm20PLAdbp02oBTZ2VVqYml6jj9Uqrs6-huF8pX16tu61dHIfw__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS0xMg==
        vsRule:
          name: ナワバリバトル
          rule: TURF_WAR
          id: VnNSdWxlLTA=
      festMatchSetting:
    - startTime: '2023-08-30T02:00:00Z'
      endTime: '2023-08-30T04:00:00Z'
      regularMatchSetting:
        __isVsSetting: RegularMatchSetting
        __typename: RegularMatchSetting
        vsStages:
        - vsStageId: 6
          name: ナメロウ金属
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/de1f212e9ff0648f36cd3b8e0917ef36b3bd51445159297dcb948f34a09f2f05_1.png?Expires=1704844800&Signature=EdZVTUbhclUc4PiEtnbkbgC4UIOQrHKVw2euG716yzsM5er3zlFk8kK78rB2GlZF0wyBxu-xxkumP-e8M9USvxSeskk~HlIOcUYo6j5TeGLRgjYVeOp36q1XoywOgK2Zrf-eba430OKU4oxWTAGS41j~6JiJqAQlJobNoa9BLSRQW5eIdpcd-ugo6-yhQUdFvkJpw7-XOdMvzodle4ji836gzIfJNhiZudXEDZBnYmK6jS6WykAKDnXeL0jDQf6zYiwT5YctD4pcZGaObQaGqz14Bo~5pqzU0TkMxORw7UsPbFbLuHPnEkCnHETLOfaZeYsGnHFbRQv4kuOYxunNEg__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS02
        - vsStageId: 14
          name: チョウザメ造船
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/48684c69d5c5a4ffaf16b712a4895545a8d01196115d514fc878ce99863bb3e9_1.png?Expires=1704844800&Signature=VLCqEfqohW~GClr2BqPEQIacdjie9gIXFTpoQ3gK3~I6RgFd6QCIQuXrqnuj41HdLpidvHm5y5GNFFTiizXiEDC1uv5RzIrvIKb1o2XvbVBnO7Gy628rsW5LUihNA64K7LQ-askHMOjt3gAq2kb6UQddAjiQau3ih~cCv7TwxF0b01DDz09RG0u~SZQZRkelZht~oDci4wDquJJ3bKq5dqa-9AUD9qFlbUszzXdE2Fqq0StLuKUvnQqIUVrEMHBk8BKwTTWBIHt7p0VeVMbX~ADOBKSi6mc04efm8-AN1lgIYqQqnWBV84hRjcJqK1Y32iSxejyxM3PYxZnB4YKiMA__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS0xNA==
        vsRule:
          name: ナワバリバトル
          rule: TURF_WAR
          id: VnNSdWxlLTA=
      festMatchSetting:
    - startTime: '2023-08-30T04:00:00Z'
      endTime: '2023-08-30T06:00:00Z'
      regularMatchSetting:
        __isVsSetting: RegularMatchSetting
        __typename: RegularMatchSetting
        vsStages:
        - vsStageId: 3
          name: ヤガラ市場
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/8dc2f16d39c630bab40cead5b2485ca3559e829d0d3de0c2232c7a62fefb5fa9_1.png?Expires=1704844800&Signature=AsjE-W4VBHKoSmhytIZjVH0lt9zMTkS1AJIj4xKaDIfYWSoGXXJjPRMbbb5eF0y7pZqu4WH2NbvTEuJljPfGS2gWc0GdST5g0a7c~ioBAywSAC9JsFXyOKqyGKxOmMNVHLxW9msJw3s~fLAzp~HZvje6rdIwIRdTyq9bKAo-JXRGsrYoN5hHgKWTStUFSMxgPIGexFY2V~wDKwyV6Rwhk2XJtUQZSDS22JK3R9njiazhhdGv5lvj~sZnz4QGdOkIZnHj99osGgtEo-lDYyX-zreTVUA1r93EmuaesBS8mxskPRaWIvL7Lc~m5XAtRUpvHVV5hLGNXXQdPaEupp5sdg__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS0z
        - vsStageId: 18
          name: マンタマリア号
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/0b7fd997781e03eb9d5bf1875ed070f698afc654f4fe929452c65aa26c0a35fd_1.png?Expires=1704844800&Signature=PVlficaVReTNu~Qud0BxpAxTCFxp1vNVPBV3-Yw0yb4cVUe8xcoLkC7T6cYNCmFnjOtHh5vJE3hxz1UxJUzIKouoi0UjL1WEkDlOQWxO-wx5EXHRg7qIg2Y4QG6u9WDcVhBw4Iu5OgFmTzk6KO0g4PDBJp~hhYrnYN~o65XC0EcghJzwnrPD1ibVdIsLVIzB5GSqhMewIDF~tYVpGKQGtOVLh2DxuD2BcXX7KC6JFljBTGj6toIbQHw92iRwRz31gijeCQpzMgYifnUKPwwpoNZLdK8hK7l92rgKnjdyZ36yAVljM7up8GVCi7~I4GDUDoOfip4Y~3jjxZCGX1RCIA__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS0xOA==
        vsRule:
          name: ナワバリバトル
          rule: TURF_WAR
          id: VnNSdWxlLTA=
      festMatchSetting:
  bankaraSchedules:
    nodes:
    - startTime: '2023-08-29T06:00:00Z'
      endTime: '2023-08-29T08:00:00Z'
      bankaraMatchSettings:
      - __isVsSetting: BankaraMatchSetting
        __typename: BankaraMatchSetting
        vsStages:
        - vsStageId: 7
          name: クサヤ温泉
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/cd84d711b47a424334569ac20f33f8e0ab6a652dc07854dcd36508a0081e9034_1.png?Expires=1704844800&Signature=oHM01xDT2NZUZqB4wVATpNvrfITjFbV8VyrpBSnoBTyOzbsEP8Pkdvbv4XUk~74jXEvHSAoQLMIng-Mtx0Hp01H5USioaX6h-mtw3QbBN8My2jPl8XpGLmFb8MLSszY1-abcuIA-pTTpYKdzeuo29UpdiqYi9KMKOjaaOMIP7EldfCyCfhbamuV~xFoKugsa4PfT-lDnQ3mD31ul1Y-g7gIHA1TXYkN8~0vWNzc2rjI5SZ4RaAQM-Ky91fRJEP0YPmnSdN4wSnqUkK8eikrohY06TTLHjjU5F81xqfPOxcrg-Gls5fMte03O59r37eHKbNeYzUMd--LSK8B7~Ck~rg__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS03
        - vsStageId: 11
          name: キンメダイ美術館
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/b9d8cfa186d197a27e075600a107c99d9e21646d116730f0843e0fff0aaba7dd_1.png?Expires=1704844800&Signature=lR4JzymizIeGnOoUsVBvLLOa77btb6OuIOkiBmmI6F-8zIuidYApv~CdTQnnN1Swl86aAuwNKCbGNU0BYAwfShcOpArEWnaEGl02KlXEDSlFEGtGYZOwqGFOrUlBafurvE1GN6TZBbhAX3VySd5T5c1JZqlSqrIfaNWAtUpf9NjrrSbQ7OJsZEMouWxpoTVi3KkJZdFiFVVxQLmMZQr-z6Hw4Mtycs6XrjgX3HXSWiz~2RIvAQXjt9nbNmoXw6pwYET5kwZcsO1~D-vyUC4kowXVTJD6BKKxhJkEUBk~5id8TP~9Sh2SRdX5FZf5OtvE5I27-E0t~cEUB~ew2LkoYg__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS0xMQ==
        vsRule:
          name: ガチヤグラ
          rule: LOFT
          id: VnNSdWxlLTI=
        mode: CHALLENGE
      - __isVsSetting: BankaraMatchSetting
        __typename: BankaraMatchSetting
        vsStages:
        - vsStageId: 5
          name: ナンプラー遺跡
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/f14c2a64e49d243679fc0884af91e1a07dc65600f9b90aefe92d7790dcffb191_1.png?Expires=1704844800&Signature=G1qKgeh6~duqmYWKcCB-prudgobcg7t2z77Neem0TOeQQxky-6b8UcC7r6KvLdHzlqcUelqq4dKZWab8aKMyFTME8~X~quDb8McGhH1pp7i1-yyMpFtUZkWOYKz7jjPwkfdGo~YoNu~LIRGbyjmBREcz1o6gC9tmN0M9jzwr5UxmnfVPOWX~eG-OoZrN05TU0PPX66m5~bQgSvdPRJ22KLSoFfCVuQITQzTHNmGXLNSLLzZZvcZBu8yLQrBl2aO1wZA-zG1Kqw4nmJWWEtuzdCzFBN9hgzko4GCmeacgf~WEfivq~FjqyYr8P5eCkfAlCBv75tHfZIf1lgmamGbLlA__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS01
        - vsStageId: 12
          name: マヒマヒリゾート＆スパ
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/8273118c1ffe1bf6fe031c7d8c9795dab52632c9b76e8e9f01f644ac5ae0ccc0_1.png?Expires=1704844800&Signature=kdHGsRD~RTvvy5JEwIdYANSANMvjMP27wPU-~ds956PHb34ov-WajxEKFiOgE6vDneLch9EGm2tjnHwgSyAxn9VKNiSSTmT1yEwUrimnDQRGqEi09GiY~kf9qbTHq71s6VEpZO1euAMbyCJFiKdHG80tvqKtZPM0HkxZoBiLlwSCOaDGvmGKWKYjNLaMxFgcHfsZRzq6FHWzUHl4XlyT-R1mDm-mLgt4rlZXW3d3mvswNSYekHRLNmIJI74cSTPh9mXeMZXAb22nXig8p2JFiMr02qYU83MlBR6TNm20PLAdbp02oBTZ2VVqYml6jj9Uqrs6-huF8pX16tu61dHIfw__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS0xMg==
        vsRule:
          name: ガチホコバトル
          rule: GOAL
          id: VnNSdWxlLTM=
        mode: OPEN
      festMatchSetting:
    - startTime: '2023-08-29T08:00:00Z'
      endTime: '2023-08-29T10:00:00Z'
      bankaraMatchSettings:
      - __isVsSetting: BankaraMatchSetting
        __typename: BankaraMatchSetting
        vsStages:
        - vsStageId: 10
          name: マサバ海峡大橋
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/1db8ab338b64b464df50e7f9e270e59423ff8caac6f09679a24f1b7acf3a82f3_1.png?Expires=1704844800&Signature=NJSz0DQjs-c5zgJszLhktMSBq9g8d~J0lW2XQb6B0-d9U1dGdl7sZ--jRQSbnyCjM8Jb5OFCE5IrEdW31vxLuHGwf-D7hougKMDMXAy-3ZLMns~GigotKS4TyoJZUouZ-foPkoI6S7JSO4saU-uj5s8WbGojSAGaa7UyXBqk6oF2gcZeX3Vkpvzoa3kSp~Y~Xlhz5GmXA70ARXqwBbyOZctdFE8wNpYW0tX0zW2-As7BTPjcO7lMT1T1F0ep3b-mQ6KkfiICUIKk3s-diNlWvvnkDKsed0dxGx5oWTDJnOR3UJRlr6xnmtX-GTla8FOV6HadaBWnafaquoAXHzF67w__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS0xMA==
        - vsStageId: 18
          name: マンタマリア号
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/0b7fd997781e03eb9d5bf1875ed070f698afc654f4fe929452c65aa26c0a35fd_1.png?Expires=1704844800&Signature=PVlficaVReTNu~Qud0BxpAxTCFxp1vNVPBV3-Yw0yb4cVUe8xcoLkC7T6cYNCmFnjOtHh5vJE3hxz1UxJUzIKouoi0UjL1WEkDlOQWxO-wx5EXHRg7qIg2Y4QG6u9WDcVhBw4Iu5OgFmTzk6KO0g4PDBJp~hhYrnYN~o65XC0EcghJzwnrPD1ibVdIsLVIzB5GSqhMewIDF~tYVpGKQGtOVLh2DxuD2BcXX7KC6JFljBTGj6toIbQHw92iRwRz31gijeCQpzMgYifnUKPwwpoNZLdK8hK7l92rgKnjdyZ36yAVljM7up8GVCi7~I4GDUDoOfip4Y~3jjxZCGX1RCIA__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS0xOA==
        vsRule:
          name: ガチエリア
          rule: AREA
          id: VnNSdWxlLTE=
        mode: CHALLENGE
      - __isVsSetting: BankaraMatchSetting
        __typename: BankaraMatchSetting
        vsStages:
        - vsStageId: 1
          name: ユノハナ大渓谷
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/35f9ca08ccc2bf759774ab2cb886567c117b9287875ca92fb590c1294ddcdc1e_1.png?Expires=1704844800&Signature=s4VFO0VQXcLeOP6-7lNlyaekqqHKfLZNQoIrzAF3~eVwtvXgy5lh1-9BXYkNit1WWPLwuixhsgpCZgy9LCmf5DV2Rpd3hMcWxgkByrx50oFJjdGuD5E0zQLPCCi~BIBbM1mAQwK2KLbwGXNhQxYrVCNLilnjRcb-Jv52bWJ2qdZCFskUIwTLFiw4P0SryGXDVaJlc-a3uRc5wMfZjw9IN1AUOB9zw3VddA2WiUe0Bll-hwumnOOwcAEQTvfcip449t2xLUpX9NNgctPp4qzHdi0v2oSHaB8INQKrh3xeXoHH7cK4wKMCypnrtTByd0JAlGnprzbM5bKi8bP8mDJYLA__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS0x
        - vsStageId: 3
          name: ヤガラ市場
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/8dc2f16d39c630bab40cead5b2485ca3559e829d0d3de0c2232c7a62fefb5fa9_1.png?Expires=1704844800&Signature=AsjE-W4VBHKoSmhytIZjVH0lt9zMTkS1AJIj4xKaDIfYWSoGXXJjPRMbbb5eF0y7pZqu4WH2NbvTEuJljPfGS2gWc0GdST5g0a7c~ioBAywSAC9JsFXyOKqyGKxOmMNVHLxW9msJw3s~fLAzp~HZvje6rdIwIRdTyq9bKAo-JXRGsrYoN5hHgKWTStUFSMxgPIGexFY2V~wDKwyV6Rwhk2XJtUQZSDS22JK3R9njiazhhdGv5lvj~sZnz4QGdOkIZnHj99osGgtEo-lDYyX-zreTVUA1r93EmuaesBS8mxskPRaWIvL7Lc~m5XAtRUpvHVV5hLGNXXQdPaEupp5sdg__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS0z
        vsRule:
          name: ガチアサリ
          rule: CLAM
          id: VnNSdWxlLTQ=
        mode: OPEN
      festMatchSetting:
    - startTime: '2023-08-29T10:00:00Z'
      endTime: '2023-08-29T12:00:00Z'
      bankaraMatchSettings:
      - __isVsSetting: BankaraMatchSetting
        __typename: BankaraMatchSetting
        vsStages:
        - vsStageId: 1
          name: ユノハナ大渓谷
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/35f9ca08ccc2bf759774ab2cb886567c117b9287875ca92fb590c1294ddcdc1e_1.png?Expires=1704844800&Signature=s4VFO0VQXcLeOP6-7lNlyaekqqHKfLZNQoIrzAF3~eVwtvXgy5lh1-9BXYkNit1WWPLwuixhsgpCZgy9LCmf5DV2Rpd3hMcWxgkByrx50oFJjdGuD5E0zQLPCCi~BIBbM1mAQwK2KLbwGXNhQxYrVCNLilnjRcb-Jv52bWJ2qdZCFskUIwTLFiw4P0SryGXDVaJlc-a3uRc5wMfZjw9IN1AUOB9zw3VddA2WiUe0Bll-hwumnOOwcAEQTvfcip449t2xLUpX9NNgctPp4qzHdi0v2oSHaB8INQKrh3xeXoHH7cK4wKMCypnrtTByd0JAlGnprzbM5bKi8bP8mDJYLA__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS0x
        - vsStageId: 5
          name: ナンプラー遺跡
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/f14c2a64e49d243679fc0884af91e1a07dc65600f9b90aefe92d7790dcffb191_1.png?Expires=1704844800&Signature=G1qKgeh6~duqmYWKcCB-prudgobcg7t2z77Neem0TOeQQxky-6b8UcC7r6KvLdHzlqcUelqq4dKZWab8aKMyFTME8~X~quDb8McGhH1pp7i1-yyMpFtUZkWOYKz7jjPwkfdGo~YoNu~LIRGbyjmBREcz1o6gC9tmN0M9jzwr5UxmnfVPOWX~eG-OoZrN05TU0PPX66m5~bQgSvdPRJ22KLSoFfCVuQITQzTHNmGXLNSLLzZZvcZBu8yLQrBl2aO1wZA-zG1Kqw4nmJWWEtuzdCzFBN9hgzko4GCmeacgf~WEfivq~FjqyYr8P5eCkfAlCBv75tHfZIf1lgmamGbLlA__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS01
        vsRule:
          name: ガチホコバトル
          rule: GOAL
          id: VnNSdWxlLTM=
        mode: CHALLENGE
      - __isVsSetting: BankaraMatchSetting
        __typename: BankaraMatchSetting
        vsStages:
        - vsStageId: 4
          name: マテガイ放水路
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/9b1c17b2075479d0397d2fb96efbc6fa3a28900712920e5fe1e9dfc59c6abc5c_1.png?Expires=1704844800&Signature=AU6l5ITJAwTdgr7PsBucSZAhVTQo52taNdBJqesVXttz1PWvjR0Woq0pEogV8cxkgIdqzloxfkpiKoHVr80ocnm3VWWo9Ky7GudyuazTPEI96oyvuzrgK29wDscKkn0pVaslWrIPgvnqEo-rLhK5xp0lcrMif4VR8voh6Ixu3IqEm2sl4TOtJxuAgLL1wfWLGiT9UhnpK4w52~1SKF93Zf95c2gy0Gjp~21N5GeJEv8z0T1X83xgO2XO6BIm7Lt1Zv5b-9GPmI7gRp7QFoFtvKcTX7DG370h5td~Ca9FtC8KgFj3p98Qprc0IqhvLyQJUd~KsBDwlM7df9VSTcnDqw__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS00
        - vsStageId: 9
          name: ヒラメが丘団地
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/488017f3ce712fca9fb37d61fe306343054449bb2d2bb1751d95f54a98564cae_1.png?Expires=1704844800&Signature=u~9tft7cU-OGgq8AP~3siYSSrZ6gwZYhOtDxw0lBO7mvlf0a5YI8~UeoWMzJhBtWt3UUFdNGFKLpvRv~s55zxf42zH~cmH3LxW-5FQ-nlMBY8K9KAXNcP4Y4MOFQkTU74fQNJeGMlnlWzhhFVSI2vknxTeII6hQm6fNeAcmzusMEAERlRo0HU8-GnfHZ2-cB29h2mq48N9mJLFAAixTrTnkebWiY2T2SMnpNAzQmSqR9qiao9MLJZ6vYDkBH5DD8re~VxzavWazVmeOlPB9UsHLdwiGvEtYgAU9dCPLm-C-AOX8b83GvWyXU3bQ9OCGODmB3Rfqg3wHwbFgdBJRzng__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS05
        vsRule:
          name: ガチヤグラ
          rule: LOFT
          id: VnNSdWxlLTI=
        mode: OPEN
      festMatchSetting:
    - startTime: '2023-08-29T12:00:00Z'
      endTime: '2023-08-29T14:00:00Z'
      bankaraMatchSettings:
      - __isVsSetting: BankaraMatchSetting
        __typename: BankaraMatchSetting
        vsStages:
        - vsStageId: 4
          name: マテガイ放水路
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/9b1c17b2075479d0397d2fb96efbc6fa3a28900712920e5fe1e9dfc59c6abc5c_1.png?Expires=1704844800&Signature=AU6l5ITJAwTdgr7PsBucSZAhVTQo52taNdBJqesVXttz1PWvjR0Woq0pEogV8cxkgIdqzloxfkpiKoHVr80ocnm3VWWo9Ky7GudyuazTPEI96oyvuzrgK29wDscKkn0pVaslWrIPgvnqEo-rLhK5xp0lcrMif4VR8voh6Ixu3IqEm2sl4TOtJxuAgLL1wfWLGiT9UhnpK4w52~1SKF93Zf95c2gy0Gjp~21N5GeJEv8z0T1X83xgO2XO6BIm7Lt1Zv5b-9GPmI7gRp7QFoFtvKcTX7DG370h5td~Ca9FtC8KgFj3p98Qprc0IqhvLyQJUd~KsBDwlM7df9VSTcnDqw__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS00
        - vsStageId: 9
          name: ヒラメが丘団地
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/488017f3ce712fca9fb37d61fe306343054449bb2d2bb1751d95f54a98564cae_1.png?Expires=1704844800&Signature=u~9tft7cU-OGgq8AP~3siYSSrZ6gwZYhOtDxw0lBO7mvlf0a5YI8~UeoWMzJhBtWt3UUFdNGFKLpvRv~s55zxf42zH~cmH3LxW-5FQ-nlMBY8K9KAXNcP4Y4MOFQkTU74fQNJeGMlnlWzhhFVSI2vknxTeII6hQm6fNeAcmzusMEAERlRo0HU8-GnfHZ2-cB29h2mq48N9mJLFAAixTrTnkebWiY2T2SMnpNAzQmSqR9qiao9MLJZ6vYDkBH5DD8re~VxzavWazVmeOlPB9UsHLdwiGvEtYgAU9dCPLm-C-AOX8b83GvWyXU3bQ9OCGODmB3Rfqg3wHwbFgdBJRzng__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS05
        vsRule:
          name: ガチアサリ
          rule: CLAM
          id: VnNSdWxlLTQ=
        mode: CHALLENGE
      - __isVsSetting: BankaraMatchSetting
        __typename: BankaraMatchSetting
        vsStages:
        - vsStageId: 8
          name: タラポートショッピングパーク
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/f70e9f5af477a39ccfab631bfb81c9e2cedb4cd0947fe260847c214a6d23695f_1.png?Expires=1704844800&Signature=ZZS1aGrZP9CKNKiZesUOlv4m8~tG40peVlnwws1KnYsEXnIqaxE0425XGYE5WavtmDjh1n-h7TD9218sdN0pcxL9slIPkgg4OUvbNPBo8RDyTmTieEusdPx1LUK9YDBgjupz14CfuGc-aU9L6gouIRLklbbviGz7sS-dgQvPL2m0tZbNO380DNeC0AlPIm9Sp6jNZim9NeP1hHB8gMMTjkFhcPYyK3zc5LldS~UjYYYfXc3wP-0CkwYm4CsvfN28nZ4KkbZROhSSvHa1dxP7f7UyrOH2bkjZmrxqkik-cv12o5wMXpB-E8E~YWl4QpImdtgJLW8s15WE4x8m1yAUhQ__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS04
        - vsStageId: 11
          name: キンメダイ美術館
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/b9d8cfa186d197a27e075600a107c99d9e21646d116730f0843e0fff0aaba7dd_1.png?Expires=1704844800&Signature=lR4JzymizIeGnOoUsVBvLLOa77btb6OuIOkiBmmI6F-8zIuidYApv~CdTQnnN1Swl86aAuwNKCbGNU0BYAwfShcOpArEWnaEGl02KlXEDSlFEGtGYZOwqGFOrUlBafurvE1GN6TZBbhAX3VySd5T5c1JZqlSqrIfaNWAtUpf9NjrrSbQ7OJsZEMouWxpoTVi3KkJZdFiFVVxQLmMZQr-z6Hw4Mtycs6XrjgX3HXSWiz~2RIvAQXjt9nbNmoXw6pwYET5kwZcsO1~D-vyUC4kowXVTJD6BKKxhJkEUBk~5id8TP~9Sh2SRdX5FZf5OtvE5I27-E0t~cEUB~ew2LkoYg__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS0xMQ==
        vsRule:
          name: ガチエリア
          rule: AREA
          id: VnNSdWxlLTE=
        mode: OPEN
      festMatchSetting:
    - startTime: '2023-08-29T14:00:00Z'
      endTime: '2023-08-29T16:00:00Z'
      bankaraMatchSettings:
      - __isVsSetting: BankaraMatchSetting
        __typename: BankaraMatchSetting
        vsStages:
        - vsStageId: 1
          name: ユノハナ大渓谷
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/35f9ca08ccc2bf759774ab2cb886567c117b9287875ca92fb590c1294ddcdc1e_1.png?Expires=1704844800&Signature=s4VFO0VQXcLeOP6-7lNlyaekqqHKfLZNQoIrzAF3~eVwtvXgy5lh1-9BXYkNit1WWPLwuixhsgpCZgy9LCmf5DV2Rpd3hMcWxgkByrx50oFJjdGuD5E0zQLPCCi~BIBbM1mAQwK2KLbwGXNhQxYrVCNLilnjRcb-Jv52bWJ2qdZCFskUIwTLFiw4P0SryGXDVaJlc-a3uRc5wMfZjw9IN1AUOB9zw3VddA2WiUe0Bll-hwumnOOwcAEQTvfcip449t2xLUpX9NNgctPp4qzHdi0v2oSHaB8INQKrh3xeXoHH7cK4wKMCypnrtTByd0JAlGnprzbM5bKi8bP8mDJYLA__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS0x
        - vsStageId: 17
          name: コンブトラック
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/7b3cf118bd9f45d141cd6db0ee75b06e697fa83945c7fe1e6f8483de6a591f5f_1.png?Expires=1704844800&Signature=M0cxKKhdz7zoyWFW9gVL3wUeuXWAT-eh-BWySXU~5WYx05LNpBYJasFGfhMgjCqVdtxqYkqMEB2KdaORpfU-kYLXw8yUKt7J2Kdi2nQRmcqqxMrHSueK-XkJlWuzRg6VW1Jlk3dhrJSBG2JlkVCOxuIr4tOFQSE3Yt4TTI9wfR2xVlQTZuRhCey9rGvNM28fGRGNuGKg0vsV0LKzKe2rqzS4HIleNNOl5T~lAjpLLvVt1z2G3576vbVf88py-r1ftQ9kIxG3wN0wBK7OXrY8E5huA22BMzU~yuZ~X~vQKY6QghMctZpHAWn1h1FTsQHbITYAWzWwPox5ZwFNx-OYag__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS0xNw==
        vsRule:
          name: ガチヤグラ
          rule: LOFT
          id: VnNSdWxlLTI=
        mode: CHALLENGE
      - __isVsSetting: BankaraMatchSetting
        __typename: BankaraMatchSetting
        vsStages:
        - vsStageId: 5
          name: ナンプラー遺跡
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/f14c2a64e49d243679fc0884af91e1a07dc65600f9b90aefe92d7790dcffb191_1.png?Expires=1704844800&Signature=G1qKgeh6~duqmYWKcCB-prudgobcg7t2z77Neem0TOeQQxky-6b8UcC7r6KvLdHzlqcUelqq4dKZWab8aKMyFTME8~X~quDb8McGhH1pp7i1-yyMpFtUZkWOYKz7jjPwkfdGo~YoNu~LIRGbyjmBREcz1o6gC9tmN0M9jzwr5UxmnfVPOWX~eG-OoZrN05TU0PPX66m5~bQgSvdPRJ22KLSoFfCVuQITQzTHNmGXLNSLLzZZvcZBu8yLQrBl2aO1wZA-zG1Kqw4nmJWWEtuzdCzFBN9hgzko4GCmeacgf~WEfivq~FjqyYr8P5eCkfAlCBv75tHfZIf1lgmamGbLlA__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS01
        - vsStageId: 18
          name: マンタマリア号
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/0b7fd997781e03eb9d5bf1875ed070f698afc654f4fe929452c65aa26c0a35fd_1.png?Expires=1704844800&Signature=PVlficaVReTNu~Qud0BxpAxTCFxp1vNVPBV3-Yw0yb4cVUe8xcoLkC7T6cYNCmFnjOtHh5vJE3hxz1UxJUzIKouoi0UjL1WEkDlOQWxO-wx5EXHRg7qIg2Y4QG6u9WDcVhBw4Iu5OgFmTzk6KO0g4PDBJp~hhYrnYN~o65XC0EcghJzwnrPD1ibVdIsLVIzB5GSqhMewIDF~tYVpGKQGtOVLh2DxuD2BcXX7KC6JFljBTGj6toIbQHw92iRwRz31gijeCQpzMgYifnUKPwwpoNZLdK8hK7l92rgKnjdyZ36yAVljM7up8GVCi7~I4GDUDoOfip4Y~3jjxZCGX1RCIA__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS0xOA==
        vsRule:
          name: ガチホコバトル
          rule: GOAL
          id: VnNSdWxlLTM=
        mode: OPEN
      festMatchSetting:
    - startTime: '2023-08-29T16:00:00Z'
      endTime: '2023-08-29T18:00:00Z'
      bankaraMatchSettings:
      - __isVsSetting: BankaraMatchSetting
        __typename: BankaraMatchSetting
        vsStages:
        - vsStageId: 8
          name: タラポートショッピングパーク
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/f70e9f5af477a39ccfab631bfb81c9e2cedb4cd0947fe260847c214a6d23695f_1.png?Expires=1704844800&Signature=ZZS1aGrZP9CKNKiZesUOlv4m8~tG40peVlnwws1KnYsEXnIqaxE0425XGYE5WavtmDjh1n-h7TD9218sdN0pcxL9slIPkgg4OUvbNPBo8RDyTmTieEusdPx1LUK9YDBgjupz14CfuGc-aU9L6gouIRLklbbviGz7sS-dgQvPL2m0tZbNO380DNeC0AlPIm9Sp6jNZim9NeP1hHB8gMMTjkFhcPYyK3zc5LldS~UjYYYfXc3wP-0CkwYm4CsvfN28nZ4KkbZROhSSvHa1dxP7f7UyrOH2bkjZmrxqkik-cv12o5wMXpB-E8E~YWl4QpImdtgJLW8s15WE4x8m1yAUhQ__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS04
        - vsStageId: 16
          name: スメーシーワールド
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/61ea801fa4ed32360dcaf83986222ded46a72dbf56194acc6d0cf4659a92ba85_1.png?Expires=1704844800&Signature=BAK~vTPRw865rX9HTaiLp1y9UX8McIG~sgGk5d3fQaMXaCfMdDKpF7zsxA29Jlgitau6Oe0jxgmgJPnzicyrfz~T8IInMwYGzIxUw5YpM~UCDf8b1iziIgalYB4KkxkJrC4aNLrVEAAEsVH1cmFJNc3ACBBoCx6bkrQKAZvhfz8-IA2W7bC5hwjn44Z1M0Et2HHkc0psPLM5Zx8IBi6WdFyMqchlycPD58JLkn39r~APUVEMjqVucVQXBJ~8i1hNOfwOOUoEFqcKGImVt56OsqEX7u1IJoHd~7WC9mihaN6XlYz6jTHZ4u90NfStDXvOk1Ct~EcZb0oXv8wJoMKAsA__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS0xNg==
        vsRule:
          name: ガチエリア
          rule: AREA
          id: VnNSdWxlLTE=
        mode: CHALLENGE
      - __isVsSetting: BankaraMatchSetting
        __typename: BankaraMatchSetting
        vsStages:
        - vsStageId: 7
          name: クサヤ温泉
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/cd84d711b47a424334569ac20f33f8e0ab6a652dc07854dcd36508a0081e9034_1.png?Expires=1704844800&Signature=oHM01xDT2NZUZqB4wVATpNvrfITjFbV8VyrpBSnoBTyOzbsEP8Pkdvbv4XUk~74jXEvHSAoQLMIng-Mtx0Hp01H5USioaX6h-mtw3QbBN8My2jPl8XpGLmFb8MLSszY1-abcuIA-pTTpYKdzeuo29UpdiqYi9KMKOjaaOMIP7EldfCyCfhbamuV~xFoKugsa4PfT-lDnQ3mD31ul1Y-g7gIHA1TXYkN8~0vWNzc2rjI5SZ4RaAQM-Ky91fRJEP0YPmnSdN4wSnqUkK8eikrohY06TTLHjjU5F81xqfPOxcrg-Gls5fMte03O59r37eHKbNeYzUMd--LSK8B7~Ck~rg__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS03
        - vsStageId: 14
          name: チョウザメ造船
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/48684c69d5c5a4ffaf16b712a4895545a8d01196115d514fc878ce99863bb3e9_1.png?Expires=1704844800&Signature=VLCqEfqohW~GClr2BqPEQIacdjie9gIXFTpoQ3gK3~I6RgFd6QCIQuXrqnuj41HdLpidvHm5y5GNFFTiizXiEDC1uv5RzIrvIKb1o2XvbVBnO7Gy628rsW5LUihNA64K7LQ-askHMOjt3gAq2kb6UQddAjiQau3ih~cCv7TwxF0b01DDz09RG0u~SZQZRkelZht~oDci4wDquJJ3bKq5dqa-9AUD9qFlbUszzXdE2Fqq0StLuKUvnQqIUVrEMHBk8BKwTTWBIHt7p0VeVMbX~ADOBKSi6mc04efm8-AN1lgIYqQqnWBV84hRjcJqK1Y32iSxejyxM3PYxZnB4YKiMA__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS0xNA==
        vsRule:
          name: ガチアサリ
          rule: CLAM
          id: VnNSdWxlLTQ=
        mode: OPEN
      festMatchSetting:
    - startTime: '2023-08-29T18:00:00Z'
      endTime: '2023-08-29T20:00:00Z'
      bankaraMatchSettings:
      - __isVsSetting: BankaraMatchSetting
        __typename: BankaraMatchSetting
        vsStages:
        - vsStageId: 10
          name: マサバ海峡大橋
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/1db8ab338b64b464df50e7f9e270e59423ff8caac6f09679a24f1b7acf3a82f3_1.png?Expires=1704844800&Signature=NJSz0DQjs-c5zgJszLhktMSBq9g8d~J0lW2XQb6B0-d9U1dGdl7sZ--jRQSbnyCjM8Jb5OFCE5IrEdW31vxLuHGwf-D7hougKMDMXAy-3ZLMns~GigotKS4TyoJZUouZ-foPkoI6S7JSO4saU-uj5s8WbGojSAGaa7UyXBqk6oF2gcZeX3Vkpvzoa3kSp~Y~Xlhz5GmXA70ARXqwBbyOZctdFE8wNpYW0tX0zW2-As7BTPjcO7lMT1T1F0ep3b-mQ6KkfiICUIKk3s-diNlWvvnkDKsed0dxGx5oWTDJnOR3UJRlr6xnmtX-GTla8FOV6HadaBWnafaquoAXHzF67w__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS0xMA==
        - vsStageId: 15
          name: ザトウマーケット
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/a8ba96c3dbd015b7bc6ea4fa067245c4e9aee62b6696cb41e02d35139dd21fe7_1.png?Expires=1704844800&Signature=PuPLILXEiJ-srfggk9x5KODjKqNiAGYOQsZ9KlH4Jpv8YIDXnVSpUfMGhRe0f~EnVY6KHWUUnC7q5tSHEkZbcRQBVHIzMF~Lefcwojh6Vjgk1zL7VW--7z2umrruLYciIWAmKjc6YCfcRQaVAN-54MD6uaSLWNZMODBDbmNg8UIpePI1wttCVqyAY6B4r9tdDPeP1dcbbxYHmtvSUwvxTiMh16cQjWwMzVxDIs5L4AmG9vfCU~7hwqTc4DxxPjH3dkgKxCq-7IDmj2uWt~IYH8PnTeAs~HCDDB~US~jXzZuBjcJaegsx~xpknZZF~p5b~2bHSKqbjS0ey2uwRrVt~Q__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS0xNQ==
        vsRule:
          name: ガチホコバトル
          rule: GOAL
          id: VnNSdWxlLTM=
        mode: CHALLENGE
      - __isVsSetting: BankaraMatchSetting
        __typename: BankaraMatchSetting
        vsStages:
        - vsStageId: 13
          name: 海女美術大学
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/40aba8b36a9439e2d670fde5b3478819ea8a94f9e503b9d783248a5716786f35_1.png?Expires=1704844800&Signature=Dg48KWpEwtvneFud-HqjoBLR-r3qRv-kV7IhHbHzobV6HW3TT7JSos6TdiTUjsJfxux52OtCW8YE1CVLcAG6tEZ2yIyHUkwRdq1xitXdumIIey4si3PEG41X~5puJbKCDSxsQ17-6uZ~4qwVoAYFz9teB2ZpHjtWG1CNhNg9NhT~TgmO9UuDO314hxHUwyXdV-iErtbo0XNwatLtyH4iUr4YzMqcAleRIHnMqIEkIOGimkfFdzF01o0hUnNvDUGgzOPPR68XApbSW1JdnRFYpUH90rcIHyUJAwJEslae9CYXNngrb8sikmEDXos-y-IsMggaU2CPD3ZoS56me-3cVA__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS0xMw==
        - vsStageId: 17
          name: コンブトラック
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/7b3cf118bd9f45d141cd6db0ee75b06e697fa83945c7fe1e6f8483de6a591f5f_1.png?Expires=1704844800&Signature=M0cxKKhdz7zoyWFW9gVL3wUeuXWAT-eh-BWySXU~5WYx05LNpBYJasFGfhMgjCqVdtxqYkqMEB2KdaORpfU-kYLXw8yUKt7J2Kdi2nQRmcqqxMrHSueK-XkJlWuzRg6VW1Jlk3dhrJSBG2JlkVCOxuIr4tOFQSE3Yt4TTI9wfR2xVlQTZuRhCey9rGvNM28fGRGNuGKg0vsV0LKzKe2rqzS4HIleNNOl5T~lAjpLLvVt1z2G3576vbVf88py-r1ftQ9kIxG3wN0wBK7OXrY8E5huA22BMzU~yuZ~X~vQKY6QghMctZpHAWn1h1FTsQHbITYAWzWwPox5ZwFNx-OYag__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS0xNw==
        vsRule:
          name: ガチヤグラ
          rule: LOFT
          id: VnNSdWxlLTI=
        mode: OPEN
      festMatchSetting:
    - startTime: '2023-08-29T20:00:00Z'
      endTime: '2023-08-29T22:00:00Z'
      bankaraMatchSettings:
      - __isVsSetting: BankaraMatchSetting
        __typename: BankaraMatchSetting
        vsStages:
        - vsStageId: 7
          name: クサヤ温泉
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/cd84d711b47a424334569ac20f33f8e0ab6a652dc07854dcd36508a0081e9034_1.png?Expires=1704844800&Signature=oHM01xDT2NZUZqB4wVATpNvrfITjFbV8VyrpBSnoBTyOzbsEP8Pkdvbv4XUk~74jXEvHSAoQLMIng-Mtx0Hp01H5USioaX6h-mtw3QbBN8My2jPl8XpGLmFb8MLSszY1-abcuIA-pTTpYKdzeuo29UpdiqYi9KMKOjaaOMIP7EldfCyCfhbamuV~xFoKugsa4PfT-lDnQ3mD31ul1Y-g7gIHA1TXYkN8~0vWNzc2rjI5SZ4RaAQM-Ky91fRJEP0YPmnSdN4wSnqUkK8eikrohY06TTLHjjU5F81xqfPOxcrg-Gls5fMte03O59r37eHKbNeYzUMd--LSK8B7~Ck~rg__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS03
        - vsStageId: 14
          name: チョウザメ造船
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/48684c69d5c5a4ffaf16b712a4895545a8d01196115d514fc878ce99863bb3e9_1.png?Expires=1704844800&Signature=VLCqEfqohW~GClr2BqPEQIacdjie9gIXFTpoQ3gK3~I6RgFd6QCIQuXrqnuj41HdLpidvHm5y5GNFFTiizXiEDC1uv5RzIrvIKb1o2XvbVBnO7Gy628rsW5LUihNA64K7LQ-askHMOjt3gAq2kb6UQddAjiQau3ih~cCv7TwxF0b01DDz09RG0u~SZQZRkelZht~oDci4wDquJJ3bKq5dqa-9AUD9qFlbUszzXdE2Fqq0StLuKUvnQqIUVrEMHBk8BKwTTWBIHt7p0VeVMbX~ADOBKSi6mc04efm8-AN1lgIYqQqnWBV84hRjcJqK1Y32iSxejyxM3PYxZnB4YKiMA__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS0xNA==
        vsRule:
          name: ガチアサリ
          rule: CLAM
          id: VnNSdWxlLTQ=
        mode: CHALLENGE
      - __isVsSetting: BankaraMatchSetting
        __typename: BankaraMatchSetting
        vsStages:
        - vsStageId: 10
          name: マサバ海峡大橋
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/1db8ab338b64b464df50e7f9e270e59423ff8caac6f09679a24f1b7acf3a82f3_1.png?Expires=1704844800&Signature=NJSz0DQjs-c5zgJszLhktMSBq9g8d~J0lW2XQb6B0-d9U1dGdl7sZ--jRQSbnyCjM8Jb5OFCE5IrEdW31vxLuHGwf-D7hougKMDMXAy-3ZLMns~GigotKS4TyoJZUouZ-foPkoI6S7JSO4saU-uj5s8WbGojSAGaa7UyXBqk6oF2gcZeX3Vkpvzoa3kSp~Y~Xlhz5GmXA70ARXqwBbyOZctdFE8wNpYW0tX0zW2-As7BTPjcO7lMT1T1F0ep3b-mQ6KkfiICUIKk3s-diNlWvvnkDKsed0dxGx5oWTDJnOR3UJRlr6xnmtX-GTla8FOV6HadaBWnafaquoAXHzF67w__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS0xMA==
        - vsStageId: 12
          name: マヒマヒリゾート＆スパ
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/8273118c1ffe1bf6fe031c7d8c9795dab52632c9b76e8e9f01f644ac5ae0ccc0_1.png?Expires=1704844800&Signature=kdHGsRD~RTvvy5JEwIdYANSANMvjMP27wPU-~ds956PHb34ov-WajxEKFiOgE6vDneLch9EGm2tjnHwgSyAxn9VKNiSSTmT1yEwUrimnDQRGqEi09GiY~kf9qbTHq71s6VEpZO1euAMbyCJFiKdHG80tvqKtZPM0HkxZoBiLlwSCOaDGvmGKWKYjNLaMxFgcHfsZRzq6FHWzUHl4XlyT-R1mDm-mLgt4rlZXW3d3mvswNSYekHRLNmIJI74cSTPh9mXeMZXAb22nXig8p2JFiMr02qYU83MlBR6TNm20PLAdbp02oBTZ2VVqYml6jj9Uqrs6-huF8pX16tu61dHIfw__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS0xMg==
        vsRule:
          name: ガチエリア
          rule: AREA
          id: VnNSdWxlLTE=
        mode: OPEN
      festMatchSetting:
    - startTime: '2023-08-29T22:00:00Z'
      endTime: '2023-08-30T00:00:00Z'
      bankaraMatchSettings:
      - __isVsSetting: BankaraMatchSetting
        __typename: BankaraMatchSetting
        vsStages:
        - vsStageId: 4
          name: マテガイ放水路
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/9b1c17b2075479d0397d2fb96efbc6fa3a28900712920e5fe1e9dfc59c6abc5c_1.png?Expires=1704844800&Signature=AU6l5ITJAwTdgr7PsBucSZAhVTQo52taNdBJqesVXttz1PWvjR0Woq0pEogV8cxkgIdqzloxfkpiKoHVr80ocnm3VWWo9Ky7GudyuazTPEI96oyvuzrgK29wDscKkn0pVaslWrIPgvnqEo-rLhK5xp0lcrMif4VR8voh6Ixu3IqEm2sl4TOtJxuAgLL1wfWLGiT9UhnpK4w52~1SKF93Zf95c2gy0Gjp~21N5GeJEv8z0T1X83xgO2XO6BIm7Lt1Zv5b-9GPmI7gRp7QFoFtvKcTX7DG370h5td~Ca9FtC8KgFj3p98Qprc0IqhvLyQJUd~KsBDwlM7df9VSTcnDqw__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS00
        - vsStageId: 12
          name: マヒマヒリゾート＆スパ
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/8273118c1ffe1bf6fe031c7d8c9795dab52632c9b76e8e9f01f644ac5ae0ccc0_1.png?Expires=1704844800&Signature=kdHGsRD~RTvvy5JEwIdYANSANMvjMP27wPU-~ds956PHb34ov-WajxEKFiOgE6vDneLch9EGm2tjnHwgSyAxn9VKNiSSTmT1yEwUrimnDQRGqEi09GiY~kf9qbTHq71s6VEpZO1euAMbyCJFiKdHG80tvqKtZPM0HkxZoBiLlwSCOaDGvmGKWKYjNLaMxFgcHfsZRzq6FHWzUHl4XlyT-R1mDm-mLgt4rlZXW3d3mvswNSYekHRLNmIJI74cSTPh9mXeMZXAb22nXig8p2JFiMr02qYU83MlBR6TNm20PLAdbp02oBTZ2VVqYml6jj9Uqrs6-huF8pX16tu61dHIfw__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS0xMg==
        vsRule:
          name: ガチヤグラ
          rule: LOFT
          id: VnNSdWxlLTI=
        mode: CHALLENGE
      - __isVsSetting: BankaraMatchSetting
        __typename: BankaraMatchSetting
        vsStages:
        - vsStageId: 6
          name: ナメロウ金属
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/de1f212e9ff0648f36cd3b8e0917ef36b3bd51445159297dcb948f34a09f2f05_1.png?Expires=1704844800&Signature=EdZVTUbhclUc4PiEtnbkbgC4UIOQrHKVw2euG716yzsM5er3zlFk8kK78rB2GlZF0wyBxu-xxkumP-e8M9USvxSeskk~HlIOcUYo6j5TeGLRgjYVeOp36q1XoywOgK2Zrf-eba430OKU4oxWTAGS41j~6JiJqAQlJobNoa9BLSRQW5eIdpcd-ugo6-yhQUdFvkJpw7-XOdMvzodle4ji836gzIfJNhiZudXEDZBnYmK6jS6WykAKDnXeL0jDQf6zYiwT5YctD4pcZGaObQaGqz14Bo~5pqzU0TkMxORw7UsPbFbLuHPnEkCnHETLOfaZeYsGnHFbRQv4kuOYxunNEg__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS02
        - vsStageId: 15
          name: ザトウマーケット
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/a8ba96c3dbd015b7bc6ea4fa067245c4e9aee62b6696cb41e02d35139dd21fe7_1.png?Expires=1704844800&Signature=PuPLILXEiJ-srfggk9x5KODjKqNiAGYOQsZ9KlH4Jpv8YIDXnVSpUfMGhRe0f~EnVY6KHWUUnC7q5tSHEkZbcRQBVHIzMF~Lefcwojh6Vjgk1zL7VW--7z2umrruLYciIWAmKjc6YCfcRQaVAN-54MD6uaSLWNZMODBDbmNg8UIpePI1wttCVqyAY6B4r9tdDPeP1dcbbxYHmtvSUwvxTiMh16cQjWwMzVxDIs5L4AmG9vfCU~7hwqTc4DxxPjH3dkgKxCq-7IDmj2uWt~IYH8PnTeAs~HCDDB~US~jXzZuBjcJaegsx~xpknZZF~p5b~2bHSKqbjS0ey2uwRrVt~Q__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS0xNQ==
        vsRule:
          name: ガチホコバトル
          rule: GOAL
          id: VnNSdWxlLTM=
        mode: OPEN
      festMatchSetting:
    - startTime: '2023-08-30T00:00:00Z'
      endTime: '2023-08-30T02:00:00Z'
      bankaraMatchSettings:
      - __isVsSetting: BankaraMatchSetting
        __typename: BankaraMatchSetting
        vsStages:
        - vsStageId: 11
          name: キンメダイ美術館
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/b9d8cfa186d197a27e075600a107c99d9e21646d116730f0843e0fff0aaba7dd_1.png?Expires=1704844800&Signature=lR4JzymizIeGnOoUsVBvLLOa77btb6OuIOkiBmmI6F-8zIuidYApv~CdTQnnN1Swl86aAuwNKCbGNU0BYAwfShcOpArEWnaEGl02KlXEDSlFEGtGYZOwqGFOrUlBafurvE1GN6TZBbhAX3VySd5T5c1JZqlSqrIfaNWAtUpf9NjrrSbQ7OJsZEMouWxpoTVi3KkJZdFiFVVxQLmMZQr-z6Hw4Mtycs6XrjgX3HXSWiz~2RIvAQXjt9nbNmoXw6pwYET5kwZcsO1~D-vyUC4kowXVTJD6BKKxhJkEUBk~5id8TP~9Sh2SRdX5FZf5OtvE5I27-E0t~cEUB~ew2LkoYg__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS0xMQ==
        - vsStageId: 13
          name: 海女美術大学
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/40aba8b36a9439e2d670fde5b3478819ea8a94f9e503b9d783248a5716786f35_1.png?Expires=1704844800&Signature=Dg48KWpEwtvneFud-HqjoBLR-r3qRv-kV7IhHbHzobV6HW3TT7JSos6TdiTUjsJfxux52OtCW8YE1CVLcAG6tEZ2yIyHUkwRdq1xitXdumIIey4si3PEG41X~5puJbKCDSxsQ17-6uZ~4qwVoAYFz9teB2ZpHjtWG1CNhNg9NhT~TgmO9UuDO314hxHUwyXdV-iErtbo0XNwatLtyH4iUr4YzMqcAleRIHnMqIEkIOGimkfFdzF01o0hUnNvDUGgzOPPR68XApbSW1JdnRFYpUH90rcIHyUJAwJEslae9CYXNngrb8sikmEDXos-y-IsMggaU2CPD3ZoS56me-3cVA__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS0xMw==
        vsRule:
          name: ガチホコバトル
          rule: GOAL
          id: VnNSdWxlLTM=
        mode: CHALLENGE
      - __isVsSetting: BankaraMatchSetting
        __typename: BankaraMatchSetting
        vsStages:
        - vsStageId: 9
          name: ヒラメが丘団地
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/488017f3ce712fca9fb37d61fe306343054449bb2d2bb1751d95f54a98564cae_1.png?Expires=1704844800&Signature=u~9tft7cU-OGgq8AP~3siYSSrZ6gwZYhOtDxw0lBO7mvlf0a5YI8~UeoWMzJhBtWt3UUFdNGFKLpvRv~s55zxf42zH~cmH3LxW-5FQ-nlMBY8K9KAXNcP4Y4MOFQkTU74fQNJeGMlnlWzhhFVSI2vknxTeII6hQm6fNeAcmzusMEAERlRo0HU8-GnfHZ2-cB29h2mq48N9mJLFAAixTrTnkebWiY2T2SMnpNAzQmSqR9qiao9MLJZ6vYDkBH5DD8re~VxzavWazVmeOlPB9UsHLdwiGvEtYgAU9dCPLm-C-AOX8b83GvWyXU3bQ9OCGODmB3Rfqg3wHwbFgdBJRzng__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS05
        - vsStageId: 16
          name: スメーシーワールド
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/61ea801fa4ed32360dcaf83986222ded46a72dbf56194acc6d0cf4659a92ba85_1.png?Expires=1704844800&Signature=BAK~vTPRw865rX9HTaiLp1y9UX8McIG~sgGk5d3fQaMXaCfMdDKpF7zsxA29Jlgitau6Oe0jxgmgJPnzicyrfz~T8IInMwYGzIxUw5YpM~UCDf8b1iziIgalYB4KkxkJrC4aNLrVEAAEsVH1cmFJNc3ACBBoCx6bkrQKAZvhfz8-IA2W7bC5hwjn44Z1M0Et2HHkc0psPLM5Zx8IBi6WdFyMqchlycPD58JLkn39r~APUVEMjqVucVQXBJ~8i1hNOfwOOUoEFqcKGImVt56OsqEX7u1IJoHd~7WC9mihaN6XlYz6jTHZ4u90NfStDXvOk1Ct~EcZb0oXv8wJoMKAsA__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS0xNg==
        vsRule:
          name: ガチエリア
          rule: AREA
          id: VnNSdWxlLTE=
        mode: OPEN
      festMatchSetting:
    - startTime: '2023-08-30T02:00:00Z'
      endTime: '2023-08-30T04:00:00Z'
      bankaraMatchSettings:
      - __isVsSetting: BankaraMatchSetting
        __typename: BankaraMatchSetting
        vsStages:
        - vsStageId: 2
          name: ゴンズイ地区
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/898e1ae6c737a9d44552c7c81f9b710676492681525c514eadc68a6780aa52af_1.png?Expires=1704844800&Signature=VARrlX8cEiK9gO3mzdObd5piHAvt-oLE4E1u5WwlcqS4msSU7xSnIAWRryQjCIyNutwhZGleIzkc2eybTqy2TmCw0qVogwtBzHsreG9aZJeho9qKhqKU0yQ6sLNjSLoLRAgltInXXZ1p~AJQ5cVm3ft1ZWLAs3wYi8mHqMCviHphk4D~cv1Tp3--cBcZwdtsjyHfLwa8trxl3rzm1I~ju85IG74LfKBec2Y2FLq03CvnUVph6Ghfhk~0E9avRCFVnVwXGp2buWSVikd95s6A2U4z07RCkEPqkIHCDZoD6tFlZ~bztWlwHva3e8q9piRBRpI9QlzPbLXBZfaDoyyqpw__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS0y
        - vsStageId: 5
          name: ナンプラー遺跡
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/f14c2a64e49d243679fc0884af91e1a07dc65600f9b90aefe92d7790dcffb191_1.png?Expires=1704844800&Signature=G1qKgeh6~duqmYWKcCB-prudgobcg7t2z77Neem0TOeQQxky-6b8UcC7r6KvLdHzlqcUelqq4dKZWab8aKMyFTME8~X~quDb8McGhH1pp7i1-yyMpFtUZkWOYKz7jjPwkfdGo~YoNu~LIRGbyjmBREcz1o6gC9tmN0M9jzwr5UxmnfVPOWX~eG-OoZrN05TU0PPX66m5~bQgSvdPRJ22KLSoFfCVuQITQzTHNmGXLNSLLzZZvcZBu8yLQrBl2aO1wZA-zG1Kqw4nmJWWEtuzdCzFBN9hgzko4GCmeacgf~WEfivq~FjqyYr8P5eCkfAlCBv75tHfZIf1lgmamGbLlA__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS01
        vsRule:
          name: ガチヤグラ
          rule: LOFT
          id: VnNSdWxlLTI=
        mode: CHALLENGE
      - __isVsSetting: BankaraMatchSetting
        __typename: BankaraMatchSetting
        vsStages:
        - vsStageId: 3
          name: ヤガラ市場
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/8dc2f16d39c630bab40cead5b2485ca3559e829d0d3de0c2232c7a62fefb5fa9_1.png?Expires=1704844800&Signature=AsjE-W4VBHKoSmhytIZjVH0lt9zMTkS1AJIj4xKaDIfYWSoGXXJjPRMbbb5eF0y7pZqu4WH2NbvTEuJljPfGS2gWc0GdST5g0a7c~ioBAywSAC9JsFXyOKqyGKxOmMNVHLxW9msJw3s~fLAzp~HZvje6rdIwIRdTyq9bKAo-JXRGsrYoN5hHgKWTStUFSMxgPIGexFY2V~wDKwyV6Rwhk2XJtUQZSDS22JK3R9njiazhhdGv5lvj~sZnz4QGdOkIZnHj99osGgtEo-lDYyX-zreTVUA1r93EmuaesBS8mxskPRaWIvL7Lc~m5XAtRUpvHVV5hLGNXXQdPaEupp5sdg__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS0z
        - vsStageId: 4
          name: マテガイ放水路
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/9b1c17b2075479d0397d2fb96efbc6fa3a28900712920e5fe1e9dfc59c6abc5c_1.png?Expires=1704844800&Signature=AU6l5ITJAwTdgr7PsBucSZAhVTQo52taNdBJqesVXttz1PWvjR0Woq0pEogV8cxkgIdqzloxfkpiKoHVr80ocnm3VWWo9Ky7GudyuazTPEI96oyvuzrgK29wDscKkn0pVaslWrIPgvnqEo-rLhK5xp0lcrMif4VR8voh6Ixu3IqEm2sl4TOtJxuAgLL1wfWLGiT9UhnpK4w52~1SKF93Zf95c2gy0Gjp~21N5GeJEv8z0T1X83xgO2XO6BIm7Lt1Zv5b-9GPmI7gRp7QFoFtvKcTX7DG370h5td~Ca9FtC8KgFj3p98Qprc0IqhvLyQJUd~KsBDwlM7df9VSTcnDqw__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS00
        vsRule:
          name: ガチアサリ
          rule: CLAM
          id: VnNSdWxlLTQ=
        mode: OPEN
      festMatchSetting:
    - startTime: '2023-08-30T04:00:00Z'
      endTime: '2023-08-30T06:00:00Z'
      bankaraMatchSettings:
      - __isVsSetting: BankaraMatchSetting
        __typename: BankaraMatchSetting
        vsStages:
        - vsStageId: 6
          name: ナメロウ金属
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/de1f212e9ff0648f36cd3b8e0917ef36b3bd51445159297dcb948f34a09f2f05_1.png?Expires=1704844800&Signature=EdZVTUbhclUc4PiEtnbkbgC4UIOQrHKVw2euG716yzsM5er3zlFk8kK78rB2GlZF0wyBxu-xxkumP-e8M9USvxSeskk~HlIOcUYo6j5TeGLRgjYVeOp36q1XoywOgK2Zrf-eba430OKU4oxWTAGS41j~6JiJqAQlJobNoa9BLSRQW5eIdpcd-ugo6-yhQUdFvkJpw7-XOdMvzodle4ji836gzIfJNhiZudXEDZBnYmK6jS6WykAKDnXeL0jDQf6zYiwT5YctD4pcZGaObQaGqz14Bo~5pqzU0TkMxORw7UsPbFbLuHPnEkCnHETLOfaZeYsGnHFbRQv4kuOYxunNEg__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS02
        - vsStageId: 7
          name: クサヤ温泉
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/cd84d711b47a424334569ac20f33f8e0ab6a652dc07854dcd36508a0081e9034_1.png?Expires=1704844800&Signature=oHM01xDT2NZUZqB4wVATpNvrfITjFbV8VyrpBSnoBTyOzbsEP8Pkdvbv4XUk~74jXEvHSAoQLMIng-Mtx0Hp01H5USioaX6h-mtw3QbBN8My2jPl8XpGLmFb8MLSszY1-abcuIA-pTTpYKdzeuo29UpdiqYi9KMKOjaaOMIP7EldfCyCfhbamuV~xFoKugsa4PfT-lDnQ3mD31ul1Y-g7gIHA1TXYkN8~0vWNzc2rjI5SZ4RaAQM-Ky91fRJEP0YPmnSdN4wSnqUkK8eikrohY06TTLHjjU5F81xqfPOxcrg-Gls5fMte03O59r37eHKbNeYzUMd--LSK8B7~Ck~rg__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS03
        vsRule:
          name: ガチエリア
          rule: AREA
          id: VnNSdWxlLTE=
        mode: CHALLENGE
      - __isVsSetting: BankaraMatchSetting
        __typename: BankaraMatchSetting
        vsStages:
        - vsStageId: 1
          name: ユノハナ大渓谷
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/35f9ca08ccc2bf759774ab2cb886567c117b9287875ca92fb590c1294ddcdc1e_1.png?Expires=1704844800&Signature=s4VFO0VQXcLeOP6-7lNlyaekqqHKfLZNQoIrzAF3~eVwtvXgy5lh1-9BXYkNit1WWPLwuixhsgpCZgy9LCmf5DV2Rpd3hMcWxgkByrx50oFJjdGuD5E0zQLPCCi~BIBbM1mAQwK2KLbwGXNhQxYrVCNLilnjRcb-Jv52bWJ2qdZCFskUIwTLFiw4P0SryGXDVaJlc-a3uRc5wMfZjw9IN1AUOB9zw3VddA2WiUe0Bll-hwumnOOwcAEQTvfcip449t2xLUpX9NNgctPp4qzHdi0v2oSHaB8INQKrh3xeXoHH7cK4wKMCypnrtTByd0JAlGnprzbM5bKi8bP8mDJYLA__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS0x
        - vsStageId: 2
          name: ゴンズイ地区
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/898e1ae6c737a9d44552c7c81f9b710676492681525c514eadc68a6780aa52af_1.png?Expires=1704844800&Signature=VARrlX8cEiK9gO3mzdObd5piHAvt-oLE4E1u5WwlcqS4msSU7xSnIAWRryQjCIyNutwhZGleIzkc2eybTqy2TmCw0qVogwtBzHsreG9aZJeho9qKhqKU0yQ6sLNjSLoLRAgltInXXZ1p~AJQ5cVm3ft1ZWLAs3wYi8mHqMCviHphk4D~cv1Tp3--cBcZwdtsjyHfLwa8trxl3rzm1I~ju85IG74LfKBec2Y2FLq03CvnUVph6Ghfhk~0E9avRCFVnVwXGp2buWSVikd95s6A2U4z07RCkEPqkIHCDZoD6tFlZ~bztWlwHva3e8q9piRBRpI9QlzPbLXBZfaDoyyqpw__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS0y
        vsRule:
          name: ガチホコバトル
          rule: GOAL
          id: VnNSdWxlLTM=
        mode: OPEN
      festMatchSetting:
  xSchedules:
    nodes:
    - startTime: '2023-08-29T06:00:00Z'
      endTime: '2023-08-29T08:00:00Z'
      xMatchSetting:
        __isVsSetting: XMatchSetting
        __typename: XMatchSetting
        vsStages:
        - vsStageId: 9
          name: ヒラメが丘団地
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/488017f3ce712fca9fb37d61fe306343054449bb2d2bb1751d95f54a98564cae_1.png?Expires=1704844800&Signature=u~9tft7cU-OGgq8AP~3siYSSrZ6gwZYhOtDxw0lBO7mvlf0a5YI8~UeoWMzJhBtWt3UUFdNGFKLpvRv~s55zxf42zH~cmH3LxW-5FQ-nlMBY8K9KAXNcP4Y4MOFQkTU74fQNJeGMlnlWzhhFVSI2vknxTeII6hQm6fNeAcmzusMEAERlRo0HU8-GnfHZ2-cB29h2mq48N9mJLFAAixTrTnkebWiY2T2SMnpNAzQmSqR9qiao9MLJZ6vYDkBH5DD8re~VxzavWazVmeOlPB9UsHLdwiGvEtYgAU9dCPLm-C-AOX8b83GvWyXU3bQ9OCGODmB3Rfqg3wHwbFgdBJRzng__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS05
        - vsStageId: 10
          name: マサバ海峡大橋
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/1db8ab338b64b464df50e7f9e270e59423ff8caac6f09679a24f1b7acf3a82f3_1.png?Expires=1704844800&Signature=NJSz0DQjs-c5zgJszLhktMSBq9g8d~J0lW2XQb6B0-d9U1dGdl7sZ--jRQSbnyCjM8Jb5OFCE5IrEdW31vxLuHGwf-D7hougKMDMXAy-3ZLMns~GigotKS4TyoJZUouZ-foPkoI6S7JSO4saU-uj5s8WbGojSAGaa7UyXBqk6oF2gcZeX3Vkpvzoa3kSp~Y~Xlhz5GmXA70ARXqwBbyOZctdFE8wNpYW0tX0zW2-As7BTPjcO7lMT1T1F0ep3b-mQ6KkfiICUIKk3s-diNlWvvnkDKsed0dxGx5oWTDJnOR3UJRlr6xnmtX-GTla8FOV6HadaBWnafaquoAXHzF67w__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS0xMA==
        vsRule:
          name: ガチアサリ
          rule: CLAM
          id: VnNSdWxlLTQ=
      festMatchSetting:
    - startTime: '2023-08-29T08:00:00Z'
      endTime: '2023-08-29T10:00:00Z'
      xMatchSetting:
        __isVsSetting: XMatchSetting
        __typename: XMatchSetting
        vsStages:
        - vsStageId: 2
          name: ゴンズイ地区
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/898e1ae6c737a9d44552c7c81f9b710676492681525c514eadc68a6780aa52af_1.png?Expires=1704844800&Signature=VARrlX8cEiK9gO3mzdObd5piHAvt-oLE4E1u5WwlcqS4msSU7xSnIAWRryQjCIyNutwhZGleIzkc2eybTqy2TmCw0qVogwtBzHsreG9aZJeho9qKhqKU0yQ6sLNjSLoLRAgltInXXZ1p~AJQ5cVm3ft1ZWLAs3wYi8mHqMCviHphk4D~cv1Tp3--cBcZwdtsjyHfLwa8trxl3rzm1I~ju85IG74LfKBec2Y2FLq03CvnUVph6Ghfhk~0E9avRCFVnVwXGp2buWSVikd95s6A2U4z07RCkEPqkIHCDZoD6tFlZ~bztWlwHva3e8q9piRBRpI9QlzPbLXBZfaDoyyqpw__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS0y
        - vsStageId: 4
          name: マテガイ放水路
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/9b1c17b2075479d0397d2fb96efbc6fa3a28900712920e5fe1e9dfc59c6abc5c_1.png?Expires=1704844800&Signature=AU6l5ITJAwTdgr7PsBucSZAhVTQo52taNdBJqesVXttz1PWvjR0Woq0pEogV8cxkgIdqzloxfkpiKoHVr80ocnm3VWWo9Ky7GudyuazTPEI96oyvuzrgK29wDscKkn0pVaslWrIPgvnqEo-rLhK5xp0lcrMif4VR8voh6Ixu3IqEm2sl4TOtJxuAgLL1wfWLGiT9UhnpK4w52~1SKF93Zf95c2gy0Gjp~21N5GeJEv8z0T1X83xgO2XO6BIm7Lt1Zv5b-9GPmI7gRp7QFoFtvKcTX7DG370h5td~Ca9FtC8KgFj3p98Qprc0IqhvLyQJUd~KsBDwlM7df9VSTcnDqw__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS00
        vsRule:
          name: ガチホコバトル
          rule: GOAL
          id: VnNSdWxlLTM=
      festMatchSetting:
    - startTime: '2023-08-29T10:00:00Z'
      endTime: '2023-08-29T12:00:00Z'
      xMatchSetting:
        __isVsSetting: XMatchSetting
        __typename: XMatchSetting
        vsStages:
        - vsStageId: 6
          name: ナメロウ金属
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/de1f212e9ff0648f36cd3b8e0917ef36b3bd51445159297dcb948f34a09f2f05_1.png?Expires=1704844800&Signature=EdZVTUbhclUc4PiEtnbkbgC4UIOQrHKVw2euG716yzsM5er3zlFk8kK78rB2GlZF0wyBxu-xxkumP-e8M9USvxSeskk~HlIOcUYo6j5TeGLRgjYVeOp36q1XoywOgK2Zrf-eba430OKU4oxWTAGS41j~6JiJqAQlJobNoa9BLSRQW5eIdpcd-ugo6-yhQUdFvkJpw7-XOdMvzodle4ji836gzIfJNhiZudXEDZBnYmK6jS6WykAKDnXeL0jDQf6zYiwT5YctD4pcZGaObQaGqz14Bo~5pqzU0TkMxORw7UsPbFbLuHPnEkCnHETLOfaZeYsGnHFbRQv4kuOYxunNEg__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS02
        - vsStageId: 7
          name: クサヤ温泉
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/cd84d711b47a424334569ac20f33f8e0ab6a652dc07854dcd36508a0081e9034_1.png?Expires=1704844800&Signature=oHM01xDT2NZUZqB4wVATpNvrfITjFbV8VyrpBSnoBTyOzbsEP8Pkdvbv4XUk~74jXEvHSAoQLMIng-Mtx0Hp01H5USioaX6h-mtw3QbBN8My2jPl8XpGLmFb8MLSszY1-abcuIA-pTTpYKdzeuo29UpdiqYi9KMKOjaaOMIP7EldfCyCfhbamuV~xFoKugsa4PfT-lDnQ3mD31ul1Y-g7gIHA1TXYkN8~0vWNzc2rjI5SZ4RaAQM-Ky91fRJEP0YPmnSdN4wSnqUkK8eikrohY06TTLHjjU5F81xqfPOxcrg-Gls5fMte03O59r37eHKbNeYzUMd--LSK8B7~Ck~rg__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS03
        vsRule:
          name: ガチエリア
          rule: AREA
          id: VnNSdWxlLTE=
      festMatchSetting:
    - startTime: '2023-08-29T12:00:00Z'
      endTime: '2023-08-29T14:00:00Z'
      xMatchSetting:
        __isVsSetting: XMatchSetting
        __typename: XMatchSetting
        vsStages:
        - vsStageId: 13
          name: 海女美術大学
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/40aba8b36a9439e2d670fde5b3478819ea8a94f9e503b9d783248a5716786f35_1.png?Expires=1704844800&Signature=Dg48KWpEwtvneFud-HqjoBLR-r3qRv-kV7IhHbHzobV6HW3TT7JSos6TdiTUjsJfxux52OtCW8YE1CVLcAG6tEZ2yIyHUkwRdq1xitXdumIIey4si3PEG41X~5puJbKCDSxsQ17-6uZ~4qwVoAYFz9teB2ZpHjtWG1CNhNg9NhT~TgmO9UuDO314hxHUwyXdV-iErtbo0XNwatLtyH4iUr4YzMqcAleRIHnMqIEkIOGimkfFdzF01o0hUnNvDUGgzOPPR68XApbSW1JdnRFYpUH90rcIHyUJAwJEslae9CYXNngrb8sikmEDXos-y-IsMggaU2CPD3ZoS56me-3cVA__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS0xMw==
        - vsStageId: 18
          name: マンタマリア号
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/0b7fd997781e03eb9d5bf1875ed070f698afc654f4fe929452c65aa26c0a35fd_1.png?Expires=1704844800&Signature=PVlficaVReTNu~Qud0BxpAxTCFxp1vNVPBV3-Yw0yb4cVUe8xcoLkC7T6cYNCmFnjOtHh5vJE3hxz1UxJUzIKouoi0UjL1WEkDlOQWxO-wx5EXHRg7qIg2Y4QG6u9WDcVhBw4Iu5OgFmTzk6KO0g4PDBJp~hhYrnYN~o65XC0EcghJzwnrPD1ibVdIsLVIzB5GSqhMewIDF~tYVpGKQGtOVLh2DxuD2BcXX7KC6JFljBTGj6toIbQHw92iRwRz31gijeCQpzMgYifnUKPwwpoNZLdK8hK7l92rgKnjdyZ36yAVljM7up8GVCi7~I4GDUDoOfip4Y~3jjxZCGX1RCIA__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS0xOA==
        vsRule:
          name: ガチヤグラ
          rule: LOFT
          id: VnNSdWxlLTI=
      festMatchSetting:
    - startTime: '2023-08-29T14:00:00Z'
      endTime: '2023-08-29T16:00:00Z'
      xMatchSetting:
        __isVsSetting: XMatchSetting
        __typename: XMatchSetting
        vsStages:
        - vsStageId: 3
          name: ヤガラ市場
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/8dc2f16d39c630bab40cead5b2485ca3559e829d0d3de0c2232c7a62fefb5fa9_1.png?Expires=1704844800&Signature=AsjE-W4VBHKoSmhytIZjVH0lt9zMTkS1AJIj4xKaDIfYWSoGXXJjPRMbbb5eF0y7pZqu4WH2NbvTEuJljPfGS2gWc0GdST5g0a7c~ioBAywSAC9JsFXyOKqyGKxOmMNVHLxW9msJw3s~fLAzp~HZvje6rdIwIRdTyq9bKAo-JXRGsrYoN5hHgKWTStUFSMxgPIGexFY2V~wDKwyV6Rwhk2XJtUQZSDS22JK3R9njiazhhdGv5lvj~sZnz4QGdOkIZnHj99osGgtEo-lDYyX-zreTVUA1r93EmuaesBS8mxskPRaWIvL7Lc~m5XAtRUpvHVV5hLGNXXQdPaEupp5sdg__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS0z
        - vsStageId: 16
          name: スメーシーワールド
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/61ea801fa4ed32360dcaf83986222ded46a72dbf56194acc6d0cf4659a92ba85_1.png?Expires=1704844800&Signature=BAK~vTPRw865rX9HTaiLp1y9UX8McIG~sgGk5d3fQaMXaCfMdDKpF7zsxA29Jlgitau6Oe0jxgmgJPnzicyrfz~T8IInMwYGzIxUw5YpM~UCDf8b1iziIgalYB4KkxkJrC4aNLrVEAAEsVH1cmFJNc3ACBBoCx6bkrQKAZvhfz8-IA2W7bC5hwjn44Z1M0Et2HHkc0psPLM5Zx8IBi6WdFyMqchlycPD58JLkn39r~APUVEMjqVucVQXBJ~8i1hNOfwOOUoEFqcKGImVt56OsqEX7u1IJoHd~7WC9mihaN6XlYz6jTHZ4u90NfStDXvOk1Ct~EcZb0oXv8wJoMKAsA__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS0xNg==
        vsRule:
          name: ガチアサリ
          rule: CLAM
          id: VnNSdWxlLTQ=
      festMatchSetting:
    - startTime: '2023-08-29T16:00:00Z'
      endTime: '2023-08-29T18:00:00Z'
      xMatchSetting:
        __isVsSetting: XMatchSetting
        __typename: XMatchSetting
        vsStages:
        - vsStageId: 10
          name: マサバ海峡大橋
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/1db8ab338b64b464df50e7f9e270e59423ff8caac6f09679a24f1b7acf3a82f3_1.png?Expires=1704844800&Signature=NJSz0DQjs-c5zgJszLhktMSBq9g8d~J0lW2XQb6B0-d9U1dGdl7sZ--jRQSbnyCjM8Jb5OFCE5IrEdW31vxLuHGwf-D7hougKMDMXAy-3ZLMns~GigotKS4TyoJZUouZ-foPkoI6S7JSO4saU-uj5s8WbGojSAGaa7UyXBqk6oF2gcZeX3Vkpvzoa3kSp~Y~Xlhz5GmXA70ARXqwBbyOZctdFE8wNpYW0tX0zW2-As7BTPjcO7lMT1T1F0ep3b-mQ6KkfiICUIKk3s-diNlWvvnkDKsed0dxGx5oWTDJnOR3UJRlr6xnmtX-GTla8FOV6HadaBWnafaquoAXHzF67w__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS0xMA==
        - vsStageId: 17
          name: コンブトラック
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/7b3cf118bd9f45d141cd6db0ee75b06e697fa83945c7fe1e6f8483de6a591f5f_1.png?Expires=1704844800&Signature=M0cxKKhdz7zoyWFW9gVL3wUeuXWAT-eh-BWySXU~5WYx05LNpBYJasFGfhMgjCqVdtxqYkqMEB2KdaORpfU-kYLXw8yUKt7J2Kdi2nQRmcqqxMrHSueK-XkJlWuzRg6VW1Jlk3dhrJSBG2JlkVCOxuIr4tOFQSE3Yt4TTI9wfR2xVlQTZuRhCey9rGvNM28fGRGNuGKg0vsV0LKzKe2rqzS4HIleNNOl5T~lAjpLLvVt1z2G3576vbVf88py-r1ftQ9kIxG3wN0wBK7OXrY8E5huA22BMzU~yuZ~X~vQKY6QghMctZpHAWn1h1FTsQHbITYAWzWwPox5ZwFNx-OYag__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS0xNw==
        vsRule:
          name: ガチホコバトル
          rule: GOAL
          id: VnNSdWxlLTM=
      festMatchSetting:
    - startTime: '2023-08-29T18:00:00Z'
      endTime: '2023-08-29T20:00:00Z'
      xMatchSetting:
        __isVsSetting: XMatchSetting
        __typename: XMatchSetting
        vsStages:
        - vsStageId: 2
          name: ゴンズイ地区
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/898e1ae6c737a9d44552c7c81f9b710676492681525c514eadc68a6780aa52af_1.png?Expires=1704844800&Signature=VARrlX8cEiK9gO3mzdObd5piHAvt-oLE4E1u5WwlcqS4msSU7xSnIAWRryQjCIyNutwhZGleIzkc2eybTqy2TmCw0qVogwtBzHsreG9aZJeho9qKhqKU0yQ6sLNjSLoLRAgltInXXZ1p~AJQ5cVm3ft1ZWLAs3wYi8mHqMCviHphk4D~cv1Tp3--cBcZwdtsjyHfLwa8trxl3rzm1I~ju85IG74LfKBec2Y2FLq03CvnUVph6Ghfhk~0E9avRCFVnVwXGp2buWSVikd95s6A2U4z07RCkEPqkIHCDZoD6tFlZ~bztWlwHva3e8q9piRBRpI9QlzPbLXBZfaDoyyqpw__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS0y
        - vsStageId: 3
          name: ヤガラ市場
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/8dc2f16d39c630bab40cead5b2485ca3559e829d0d3de0c2232c7a62fefb5fa9_1.png?Expires=1704844800&Signature=AsjE-W4VBHKoSmhytIZjVH0lt9zMTkS1AJIj4xKaDIfYWSoGXXJjPRMbbb5eF0y7pZqu4WH2NbvTEuJljPfGS2gWc0GdST5g0a7c~ioBAywSAC9JsFXyOKqyGKxOmMNVHLxW9msJw3s~fLAzp~HZvje6rdIwIRdTyq9bKAo-JXRGsrYoN5hHgKWTStUFSMxgPIGexFY2V~wDKwyV6Rwhk2XJtUQZSDS22JK3R9njiazhhdGv5lvj~sZnz4QGdOkIZnHj99osGgtEo-lDYyX-zreTVUA1r93EmuaesBS8mxskPRaWIvL7Lc~m5XAtRUpvHVV5hLGNXXQdPaEupp5sdg__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS0z
        vsRule:
          name: ガチエリア
          rule: AREA
          id: VnNSdWxlLTE=
      festMatchSetting:
    - startTime: '2023-08-29T20:00:00Z'
      endTime: '2023-08-29T22:00:00Z'
      xMatchSetting:
        __isVsSetting: XMatchSetting
        __typename: XMatchSetting
        vsStages:
        - vsStageId: 8
          name: タラポートショッピングパーク
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/f70e9f5af477a39ccfab631bfb81c9e2cedb4cd0947fe260847c214a6d23695f_1.png?Expires=1704844800&Signature=ZZS1aGrZP9CKNKiZesUOlv4m8~tG40peVlnwws1KnYsEXnIqaxE0425XGYE5WavtmDjh1n-h7TD9218sdN0pcxL9slIPkgg4OUvbNPBo8RDyTmTieEusdPx1LUK9YDBgjupz14CfuGc-aU9L6gouIRLklbbviGz7sS-dgQvPL2m0tZbNO380DNeC0AlPIm9Sp6jNZim9NeP1hHB8gMMTjkFhcPYyK3zc5LldS~UjYYYfXc3wP-0CkwYm4CsvfN28nZ4KkbZROhSSvHa1dxP7f7UyrOH2bkjZmrxqkik-cv12o5wMXpB-E8E~YWl4QpImdtgJLW8s15WE4x8m1yAUhQ__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS04
        - vsStageId: 15
          name: ザトウマーケット
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/a8ba96c3dbd015b7bc6ea4fa067245c4e9aee62b6696cb41e02d35139dd21fe7_1.png?Expires=1704844800&Signature=PuPLILXEiJ-srfggk9x5KODjKqNiAGYOQsZ9KlH4Jpv8YIDXnVSpUfMGhRe0f~EnVY6KHWUUnC7q5tSHEkZbcRQBVHIzMF~Lefcwojh6Vjgk1zL7VW--7z2umrruLYciIWAmKjc6YCfcRQaVAN-54MD6uaSLWNZMODBDbmNg8UIpePI1wttCVqyAY6B4r9tdDPeP1dcbbxYHmtvSUwvxTiMh16cQjWwMzVxDIs5L4AmG9vfCU~7hwqTc4DxxPjH3dkgKxCq-7IDmj2uWt~IYH8PnTeAs~HCDDB~US~jXzZuBjcJaegsx~xpknZZF~p5b~2bHSKqbjS0ey2uwRrVt~Q__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS0xNQ==
        vsRule:
          name: ガチヤグラ
          rule: LOFT
          id: VnNSdWxlLTI=
      festMatchSetting:
    - startTime: '2023-08-29T22:00:00Z'
      endTime: '2023-08-30T00:00:00Z'
      xMatchSetting:
        __isVsSetting: XMatchSetting
        __typename: XMatchSetting
        vsStages:
        - vsStageId: 7
          name: クサヤ温泉
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/cd84d711b47a424334569ac20f33f8e0ab6a652dc07854dcd36508a0081e9034_1.png?Expires=1704844800&Signature=oHM01xDT2NZUZqB4wVATpNvrfITjFbV8VyrpBSnoBTyOzbsEP8Pkdvbv4XUk~74jXEvHSAoQLMIng-Mtx0Hp01H5USioaX6h-mtw3QbBN8My2jPl8XpGLmFb8MLSszY1-abcuIA-pTTpYKdzeuo29UpdiqYi9KMKOjaaOMIP7EldfCyCfhbamuV~xFoKugsa4PfT-lDnQ3mD31ul1Y-g7gIHA1TXYkN8~0vWNzc2rjI5SZ4RaAQM-Ky91fRJEP0YPmnSdN4wSnqUkK8eikrohY06TTLHjjU5F81xqfPOxcrg-Gls5fMte03O59r37eHKbNeYzUMd--LSK8B7~Ck~rg__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS03
        - vsStageId: 9
          name: ヒラメが丘団地
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/488017f3ce712fca9fb37d61fe306343054449bb2d2bb1751d95f54a98564cae_1.png?Expires=1704844800&Signature=u~9tft7cU-OGgq8AP~3siYSSrZ6gwZYhOtDxw0lBO7mvlf0a5YI8~UeoWMzJhBtWt3UUFdNGFKLpvRv~s55zxf42zH~cmH3LxW-5FQ-nlMBY8K9KAXNcP4Y4MOFQkTU74fQNJeGMlnlWzhhFVSI2vknxTeII6hQm6fNeAcmzusMEAERlRo0HU8-GnfHZ2-cB29h2mq48N9mJLFAAixTrTnkebWiY2T2SMnpNAzQmSqR9qiao9MLJZ6vYDkBH5DD8re~VxzavWazVmeOlPB9UsHLdwiGvEtYgAU9dCPLm-C-AOX8b83GvWyXU3bQ9OCGODmB3Rfqg3wHwbFgdBJRzng__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS05
        vsRule:
          name: ガチアサリ
          rule: CLAM
          id: VnNSdWxlLTQ=
      festMatchSetting:
    - startTime: '2023-08-30T00:00:00Z'
      endTime: '2023-08-30T02:00:00Z'
      xMatchSetting:
        __isVsSetting: XMatchSetting
        __typename: XMatchSetting
        vsStages:
        - vsStageId: 5
          name: ナンプラー遺跡
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/f14c2a64e49d243679fc0884af91e1a07dc65600f9b90aefe92d7790dcffb191_1.png?Expires=1704844800&Signature=G1qKgeh6~duqmYWKcCB-prudgobcg7t2z77Neem0TOeQQxky-6b8UcC7r6KvLdHzlqcUelqq4dKZWab8aKMyFTME8~X~quDb8McGhH1pp7i1-yyMpFtUZkWOYKz7jjPwkfdGo~YoNu~LIRGbyjmBREcz1o6gC9tmN0M9jzwr5UxmnfVPOWX~eG-OoZrN05TU0PPX66m5~bQgSvdPRJ22KLSoFfCVuQITQzTHNmGXLNSLLzZZvcZBu8yLQrBl2aO1wZA-zG1Kqw4nmJWWEtuzdCzFBN9hgzko4GCmeacgf~WEfivq~FjqyYr8P5eCkfAlCBv75tHfZIf1lgmamGbLlA__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS01
        - vsStageId: 14
          name: チョウザメ造船
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/48684c69d5c5a4ffaf16b712a4895545a8d01196115d514fc878ce99863bb3e9_1.png?Expires=1704844800&Signature=VLCqEfqohW~GClr2BqPEQIacdjie9gIXFTpoQ3gK3~I6RgFd6QCIQuXrqnuj41HdLpidvHm5y5GNFFTiizXiEDC1uv5RzIrvIKb1o2XvbVBnO7Gy628rsW5LUihNA64K7LQ-askHMOjt3gAq2kb6UQddAjiQau3ih~cCv7TwxF0b01DDz09RG0u~SZQZRkelZht~oDci4wDquJJ3bKq5dqa-9AUD9qFlbUszzXdE2Fqq0StLuKUvnQqIUVrEMHBk8BKwTTWBIHt7p0VeVMbX~ADOBKSi6mc04efm8-AN1lgIYqQqnWBV84hRjcJqK1Y32iSxejyxM3PYxZnB4YKiMA__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS0xNA==
        vsRule:
          name: ガチヤグラ
          rule: LOFT
          id: VnNSdWxlLTI=
      festMatchSetting:
    - startTime: '2023-08-30T02:00:00Z'
      endTime: '2023-08-30T04:00:00Z'
      xMatchSetting:
        __isVsSetting: XMatchSetting
        __typename: XMatchSetting
        vsStages:
        - vsStageId: 1
          name: ユノハナ大渓谷
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/35f9ca08ccc2bf759774ab2cb886567c117b9287875ca92fb590c1294ddcdc1e_1.png?Expires=1704844800&Signature=s4VFO0VQXcLeOP6-7lNlyaekqqHKfLZNQoIrzAF3~eVwtvXgy5lh1-9BXYkNit1WWPLwuixhsgpCZgy9LCmf5DV2Rpd3hMcWxgkByrx50oFJjdGuD5E0zQLPCCi~BIBbM1mAQwK2KLbwGXNhQxYrVCNLilnjRcb-Jv52bWJ2qdZCFskUIwTLFiw4P0SryGXDVaJlc-a3uRc5wMfZjw9IN1AUOB9zw3VddA2WiUe0Bll-hwumnOOwcAEQTvfcip449t2xLUpX9NNgctPp4qzHdi0v2oSHaB8INQKrh3xeXoHH7cK4wKMCypnrtTByd0JAlGnprzbM5bKi8bP8mDJYLA__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS0x
        - vsStageId: 12
          name: マヒマヒリゾート＆スパ
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/8273118c1ffe1bf6fe031c7d8c9795dab52632c9b76e8e9f01f644ac5ae0ccc0_1.png?Expires=1704844800&Signature=kdHGsRD~RTvvy5JEwIdYANSANMvjMP27wPU-~ds956PHb34ov-WajxEKFiOgE6vDneLch9EGm2tjnHwgSyAxn9VKNiSSTmT1yEwUrimnDQRGqEi09GiY~kf9qbTHq71s6VEpZO1euAMbyCJFiKdHG80tvqKtZPM0HkxZoBiLlwSCOaDGvmGKWKYjNLaMxFgcHfsZRzq6FHWzUHl4XlyT-R1mDm-mLgt4rlZXW3d3mvswNSYekHRLNmIJI74cSTPh9mXeMZXAb22nXig8p2JFiMr02qYU83MlBR6TNm20PLAdbp02oBTZ2VVqYml6jj9Uqrs6-huF8pX16tu61dHIfw__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS0xMg==
        vsRule:
          name: ガチホコバトル
          rule: GOAL
          id: VnNSdWxlLTM=
      festMatchSetting:
    - startTime: '2023-08-30T04:00:00Z'
      endTime: '2023-08-30T06:00:00Z'
      xMatchSetting:
        __isVsSetting: XMatchSetting
        __typename: XMatchSetting
        vsStages:
        - vsStageId: 4
          name: マテガイ放水路
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/9b1c17b2075479d0397d2fb96efbc6fa3a28900712920e5fe1e9dfc59c6abc5c_1.png?Expires=1704844800&Signature=AU6l5ITJAwTdgr7PsBucSZAhVTQo52taNdBJqesVXttz1PWvjR0Woq0pEogV8cxkgIdqzloxfkpiKoHVr80ocnm3VWWo9Ky7GudyuazTPEI96oyvuzrgK29wDscKkn0pVaslWrIPgvnqEo-rLhK5xp0lcrMif4VR8voh6Ixu3IqEm2sl4TOtJxuAgLL1wfWLGiT9UhnpK4w52~1SKF93Zf95c2gy0Gjp~21N5GeJEv8z0T1X83xgO2XO6BIm7Lt1Zv5b-9GPmI7gRp7QFoFtvKcTX7DG370h5td~Ca9FtC8KgFj3p98Qprc0IqhvLyQJUd~KsBDwlM7df9VSTcnDqw__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS00
        - vsStageId: 11
          name: キンメダイ美術館
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/b9d8cfa186d197a27e075600a107c99d9e21646d116730f0843e0fff0aaba7dd_1.png?Expires=1704844800&Signature=lR4JzymizIeGnOoUsVBvLLOa77btb6OuIOkiBmmI6F-8zIuidYApv~CdTQnnN1Swl86aAuwNKCbGNU0BYAwfShcOpArEWnaEGl02KlXEDSlFEGtGYZOwqGFOrUlBafurvE1GN6TZBbhAX3VySd5T5c1JZqlSqrIfaNWAtUpf9NjrrSbQ7OJsZEMouWxpoTVi3KkJZdFiFVVxQLmMZQr-z6Hw4Mtycs6XrjgX3HXSWiz~2RIvAQXjt9nbNmoXw6pwYET5kwZcsO1~D-vyUC4kowXVTJD6BKKxhJkEUBk~5id8TP~9Sh2SRdX5FZf5OtvE5I27-E0t~cEUB~ew2LkoYg__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS0xMQ==
        vsRule:
          name: ガチアサリ
          rule: CLAM
          id: VnNSdWxlLTQ=
      festMatchSetting:
  eventSchedules:
    nodes:
    - leagueMatchSetting:
        leagueMatchEvent:
          leagueMatchEventId: SpecialRush_ZipCaster
          name: ショクワンダー祭り
          desc: ショクワンダー使い放題のハチャメチャバトル！
          regulationUrl:
          regulation: ショクワンダー使い放題のハチャメチャバトル！<br /><br />・ 使えるのはスペシャルがショクワンダーのブキだけ！<br
            />・ スペシャルゲージが自動で早くたまるぞ！<br />・ 基本ギアパワーのみ有効だ！ 追加ギアパワーは効果がないぞ！
          id: TGVhZ3VlTWF0Y2hFdmVudC1TcGVjaWFsUnVzaF9aaXBDYXN0ZXI=
        vsStages:
        - vsStageId: 3
          name: ヤガラ市場
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/8dc2f16d39c630bab40cead5b2485ca3559e829d0d3de0c2232c7a62fefb5fa9_1.png?Expires=1704844800&Signature=AsjE-W4VBHKoSmhytIZjVH0lt9zMTkS1AJIj4xKaDIfYWSoGXXJjPRMbbb5eF0y7pZqu4WH2NbvTEuJljPfGS2gWc0GdST5g0a7c~ioBAywSAC9JsFXyOKqyGKxOmMNVHLxW9msJw3s~fLAzp~HZvje6rdIwIRdTyq9bKAo-JXRGsrYoN5hHgKWTStUFSMxgPIGexFY2V~wDKwyV6Rwhk2XJtUQZSDS22JK3R9njiazhhdGv5lvj~sZnz4QGdOkIZnHj99osGgtEo-lDYyX-zreTVUA1r93EmuaesBS8mxskPRaWIvL7Lc~m5XAtRUpvHVV5hLGNXXQdPaEupp5sdg__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS0z
        - vsStageId: 18
          name: マンタマリア号
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/0b7fd997781e03eb9d5bf1875ed070f698afc654f4fe929452c65aa26c0a35fd_1.png?Expires=1704844800&Signature=PVlficaVReTNu~Qud0BxpAxTCFxp1vNVPBV3-Yw0yb4cVUe8xcoLkC7T6cYNCmFnjOtHh5vJE3hxz1UxJUzIKouoi0UjL1WEkDlOQWxO-wx5EXHRg7qIg2Y4QG6u9WDcVhBw4Iu5OgFmTzk6KO0g4PDBJp~hhYrnYN~o65XC0EcghJzwnrPD1ibVdIsLVIzB5GSqhMewIDF~tYVpGKQGtOVLh2DxuD2BcXX7KC6JFljBTGj6toIbQHw92iRwRz31gijeCQpzMgYifnUKPwwpoNZLdK8hK7l92rgKnjdyZ36yAVljM7up8GVCi7~I4GDUDoOfip4Y~3jjxZCGX1RCIA__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS0xOA==
        __isVsSetting: LeagueMatchSetting
        __typename: LeagueMatchSetting
        vsRule:
          name: ガチエリア
          rule: AREA
          id: VnNSdWxlLTE=
      timePeriods:
      - startTime: '2023-08-29T02:00:00Z'
        endTime: '2023-08-29T04:00:00Z'
      - startTime: '2023-08-29T10:00:00Z'
        endTime: '2023-08-29T12:00:00Z'
      - startTime: '2023-08-29T18:00:00Z'
        endTime: '2023-08-29T20:00:00Z'
    - leagueMatchSetting:
        leagueMatchEvent:
          leagueMatchEventId: NotFound
          name: "？？？？？"
          desc: "？？？？？"
          regulationUrl:
          regulation: ''
          id: TGVhZ3VlTWF0Y2hFdmVudC1Ob3RGb3VuZA==
        vsStages:
        - vsStageId: -999
          name: ''
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/59a42245071d692c58b9825886f89f95e092ae0aa83a46617fdb4cbcb2f5f2b8_1.png?Expires=1704844800&Signature=KV6Q68bJwcjKrdltEflSQZ9-erknVYGTRbKqSj1-d-8ssUA-CHNZR4CldnnZu9aUvHH7P1zNB8cDRrnYZHNIV3T2jlt0hNyVJiKxeuOWo~VfcsgiWRpAX17I3~qszCPlOTeqlQdsQQg1zZgsOWPUxpxrNO9f5fWJAEH9fJ2ATs0FA-xcoBo-3Bx1v0TkGwk1ezp1ZxKWQVwbLMGQekr3ioryG4d8JGd2T~BB5NcQJoYZ~JtCOTXJTZlcrBUrsRPPFth9a4IL3VqX5KJXfHat8mV0LWnwWv9spXPl5eg3FSQwD8AnUWzAcVAbJUVKVtGMZq635TZxLE0BJAwuMFV2JA__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS0tOTk5
        - vsStageId: -999
          name: ''
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/59a42245071d692c58b9825886f89f95e092ae0aa83a46617fdb4cbcb2f5f2b8_1.png?Expires=1704844800&Signature=KV6Q68bJwcjKrdltEflSQZ9-erknVYGTRbKqSj1-d-8ssUA-CHNZR4CldnnZu9aUvHH7P1zNB8cDRrnYZHNIV3T2jlt0hNyVJiKxeuOWo~VfcsgiWRpAX17I3~qszCPlOTeqlQdsQQg1zZgsOWPUxpxrNO9f5fWJAEH9fJ2ATs0FA-xcoBo-3Bx1v0TkGwk1ezp1ZxKWQVwbLMGQekr3ioryG4d8JGd2T~BB5NcQJoYZ~JtCOTXJTZlcrBUrsRPPFth9a4IL3VqX5KJXfHat8mV0LWnwWv9spXPl5eg3FSQwD8AnUWzAcVAbJUVKVtGMZq635TZxLE0BJAwuMFV2JA__&Key-Pair-Id=KNBS2THMRC385
          id: VnNTdGFnZS0tOTk5
        __isVsSetting: LeagueMatchSetting
        __typename: LeagueMatchSetting
        vsRule:
      timePeriods: []
  festSchedules:
    nodes:
    - startTime: '2023-08-29T06:00:00Z'
      festMatchSetting:
      endTime: '2023-08-29T08:00:00Z'
    - startTime: '2023-08-29T08:00:00Z'
      festMatchSetting:
      endTime: '2023-08-29T10:00:00Z'
    - startTime: '2023-08-29T10:00:00Z'
      festMatchSetting:
      endTime: '2023-08-29T12:00:00Z'
    - startTime: '2023-08-29T12:00:00Z'
      festMatchSetting:
      endTime: '2023-08-29T14:00:00Z'
    - startTime: '2023-08-29T14:00:00Z'
      festMatchSetting:
      endTime: '2023-08-29T16:00:00Z'
    - startTime: '2023-08-29T16:00:00Z'
      festMatchSetting:
      endTime: '2023-08-29T18:00:00Z'
    - startTime: '2023-08-29T18:00:00Z'
      festMatchSetting:
      endTime: '2023-08-29T20:00:00Z'
    - startTime: '2023-08-29T20:00:00Z'
      festMatchSetting:
      endTime: '2023-08-29T22:00:00Z'
    - startTime: '2023-08-29T22:00:00Z'
      festMatchSetting:
      endTime: '2023-08-30T00:00:00Z'
    - startTime: '2023-08-30T00:00:00Z'
      festMatchSetting:
      endTime: '2023-08-30T02:00:00Z'
    - startTime: '2023-08-30T02:00:00Z'
      festMatchSetting:
      endTime: '2023-08-30T04:00:00Z'
    - startTime: '2023-08-30T04:00:00Z'
      festMatchSetting:
      endTime: '2023-08-30T06:00:00Z'
  coopGroupingSchedule:
    bannerImage:
    regularSchedules:
      nodes:
      - startTime: '2023-08-27T16:00:00Z'
        endTime: '2023-08-29T08:00:00Z'
        setting:
          __typename: CoopNormalSetting
          coopStage:
            name: シェケナダム
            thumbnailImage:
              url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/be584c7c7f547b8cbac318617f646680541f88071bc71db73cd461eb3ea6326e_1.png?Expires=1704844800&Signature=fCnI3zeZzbMZ0OyKpb989q9pDuZEsgcsBUQgkC7nrN931Lk9hl9vR2BA8ybOu5DSz5XKSMrsURflJCcthSWhytKlw3HhUWXp2kz~uFyDMR7loo931NsjLimKSO5pL49pGtGWaQJUC7hkBOXny08mcWHtaMwpuAWrV-rsVvXVVIwTOj1oLjmimIOYJ-asUEde6u8ppfxx14azyxaAE7Am8CAWAxfR5IxrmsXuxGhF7Vlgc7GgX-Wn80xJGmY1d3RaD4ZBhHWOj3spJTFvcpztmgCR9vrM96YfeB9jVmDg348HBm7haZ2Ia2AIYLjgOlddIdvXaDG4bB9yLLCnVA9-KQ__&Key-Pair-Id=KNBS2THMRC385
            image:
              url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/high_resolution/be584c7c7f547b8cbac318617f646680541f88071bc71db73cd461eb3ea6326e_0.png?Expires=1704844800&Signature=OvQezASpe5jQMcNYfFB-acB-g7D8NvKMVzpZeLjdj3Z3yHHRr1Q8DKvmFYVFEEVMtxUVTO9kKnhM2bjXhorYLssAo8hAidZ8RYmbROvY2ewwZBOytarqdtthNv46nKxgmBVz17m0j-FI4XjcikepRMa1mfZBXbX9ZK2lisFC3m0BFmxs7-dm2ZG6yGq~frdLMyLTABDF0Rqe6DmewdwWdo91E5X9-URkWMH9qSqj59FPbMljBymCr5PDNyQvOis0nKsd8KYbKQmqKiovEpFE6yD16j1sTz8M0i9NIHQICgftvVJyxAkDcVOvSV6MxVISUeWGnpYpUkU6NSGd5WY5Kw__&Key-Pair-Id=KNBS2THMRC385
            id: Q29vcFN0YWdlLTE=
          __isCoopSetting: CoopNormalSetting
          weapons:
          - name: わかばシューター
            image:
              url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/8e134a80cd54f4235329493afd43ff754b367a65e460facfcca862b174754b0e_0.png?Expires=1704844800&Signature=au~ZRtplZRuQ9rBWP7rMmBZMY27Z9bbm99sLdXZQQt6ThgZWpQ9nPrUZspB2ll-sxDrk5xh8xPT2-YBOxYoyI8TsQpV0Oz33EyS6C4WxumT9ZvLGhil3-b6jC3vezBvIDteZ9H5Q-VYYqCe6WDaDYTaDgvBs0XINaz0mdKgX4RYZqBS1H7oo50HwpD2iGRwv17irX-3RfZvTZn9S-btyQ6CNm7Wg-CtQdjaTHtxOMyXmggyfMjyHFeyZbXpehPdVty1WQeasa8dvKJQhhSqSZu4xKLa5P4rp6RH15gK7ar1Ry1d760eFG7w0fZTIrA0EV2romMSn3JBO37G~I4hhbA__&Key-Pair-Id=KNBS2THMRC385
          - name: スペースシューター
            image:
              url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/8034dd1acde77c1a2df32197c12faa5ba1d65b43d008edd1b40f16fa8d106944_0.png?Expires=1704844800&Signature=bfn2Bg4HV66ZU5XF7CrWlPx~ppdEtdnZCT-qorh~bIJYai~~ewFn0fJb5wAiWWcNA1-6mkazS2iqqGj4fcHKqggqHjpTr7s7vKBkajNzB9lcFXUQqvdrAIxwUnXSs3xLyLHzeFn3P2tTj1p-KwFPfQnnddp3BZLzT9OvPMShMl4QmCeI0iHv729512IaXUthPPQ0pTbD-CxlZx4jFZS0LC0-IEK75LAGMZ0z~e9I7Wewg8evVxIGQSju6arm0v9Jtw4dyu~bhag2O1Y97nDX0kfIhc-SkOmpNFnNYcRxoTQrLZZQGCkDJHPusrvf0Ejg2-xXN5PkyY5SbukQ0dIQ3A__&Key-Pair-Id=KNBS2THMRC385
          - name: パラシェルター
            image:
              url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/15d101d0d11acbb8159e2701282879f2617d90c8573fd2f2239807721ff54ca4_0.png?Expires=1704844800&Signature=n04Yp06bF7fqFQXuWUns0WLrGMcEJJSTicVJg1RpCzlizKiuxcb8xawmbFI9cOXduJElqAE6D~YKz9xtK4qg1tzW5lB8EuH9nzDZcb-dS7QhHC93~rjdnUJ0HnNAEkO886ZITH6r1l2h1W2MrWdEXCIptMaqH481~xOpP2f4wQq9pgyGip9Y1druA2fCA17ULub2tngdItZfYhld8SehQjK5B346hHMTFJqT74fCeE7GG6acUaQbRyfrWHPBXM1WNeW7Otlqgf-5v9EsgSkQE9SD8tkRbMte2oAt5CmaJgrDH6Kidr3kmUb4eYH9xIwgoeZU22yNifeJ-aZC5wipHA__&Key-Pair-Id=KNBS2THMRC385
          - name: トライストリンガー
            image:
              url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/676d9f49276f171a93ac06646c0fbdfbeb8c3d0284a057aee306404a6034ffef_0.png?Expires=1704844800&Signature=KCYJWaXXFW4pa3IJYpvasTTg~~Re5LeBuO6UnjIeTe1E4QvGWNj-I9PZf3Rx3GMw9NkFP44NRi8bkBdUpoK3MRKZRwW2tavBrRqZuaeCuT9ij~NAvNL50r6pgo4tdowWE-tENw1HCCVf68IGrMMDH7dcsoYufTvzcsOUupH5rHS3-Zi6MB3M35PFLtQDxaMFAMivH-rhzw6gjXV~JGgHuHl0IiYCBiRWYow98Y4u02GxzNL4ALIjmwlxpPAKXAnp9-iZ-t4-4cjB-jw0V-sutg1FXJgptykaCNV301uM5dQyxKdqUCI~WKvgl-3C1DvOvnNvtf41eH8jpOSNLztrGw__&Key-Pair-Id=KNBS2THMRC385
      - startTime: '2023-08-29T08:00:00Z'
        endTime: '2023-08-31T00:00:00Z'
        setting:
          __typename: CoopNormalSetting
          coopStage:
            name: アラマキ砦
            thumbnailImage:
              url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/3418d2d89ef84288c78915b9acb63b4ad48df7bfcb48c27d6597920787e147ec_1.png?Expires=1704844800&Signature=nhW-H71odsqM5ihMek~z3i3gSDmQbJ0HeNCOK5IepZRTiFBLZBmuAjui7TemUE4TfKRl4N2K-KueEADGnOtnUceLIkbFh8By8CAU~miyGuc1YYvX0apUDrKqk6LHo~HbSpiWWhZ-pN97XrVdXZsfGSvjSb9zTVx5Rzmlg5eUrN0d6Qepq1HXgoGpvj7fmhTn7~-3GIyY4h7osNRCojMGQrtb0JoSW4l33vnK-rWJrAY56Kt-fWOPsv-OgnY168P6dF73FwfWhNGaZ3fcxdAnnfV~skAcPxu7F6wBbslTkas7u9hfeTSKnPqMbd0HCc4PJStY7euARiKWdkXAOFEyyw__&Key-Pair-Id=KNBS2THMRC385
            image:
              url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/high_resolution/3418d2d89ef84288c78915b9acb63b4ad48df7bfcb48c27d6597920787e147ec_0.png?Expires=1704844800&Signature=bz2FRmz7ntZgZo5Zgbbf1rUlOneSN-RIHUM7fHkf3IVSAdZE-kZRfrxfN~6eV-bKqqmt654TAPi3DvSCZZaSyPLHB2yu~EURtA1fll5P61bvpgjM1w2NoEIfPytFMZD18nWnZ145AEBpRQk92-IcX9v51PZ2JhQ8~Z6f4Mgz0BcTbRjeRmdCApoGsQcAlWsAMXK~jvGSdCMJpF1Vp-i3PYvBV5KDi0drhp8L0i1mOntJxRUr9U34P6rUNfCeBQ9C1ZqVIY0sd6h9Tf8tEP359LMstnKB9czoJdyiaXl5Xq38fzA2nrewUlvaK2qcYageOzJlAnzl6vQm07UgaAUg0Q__&Key-Pair-Id=KNBS2THMRC385
            id: Q29vcFN0YWdlLTI=
          __isCoopSetting: CoopNormalSetting
          weapons:
          - name: スパッタリー
            image:
              url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/f1c8fc32bd90fc9258dc17e9f9bcfd5e6498f6e283709bf1896b78193b8e39e9_0.png?Expires=1704844800&Signature=dCOnGUXMKGVVzlwYD4N2yDMYMgAdCULelSmnmSTdnXC~vxD25edgEEfELag-D4Oz10X5zEiXIEoeJ5lsNC2Iu0AHG6A3B4-PHpcH-hwE8XoIiAtv~oQc6LoppRuOre9xMU5qMmwRRc2bcZ-1Iq8ioLHMj~vAbrRWXwtwasjEuZgwpzCvLQCLeAs~1~hP-d1L3tOzXWMNvzxtFVZ8ARGuaUX9Is3lx-jR0N2R8koB11SSx~~HqHjiakOeiGjfk26nuOZ9w0adIqr4taApnksdD4~8cXidZD7FSrBfrN9FB60oVTPQNWYcVc87ilshwHTojKALJ984ZXcj3wDp5fUoOw__&Key-Pair-Id=KNBS2THMRC385
          - name: ケルビン525
            image:
              url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/802d3d501738c620b4f709203ccad343490bd3340b2fda21eb38a362320dc6ed_0.png?Expires=1704844800&Signature=hCG0gBsfEcZV3KgxXWuQAB4H~eZU4OAN~fDg4gYoXnsbWlFzy1ADCl~O0l1KxQnnjuN8XDv773gJHRrbTZCCTiqewQi52tEecfFiVVpHmtps-9Vm0iTsapepMFOkaqVkleRZGkcAECtzuK1wT3uaqDze298Sm~RzI8LO-itzNtND25aO-G5FOmtWUxJCyN94NbBfG2IHdu5XfiYigy52QaBc4i4npaWaEB2~PU9SI2P3WVjByl-ZOEQzXp0cKC7OngCWnenFW6arwz41wGevubD6dmnoPxgQLgcqcT8NIX5THNGeoMweN3CqvqGdyFDtmDQmw2lwddhQwFj2ixDTmA__&Key-Pair-Id=KNBS2THMRC385
          - name: バケットスロッシャー
            image:
              url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/4a8bf6b4ad3b2942728bbd270bf64d5848b64f3c843a3b12ef83c0ebb5de1b3d_0.png?Expires=1704844800&Signature=rldclF6oPX~eotZWsCWNICNSh4QzF558M1iJzi4y3hDhLaThoqvVcVQm1KPRkO9W2-g~pvV2uaAa0KiCOU-pzpjo4xF-jjcIBDyQME8FB1DsR77iTmS8VUApsonDi2S65tfDRIjfM9w42olI1FpHslRGxHeQc2D~dAXQLtPgz074uwMdAs8GWzStUV-ftIP~wr7owiNNWJ4nl-4u2L2JNSTezKUq~55TO5csqtZ5nMJt8inPzAnkSsGOrfXEDp~qdRhfmFGCYBcAzO7P2TrRWJRxWlcIaVN0dbCD9cUB76bJNC726AE8Crix-jQm3iOgjFXKwtcl2rr92~XEnZ1Keg__&Key-Pair-Id=KNBS2THMRC385
          - name: スプラチャージャー
            image:
              url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/3f99800b569e286305669b7ab28dc3ff0f0b1b015600569d5ac30ab8a97047a0_0.png?Expires=1704844800&Signature=VvkQtE6qLejkIdYdFzDUMPDUNbH1ayfr0kjj96uEyiGJyxbKD2sSFhgbWbDvRRmsz-e-QKnmCGa1yV-8HuIhhsxsqT6rK7uGRKmYcLbAo4QIJUCL4ElwVeYa8g0eHj8vjhU2tfzenyBrQWB2bFm6QAQpkZ4L5IWKbREI5NDilSxI1tu77vDLPrl-YB3tnB18kDJdtX~OhmQHJn0rLr9E76sLojejHkRa0RaToSdJoKaGU-~IP~1AMJBS6yqd8EcnKnvUzcuUHmdiUS793xxg2jWp22lIMdaPUwe6JncabVtLxG8I6~i33BvEYjHbnPGAnWjM4gvNKblo8PRNlcEuGg__&Key-Pair-Id=KNBS2THMRC385
      - startTime: '2023-08-31T00:00:00Z'
        endTime: '2023-09-02T00:00:00Z'
        setting:
          __typename: CoopNormalSetting
          coopStage:
            name: 難破船ドン・ブラコ
            thumbnailImage:
              url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/1a29476c1ab5fdbc813e2df99cd290ce56dfe29755b97f671a7250e5f77f4961_1.png?Expires=1704844800&Signature=SJCpStmM3wPXg6n9HEo5AcuzFCm9h41udTA8AsSXsimNm9cRlc~xUJojfpWJGsDEQj8fNeZvyn4ZeN7dwYCkvWxnt3xdiSpgN3h0ypXuIOvMwW8UAVTUudbq4L9K7Sc-HBi~J2Sb68YrNME2jQYbVYTvzIuqsQrG3FqTVAc6Jc5TkkIDQXM9zeo6Kuu1OGfx4jWl0iU0-epuZBSTJFfNPt0SfNHOXapdLLOcJj0rMBqgCCNINT8VkSX70T~4rmY70E7lNEqynAnMR3P1f49CQOHI9AkWVUFx4CmaBWeMoDi9VkRHBZYHMdZEcLH9vN9V3aaqIxRhqYUouR6fZPcFVw__&Key-Pair-Id=KNBS2THMRC385
            image:
              url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/high_resolution/1a29476c1ab5fdbc813e2df99cd290ce56dfe29755b97f671a7250e5f77f4961_0.png?Expires=1704844800&Signature=Y7VGsQUdZXpHF3ZprNtRqC-koFbG8rD93MNlJQHMSztaefRwhYRoJVh0~9OjlVXNXo9o4EF2GpQRZHrvztdHCwooSJKgw~VJpD3v~544bD5JEAxePEnLJi5jynpdnynj8qFeo-0CU56vz-RLfAKUpSd~BWCP-GfbWy7xSPsZ~PG~MulrTK~hKuHzQvyv8h0ZPu-xX5qtSERccd62-xtS1I7eiwTsPOBVQehsXp-HnRo4xx-EJks0efZvQLRlfFkQKQqdwZWbubpOK10jwV~Xz3Rq6ewloWQ-4VPhGoXW5BzAfDYSkUp6VmgQZyXXl6dKDw1ECAwdFBazxYJmee8qTQ__&Key-Pair-Id=KNBS2THMRC385
            id: Q29vcFN0YWdlLTY=
          __isCoopSetting: CoopNormalSetting
          weapons:
          - name: N-ZAP85
            image:
              url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/e6dbf73aa6ff9d1feb61fcabadb2d31e08b228a9736b4f5d8a5baeab9b493255_0.png?Expires=1704844800&Signature=hJtmHciAftMv30zLe7DxC1SzSrgLKEfiqOJjka9QcAtgaAYlmsWnV9uES0vd~18epUONDr5-rH8iEwf~UoKTWa4yQwvwE09D04Ubl6A71U6jrjBqIIu7RgVu6S~UPqToAAjoWq6PHetThUClslng3iI7dSTBjeL-r-s66plRcdkSkzU0Kc8J80L9XvjjCHZv3mXNPmsDB9lpOYyzoHP1bj4cIzc6FGAaqT~8a3QTQHMzpUGJVkcj6KWccnCW4piabmtL-eC-hPXiEQlo~fzgO0ZXAiAFe0sISNX~1MJJeFAV9JVuu2ONMiq2TLpK2AIhTFvd6irv7laAnB~B3TtJPQ__&Key-Pair-Id=KNBS2THMRC385
          - name: オーバーフロッシャー
            image:
              url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/0199e455872acba1ab8ef0040eca7f41afca48c1f9ad2c5d274323d6dbc49133_0.png?Expires=1704844800&Signature=lMhgL84E-gtCLgbojKHdiXWYZhbcwQTaAWXmfLQjo6bT4Kl8vRiyqisxnVwjzqmnGGJD0co2w4mAfAIHOQAOxdz5h5F3zcWMzgYP5SlbdY-ZhH-yLpAeJbbm6Ql6FzftV~yC3VdjgJmS2ccx1cPwZyZ5wiFdX9niLKwHFJtUlP9HBKHm90gmpxTUI6GQnq0pgrpTiPnJqF3rVGIljiAUX8xPO1b-FPYk3MmhUELWBId-Ggbyg6U3PNVLSXJMJmqpu9ElJ2B7iNVdqEPauUs~hC1gerK~aTLRIEG2jVbZVFluze~EX-rnbbeTMrCajBFQn0qZiA4ZBIHhD2Ly70HhFg__&Key-Pair-Id=KNBS2THMRC385
          - name: ロングブラスター
            image:
              url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/0d2963b386b6da598b8da1087eab3f48b99256e2e6a20fc8bbe53b34579fb338_0.png?Expires=1704844800&Signature=KMP0EE~lcfFRY6PHW8~KkovWByCKn0Uy1L2-PsQ6hnwQT03ZSRpSaHArwBvlxlvanGPkU5co-K4kuhD7eUy5CwTvVhsL5A27DB8QU9NlGHCA7Ev~urk7YBR2Wa~kCUKUAIpQshSyhWLXaaJlEH-YfnkZ9A~sC4~zmLhZQxY0vAtxKC4GQd4Sf2sX90hGAiZP2D0-zhFJpYw1oQqz4xtFpEd-GRCq5d5kw63o7aK-4ir1LZRbQrXYMoMr6g5fZWQ1ULh3R~Zwp7XzxJor6S-VjFKfj9kWdKcFLN6-FvSX7fhMfBphVAcSc9INjfcOKjqvmlGrlS6l0XrgKOXHJHM8Zg__&Key-Pair-Id=KNBS2THMRC385
          - name: ".96ガロン"
            image:
              url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/fe2b351799aa48fcb48154299ff0ccf0b0413fc291ffc49456e93db29d2f1db5_0.png?Expires=1704844800&Signature=lN1vhYKBX741nzDSIp~O63JGYNdt7TFEhMIFGBJBKgbeNMov-6MD6-JTwE2gU1KnvAOF0djpzugKgZz4kBeZ6BysFCeHYbypPAQOuMbE7cEQf~XDsFgB8p3S55TGKV2IKWMcYteAwT6G4Y8OJnspKN4XmewFVdsgtFA-4t44YYywEMiggkArxS4pq00FyIKVQskYsUy010J~dUonBH9B-aI0mh8afFz40DnX~i60ZIDCTdsKgvTQLqk8tCHOLhmFbPSu0ewCVKJW4OUsaiRYLfF7pqMkEBk~n9f7bdq-fUE6fp~O1nX30SWEHMqwzuFEdVUmbbcC-ygJUFvndEusoQ__&Key-Pair-Id=KNBS2THMRC385
      - startTime: '2023-09-04T00:00:00Z'
        endTime: '2023-09-05T16:00:00Z'
        setting:
          __typename: CoopNormalSetting
          coopStage:
            name: ''
            thumbnailImage:
              url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/low_resolution/59a42245071d692c58b9825886f89f95e092ae0aa83a46617fdb4cbcb2f5f2b8_1.png?Expires=1704844800&Signature=KV6Q68bJwcjKrdltEflSQZ9-erknVYGTRbKqSj1-d-8ssUA-CHNZR4CldnnZu9aUvHH7P1zNB8cDRrnYZHNIV3T2jlt0hNyVJiKxeuOWo~VfcsgiWRpAX17I3~qszCPlOTeqlQdsQQg1zZgsOWPUxpxrNO9f5fWJAEH9fJ2ATs0FA-xcoBo-3Bx1v0TkGwk1ezp1ZxKWQVwbLMGQekr3ioryG4d8JGd2T~BB5NcQJoYZ~JtCOTXJTZlcrBUrsRPPFth9a4IL3VqX5KJXfHat8mV0LWnwWv9spXPl5eg3FSQwD8AnUWzAcVAbJUVKVtGMZq635TZxLE0BJAwuMFV2JA__&Key-Pair-Id=KNBS2THMRC385
            image:
              url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/high_resolution/59a42245071d692c58b9825886f89f95e092ae0aa83a46617fdb4cbcb2f5f2b8_0.png?Expires=1704844800&Signature=CzVm7gMETBOccE8lM3IKEvxLEOUAa0rcIzxp8ZIX7YPoDZiqaTLsuZS436D4EYGEPsBG5rPvHoyposSNaQrnLSVt1gLgjJPKmm-rDTZKswXWr9OrG8206Qcu7~Nxz4Q37C63b-0wVWBRfhpVT2RH2NHyS4m26GWdMHAw5M-Cz0p6lUiLl5fsHJurxLv1NfMrLOi2SI1BLOG6L9fe5vThg7zSoaHbu5MQffvKKmBGhfeUnDgS-7Z3qVjrsocd4YM516w34p4XH4~rynWZpkZS7eSvXy8XHBIUiWRq3aQdjXuGuiYJpM1u-KbsHXRFJpCuqG3edD4G-siRgce3RCkJmA__&Key-Pair-Id=KNBS2THMRC385
            id: Q29vcFN0YWdlLS05OTk=
          __isCoopSetting: CoopNormalSetting
          weapons:
          - name: ".52ガロン"
            image:
              url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/01e8399a3c56707b6e9f7500d3d583ba1d400eec06449d8fe047cda1956a4ccc_0.png?Expires=1704844800&Signature=q5fWAqAp51ghg8Pkph6ALFpaVQOAKso7cJsE-fTzEmgKnLppUeD1gsDfcVfI4BTcXPPZADDj5WO7zrxRGvJrWUjPFOtVVZzNF7gTdIc7yXdUtOkXgYgtA8T0FCipJuBrT37UkDm71uj9ybdsv6Mj4Vv1PsU9~1Uqenu6-kFAHZb9yQLvidOgL5Krl6PftT-19~euRu94xMhZFFocn0~ELHUNbZz9PWB3fNsCebsPiF8SmqzVBLlU-zQEHlP5TSB1eYikx6Y0c-MNccdaK4C2yvLIM2zIfcadVi7hMbG-1rtR85GO-GH8zcSsV6Zj4qXuDnjxmG0nibfhYSq6qFnqrQ__&Key-Pair-Id=KNBS2THMRC385
          - name: はてな
            image:
              url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/ui_img/a23d035e2f37c502e85b6065ba777d93f42d6ca7017ed029baac6db512e3e17f_0.png?Expires=1704844800&Signature=oPgfWIIJ7MpYKE2U-bfbXzvXpIOXjIUhnYQ7dGjtC7wm8VgAjMhzXmdBZuRauSkNBQf3cnUy6HFWN-T-6L8Oaiaf-lWHXOWSQNtHPnBlmyV-PAY3QSaj2dZI8wrXJajrsbjvoo63ePDv~qbHtV2zhNOuwKqgY-dvaDqrBwKNPVUtzQh6OH2NfHgbg5JJOb7rpFnRBHYisOtsWmOXw4Y1FZAKGdIUJGzCoeuejE8Di-b8bAwdiPXgKNJLBMJ~M0SYEsf~jq6NgQPgKD5e7hLQkb5YfnJgcw9jIy5V5s5QOjjzh2k7Vmzj~GzBRtdI9bH~W1VEqWjIaspuUsUV7a1oPg__&Key-Pair-Id=KNBS2THMRC385
          - name: フィンセント
            image:
              url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/c1f1f56982bd7d28714615a69da6e33c5157ec22b1c62092ec8d60a67b6b29ef_0.png?Expires=1704844800&Signature=oRYf0ykzfXMIq4aDASF2WnhZ4mVO3AfY3tfOO8XqLM~ynD0gz-GWlNfC5YYzTjm0vOa74OwajZhRgom0NM7lKv5tj1J-8CYGb~F4cgz4D-9JMBAkpLmcOQWP5-s~vlepGtUZPauBaezFoZ3P9MGVdO15K37HH-rTkdtnUewivFkrEU~59B8qBE3IgcOHW4WCkcbE0sK~nl1oDmuAbt-3ctWHHcuuaehrtegEJpb0U7tAuPNYKHKZRxZkJx5kaFX7trxQk17-k~wGXJc0PKcp3HNy7WDOdFHvDZBhHojLn1Ln-rLzrQPlyy~R3jgH~jwZPatZ5scQC-REg8x2DbKPrQ__&Key-Pair-Id=KNBS2THMRC385
          - name: スクイックリンα
            image:
              url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/0cdd6036a6677d68bf28e1014b09a6f5a043e969027e532cd008049baace6527_0.png?Expires=1704844800&Signature=ONufU5bXQVmr1vxYJT4PPDww0dbXYSgze5aABc64DEDjIvg2Ihl7EVes8FEn046hGNnxC9f-5uOOH-ZEFtHy9n5os9srL9GfAKqNIC~7ITkTef1vT9~9ptN9dpfGhvC1gswiGt7jbnYE57iB89KOBK-9whJ~vYwGZb4cAcEynNfWWjeVcDRfjnRsVT2Pz-Wh95tbfTUcuYg3BA6KQtaNGAxfYkatgZLeS1EQ8WOwEO6mnFNNXb0pUQep1Mnnj9Sm0GyW-aTfXBIxDSO0P5ULVox0IBbIZgtqVMkDwupt7hp6dDAreFiQk8JN85kFzbP5i8DGjRtByHCiYQCf8oHC2g__&Key-Pair-Id=KNBS2THMRC385
    bigRunSchedules:
      nodes: []
    teamContestSchedules:
      nodes: []
  currentFest:
  currentPlayer:
    userIcon:
      url: https://cdn-image-e0d67c509fb203858ebcb2fe3f88c2aa.baas.nintendo.com/1/873635dd214b5768
  vsStages:
    nodes:
    - vsStageId: 1
      originalImage:
        url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/high_resolution/35f9ca08ccc2bf759774ab2cb886567c117b9287875ca92fb590c1294ddcdc1e_0.png?Expires=1704844800&Signature=U11yp7XSX~SukIgHjxiyQsNe0CgldyI2Pgbo0L2RbtzKHjSsCqWT-IotgfcnQw0yuA0xUyqNzDSuFaCpOCW5puKhT29wXSpAZAR9Eh1U5vEG~B-9OXx9yXOkbGHYwaqVDBzkrW3xfxQYjTUPYeShwpZDSDWH0guu6nDh5NKWkViecjbIcP~HMV~uXANTei8gJa1TocMTqSUVCgeY3O1DBz7ivCupj9kpPgWgiA-GgeIyBCYBActP0OQPtX6KU8Wu5tIC-EK84~hPoweNIOGO-U0o2TV~dcxxO1i6DJXVq0UWa44FUmwT~N8SxJIcjRnMt~xvlbvIykJUIx1nO0dknQ__&Key-Pair-Id=KNBS2THMRC385
      name: ユノハナ大渓谷
      stats:
        winRateAr:
        winRateLf:
        winRateGl:
        winRateCl:
        winRateTw: 0.5
      id: VnNTdGFnZS0x
    - vsStageId: 2
      originalImage:
        url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/high_resolution/898e1ae6c737a9d44552c7c81f9b710676492681525c514eadc68a6780aa52af_0.png?Expires=1704844800&Signature=RvSJNZC4OsMkSfzMpRt5NB~J4XmfXbP0ONskPLpjxPTf6BBZHH-Lppk1CywH26oGpvgduK8UbMKou9s4NhxKf4LcfJo~Kz9jvHnuDq7U9GNjGqLO3fCj3AhUJ0tku-TKaMxUvZoORpvACyfT0LFdjUPZ7wMq9pzo~oeNOAXHvvDulF~8E-eKRirlVAA3jGdqFvXWPq-6j9nL5nkvSVwYRt2mGiNClJlNIZmrOPgiUqK3T6x9DBZI7YQC1dMJL9rS0gMaIkxkfMG3EkYj0WsqI6I4hq2lbvd46-4cSfi0DXjzNcfBAuHUYcUarcP9I67N13TiRpNiIlwgCV8VCLf7Kg__&Key-Pair-Id=KNBS2THMRC385
      name: ゴンズイ地区
      stats:
        winRateAr:
        winRateLf:
        winRateGl:
        winRateCl:
        winRateTw: 0
      id: VnNTdGFnZS0y
    - vsStageId: 3
      originalImage:
        url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/high_resolution/8dc2f16d39c630bab40cead5b2485ca3559e829d0d3de0c2232c7a62fefb5fa9_0.png?Expires=1704844800&Signature=o50W4s50FWypBgu~J3v6snKFcvtU9uz0DP3g3G16VHgnCxsVrCjWTYgE9W1SLybgWqFeLTxwLiIhHnFCi5dKhCCRtAy4wLqHjb8yz8ZbDIAFhj9STv816o2vlo36KAZTRz1qmOFYRRqMmSADZXWI5NpWYWtPN5grN7QXwdVMGEUrMvDiUoBgwQ3qVkQeXFbTac6fyHO~lfXWYJA2jSUfNdFfjlMd2zOKINP2DbbwtM3lnwBHEa8I7Yd1b47-0aEdVU-Nxhy0CsK9gpMgMGqQ9~7fOfqZUL1H1hhDm5Gs3uGULSL0YXt1sBRFxT8bcDpE06~Di07kS2jhbEFu8x8mTg__&Key-Pair-Id=KNBS2THMRC385
      name: ヤガラ市場
      stats:
        winRateAr:
        winRateLf:
        winRateGl:
        winRateCl:
        winRateTw: 1
      id: VnNTdGFnZS0z
    - vsStageId: 4
      originalImage:
        url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/high_resolution/9b1c17b2075479d0397d2fb96efbc6fa3a28900712920e5fe1e9dfc59c6abc5c_0.png?Expires=1704844800&Signature=mBszzTRj6XoGFFMDOityD~~rQtboBXGQl0XgR1ipRHaEM8W7j8XXqqmAb2~v9mLosi2S9JAyStDeEYCPtq7bjfoMr8MVOB8HySlclQ0c~5nu47qAPnPpRW881jXTF8QkYZ5ASpE6KBvIqvxSZqw-Fun5fnOmH9RxAdWNtRk15kamyNuefXesrhRYsOctD1AocnS5CW3tzFx41pJaf58en7FyH9bikODvr3D-PoCsKfETK0JxW9UdLtO4uNeOubx4nk6rkjSFb~V8eQMs7b5~UGTt~UAkuZFu4IhDN5jvfoHHoZV31tolSEa1flc13MMf~ZUv-bFH74zCZMZk2k5Cug__&Key-Pair-Id=KNBS2THMRC385
      name: マテガイ放水路
      stats:
        winRateAr:
        winRateLf:
        winRateGl:
        winRateCl:
        winRateTw: 0
      id: VnNTdGFnZS00
    - vsStageId: 5
      originalImage:
        url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/high_resolution/f14c2a64e49d243679fc0884af91e1a07dc65600f9b90aefe92d7790dcffb191_0.png?Expires=1704844800&Signature=V5billQmnXQcPAjTTYMXS7owsvnFgsGdenPUG~bhIrYq-t~16TH1~1O-7kgdzwUZ3oW0wC06VkCE~RmeZZfLnQMNYvFAuLI9JHv0yuB-dcThsVn5r0tr8loVBj6yG2m3vJHDBz28p4EfiUilPv7AMGlV3Cy0kENEl-a8dKeGZWi0w9RJRuXRqSeoB3jDyOBdA27nJgg46ETCys4oHS~TvpX879NreiChn35MJPwsDXwMXWmifaiunhuKQ~z16TerZxFSFlZv5xlmK7MhAbjjG1e~00lzFzP-5d5MZeYpSkwS9aSa09ORoB3FVCQGhkJuDRKFYxu2nIRcZBZXUtws8g__&Key-Pair-Id=KNBS2THMRC385
      name: ナンプラー遺跡
      stats:
      id: VnNTdGFnZS01
    - vsStageId: 6
      originalImage:
        url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/high_resolution/de1f212e9ff0648f36cd3b8e0917ef36b3bd51445159297dcb948f34a09f2f05_0.png?Expires=1704844800&Signature=XVPqrBWryE1PN6yo7pdA2GOEyGtKdmYulIC6Kh3ey7tiqKvmI44fQyGV6pjRq7s89Th4x7p278RuochaBSKwNN~AqtSt1t7pGK4kqBbrwCB7jjYkudzEO7Rz5-zOvfRl3eHzBuYMFo19Rx3jl1niNyVMkU6kZ6W0ISDyAOL9uBODTRXBoHqAOT8wZYYR~5ZGN7Ml4mMudhgifRzkqUHiMlmUYQx7MJyr88KfM2C4kYxXBszGkruJ7oucyqnUy57Hp8beishs8krABeRcbe7gbLO6Q1HF7LQJWi1kTW4amwXPAwMLaZqLbwg0Lq~z7dNT6Li5hR7UCb-cx7NSTmrdNQ__&Key-Pair-Id=KNBS2THMRC385
      name: ナメロウ金属
      stats:
      id: VnNTdGFnZS02
    - vsStageId: 7
      originalImage:
        url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/high_resolution/cd84d711b47a424334569ac20f33f8e0ab6a652dc07854dcd36508a0081e9034_0.png?Expires=1704844800&Signature=e5JrfhONEcIW5U-ypjlRoKjXbiNg9etS8w0DHCCL0RLX5LjdJN~4k2chrMz4iZvwwnrbkN7SqnQJi-bEJBwlh1gt8Vl~AhIGFzdnCsin9F5MABn8K6sdSHj1qIXUIjJ2IdhfqIl5azy0SCEuypbSmS2aYN2Fj2bjp9Rv84hz3PuJwTQGGO4bJ8wXKA0P6HTWuoJ7NqNLEHPeGjVwd2TTHwzm5Gs6XFjgLV4moGzCI~LLiiugmsv6jmiPor7D~C9aieZwCdXq-ZCR8BIst0VwNvpEkHZXWSjlw5sFRAnz6b9CdOIOSCju8hwy10cAfJGn~jmiUyDc8TP6Jz6nem5iNA__&Key-Pair-Id=KNBS2THMRC385
      name: クサヤ温泉
      stats:
      id: VnNTdGFnZS03
    - vsStageId: 8
      originalImage:
        url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/high_resolution/f70e9f5af477a39ccfab631bfb81c9e2cedb4cd0947fe260847c214a6d23695f_0.png?Expires=1704844800&Signature=VDTR8sL3rbHssYMprqxwFrr12qwozZoFgXpo7Bd~qcAs9dDPY~OBq4w2NYZKfWBQf0tcEA6oxY7sJp-v9sUnesfrxIWj0v6yEViluYvp~MBzYwvlAlvqyMyHwPrZlFwmT4kb6D8wDaC7PzjCiGpzGoisVov9S5BTKvCnoneEcd14v2Xc~4zHKX44Vadab~shyPlel5TaYpSXqOihrGbH6fxP0Hy377WNImYdAs2WOQm7i4fyOnq2yCREkRRq~Iqaimjmn9A3-cM4A7wn8vct1YPueHgfgFlBo2Fe77c6FNCWd9dT9b3iGxcaG24TOzwcKW-5UfL9VKGY5F~TaOsa~g__&Key-Pair-Id=KNBS2THMRC385
      name: タラポートショッピングパーク
      stats:
      id: VnNTdGFnZS04
    - vsStageId: 9
      originalImage:
        url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/high_resolution/488017f3ce712fca9fb37d61fe306343054449bb2d2bb1751d95f54a98564cae_0.png?Expires=1704844800&Signature=WJAYjw49nAhFbB15DYgYg1p9EDP2rZLCiEUI29KqwG8TRzEv3kiFVqW2Zd9LYPpXrmEm~3gQXjLT7N1m3VHP5Y0jx3P6g68ILS8NdwEH-6y8DhhNXwokKUR3N~-gJ~B5ZmZeYVljr4IPDcdtdIDzliIqKpRFVhge4J2-kwkVWBuK1~PW5rMS1GdWeLSOAwfDVYxy-Osw1SOKi3LAR2kyUYqb-pfa55GA7JYV9z8VifO4iwMGjpZVLvbQp9wd6FOg3VFW07o~y9T-bobngY54G2X9iH3J~hLVff5WPOF5AMRneG~I2ZqdSBWdGMmr~4N24TYCP5rLWifDYIG4jBaEiQ__&Key-Pair-Id=KNBS2THMRC385
      name: ヒラメが丘団地
      stats:
      id: VnNTdGFnZS05
    - vsStageId: 10
      originalImage:
        url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/high_resolution/1db8ab338b64b464df50e7f9e270e59423ff8caac6f09679a24f1b7acf3a82f3_0.png?Expires=1704844800&Signature=uCmNUCSzJz4b5QM013MchZxRw3ueSIEXCdBijiSVNSIR5ill4w8XNoHtqD7jMMEJfj3NydYy8DxICnxFmHiB5xEG8-hTe8lTrQfsYbH2dDyNCVLwzkIzpEAHMNPa5WSankuOd0h8pQzJfQSrgdN61CYr4ohdEzo-ootfqu-LglbbHraMfKFmCEbuTUGbhmrUW9yjreiYzHY0MJ5XGqXoGJNGlpG-~VfVYN95~mqAVJaAMWML9f76Uq6c2~1nMumqib~2XTf8-CRgeffEd8UnUIob4KrHIJpLpTYZYFxT65IdhTi1I3NgVmwmSYeX~1gpm~6Y5XMh6O1eoP3GvYwHqw__&Key-Pair-Id=KNBS2THMRC385
      name: マサバ海峡大橋
      stats:
        winRateAr:
        winRateLf:
        winRateGl:
        winRateCl:
        winRateTw: 0
      id: VnNTdGFnZS0xMA==
    - vsStageId: 11
      originalImage:
        url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/high_resolution/b9d8cfa186d197a27e075600a107c99d9e21646d116730f0843e0fff0aaba7dd_0.png?Expires=1704844800&Signature=NdlhRAnxj4dlYlUkPLRpJejcR3yTVdYP1ewf3wUb~wwVrQy5q8vYarOb4x8if5K-~qaroyjksum07VMf-HolHlNz6bWNi1qH0IHnQT4hkUHIE5PLr2uVerwlvPrI5t4A2Yn77Lk4krIrlgFVh7jJhuvppfA3oPnZdFrommFncQU5BDLoEe-BO8mlUe4nRHujmUg4xo-fHiSzvehTtecqFt7UXdBPPGRv4ObHz1f-SPcWwZ7xcPv1MBzskUWks27OJBkDl6s7rGf0Fzti2rhQVSXqg2kuvr5KUxk7rhtrUlMbJOfIog3Q8F1IqJaJigftqJHC4N-gRgzW76Gd6sgCLw__&Key-Pair-Id=KNBS2THMRC385
      name: キンメダイ美術館
      stats:
      id: VnNTdGFnZS0xMQ==
    - vsStageId: 12
      originalImage:
        url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/high_resolution/8273118c1ffe1bf6fe031c7d8c9795dab52632c9b76e8e9f01f644ac5ae0ccc0_0.png?Expires=1704844800&Signature=SfiUbzwN9OaRV0zDouumepjSkco7rl8RTzF5Yhgv90uu6bmm7YSvp69A-SGiFO~zLKvgTDEhR1g7ghwnUeWm4GZOb68T2HjMX49kYY4k3vnpyHluxW~J7UUpG-1-zBA1muvWSRQ3Vyf5~U4fGWRCcG3AMKhHZIjSrnzguufaQ2u-ES5hvVYPgjjKqRsM~HRkoUAh9sPvRUYMuOWjrbgWK8rlNPBLqlAX4Q1ufLOxLp2oMXbSmSMiq6noGks65aqVVeJSvq-9GGlOqDjaHLcZNEZ-BX9FyDPRL6k~UIjnIhVxe-zwBzg8nZo44kiqUQ0WIBlndgenfGlwXipEJtxj5g__&Key-Pair-Id=KNBS2THMRC385
      name: マヒマヒリゾート＆スパ
      stats:
        winRateAr:
        winRateLf:
        winRateGl:
        winRateCl:
        winRateTw: 1
      id: VnNTdGFnZS0xMg==
    - vsStageId: 13
      originalImage:
        url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/high_resolution/40aba8b36a9439e2d670fde5b3478819ea8a94f9e503b9d783248a5716786f35_0.png?Expires=1704844800&Signature=YqfVGPuxjF--0LGgPWaUYc8ShKXtIfjmOVZTM4kwSzvrK7321TwotGm2y3QyOgPrBlL9F2wgn0fSZdA6q2~FN815QTbN-WOsvATayU936fnUtoIP0UMKSFZWc0J3MSTYlvA2wY4RdSAFDmJcr-v4GK8k2ZlGCXYvjYl6ZE~k5~xB74ZeyEDO0kRhGEwFvwLkjS8RzbOctLr7R0mTQ0b5pfFk3ckvDWn-5kIQYT~IGGvEB-vGaLGA-JDNOXUl0JXA8jv8VGdCSFCqH1pa2FeB~oZvUJKzXAXpzAIRHlCbcsbsL0dDwyRDIgiwJml2zUqxFcHxpkgUaVOEV3MF1ORQ3A__&Key-Pair-Id=KNBS2THMRC385
      name: 海女美術大学
      stats:
      id: VnNTdGFnZS0xMw==
    - vsStageId: 14
      originalImage:
        url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/high_resolution/48684c69d5c5a4ffaf16b712a4895545a8d01196115d514fc878ce99863bb3e9_0.png?Expires=1704844800&Signature=ta9AiZIueWUBBUtckB3K22fvwooz5LRc5lcx76pF~Ohhb2eTTxh-TwthvmIkArrZJvRrQ~CdSR64mrX7lw8ckKO2SEaa4lxO4a~fd5vhHpQRhce4pt6356VubQv5QuSjfEVkuCYQ5UnafhVI5KKsN5Y8kYQak46tYDL4g1CYSJrv7g4HUhVYXPFv41mT6Jy62Gkanec8u1nPSbLIIn3QRreaKdjgw1so1Rs3vvy9P7ULbt-t3lJFWCmmGqeM99rIjxj8PAuhxOd8U~fzNq~~-ydIJ017aT4mDJEkIYxJpHVfRrqatqG1OXCxyU9VYPrcnkAA97a8oN27-R~a1Q7Kyw__&Key-Pair-Id=KNBS2THMRC385
      name: チョウザメ造船
      stats:
      id: VnNTdGFnZS0xNA==
    - vsStageId: 15
      originalImage:
        url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/high_resolution/a8ba96c3dbd015b7bc6ea4fa067245c4e9aee62b6696cb41e02d35139dd21fe7_0.png?Expires=1704844800&Signature=oHRfJZrZb7YuhtxFNcPNqotzrdx9y3rNLKGj9-0Oe~J5-KofB8bMW8Qj4xAmvbnf20SKlUFioiv4MEfny4xgRMEOrEoIrQLtuJUl0g6Qx-6QW4Sj5eQZOTw9Ma4Bc5~XrMcLOMZ-IEeaFxDtf~dvZsZmPPoEkwHH9HovKf3qjWOA20hf4Ttt3gTFljtIpvU28FXSUL9KghArWs0Fxsa7iAEZCG~XkEKNcLbWbnW-IOTvkvIvGUxcxdhjMFa5NWQWBXmQiQBl8mucOV4vilXKE0S-rPGjrHmOJzPNnqVdcQRv13MR-yN-AWM6SySCDuYtHDvl3BxJn9q7iln6i8zE7g__&Key-Pair-Id=KNBS2THMRC385
      name: ザトウマーケット
      stats:
        winRateAr:
        winRateLf:
        winRateGl:
        winRateCl:
        winRateTw: 0.75
      id: VnNTdGFnZS0xNQ==
    - vsStageId: 16
      originalImage:
        url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/high_resolution/61ea801fa4ed32360dcaf83986222ded46a72dbf56194acc6d0cf4659a92ba85_0.png?Expires=1704844800&Signature=fyJmGUcjtNGIb1lZek6joHHmdBDsfYvYF4YvZBbTZa6NbNQgKFoqAb6pTUndG7Ei~As8MZiF9loaQHLHX8hGm0fKVglF~e-mjcnmHXr4jOn5Wej7~Kj-kG2Qe7sKnk3LHHs46vSZtu~jQ3rKLpvYHrVeSPxSmn17ic8e5kn6dxXijzppjvdqSLPWFexZ60JxOX6D07FyTdsFAcUb8jBgtkc6s8xmvXStMnV1cO-AhLMC4J6xmUrcdidjVJTmdTJdYSs86i998RWh48KNQgHqxe6ayspvfVMg4ITRsHb78g2gGJaTcojtiwbqRE33r5WwZ-0dnj~BwtO2lSeTbLAUtg__&Key-Pair-Id=KNBS2THMRC385
      name: スメーシーワールド
      stats:
        winRateAr:
        winRateLf:
        winRateGl:
        winRateCl:
        winRateTw: 0
      id: VnNTdGFnZS0xNg==
    - vsStageId: 17
      originalImage:
        url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/high_resolution/7b3cf118bd9f45d141cd6db0ee75b06e697fa83945c7fe1e6f8483de6a591f5f_0.png?Expires=1704844800&Signature=tSHtS1n6n22sFjc0k3DFIyBsCa2mTjD2tk3MGFCnJLzAN00VqPqMMCTEHumA6OvzwQfA-3iJXjru90dfkdbkpLPcj8ztgh2cBwLnBTLXOt79Cs0qPsC~6GZLgjIdc9rKfYb2jVXXPKxHtDFcnZdfduKoueApiE-x8GOy7WdmE-lAyNaXZwsCaWQluk0SDLVCeKRKNNXUVax403taS7EECaXDrEeG54Fy-v9fV600IHbL1dMtPLlmCbasSwg78MtnNwnOnNroqUa1g-jw1PUT2yB-ByTbWYTyHAU~YhjsWnEXDPfh5DIgszQclUv7RA75Y1ylN-YF~pjpj9G2k7o3bg__&Key-Pair-Id=KNBS2THMRC385
      name: コンブトラック
      stats:
      id: VnNTdGFnZS0xNw==
    - vsStageId: 18
      originalImage:
        url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/icon/high_resolution/0b7fd997781e03eb9d5bf1875ed070f698afc654f4fe929452c65aa26c0a35fd_0.png?Expires=1704844800&Signature=HJIqUdnkfsTPI9KisvYr8rJsZamy3fIKdy15IAPmEixQejf-0eXuiiVFAHmygB~g4NGw8J7y3PPiyH9E0zvTgnpcFKBvl15FcaTXiHIdVNMMIzrSnvtJP7l5bPM-cPm0NZzj8D191CFmbJ6vDxTI0ghBArLM3kcms41cbk3XaWg1waq51XtXy2J0QEmDldk2S9jjdS~Y3WFR04tdbfHO4x9zFvkYh0HFcQxxSgW2zu7c1sKaNC737Z0Cchs8b1AhqQBUmibxC5ZBRxj-Ryd9GvJhAG9PZhDvLmqx4VRrVweQiTCHsnS6fMBxAxbNyLpRdGezRC4JFl-40V1Yyt9qyA__&Key-Pair-Id=KNBS2THMRC385
      name: マンタマリア号
      stats:
      id: VnNTdGFnZS0xOA==
```
