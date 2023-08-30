## CoopHistoryQuery

リザルト一覧からスケジュールとそのスケジュールのリザルトのIDを返します.

リザルトのIDはデコードされていますが`.rawValue`で元のBase64でエンコードされた値が取得できます.

```json
{
   "start_time":"2023-08-26T00:00:00.000Z",
   "end_time":"2023-08-27T16:00:00.000Z",
   "mode":"REGULAR",
   "rule":"REGULAR",
   "history_details":{
      "nodes":[
         {
            "id":{
               "id":"CoopHistoryDetail",
               "prefix":"u",
               "npln_user_id":"a7grz65rxkvhfsbwmxmm",
               "start_time":"2023-08-27T01:56:30.000Z",
               "uuid":"7959dbdb-fe1f-4576-bc3e-0f4dfa0b7b0e"
            }
         }
      ]
   }
}
```

### 生データ

```yaml
---
data:
  coopResult:
    historyGroupsOnlyFirst:
      nodes:
      - historyDetails:
          nodes:
          - __typename: CoopHistoryDetail
            id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDgyN1QxMDU2MzBfNzk1OWRiZGItZmUxZi00NTc2LWJjM2UtMGY0ZGZhMGI3YjBl
    regularAverageClearWave: 3
    regularGrade:
      name: でんせつ
      id: Q29vcEdyYWRlLTg=
    regularGradePoint: 220
    monthlyGear:
      __typename: ClothingGear
      name: ハイパーミライスーツ
      image:
        url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/gear_img/62649c9d0a4a56df224dc319927a15e9562cb32243afc0e12926f49deea51085_0.png?Expires=1704844800&Signature=s7ymixfdP6fvgL3eT4Zl6c9LvGOuiKU09SXfKJeMeOR-F4pJYJy8CKCnuSiQmTF63klvldbNAfMCfuAEgMH~fTngQvzGHQgH5G96LV1jKs-ek0ovRt~mDPssM0fAH~ngE4ucEIdsNGcwOCq3tMtI6lQUOXfyQz4fwi2neNFc3bIjHIvlbSFqEPFxsxadTQFEnAiCOWSE7tSxBROcbFXwxSXoppDJOEXpbjNupCEazBohLL1bpqh2amdME5sXI3daWtkFGhPX243hamQBeDEtsrPSHrDJUMjkJNVBOYdhWqs-rcrT5CsH8QzKewirwB7y64n-z6VrTfdo6VUHjqUvag__&Key-Pair-Id=KNBS2THMRC385
    scale:
      gold: 60
      silver: 305
      bronze: 1553
    pointCard:
      defeatBossCount: 142
      deliverCount: 3486710
      goldenDeliverCount: 104311
      playCount: 944
      rescueCount: 1302
      regularPoint: 3735
      totalPoint: 359660
      limitedPoint:
    historyGroups:
      nodes:
      - startTime: '2023-08-26T00:00:00Z'
        endTime: '2023-08-27T16:00:00Z'
        mode: REGULAR
        playCount: 9
        rule: REGULAR
        highestResult:
          grade:
            name: でんせつ
            id: Q29vcEdyYWRlLTg=
          gradePoint: 220
          jobScore: 149
          trophy:
        historyDetails:
          nodes:
          - id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDgyN1QxMDU2MzBfNzk1OWRiZGItZmUxZi00NTc2LWJjM2UtMGY0ZGZhMGI3YjBl
            weapons:
            - name: ヒッセン
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/f3dbd98d5b0e89f7be7eff25a5c63a06045fe64d8ffd5886e79c855e16791563_0.png?Expires=1704844800&Signature=weorz8KJVwdu4VWi1XduPY4o2NWeZUT1MXpjzYaDYzIzROnrZyppR0ahTkxt5vY2Yb93g6VrQooD8fB69~SXz3X4uKalT6O5DrXQNGeVwbxx9C~KpKl9n6csG31TjPdwcfoJWcK8oCpLzMn8ZoMwTL3KQcKg0YYYwG62jkhrJwBfoYgrRrzFDAVsxM1QnFNL7xXQoEnMbu2Wl8uGhdqXfKmQufUyd9e~EA8ofwRoKHYNrKvBcWEkOSDRaLD2w-rmzkoYD1EQdNt1VWrNeGn6NBrgOu8YkGog2JPs~cxB4nJtCL2tY1je9RfSkxO7xvgBPQBKoj-80ynlPIygSVrbWQ__&Key-Pair-Id=KNBS2THMRC385
            - name: ジムワイパー
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/ddd2a4258a70cdaf8a1dbc0ded024db497445d71f950fe7645fa8c69a178a082_0.png?Expires=1704844800&Signature=CuvPlq26Vix8my-5ESc-8xMtghoQNuGGG9eJhFQQbaWcegek-gSbp6SzLPtiWE0uGmcl6qvE5XzDLrPRHwwfTDGWxw8vuMuRXKhBeOhu6Qp1lMMg1fpL2N4NOq~pPVPpEuNVrJ05hD7egwOPDj4AoB9BbtDZXeFomI4UqVSbn~2RqRb0V4NrcRv4oQmEF8sCa5G3bvmJ3VVRdzfQWaBpIf6eLYMtsGTd2vUc-aveAJfN373fiUKwdhtcCYsjggqbPjPBtfopjFKrW7TEmfqmZysrfzvqA75LzmwMS3RKkG3etutWJ60CI0m-zpinrWBQ6Q5F0~BiOEts9LRyVTP0EQ__&Key-Pair-Id=KNBS2THMRC385
            - name: H3リールガン
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/418d75d9ca0304922f06eff539c511238b143ef8331969e20d54a9560df57d5a_0.png?Expires=1704844800&Signature=bdxOVPY6rdUWF1mCupqsa9GGPBBQGCSGKz6JNDAML-TMyORy4DL8T4-R1bfLQ-ICXZIQfadsK7damiJE50P9StN76E6HDV0gVNB7SDJq5wzo3-zMI133mrAqk~4gc6uEjyZHXItqUnA-~vT9XXl7A3ztLt3l-9saZZpDEipesZEOFD8CluYWgsQRiAGU6UE-xGqDj9diDxJYOJaVzdMF7VPFLmFdew54Se8LnrWp6nTOHDQjBKxO3o4JZFe-r8xknf78F2oBxPf2R7hj7m55Asp2-HgfTIEn0PrbwRe3t759SUxewiSymXA82pOy7tL~IYfaiwQeFapJwB4UDT~Gdg__&Key-Pair-Id=KNBS2THMRC385
            - name: R-PEN/5H
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/082489b182fbbabddde40831dac5867d6acc4778b6a38d8f5c8d445455d638eb_0.png?Expires=1704844800&Signature=A6d90ZGjaM~jK1kOdtwwiAqX79b6vAhji~LA7tQ1DTF30iludsig6hM3sZaFhHT~jSZkUBlO3shoqE-V9kZ2dJ9EwLSeDnrBukWNATbLNa~raw2kMiANM-kuA-HukRzAW1z0NApJXa1SgzyDmVaB~yRqnGcAt2aU-lvcfK50qmVEgQxzT8otnK0wDo9t99niK~3pyUFAFRJE-YQeJTUseWiDQpQ9vO0aPoejMCDorfy~4DSCUkgeSjiQ375nCqxO8OgbTWDY5K-MOy~FnfaShanS0QWqXFExcxsW81QIQcn54zZSSZAFOOtlg2D154hQLF-evHLYhoh1Ujuyge06zw__&Key-Pair-Id=KNBS2THMRC385
            nextHistoryDetail:
            previousHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDgyN1QxMDQ5MjlfNzk1OWRiZGItZmUxZi00NTc2LWJjM2UtMGY0ZGZhMGI3YjBl
            resultWave: 0
            coopStage:
              name: すじこジャンクション跡
              id: Q29vcFN0YWdlLTg=
            afterGrade:
              name: でんせつ
              id: Q29vcEdyYWRlLTg=
            afterGradePoint: 220
            gradePointDiff: UP
            bossResult:
            myResult:
              deliverCount: 1393
            memberResults:
            - deliverCount: 1949
            - deliverCount: 312
            - deliverCount: 857
            waveResults:
            - teamDeliverCount: 54
            - teamDeliverCount: 46
            - teamDeliverCount: 33
          - id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDgyN1QxMDQ5MjlfNzk1OWRiZGItZmUxZi00NTc2LWJjM2UtMGY0ZGZhMGI3YjBl
            weapons:
            - name: ヒッセン
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/f3dbd98d5b0e89f7be7eff25a5c63a06045fe64d8ffd5886e79c855e16791563_0.png?Expires=1704844800&Signature=weorz8KJVwdu4VWi1XduPY4o2NWeZUT1MXpjzYaDYzIzROnrZyppR0ahTkxt5vY2Yb93g6VrQooD8fB69~SXz3X4uKalT6O5DrXQNGeVwbxx9C~KpKl9n6csG31TjPdwcfoJWcK8oCpLzMn8ZoMwTL3KQcKg0YYYwG62jkhrJwBfoYgrRrzFDAVsxM1QnFNL7xXQoEnMbu2Wl8uGhdqXfKmQufUyd9e~EA8ofwRoKHYNrKvBcWEkOSDRaLD2w-rmzkoYD1EQdNt1VWrNeGn6NBrgOu8YkGog2JPs~cxB4nJtCL2tY1je9RfSkxO7xvgBPQBKoj-80ynlPIygSVrbWQ__&Key-Pair-Id=KNBS2THMRC385
            - name: ジムワイパー
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/ddd2a4258a70cdaf8a1dbc0ded024db497445d71f950fe7645fa8c69a178a082_0.png?Expires=1704844800&Signature=CuvPlq26Vix8my-5ESc-8xMtghoQNuGGG9eJhFQQbaWcegek-gSbp6SzLPtiWE0uGmcl6qvE5XzDLrPRHwwfTDGWxw8vuMuRXKhBeOhu6Qp1lMMg1fpL2N4NOq~pPVPpEuNVrJ05hD7egwOPDj4AoB9BbtDZXeFomI4UqVSbn~2RqRb0V4NrcRv4oQmEF8sCa5G3bvmJ3VVRdzfQWaBpIf6eLYMtsGTd2vUc-aveAJfN373fiUKwdhtcCYsjggqbPjPBtfopjFKrW7TEmfqmZysrfzvqA75LzmwMS3RKkG3etutWJ60CI0m-zpinrWBQ6Q5F0~BiOEts9LRyVTP0EQ__&Key-Pair-Id=KNBS2THMRC385
            - name: H3リールガン
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/418d75d9ca0304922f06eff539c511238b143ef8331969e20d54a9560df57d5a_0.png?Expires=1704844800&Signature=bdxOVPY6rdUWF1mCupqsa9GGPBBQGCSGKz6JNDAML-TMyORy4DL8T4-R1bfLQ-ICXZIQfadsK7damiJE50P9StN76E6HDV0gVNB7SDJq5wzo3-zMI133mrAqk~4gc6uEjyZHXItqUnA-~vT9XXl7A3ztLt3l-9saZZpDEipesZEOFD8CluYWgsQRiAGU6UE-xGqDj9diDxJYOJaVzdMF7VPFLmFdew54Se8LnrWp6nTOHDQjBKxO3o4JZFe-r8xknf78F2oBxPf2R7hj7m55Asp2-HgfTIEn0PrbwRe3t759SUxewiSymXA82pOy7tL~IYfaiwQeFapJwB4UDT~Gdg__&Key-Pair-Id=KNBS2THMRC385
            - name: R-PEN/5H
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/082489b182fbbabddde40831dac5867d6acc4778b6a38d8f5c8d445455d638eb_0.png?Expires=1704844800&Signature=A6d90ZGjaM~jK1kOdtwwiAqX79b6vAhji~LA7tQ1DTF30iludsig6hM3sZaFhHT~jSZkUBlO3shoqE-V9kZ2dJ9EwLSeDnrBukWNATbLNa~raw2kMiANM-kuA-HukRzAW1z0NApJXa1SgzyDmVaB~yRqnGcAt2aU-lvcfK50qmVEgQxzT8otnK0wDo9t99niK~3pyUFAFRJE-YQeJTUseWiDQpQ9vO0aPoejMCDorfy~4DSCUkgeSjiQ375nCqxO8OgbTWDY5K-MOy~FnfaShanS0QWqXFExcxsW81QIQcn54zZSSZAFOOtlg2D154hQLF-evHLYhoh1Ujuyge06zw__&Key-Pair-Id=KNBS2THMRC385
            nextHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDgyN1QxMDU2MzBfNzk1OWRiZGItZmUxZi00NTc2LWJjM2UtMGY0ZGZhMGI3YjBl
            previousHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDgyN1QxMDQyMjFfNzk1OWRiZGItZmUxZi00NTc2LWJjM2UtMGY0ZGZhMGI3YjBl
            resultWave: 0
            coopStage:
              name: すじこジャンクション跡
              id: Q29vcFN0YWdlLTg=
            afterGrade:
              name: でんせつ
              id: Q29vcEdyYWRlLTg=
            afterGradePoint: 200
            gradePointDiff: UP
            bossResult:
            myResult:
              deliverCount: 964
            memberResults:
            - deliverCount: 1268
            - deliverCount: 761
            - deliverCount: 944
            waveResults:
            - teamDeliverCount: 36
            - teamDeliverCount: 51
            - teamDeliverCount: 38
          - id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDgyN1QxMDQyMjFfNzk1OWRiZGItZmUxZi00NTc2LWJjM2UtMGY0ZGZhMGI3YjBl
            weapons:
            - name: ヒッセン
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/f3dbd98d5b0e89f7be7eff25a5c63a06045fe64d8ffd5886e79c855e16791563_0.png?Expires=1704844800&Signature=weorz8KJVwdu4VWi1XduPY4o2NWeZUT1MXpjzYaDYzIzROnrZyppR0ahTkxt5vY2Yb93g6VrQooD8fB69~SXz3X4uKalT6O5DrXQNGeVwbxx9C~KpKl9n6csG31TjPdwcfoJWcK8oCpLzMn8ZoMwTL3KQcKg0YYYwG62jkhrJwBfoYgrRrzFDAVsxM1QnFNL7xXQoEnMbu2Wl8uGhdqXfKmQufUyd9e~EA8ofwRoKHYNrKvBcWEkOSDRaLD2w-rmzkoYD1EQdNt1VWrNeGn6NBrgOu8YkGog2JPs~cxB4nJtCL2tY1je9RfSkxO7xvgBPQBKoj-80ynlPIygSVrbWQ__&Key-Pair-Id=KNBS2THMRC385
            - name: ジムワイパー
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/ddd2a4258a70cdaf8a1dbc0ded024db497445d71f950fe7645fa8c69a178a082_0.png?Expires=1704844800&Signature=CuvPlq26Vix8my-5ESc-8xMtghoQNuGGG9eJhFQQbaWcegek-gSbp6SzLPtiWE0uGmcl6qvE5XzDLrPRHwwfTDGWxw8vuMuRXKhBeOhu6Qp1lMMg1fpL2N4NOq~pPVPpEuNVrJ05hD7egwOPDj4AoB9BbtDZXeFomI4UqVSbn~2RqRb0V4NrcRv4oQmEF8sCa5G3bvmJ3VVRdzfQWaBpIf6eLYMtsGTd2vUc-aveAJfN373fiUKwdhtcCYsjggqbPjPBtfopjFKrW7TEmfqmZysrfzvqA75LzmwMS3RKkG3etutWJ60CI0m-zpinrWBQ6Q5F0~BiOEts9LRyVTP0EQ__&Key-Pair-Id=KNBS2THMRC385
            - name: H3リールガン
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/418d75d9ca0304922f06eff539c511238b143ef8331969e20d54a9560df57d5a_0.png?Expires=1704844800&Signature=bdxOVPY6rdUWF1mCupqsa9GGPBBQGCSGKz6JNDAML-TMyORy4DL8T4-R1bfLQ-ICXZIQfadsK7damiJE50P9StN76E6HDV0gVNB7SDJq5wzo3-zMI133mrAqk~4gc6uEjyZHXItqUnA-~vT9XXl7A3ztLt3l-9saZZpDEipesZEOFD8CluYWgsQRiAGU6UE-xGqDj9diDxJYOJaVzdMF7VPFLmFdew54Se8LnrWp6nTOHDQjBKxO3o4JZFe-r8xknf78F2oBxPf2R7hj7m55Asp2-HgfTIEn0PrbwRe3t759SUxewiSymXA82pOy7tL~IYfaiwQeFapJwB4UDT~Gdg__&Key-Pair-Id=KNBS2THMRC385
            - name: R-PEN/5H
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/082489b182fbbabddde40831dac5867d6acc4778b6a38d8f5c8d445455d638eb_0.png?Expires=1704844800&Signature=A6d90ZGjaM~jK1kOdtwwiAqX79b6vAhji~LA7tQ1DTF30iludsig6hM3sZaFhHT~jSZkUBlO3shoqE-V9kZ2dJ9EwLSeDnrBukWNATbLNa~raw2kMiANM-kuA-HukRzAW1z0NApJXa1SgzyDmVaB~yRqnGcAt2aU-lvcfK50qmVEgQxzT8otnK0wDo9t99niK~3pyUFAFRJE-YQeJTUseWiDQpQ9vO0aPoejMCDorfy~4DSCUkgeSjiQ375nCqxO8OgbTWDY5K-MOy~FnfaShanS0QWqXFExcxsW81QIQcn54zZSSZAFOOtlg2D154hQLF-evHLYhoh1Ujuyge06zw__&Key-Pair-Id=KNBS2THMRC385
            nextHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDgyN1QxMDQ5MjlfNzk1OWRiZGItZmUxZi00NTc2LWJjM2UtMGY0ZGZhMGI3YjBl
            previousHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDgyN1QxMDM0NDdfYzgzNTVhMmQtZDNhNy00OTc2LWJhYzAtYmRiNDgzZmMyYzkx
            resultWave: 0
            coopStage:
              name: すじこジャンクション跡
              id: Q29vcFN0YWdlLTg=
            afterGrade:
              name: でんせつ
              id: Q29vcEdyYWRlLTg=
            afterGradePoint: 180
            gradePointDiff: UP
            bossResult:
            myResult:
              deliverCount: 944
            memberResults:
            - deliverCount: 934
            - deliverCount: 656
            - deliverCount: 870
            waveResults:
            - teamDeliverCount: 32
            - teamDeliverCount: 34
            - teamDeliverCount: 46
          - id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDgyN1QxMDM0NDdfYzgzNTVhMmQtZDNhNy00OTc2LWJhYzAtYmRiNDgzZmMyYzkx
            weapons:
            - name: ヒッセン
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/f3dbd98d5b0e89f7be7eff25a5c63a06045fe64d8ffd5886e79c855e16791563_0.png?Expires=1704844800&Signature=weorz8KJVwdu4VWi1XduPY4o2NWeZUT1MXpjzYaDYzIzROnrZyppR0ahTkxt5vY2Yb93g6VrQooD8fB69~SXz3X4uKalT6O5DrXQNGeVwbxx9C~KpKl9n6csG31TjPdwcfoJWcK8oCpLzMn8ZoMwTL3KQcKg0YYYwG62jkhrJwBfoYgrRrzFDAVsxM1QnFNL7xXQoEnMbu2Wl8uGhdqXfKmQufUyd9e~EA8ofwRoKHYNrKvBcWEkOSDRaLD2w-rmzkoYD1EQdNt1VWrNeGn6NBrgOu8YkGog2JPs~cxB4nJtCL2tY1je9RfSkxO7xvgBPQBKoj-80ynlPIygSVrbWQ__&Key-Pair-Id=KNBS2THMRC385
            - name: ジムワイパー
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/ddd2a4258a70cdaf8a1dbc0ded024db497445d71f950fe7645fa8c69a178a082_0.png?Expires=1704844800&Signature=CuvPlq26Vix8my-5ESc-8xMtghoQNuGGG9eJhFQQbaWcegek-gSbp6SzLPtiWE0uGmcl6qvE5XzDLrPRHwwfTDGWxw8vuMuRXKhBeOhu6Qp1lMMg1fpL2N4NOq~pPVPpEuNVrJ05hD7egwOPDj4AoB9BbtDZXeFomI4UqVSbn~2RqRb0V4NrcRv4oQmEF8sCa5G3bvmJ3VVRdzfQWaBpIf6eLYMtsGTd2vUc-aveAJfN373fiUKwdhtcCYsjggqbPjPBtfopjFKrW7TEmfqmZysrfzvqA75LzmwMS3RKkG3etutWJ60CI0m-zpinrWBQ6Q5F0~BiOEts9LRyVTP0EQ__&Key-Pair-Id=KNBS2THMRC385
            - name: H3リールガン
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/418d75d9ca0304922f06eff539c511238b143ef8331969e20d54a9560df57d5a_0.png?Expires=1704844800&Signature=bdxOVPY6rdUWF1mCupqsa9GGPBBQGCSGKz6JNDAML-TMyORy4DL8T4-R1bfLQ-ICXZIQfadsK7damiJE50P9StN76E6HDV0gVNB7SDJq5wzo3-zMI133mrAqk~4gc6uEjyZHXItqUnA-~vT9XXl7A3ztLt3l-9saZZpDEipesZEOFD8CluYWgsQRiAGU6UE-xGqDj9diDxJYOJaVzdMF7VPFLmFdew54Se8LnrWp6nTOHDQjBKxO3o4JZFe-r8xknf78F2oBxPf2R7hj7m55Asp2-HgfTIEn0PrbwRe3t759SUxewiSymXA82pOy7tL~IYfaiwQeFapJwB4UDT~Gdg__&Key-Pair-Id=KNBS2THMRC385
            - name: R-PEN/5H
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/082489b182fbbabddde40831dac5867d6acc4778b6a38d8f5c8d445455d638eb_0.png?Expires=1704844800&Signature=A6d90ZGjaM~jK1kOdtwwiAqX79b6vAhji~LA7tQ1DTF30iludsig6hM3sZaFhHT~jSZkUBlO3shoqE-V9kZ2dJ9EwLSeDnrBukWNATbLNa~raw2kMiANM-kuA-HukRzAW1z0NApJXa1SgzyDmVaB~yRqnGcAt2aU-lvcfK50qmVEgQxzT8otnK0wDo9t99niK~3pyUFAFRJE-YQeJTUseWiDQpQ9vO0aPoejMCDorfy~4DSCUkgeSjiQ375nCqxO8OgbTWDY5K-MOy~FnfaShanS0QWqXFExcxsW81QIQcn54zZSSZAFOOtlg2D154hQLF-evHLYhoh1Ujuyge06zw__&Key-Pair-Id=KNBS2THMRC385
            nextHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDgyN1QxMDQyMjFfNzk1OWRiZGItZmUxZi00NTc2LWJjM2UtMGY0ZGZhMGI3YjBl
            previousHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDgyN1QwMzA4NDNfYzAwM2E4NDItMjBhZS00NzI1LTkzZWUtZDMxMjQzMWNiOTQz
            resultWave: 0
            coopStage:
              name: すじこジャンクション跡
              id: Q29vcFN0YWdlLTg=
            afterGrade:
              name: でんせつ
              id: Q29vcEdyYWRlLTg=
            afterGradePoint: 160
            gradePointDiff: UP
            bossResult:
            myResult:
              deliverCount: 1459
            memberResults:
            - deliverCount: 1069
            - deliverCount: 647
            - deliverCount: 2337
            waveResults:
            - teamDeliverCount: 44
            - teamDeliverCount: 36
            - teamDeliverCount: 33
          - id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDgyN1QwMzA4NDNfYzAwM2E4NDItMjBhZS00NzI1LTkzZWUtZDMxMjQzMWNiOTQz
            weapons:
            - name: ヒッセン
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/f3dbd98d5b0e89f7be7eff25a5c63a06045fe64d8ffd5886e79c855e16791563_0.png?Expires=1704844800&Signature=weorz8KJVwdu4VWi1XduPY4o2NWeZUT1MXpjzYaDYzIzROnrZyppR0ahTkxt5vY2Yb93g6VrQooD8fB69~SXz3X4uKalT6O5DrXQNGeVwbxx9C~KpKl9n6csG31TjPdwcfoJWcK8oCpLzMn8ZoMwTL3KQcKg0YYYwG62jkhrJwBfoYgrRrzFDAVsxM1QnFNL7xXQoEnMbu2Wl8uGhdqXfKmQufUyd9e~EA8ofwRoKHYNrKvBcWEkOSDRaLD2w-rmzkoYD1EQdNt1VWrNeGn6NBrgOu8YkGog2JPs~cxB4nJtCL2tY1je9RfSkxO7xvgBPQBKoj-80ynlPIygSVrbWQ__&Key-Pair-Id=KNBS2THMRC385
            - name: ジムワイパー
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/ddd2a4258a70cdaf8a1dbc0ded024db497445d71f950fe7645fa8c69a178a082_0.png?Expires=1704844800&Signature=CuvPlq26Vix8my-5ESc-8xMtghoQNuGGG9eJhFQQbaWcegek-gSbp6SzLPtiWE0uGmcl6qvE5XzDLrPRHwwfTDGWxw8vuMuRXKhBeOhu6Qp1lMMg1fpL2N4NOq~pPVPpEuNVrJ05hD7egwOPDj4AoB9BbtDZXeFomI4UqVSbn~2RqRb0V4NrcRv4oQmEF8sCa5G3bvmJ3VVRdzfQWaBpIf6eLYMtsGTd2vUc-aveAJfN373fiUKwdhtcCYsjggqbPjPBtfopjFKrW7TEmfqmZysrfzvqA75LzmwMS3RKkG3etutWJ60CI0m-zpinrWBQ6Q5F0~BiOEts9LRyVTP0EQ__&Key-Pair-Id=KNBS2THMRC385
            - name: H3リールガン
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/418d75d9ca0304922f06eff539c511238b143ef8331969e20d54a9560df57d5a_0.png?Expires=1704844800&Signature=bdxOVPY6rdUWF1mCupqsa9GGPBBQGCSGKz6JNDAML-TMyORy4DL8T4-R1bfLQ-ICXZIQfadsK7damiJE50P9StN76E6HDV0gVNB7SDJq5wzo3-zMI133mrAqk~4gc6uEjyZHXItqUnA-~vT9XXl7A3ztLt3l-9saZZpDEipesZEOFD8CluYWgsQRiAGU6UE-xGqDj9diDxJYOJaVzdMF7VPFLmFdew54Se8LnrWp6nTOHDQjBKxO3o4JZFe-r8xknf78F2oBxPf2R7hj7m55Asp2-HgfTIEn0PrbwRe3t759SUxewiSymXA82pOy7tL~IYfaiwQeFapJwB4UDT~Gdg__&Key-Pair-Id=KNBS2THMRC385
            - name: R-PEN/5H
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/082489b182fbbabddde40831dac5867d6acc4778b6a38d8f5c8d445455d638eb_0.png?Expires=1704844800&Signature=A6d90ZGjaM~jK1kOdtwwiAqX79b6vAhji~LA7tQ1DTF30iludsig6hM3sZaFhHT~jSZkUBlO3shoqE-V9kZ2dJ9EwLSeDnrBukWNATbLNa~raw2kMiANM-kuA-HukRzAW1z0NApJXa1SgzyDmVaB~yRqnGcAt2aU-lvcfK50qmVEgQxzT8otnK0wDo9t99niK~3pyUFAFRJE-YQeJTUseWiDQpQ9vO0aPoejMCDorfy~4DSCUkgeSjiQ375nCqxO8OgbTWDY5K-MOy~FnfaShanS0QWqXFExcxsW81QIQcn54zZSSZAFOOtlg2D154hQLF-evHLYhoh1Ujuyge06zw__&Key-Pair-Id=KNBS2THMRC385
            nextHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDgyN1QxMDM0NDdfYzgzNTVhMmQtZDNhNy00OTc2LWJhYzAtYmRiNDgzZmMyYzkx
            previousHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDgyN1QwMzAwNTBfZTVjMTViMjItOTdiYS00OTA3LTk4MTUtOTFkZmJhNTU3OGI5
            resultWave: 0
            coopStage:
              name: すじこジャンクション跡
              id: Q29vcFN0YWdlLTg=
            afterGrade:
              name: でんせつ
              id: Q29vcEdyYWRlLTg=
            afterGradePoint: 140
            gradePointDiff: UP
            bossResult:
              hasDefeatBoss: true
              boss:
                name: タツ
                id: Q29vcEVuZW15LTI0
            myResult:
              deliverCount: 1802
            memberResults:
            - deliverCount: 1302
            - deliverCount: 1786
            - deliverCount: 943
            waveResults:
            - teamDeliverCount: 46
            - teamDeliverCount: 34
            - teamDeliverCount: 38
            - teamDeliverCount:
          - id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDgyN1QwMzAwNTBfZTVjMTViMjItOTdiYS00OTA3LTk4MTUtOTFkZmJhNTU3OGI5
            weapons:
            - name: ヒッセン
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/f3dbd98d5b0e89f7be7eff25a5c63a06045fe64d8ffd5886e79c855e16791563_0.png?Expires=1704844800&Signature=weorz8KJVwdu4VWi1XduPY4o2NWeZUT1MXpjzYaDYzIzROnrZyppR0ahTkxt5vY2Yb93g6VrQooD8fB69~SXz3X4uKalT6O5DrXQNGeVwbxx9C~KpKl9n6csG31TjPdwcfoJWcK8oCpLzMn8ZoMwTL3KQcKg0YYYwG62jkhrJwBfoYgrRrzFDAVsxM1QnFNL7xXQoEnMbu2Wl8uGhdqXfKmQufUyd9e~EA8ofwRoKHYNrKvBcWEkOSDRaLD2w-rmzkoYD1EQdNt1VWrNeGn6NBrgOu8YkGog2JPs~cxB4nJtCL2tY1je9RfSkxO7xvgBPQBKoj-80ynlPIygSVrbWQ__&Key-Pair-Id=KNBS2THMRC385
            - name: ジムワイパー
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/ddd2a4258a70cdaf8a1dbc0ded024db497445d71f950fe7645fa8c69a178a082_0.png?Expires=1704844800&Signature=CuvPlq26Vix8my-5ESc-8xMtghoQNuGGG9eJhFQQbaWcegek-gSbp6SzLPtiWE0uGmcl6qvE5XzDLrPRHwwfTDGWxw8vuMuRXKhBeOhu6Qp1lMMg1fpL2N4NOq~pPVPpEuNVrJ05hD7egwOPDj4AoB9BbtDZXeFomI4UqVSbn~2RqRb0V4NrcRv4oQmEF8sCa5G3bvmJ3VVRdzfQWaBpIf6eLYMtsGTd2vUc-aveAJfN373fiUKwdhtcCYsjggqbPjPBtfopjFKrW7TEmfqmZysrfzvqA75LzmwMS3RKkG3etutWJ60CI0m-zpinrWBQ6Q5F0~BiOEts9LRyVTP0EQ__&Key-Pair-Id=KNBS2THMRC385
            - name: H3リールガン
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/418d75d9ca0304922f06eff539c511238b143ef8331969e20d54a9560df57d5a_0.png?Expires=1704844800&Signature=bdxOVPY6rdUWF1mCupqsa9GGPBBQGCSGKz6JNDAML-TMyORy4DL8T4-R1bfLQ-ICXZIQfadsK7damiJE50P9StN76E6HDV0gVNB7SDJq5wzo3-zMI133mrAqk~4gc6uEjyZHXItqUnA-~vT9XXl7A3ztLt3l-9saZZpDEipesZEOFD8CluYWgsQRiAGU6UE-xGqDj9diDxJYOJaVzdMF7VPFLmFdew54Se8LnrWp6nTOHDQjBKxO3o4JZFe-r8xknf78F2oBxPf2R7hj7m55Asp2-HgfTIEn0PrbwRe3t759SUxewiSymXA82pOy7tL~IYfaiwQeFapJwB4UDT~Gdg__&Key-Pair-Id=KNBS2THMRC385
            - name: R-PEN/5H
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/082489b182fbbabddde40831dac5867d6acc4778b6a38d8f5c8d445455d638eb_0.png?Expires=1704844800&Signature=A6d90ZGjaM~jK1kOdtwwiAqX79b6vAhji~LA7tQ1DTF30iludsig6hM3sZaFhHT~jSZkUBlO3shoqE-V9kZ2dJ9EwLSeDnrBukWNATbLNa~raw2kMiANM-kuA-HukRzAW1z0NApJXa1SgzyDmVaB~yRqnGcAt2aU-lvcfK50qmVEgQxzT8otnK0wDo9t99niK~3pyUFAFRJE-YQeJTUseWiDQpQ9vO0aPoejMCDorfy~4DSCUkgeSjiQ375nCqxO8OgbTWDY5K-MOy~FnfaShanS0QWqXFExcxsW81QIQcn54zZSSZAFOOtlg2D154hQLF-evHLYhoh1Ujuyge06zw__&Key-Pair-Id=KNBS2THMRC385
            nextHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDgyN1QwMzA4NDNfYzAwM2E4NDItMjBhZS00NzI1LTkzZWUtZDMxMjQzMWNiOTQz
            previousHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDgyN1QwMjUzNDBfZTVjMTViMjItOTdiYS00OTA3LTk4MTUtOTFkZmJhNTU3OGI5
            resultWave: 0
            coopStage:
              name: すじこジャンクション跡
              id: Q29vcFN0YWdlLTg=
            afterGrade:
              name: でんせつ
              id: Q29vcEdyYWRlLTg=
            afterGradePoint: 120
            gradePointDiff: UP
            bossResult:
            myResult:
              deliverCount: 872
            memberResults:
            - deliverCount: 1201
            - deliverCount: 1016
            - deliverCount: 931
            waveResults:
            - teamDeliverCount: 52
            - teamDeliverCount: 53
            - teamDeliverCount: 37
          - id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDgyN1QwMjUzNDBfZTVjMTViMjItOTdiYS00OTA3LTk4MTUtOTFkZmJhNTU3OGI5
            weapons:
            - name: ヒッセン
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/f3dbd98d5b0e89f7be7eff25a5c63a06045fe64d8ffd5886e79c855e16791563_0.png?Expires=1704844800&Signature=weorz8KJVwdu4VWi1XduPY4o2NWeZUT1MXpjzYaDYzIzROnrZyppR0ahTkxt5vY2Yb93g6VrQooD8fB69~SXz3X4uKalT6O5DrXQNGeVwbxx9C~KpKl9n6csG31TjPdwcfoJWcK8oCpLzMn8ZoMwTL3KQcKg0YYYwG62jkhrJwBfoYgrRrzFDAVsxM1QnFNL7xXQoEnMbu2Wl8uGhdqXfKmQufUyd9e~EA8ofwRoKHYNrKvBcWEkOSDRaLD2w-rmzkoYD1EQdNt1VWrNeGn6NBrgOu8YkGog2JPs~cxB4nJtCL2tY1je9RfSkxO7xvgBPQBKoj-80ynlPIygSVrbWQ__&Key-Pair-Id=KNBS2THMRC385
            - name: ジムワイパー
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/ddd2a4258a70cdaf8a1dbc0ded024db497445d71f950fe7645fa8c69a178a082_0.png?Expires=1704844800&Signature=CuvPlq26Vix8my-5ESc-8xMtghoQNuGGG9eJhFQQbaWcegek-gSbp6SzLPtiWE0uGmcl6qvE5XzDLrPRHwwfTDGWxw8vuMuRXKhBeOhu6Qp1lMMg1fpL2N4NOq~pPVPpEuNVrJ05hD7egwOPDj4AoB9BbtDZXeFomI4UqVSbn~2RqRb0V4NrcRv4oQmEF8sCa5G3bvmJ3VVRdzfQWaBpIf6eLYMtsGTd2vUc-aveAJfN373fiUKwdhtcCYsjggqbPjPBtfopjFKrW7TEmfqmZysrfzvqA75LzmwMS3RKkG3etutWJ60CI0m-zpinrWBQ6Q5F0~BiOEts9LRyVTP0EQ__&Key-Pair-Id=KNBS2THMRC385
            - name: H3リールガン
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/418d75d9ca0304922f06eff539c511238b143ef8331969e20d54a9560df57d5a_0.png?Expires=1704844800&Signature=bdxOVPY6rdUWF1mCupqsa9GGPBBQGCSGKz6JNDAML-TMyORy4DL8T4-R1bfLQ-ICXZIQfadsK7damiJE50P9StN76E6HDV0gVNB7SDJq5wzo3-zMI133mrAqk~4gc6uEjyZHXItqUnA-~vT9XXl7A3ztLt3l-9saZZpDEipesZEOFD8CluYWgsQRiAGU6UE-xGqDj9diDxJYOJaVzdMF7VPFLmFdew54Se8LnrWp6nTOHDQjBKxO3o4JZFe-r8xknf78F2oBxPf2R7hj7m55Asp2-HgfTIEn0PrbwRe3t759SUxewiSymXA82pOy7tL~IYfaiwQeFapJwB4UDT~Gdg__&Key-Pair-Id=KNBS2THMRC385
            - name: R-PEN/5H
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/082489b182fbbabddde40831dac5867d6acc4778b6a38d8f5c8d445455d638eb_0.png?Expires=1704844800&Signature=A6d90ZGjaM~jK1kOdtwwiAqX79b6vAhji~LA7tQ1DTF30iludsig6hM3sZaFhHT~jSZkUBlO3shoqE-V9kZ2dJ9EwLSeDnrBukWNATbLNa~raw2kMiANM-kuA-HukRzAW1z0NApJXa1SgzyDmVaB~yRqnGcAt2aU-lvcfK50qmVEgQxzT8otnK0wDo9t99niK~3pyUFAFRJE-YQeJTUseWiDQpQ9vO0aPoejMCDorfy~4DSCUkgeSjiQ375nCqxO8OgbTWDY5K-MOy~FnfaShanS0QWqXFExcxsW81QIQcn54zZSSZAFOOtlg2D154hQLF-evHLYhoh1Ujuyge06zw__&Key-Pair-Id=KNBS2THMRC385
            nextHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDgyN1QwMzAwNTBfZTVjMTViMjItOTdiYS00OTA3LTk4MTUtOTFkZmJhNTU3OGI5
            previousHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDgyN1QwMjQ2MzFfZTVjMTViMjItOTdiYS00OTA3LTk4MTUtOTFkZmJhNTU3OGI5
            resultWave: 0
            coopStage:
              name: すじこジャンクション跡
              id: Q29vcFN0YWdlLTg=
            afterGrade:
              name: でんせつ
              id: Q29vcEdyYWRlLTg=
            afterGradePoint: 100
            gradePointDiff: UP
            bossResult:
            myResult:
              deliverCount: 847
            memberResults:
            - deliverCount: 920
            - deliverCount: 710
            - deliverCount: 541
            waveResults:
            - teamDeliverCount: 54
            - teamDeliverCount: 37
            - teamDeliverCount: 41
          - id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDgyN1QwMjQ2MzFfZTVjMTViMjItOTdiYS00OTA3LTk4MTUtOTFkZmJhNTU3OGI5
            weapons:
            - name: ヒッセン
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/f3dbd98d5b0e89f7be7eff25a5c63a06045fe64d8ffd5886e79c855e16791563_0.png?Expires=1704844800&Signature=weorz8KJVwdu4VWi1XduPY4o2NWeZUT1MXpjzYaDYzIzROnrZyppR0ahTkxt5vY2Yb93g6VrQooD8fB69~SXz3X4uKalT6O5DrXQNGeVwbxx9C~KpKl9n6csG31TjPdwcfoJWcK8oCpLzMn8ZoMwTL3KQcKg0YYYwG62jkhrJwBfoYgrRrzFDAVsxM1QnFNL7xXQoEnMbu2Wl8uGhdqXfKmQufUyd9e~EA8ofwRoKHYNrKvBcWEkOSDRaLD2w-rmzkoYD1EQdNt1VWrNeGn6NBrgOu8YkGog2JPs~cxB4nJtCL2tY1je9RfSkxO7xvgBPQBKoj-80ynlPIygSVrbWQ__&Key-Pair-Id=KNBS2THMRC385
            - name: ジムワイパー
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/ddd2a4258a70cdaf8a1dbc0ded024db497445d71f950fe7645fa8c69a178a082_0.png?Expires=1704844800&Signature=CuvPlq26Vix8my-5ESc-8xMtghoQNuGGG9eJhFQQbaWcegek-gSbp6SzLPtiWE0uGmcl6qvE5XzDLrPRHwwfTDGWxw8vuMuRXKhBeOhu6Qp1lMMg1fpL2N4NOq~pPVPpEuNVrJ05hD7egwOPDj4AoB9BbtDZXeFomI4UqVSbn~2RqRb0V4NrcRv4oQmEF8sCa5G3bvmJ3VVRdzfQWaBpIf6eLYMtsGTd2vUc-aveAJfN373fiUKwdhtcCYsjggqbPjPBtfopjFKrW7TEmfqmZysrfzvqA75LzmwMS3RKkG3etutWJ60CI0m-zpinrWBQ6Q5F0~BiOEts9LRyVTP0EQ__&Key-Pair-Id=KNBS2THMRC385
            - name: H3リールガン
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/418d75d9ca0304922f06eff539c511238b143ef8331969e20d54a9560df57d5a_0.png?Expires=1704844800&Signature=bdxOVPY6rdUWF1mCupqsa9GGPBBQGCSGKz6JNDAML-TMyORy4DL8T4-R1bfLQ-ICXZIQfadsK7damiJE50P9StN76E6HDV0gVNB7SDJq5wzo3-zMI133mrAqk~4gc6uEjyZHXItqUnA-~vT9XXl7A3ztLt3l-9saZZpDEipesZEOFD8CluYWgsQRiAGU6UE-xGqDj9diDxJYOJaVzdMF7VPFLmFdew54Se8LnrWp6nTOHDQjBKxO3o4JZFe-r8xknf78F2oBxPf2R7hj7m55Asp2-HgfTIEn0PrbwRe3t759SUxewiSymXA82pOy7tL~IYfaiwQeFapJwB4UDT~Gdg__&Key-Pair-Id=KNBS2THMRC385
            - name: R-PEN/5H
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/082489b182fbbabddde40831dac5867d6acc4778b6a38d8f5c8d445455d638eb_0.png?Expires=1704844800&Signature=A6d90ZGjaM~jK1kOdtwwiAqX79b6vAhji~LA7tQ1DTF30iludsig6hM3sZaFhHT~jSZkUBlO3shoqE-V9kZ2dJ9EwLSeDnrBukWNATbLNa~raw2kMiANM-kuA-HukRzAW1z0NApJXa1SgzyDmVaB~yRqnGcAt2aU-lvcfK50qmVEgQxzT8otnK0wDo9t99niK~3pyUFAFRJE-YQeJTUseWiDQpQ9vO0aPoejMCDorfy~4DSCUkgeSjiQ375nCqxO8OgbTWDY5K-MOy~FnfaShanS0QWqXFExcxsW81QIQcn54zZSSZAFOOtlg2D154hQLF-evHLYhoh1Ujuyge06zw__&Key-Pair-Id=KNBS2THMRC385
            nextHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDgyN1QwMjUzNDBfZTVjMTViMjItOTdiYS00OTA3LTk4MTUtOTFkZmJhNTU3OGI5
            previousHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDgyN1QwMjM5MDlfZTVjMTViMjItOTdiYS00OTA3LTk4MTUtOTFkZmJhNTU3OGI5
            resultWave: 0
            coopStage:
              name: すじこジャンクション跡
              id: Q29vcFN0YWdlLTg=
            afterGrade:
              name: でんせつ
              id: Q29vcEdyYWRlLTg=
            afterGradePoint: 80
            gradePointDiff: UP
            bossResult:
            myResult:
              deliverCount: 741
            memberResults:
            - deliverCount: 642
            - deliverCount: 758
            - deliverCount: 1155
            waveResults:
            - teamDeliverCount: 58
            - teamDeliverCount: 36
            - teamDeliverCount: 55
          - id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDgyN1QwMjM5MDlfZTVjMTViMjItOTdiYS00OTA3LTk4MTUtOTFkZmJhNTU3OGI5
            weapons:
            - name: ヒッセン
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/f3dbd98d5b0e89f7be7eff25a5c63a06045fe64d8ffd5886e79c855e16791563_0.png?Expires=1704844800&Signature=weorz8KJVwdu4VWi1XduPY4o2NWeZUT1MXpjzYaDYzIzROnrZyppR0ahTkxt5vY2Yb93g6VrQooD8fB69~SXz3X4uKalT6O5DrXQNGeVwbxx9C~KpKl9n6csG31TjPdwcfoJWcK8oCpLzMn8ZoMwTL3KQcKg0YYYwG62jkhrJwBfoYgrRrzFDAVsxM1QnFNL7xXQoEnMbu2Wl8uGhdqXfKmQufUyd9e~EA8ofwRoKHYNrKvBcWEkOSDRaLD2w-rmzkoYD1EQdNt1VWrNeGn6NBrgOu8YkGog2JPs~cxB4nJtCL2tY1je9RfSkxO7xvgBPQBKoj-80ynlPIygSVrbWQ__&Key-Pair-Id=KNBS2THMRC385
            - name: ジムワイパー
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/ddd2a4258a70cdaf8a1dbc0ded024db497445d71f950fe7645fa8c69a178a082_0.png?Expires=1704844800&Signature=CuvPlq26Vix8my-5ESc-8xMtghoQNuGGG9eJhFQQbaWcegek-gSbp6SzLPtiWE0uGmcl6qvE5XzDLrPRHwwfTDGWxw8vuMuRXKhBeOhu6Qp1lMMg1fpL2N4NOq~pPVPpEuNVrJ05hD7egwOPDj4AoB9BbtDZXeFomI4UqVSbn~2RqRb0V4NrcRv4oQmEF8sCa5G3bvmJ3VVRdzfQWaBpIf6eLYMtsGTd2vUc-aveAJfN373fiUKwdhtcCYsjggqbPjPBtfopjFKrW7TEmfqmZysrfzvqA75LzmwMS3RKkG3etutWJ60CI0m-zpinrWBQ6Q5F0~BiOEts9LRyVTP0EQ__&Key-Pair-Id=KNBS2THMRC385
            - name: H3リールガン
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/418d75d9ca0304922f06eff539c511238b143ef8331969e20d54a9560df57d5a_0.png?Expires=1704844800&Signature=bdxOVPY6rdUWF1mCupqsa9GGPBBQGCSGKz6JNDAML-TMyORy4DL8T4-R1bfLQ-ICXZIQfadsK7damiJE50P9StN76E6HDV0gVNB7SDJq5wzo3-zMI133mrAqk~4gc6uEjyZHXItqUnA-~vT9XXl7A3ztLt3l-9saZZpDEipesZEOFD8CluYWgsQRiAGU6UE-xGqDj9diDxJYOJaVzdMF7VPFLmFdew54Se8LnrWp6nTOHDQjBKxO3o4JZFe-r8xknf78F2oBxPf2R7hj7m55Asp2-HgfTIEn0PrbwRe3t759SUxewiSymXA82pOy7tL~IYfaiwQeFapJwB4UDT~Gdg__&Key-Pair-Id=KNBS2THMRC385
            - name: R-PEN/5H
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/082489b182fbbabddde40831dac5867d6acc4778b6a38d8f5c8d445455d638eb_0.png?Expires=1704844800&Signature=A6d90ZGjaM~jK1kOdtwwiAqX79b6vAhji~LA7tQ1DTF30iludsig6hM3sZaFhHT~jSZkUBlO3shoqE-V9kZ2dJ9EwLSeDnrBukWNATbLNa~raw2kMiANM-kuA-HukRzAW1z0NApJXa1SgzyDmVaB~yRqnGcAt2aU-lvcfK50qmVEgQxzT8otnK0wDo9t99niK~3pyUFAFRJE-YQeJTUseWiDQpQ9vO0aPoejMCDorfy~4DSCUkgeSjiQ375nCqxO8OgbTWDY5K-MOy~FnfaShanS0QWqXFExcxsW81QIQcn54zZSSZAFOOtlg2D154hQLF-evHLYhoh1Ujuyge06zw__&Key-Pair-Id=KNBS2THMRC385
            nextHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDgyN1QwMjQ2MzFfZTVjMTViMjItOTdiYS00OTA3LTk4MTUtOTFkZmJhNTU3OGI5
            previousHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDgxN1QxNTUxMjhfZDQ1NjVmYzctYTI4MC00MGMwLTgwMWYtMTg0MzA1MDgwODYx
            resultWave: 0
            coopStage:
              name: すじこジャンクション跡
              id: Q29vcFN0YWdlLTg=
            afterGrade:
              name: でんせつ
              id: Q29vcEdyYWRlLTg=
            afterGradePoint: 60
            gradePointDiff: UP
            bossResult:
            myResult:
              deliverCount: 1111
            memberResults:
            - deliverCount: 592
            - deliverCount: 721
            - deliverCount: 943
            waveResults:
            - teamDeliverCount: 38
            - teamDeliverCount: 39
            - teamDeliverCount: 56
      - startTime: '2023-08-16T00:00:00Z'
        endTime: '2023-08-17T16:00:00Z'
        mode: REGULAR
        playCount: 12
        rule: REGULAR
        highestResult:
          grade:
            name: でんせつ
            id: Q29vcEdyYWRlLTg=
          gradePoint: 280
          jobScore: 187
          trophy:
        historyDetails:
          nodes:
          - id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDgxN1QxNTUxMjhfZDQ1NjVmYzctYTI4MC00MGMwLTgwMWYtMTg0MzA1MDgwODYx
            weapons:
            - name: ドライブワイパー
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/3aa72d418643038a9e3248af734b0d6a0bf3d3bf9793d75912b1b959f93c2258_0.png?Expires=1704844800&Signature=GuDQ5NDwktGPMWalOLv~UKM6z8U2zHaggaSh80ggFU1ZNQWPzXlT~2gMD6029lEZbQbChROpdCmq1f~lL5S97iIjYBJBwBR-YjLISowzU5mNTwNc-2JCJdGONejKwoFp5HcwYpbk2nzLdogXsLvnANahc50rkt84tx5ZhzaBTLAl3GDBNlWHqYicpxWpM8EOQ2SfS2bNemEz2A767qnD4WwSORCQYg5~Fw2QF-7bgv2oUeJagNpD6ydNPGkCyQ1qZRUDbMJNn3cVAoXJffRKf8mfB9vH6x9kEnCZ8VUKBtwjnof19ahJQgtLcXTOo1aT1PNJGt36gKmeAUuxHAiEPA__&Key-Pair-Id=KNBS2THMRC385
            - name: クアッドホッパーブラック
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/e68609e51d30dfb13e1ea996e46995ed1f7cf561caef0fe96314966d0a039109_0.png?Expires=1704844800&Signature=Jh-xT10a-IchDF557-5QYrJZTYHjj8Ic1E8bfw3oU0bc8inq3y84nN0D284frsaTj2GM2BXvW6DJGchU18tcFLoM2it9UrRuKeV3P5miQQMKXxa2IL0-H6~sfR2CWrf-zuxukoSmLm-l4oWmLzNr1AM2-vW~55KzkGfh8PK6bhRucgHlueAaCWzTOkOkpV9x9UgnYdzhNJ4YskuX1LJoXHdUWuTSzJBPQ4Ys~l4av6MNZfSUUIuiSAopl-YKESBq-NYm6AwxsPQWHc8OoqjLLnwOzCUbcEsJrb5w2F5w35KivVevEzMdPvtl-KBI8GYwt~Yl--1PEy8ZHbqXOyCnDg__&Key-Pair-Id=KNBS2THMRC385
            - name: オーバーフロッシャー
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/0199e455872acba1ab8ef0040eca7f41afca48c1f9ad2c5d274323d6dbc49133_0.png?Expires=1704844800&Signature=lMhgL84E-gtCLgbojKHdiXWYZhbcwQTaAWXmfLQjo6bT4Kl8vRiyqisxnVwjzqmnGGJD0co2w4mAfAIHOQAOxdz5h5F3zcWMzgYP5SlbdY-ZhH-yLpAeJbbm6Ql6FzftV~yC3VdjgJmS2ccx1cPwZyZ5wiFdX9niLKwHFJtUlP9HBKHm90gmpxTUI6GQnq0pgrpTiPnJqF3rVGIljiAUX8xPO1b-FPYk3MmhUELWBId-Ggbyg6U3PNVLSXJMJmqpu9ElJ2B7iNVdqEPauUs~hC1gerK~aTLRIEG2jVbZVFluze~EX-rnbbeTMrCajBFQn0qZiA4ZBIHhD2Ly70HhFg__&Key-Pair-Id=KNBS2THMRC385
            - name: トライストリンガー
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/676d9f49276f171a93ac06646c0fbdfbeb8c3d0284a057aee306404a6034ffef_0.png?Expires=1704844800&Signature=KCYJWaXXFW4pa3IJYpvasTTg~~Re5LeBuO6UnjIeTe1E4QvGWNj-I9PZf3Rx3GMw9NkFP44NRi8bkBdUpoK3MRKZRwW2tavBrRqZuaeCuT9ij~NAvNL50r6pgo4tdowWE-tENw1HCCVf68IGrMMDH7dcsoYufTvzcsOUupH5rHS3-Zi6MB3M35PFLtQDxaMFAMivH-rhzw6gjXV~JGgHuHl0IiYCBiRWYow98Y4u02GxzNL4ALIjmwlxpPAKXAnp9-iZ-t4-4cjB-jw0V-sutg1FXJgptykaCNV301uM5dQyxKdqUCI~WKvgl-3C1DvOvnNvtf41eH8jpOSNLztrGw__&Key-Pair-Id=KNBS2THMRC385
            nextHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDgyN1QwMjM5MDlfZTVjMTViMjItOTdiYS00OTA3LTk4MTUtOTFkZmJhNTU3OGI5
            previousHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDgxN1QxNTQ0MjZfZDQ1NjVmYzctYTI4MC00MGMwLTgwMWYtMTg0MzA1MDgwODYx
            resultWave: 0
            coopStage:
              name: ムニ・エール海洋発電所
              id: Q29vcFN0YWdlLTc=
            afterGrade:
              name: でんせつ
              id: Q29vcEdyYWRlLTg=
            afterGradePoint: 280
            gradePointDiff: UP
            bossResult:
              hasDefeatBoss: true
              boss:
                name: タツ
                id: Q29vcEVuZW15LTI0
            myResult:
              deliverCount: 1010
            memberResults:
            - deliverCount: 1248
            - deliverCount: 1430
            - deliverCount: 1292
            waveResults:
            - teamDeliverCount: 51
            - teamDeliverCount: 58
            - teamDeliverCount: 56
            - teamDeliverCount:
          - id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDgxN1QxNTQ0MjZfZDQ1NjVmYzctYTI4MC00MGMwLTgwMWYtMTg0MzA1MDgwODYx
            weapons:
            - name: ドライブワイパー
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/3aa72d418643038a9e3248af734b0d6a0bf3d3bf9793d75912b1b959f93c2258_0.png?Expires=1704844800&Signature=GuDQ5NDwktGPMWalOLv~UKM6z8U2zHaggaSh80ggFU1ZNQWPzXlT~2gMD6029lEZbQbChROpdCmq1f~lL5S97iIjYBJBwBR-YjLISowzU5mNTwNc-2JCJdGONejKwoFp5HcwYpbk2nzLdogXsLvnANahc50rkt84tx5ZhzaBTLAl3GDBNlWHqYicpxWpM8EOQ2SfS2bNemEz2A767qnD4WwSORCQYg5~Fw2QF-7bgv2oUeJagNpD6ydNPGkCyQ1qZRUDbMJNn3cVAoXJffRKf8mfB9vH6x9kEnCZ8VUKBtwjnof19ahJQgtLcXTOo1aT1PNJGt36gKmeAUuxHAiEPA__&Key-Pair-Id=KNBS2THMRC385
            - name: クアッドホッパーブラック
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/e68609e51d30dfb13e1ea996e46995ed1f7cf561caef0fe96314966d0a039109_0.png?Expires=1704844800&Signature=Jh-xT10a-IchDF557-5QYrJZTYHjj8Ic1E8bfw3oU0bc8inq3y84nN0D284frsaTj2GM2BXvW6DJGchU18tcFLoM2it9UrRuKeV3P5miQQMKXxa2IL0-H6~sfR2CWrf-zuxukoSmLm-l4oWmLzNr1AM2-vW~55KzkGfh8PK6bhRucgHlueAaCWzTOkOkpV9x9UgnYdzhNJ4YskuX1LJoXHdUWuTSzJBPQ4Ys~l4av6MNZfSUUIuiSAopl-YKESBq-NYm6AwxsPQWHc8OoqjLLnwOzCUbcEsJrb5w2F5w35KivVevEzMdPvtl-KBI8GYwt~Yl--1PEy8ZHbqXOyCnDg__&Key-Pair-Id=KNBS2THMRC385
            - name: オーバーフロッシャー
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/0199e455872acba1ab8ef0040eca7f41afca48c1f9ad2c5d274323d6dbc49133_0.png?Expires=1704844800&Signature=lMhgL84E-gtCLgbojKHdiXWYZhbcwQTaAWXmfLQjo6bT4Kl8vRiyqisxnVwjzqmnGGJD0co2w4mAfAIHOQAOxdz5h5F3zcWMzgYP5SlbdY-ZhH-yLpAeJbbm6Ql6FzftV~yC3VdjgJmS2ccx1cPwZyZ5wiFdX9niLKwHFJtUlP9HBKHm90gmpxTUI6GQnq0pgrpTiPnJqF3rVGIljiAUX8xPO1b-FPYk3MmhUELWBId-Ggbyg6U3PNVLSXJMJmqpu9ElJ2B7iNVdqEPauUs~hC1gerK~aTLRIEG2jVbZVFluze~EX-rnbbeTMrCajBFQn0qZiA4ZBIHhD2Ly70HhFg__&Key-Pair-Id=KNBS2THMRC385
            - name: トライストリンガー
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/676d9f49276f171a93ac06646c0fbdfbeb8c3d0284a057aee306404a6034ffef_0.png?Expires=1704844800&Signature=KCYJWaXXFW4pa3IJYpvasTTg~~Re5LeBuO6UnjIeTe1E4QvGWNj-I9PZf3Rx3GMw9NkFP44NRi8bkBdUpoK3MRKZRwW2tavBrRqZuaeCuT9ij~NAvNL50r6pgo4tdowWE-tENw1HCCVf68IGrMMDH7dcsoYufTvzcsOUupH5rHS3-Zi6MB3M35PFLtQDxaMFAMivH-rhzw6gjXV~JGgHuHl0IiYCBiRWYow98Y4u02GxzNL4ALIjmwlxpPAKXAnp9-iZ-t4-4cjB-jw0V-sutg1FXJgptykaCNV301uM5dQyxKdqUCI~WKvgl-3C1DvOvnNvtf41eH8jpOSNLztrGw__&Key-Pair-Id=KNBS2THMRC385
            nextHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDgxN1QxNTUxMjhfZDQ1NjVmYzctYTI4MC00MGMwLTgwMWYtMTg0MzA1MDgwODYx
            previousHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDgxN1QxNTM3MjdfZDQ1NjVmYzctYTI4MC00MGMwLTgwMWYtMTg0MzA1MDgwODYx
            resultWave: 0
            coopStage:
              name: ムニ・エール海洋発電所
              id: Q29vcFN0YWdlLTc=
            afterGrade:
              name: でんせつ
              id: Q29vcEdyYWRlLTg=
            afterGradePoint: 260
            gradePointDiff: UP
            bossResult:
            myResult:
              deliverCount: 939
            memberResults:
            - deliverCount: 1115
            - deliverCount: 916
            - deliverCount: 1001
            waveResults:
            - teamDeliverCount: 63
            - teamDeliverCount: 49
            - teamDeliverCount: 39
          - id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDgxN1QxNTM3MjdfZDQ1NjVmYzctYTI4MC00MGMwLTgwMWYtMTg0MzA1MDgwODYx
            weapons:
            - name: ドライブワイパー
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/3aa72d418643038a9e3248af734b0d6a0bf3d3bf9793d75912b1b959f93c2258_0.png?Expires=1704844800&Signature=GuDQ5NDwktGPMWalOLv~UKM6z8U2zHaggaSh80ggFU1ZNQWPzXlT~2gMD6029lEZbQbChROpdCmq1f~lL5S97iIjYBJBwBR-YjLISowzU5mNTwNc-2JCJdGONejKwoFp5HcwYpbk2nzLdogXsLvnANahc50rkt84tx5ZhzaBTLAl3GDBNlWHqYicpxWpM8EOQ2SfS2bNemEz2A767qnD4WwSORCQYg5~Fw2QF-7bgv2oUeJagNpD6ydNPGkCyQ1qZRUDbMJNn3cVAoXJffRKf8mfB9vH6x9kEnCZ8VUKBtwjnof19ahJQgtLcXTOo1aT1PNJGt36gKmeAUuxHAiEPA__&Key-Pair-Id=KNBS2THMRC385
            - name: クアッドホッパーブラック
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/e68609e51d30dfb13e1ea996e46995ed1f7cf561caef0fe96314966d0a039109_0.png?Expires=1704844800&Signature=Jh-xT10a-IchDF557-5QYrJZTYHjj8Ic1E8bfw3oU0bc8inq3y84nN0D284frsaTj2GM2BXvW6DJGchU18tcFLoM2it9UrRuKeV3P5miQQMKXxa2IL0-H6~sfR2CWrf-zuxukoSmLm-l4oWmLzNr1AM2-vW~55KzkGfh8PK6bhRucgHlueAaCWzTOkOkpV9x9UgnYdzhNJ4YskuX1LJoXHdUWuTSzJBPQ4Ys~l4av6MNZfSUUIuiSAopl-YKESBq-NYm6AwxsPQWHc8OoqjLLnwOzCUbcEsJrb5w2F5w35KivVevEzMdPvtl-KBI8GYwt~Yl--1PEy8ZHbqXOyCnDg__&Key-Pair-Id=KNBS2THMRC385
            - name: オーバーフロッシャー
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/0199e455872acba1ab8ef0040eca7f41afca48c1f9ad2c5d274323d6dbc49133_0.png?Expires=1704844800&Signature=lMhgL84E-gtCLgbojKHdiXWYZhbcwQTaAWXmfLQjo6bT4Kl8vRiyqisxnVwjzqmnGGJD0co2w4mAfAIHOQAOxdz5h5F3zcWMzgYP5SlbdY-ZhH-yLpAeJbbm6Ql6FzftV~yC3VdjgJmS2ccx1cPwZyZ5wiFdX9niLKwHFJtUlP9HBKHm90gmpxTUI6GQnq0pgrpTiPnJqF3rVGIljiAUX8xPO1b-FPYk3MmhUELWBId-Ggbyg6U3PNVLSXJMJmqpu9ElJ2B7iNVdqEPauUs~hC1gerK~aTLRIEG2jVbZVFluze~EX-rnbbeTMrCajBFQn0qZiA4ZBIHhD2Ly70HhFg__&Key-Pair-Id=KNBS2THMRC385
            - name: トライストリンガー
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/676d9f49276f171a93ac06646c0fbdfbeb8c3d0284a057aee306404a6034ffef_0.png?Expires=1704844800&Signature=KCYJWaXXFW4pa3IJYpvasTTg~~Re5LeBuO6UnjIeTe1E4QvGWNj-I9PZf3Rx3GMw9NkFP44NRi8bkBdUpoK3MRKZRwW2tavBrRqZuaeCuT9ij~NAvNL50r6pgo4tdowWE-tENw1HCCVf68IGrMMDH7dcsoYufTvzcsOUupH5rHS3-Zi6MB3M35PFLtQDxaMFAMivH-rhzw6gjXV~JGgHuHl0IiYCBiRWYow98Y4u02GxzNL4ALIjmwlxpPAKXAnp9-iZ-t4-4cjB-jw0V-sutg1FXJgptykaCNV301uM5dQyxKdqUCI~WKvgl-3C1DvOvnNvtf41eH8jpOSNLztrGw__&Key-Pair-Id=KNBS2THMRC385
            nextHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDgxN1QxNTQ0MjZfZDQ1NjVmYzctYTI4MC00MGMwLTgwMWYtMTg0MzA1MDgwODYx
            previousHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDgxN1QxNTMwMjdfZDQ1NjVmYzctYTI4MC00MGMwLTgwMWYtMTg0MzA1MDgwODYx
            resultWave: 0
            coopStage:
              name: ムニ・エール海洋発電所
              id: Q29vcFN0YWdlLTc=
            afterGrade:
              name: でんせつ
              id: Q29vcEdyYWRlLTg=
            afterGradePoint: 240
            gradePointDiff: UP
            bossResult:
            myResult:
              deliverCount: 641
            memberResults:
            - deliverCount: 939
            - deliverCount: 1348
            - deliverCount: 1000
            waveResults:
            - teamDeliverCount: 46
            - teamDeliverCount: 41
            - teamDeliverCount: 44
          - id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDgxN1QxNTMwMjdfZDQ1NjVmYzctYTI4MC00MGMwLTgwMWYtMTg0MzA1MDgwODYx
            weapons:
            - name: ドライブワイパー
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/3aa72d418643038a9e3248af734b0d6a0bf3d3bf9793d75912b1b959f93c2258_0.png?Expires=1704844800&Signature=GuDQ5NDwktGPMWalOLv~UKM6z8U2zHaggaSh80ggFU1ZNQWPzXlT~2gMD6029lEZbQbChROpdCmq1f~lL5S97iIjYBJBwBR-YjLISowzU5mNTwNc-2JCJdGONejKwoFp5HcwYpbk2nzLdogXsLvnANahc50rkt84tx5ZhzaBTLAl3GDBNlWHqYicpxWpM8EOQ2SfS2bNemEz2A767qnD4WwSORCQYg5~Fw2QF-7bgv2oUeJagNpD6ydNPGkCyQ1qZRUDbMJNn3cVAoXJffRKf8mfB9vH6x9kEnCZ8VUKBtwjnof19ahJQgtLcXTOo1aT1PNJGt36gKmeAUuxHAiEPA__&Key-Pair-Id=KNBS2THMRC385
            - name: クアッドホッパーブラック
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/e68609e51d30dfb13e1ea996e46995ed1f7cf561caef0fe96314966d0a039109_0.png?Expires=1704844800&Signature=Jh-xT10a-IchDF557-5QYrJZTYHjj8Ic1E8bfw3oU0bc8inq3y84nN0D284frsaTj2GM2BXvW6DJGchU18tcFLoM2it9UrRuKeV3P5miQQMKXxa2IL0-H6~sfR2CWrf-zuxukoSmLm-l4oWmLzNr1AM2-vW~55KzkGfh8PK6bhRucgHlueAaCWzTOkOkpV9x9UgnYdzhNJ4YskuX1LJoXHdUWuTSzJBPQ4Ys~l4av6MNZfSUUIuiSAopl-YKESBq-NYm6AwxsPQWHc8OoqjLLnwOzCUbcEsJrb5w2F5w35KivVevEzMdPvtl-KBI8GYwt~Yl--1PEy8ZHbqXOyCnDg__&Key-Pair-Id=KNBS2THMRC385
            - name: オーバーフロッシャー
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/0199e455872acba1ab8ef0040eca7f41afca48c1f9ad2c5d274323d6dbc49133_0.png?Expires=1704844800&Signature=lMhgL84E-gtCLgbojKHdiXWYZhbcwQTaAWXmfLQjo6bT4Kl8vRiyqisxnVwjzqmnGGJD0co2w4mAfAIHOQAOxdz5h5F3zcWMzgYP5SlbdY-ZhH-yLpAeJbbm6Ql6FzftV~yC3VdjgJmS2ccx1cPwZyZ5wiFdX9niLKwHFJtUlP9HBKHm90gmpxTUI6GQnq0pgrpTiPnJqF3rVGIljiAUX8xPO1b-FPYk3MmhUELWBId-Ggbyg6U3PNVLSXJMJmqpu9ElJ2B7iNVdqEPauUs~hC1gerK~aTLRIEG2jVbZVFluze~EX-rnbbeTMrCajBFQn0qZiA4ZBIHhD2Ly70HhFg__&Key-Pair-Id=KNBS2THMRC385
            - name: トライストリンガー
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/676d9f49276f171a93ac06646c0fbdfbeb8c3d0284a057aee306404a6034ffef_0.png?Expires=1704844800&Signature=KCYJWaXXFW4pa3IJYpvasTTg~~Re5LeBuO6UnjIeTe1E4QvGWNj-I9PZf3Rx3GMw9NkFP44NRi8bkBdUpoK3MRKZRwW2tavBrRqZuaeCuT9ij~NAvNL50r6pgo4tdowWE-tENw1HCCVf68IGrMMDH7dcsoYufTvzcsOUupH5rHS3-Zi6MB3M35PFLtQDxaMFAMivH-rhzw6gjXV~JGgHuHl0IiYCBiRWYow98Y4u02GxzNL4ALIjmwlxpPAKXAnp9-iZ-t4-4cjB-jw0V-sutg1FXJgptykaCNV301uM5dQyxKdqUCI~WKvgl-3C1DvOvnNvtf41eH8jpOSNLztrGw__&Key-Pair-Id=KNBS2THMRC385
            nextHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDgxN1QxNTM3MjdfZDQ1NjVmYzctYTI4MC00MGMwLTgwMWYtMTg0MzA1MDgwODYx
            previousHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDgxN1QxNTIxNTZfZDQ1NjVmYzctYTI4MC00MGMwLTgwMWYtMTg0MzA1MDgwODYx
            resultWave: 0
            coopStage:
              name: ムニ・エール海洋発電所
              id: Q29vcFN0YWdlLTc=
            afterGrade:
              name: でんせつ
              id: Q29vcEdyYWRlLTg=
            afterGradePoint: 220
            gradePointDiff: UP
            bossResult:
            myResult:
              deliverCount: 751
            memberResults:
            - deliverCount: 963
            - deliverCount: 1031
            - deliverCount: 1180
            waveResults:
            - teamDeliverCount: 50
            - teamDeliverCount: 69
            - teamDeliverCount: 40
          - id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDgxN1QxNTIxNTZfZDQ1NjVmYzctYTI4MC00MGMwLTgwMWYtMTg0MzA1MDgwODYx
            weapons:
            - name: ドライブワイパー
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/3aa72d418643038a9e3248af734b0d6a0bf3d3bf9793d75912b1b959f93c2258_0.png?Expires=1704844800&Signature=GuDQ5NDwktGPMWalOLv~UKM6z8U2zHaggaSh80ggFU1ZNQWPzXlT~2gMD6029lEZbQbChROpdCmq1f~lL5S97iIjYBJBwBR-YjLISowzU5mNTwNc-2JCJdGONejKwoFp5HcwYpbk2nzLdogXsLvnANahc50rkt84tx5ZhzaBTLAl3GDBNlWHqYicpxWpM8EOQ2SfS2bNemEz2A767qnD4WwSORCQYg5~Fw2QF-7bgv2oUeJagNpD6ydNPGkCyQ1qZRUDbMJNn3cVAoXJffRKf8mfB9vH6x9kEnCZ8VUKBtwjnof19ahJQgtLcXTOo1aT1PNJGt36gKmeAUuxHAiEPA__&Key-Pair-Id=KNBS2THMRC385
            - name: クアッドホッパーブラック
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/e68609e51d30dfb13e1ea996e46995ed1f7cf561caef0fe96314966d0a039109_0.png?Expires=1704844800&Signature=Jh-xT10a-IchDF557-5QYrJZTYHjj8Ic1E8bfw3oU0bc8inq3y84nN0D284frsaTj2GM2BXvW6DJGchU18tcFLoM2it9UrRuKeV3P5miQQMKXxa2IL0-H6~sfR2CWrf-zuxukoSmLm-l4oWmLzNr1AM2-vW~55KzkGfh8PK6bhRucgHlueAaCWzTOkOkpV9x9UgnYdzhNJ4YskuX1LJoXHdUWuTSzJBPQ4Ys~l4av6MNZfSUUIuiSAopl-YKESBq-NYm6AwxsPQWHc8OoqjLLnwOzCUbcEsJrb5w2F5w35KivVevEzMdPvtl-KBI8GYwt~Yl--1PEy8ZHbqXOyCnDg__&Key-Pair-Id=KNBS2THMRC385
            - name: オーバーフロッシャー
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/0199e455872acba1ab8ef0040eca7f41afca48c1f9ad2c5d274323d6dbc49133_0.png?Expires=1704844800&Signature=lMhgL84E-gtCLgbojKHdiXWYZhbcwQTaAWXmfLQjo6bT4Kl8vRiyqisxnVwjzqmnGGJD0co2w4mAfAIHOQAOxdz5h5F3zcWMzgYP5SlbdY-ZhH-yLpAeJbbm6Ql6FzftV~yC3VdjgJmS2ccx1cPwZyZ5wiFdX9niLKwHFJtUlP9HBKHm90gmpxTUI6GQnq0pgrpTiPnJqF3rVGIljiAUX8xPO1b-FPYk3MmhUELWBId-Ggbyg6U3PNVLSXJMJmqpu9ElJ2B7iNVdqEPauUs~hC1gerK~aTLRIEG2jVbZVFluze~EX-rnbbeTMrCajBFQn0qZiA4ZBIHhD2Ly70HhFg__&Key-Pair-Id=KNBS2THMRC385
            - name: トライストリンガー
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/676d9f49276f171a93ac06646c0fbdfbeb8c3d0284a057aee306404a6034ffef_0.png?Expires=1704844800&Signature=KCYJWaXXFW4pa3IJYpvasTTg~~Re5LeBuO6UnjIeTe1E4QvGWNj-I9PZf3Rx3GMw9NkFP44NRi8bkBdUpoK3MRKZRwW2tavBrRqZuaeCuT9ij~NAvNL50r6pgo4tdowWE-tENw1HCCVf68IGrMMDH7dcsoYufTvzcsOUupH5rHS3-Zi6MB3M35PFLtQDxaMFAMivH-rhzw6gjXV~JGgHuHl0IiYCBiRWYow98Y4u02GxzNL4ALIjmwlxpPAKXAnp9-iZ-t4-4cjB-jw0V-sutg1FXJgptykaCNV301uM5dQyxKdqUCI~WKvgl-3C1DvOvnNvtf41eH8jpOSNLztrGw__&Key-Pair-Id=KNBS2THMRC385
            nextHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDgxN1QxNTMwMjdfZDQ1NjVmYzctYTI4MC00MGMwLTgwMWYtMTg0MzA1MDgwODYx
            previousHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDgxN1QxNTE0NTVfZDQ1NjVmYzctYTI4MC00MGMwLTgwMWYtMTg0MzA1MDgwODYx
            resultWave: 0
            coopStage:
              name: ムニ・エール海洋発電所
              id: Q29vcFN0YWdlLTc=
            afterGrade:
              name: でんせつ
              id: Q29vcEdyYWRlLTg=
            afterGradePoint: 200
            gradePointDiff: UP
            bossResult:
              hasDefeatBoss: true
              boss:
                name: タツ
                id: Q29vcEVuZW15LTI0
            myResult:
              deliverCount: 1361
            memberResults:
            - deliverCount: 1299
            - deliverCount: 1487
            - deliverCount: 1609
            waveResults:
            - teamDeliverCount: 43
            - teamDeliverCount: 46
            - teamDeliverCount: 43
            - teamDeliverCount:
          - id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDgxN1QxNTE0NTVfZDQ1NjVmYzctYTI4MC00MGMwLTgwMWYtMTg0MzA1MDgwODYx
            weapons:
            - name: ドライブワイパー
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/3aa72d418643038a9e3248af734b0d6a0bf3d3bf9793d75912b1b959f93c2258_0.png?Expires=1704844800&Signature=GuDQ5NDwktGPMWalOLv~UKM6z8U2zHaggaSh80ggFU1ZNQWPzXlT~2gMD6029lEZbQbChROpdCmq1f~lL5S97iIjYBJBwBR-YjLISowzU5mNTwNc-2JCJdGONejKwoFp5HcwYpbk2nzLdogXsLvnANahc50rkt84tx5ZhzaBTLAl3GDBNlWHqYicpxWpM8EOQ2SfS2bNemEz2A767qnD4WwSORCQYg5~Fw2QF-7bgv2oUeJagNpD6ydNPGkCyQ1qZRUDbMJNn3cVAoXJffRKf8mfB9vH6x9kEnCZ8VUKBtwjnof19ahJQgtLcXTOo1aT1PNJGt36gKmeAUuxHAiEPA__&Key-Pair-Id=KNBS2THMRC385
            - name: クアッドホッパーブラック
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/e68609e51d30dfb13e1ea996e46995ed1f7cf561caef0fe96314966d0a039109_0.png?Expires=1704844800&Signature=Jh-xT10a-IchDF557-5QYrJZTYHjj8Ic1E8bfw3oU0bc8inq3y84nN0D284frsaTj2GM2BXvW6DJGchU18tcFLoM2it9UrRuKeV3P5miQQMKXxa2IL0-H6~sfR2CWrf-zuxukoSmLm-l4oWmLzNr1AM2-vW~55KzkGfh8PK6bhRucgHlueAaCWzTOkOkpV9x9UgnYdzhNJ4YskuX1LJoXHdUWuTSzJBPQ4Ys~l4av6MNZfSUUIuiSAopl-YKESBq-NYm6AwxsPQWHc8OoqjLLnwOzCUbcEsJrb5w2F5w35KivVevEzMdPvtl-KBI8GYwt~Yl--1PEy8ZHbqXOyCnDg__&Key-Pair-Id=KNBS2THMRC385
            - name: オーバーフロッシャー
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/0199e455872acba1ab8ef0040eca7f41afca48c1f9ad2c5d274323d6dbc49133_0.png?Expires=1704844800&Signature=lMhgL84E-gtCLgbojKHdiXWYZhbcwQTaAWXmfLQjo6bT4Kl8vRiyqisxnVwjzqmnGGJD0co2w4mAfAIHOQAOxdz5h5F3zcWMzgYP5SlbdY-ZhH-yLpAeJbbm6Ql6FzftV~yC3VdjgJmS2ccx1cPwZyZ5wiFdX9niLKwHFJtUlP9HBKHm90gmpxTUI6GQnq0pgrpTiPnJqF3rVGIljiAUX8xPO1b-FPYk3MmhUELWBId-Ggbyg6U3PNVLSXJMJmqpu9ElJ2B7iNVdqEPauUs~hC1gerK~aTLRIEG2jVbZVFluze~EX-rnbbeTMrCajBFQn0qZiA4ZBIHhD2Ly70HhFg__&Key-Pair-Id=KNBS2THMRC385
            - name: トライストリンガー
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/676d9f49276f171a93ac06646c0fbdfbeb8c3d0284a057aee306404a6034ffef_0.png?Expires=1704844800&Signature=KCYJWaXXFW4pa3IJYpvasTTg~~Re5LeBuO6UnjIeTe1E4QvGWNj-I9PZf3Rx3GMw9NkFP44NRi8bkBdUpoK3MRKZRwW2tavBrRqZuaeCuT9ij~NAvNL50r6pgo4tdowWE-tENw1HCCVf68IGrMMDH7dcsoYufTvzcsOUupH5rHS3-Zi6MB3M35PFLtQDxaMFAMivH-rhzw6gjXV~JGgHuHl0IiYCBiRWYow98Y4u02GxzNL4ALIjmwlxpPAKXAnp9-iZ-t4-4cjB-jw0V-sutg1FXJgptykaCNV301uM5dQyxKdqUCI~WKvgl-3C1DvOvnNvtf41eH8jpOSNLztrGw__&Key-Pair-Id=KNBS2THMRC385
            nextHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDgxN1QxNTIxNTZfZDQ1NjVmYzctYTI4MC00MGMwLTgwMWYtMTg0MzA1MDgwODYx
            previousHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDgxN1QxNTA3NTVfZDQ1NjVmYzctYTI4MC00MGMwLTgwMWYtMTg0MzA1MDgwODYx
            resultWave: 0
            coopStage:
              name: ムニ・エール海洋発電所
              id: Q29vcFN0YWdlLTc=
            afterGrade:
              name: でんせつ
              id: Q29vcEdyYWRlLTg=
            afterGradePoint: 180
            gradePointDiff: UP
            bossResult:
            myResult:
              deliverCount: 542
            memberResults:
            - deliverCount: 1134
            - deliverCount: 687
            - deliverCount: 996
            waveResults:
            - teamDeliverCount: 52
            - teamDeliverCount: 54
            - teamDeliverCount: 48
          - id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDgxN1QxNTA3NTVfZDQ1NjVmYzctYTI4MC00MGMwLTgwMWYtMTg0MzA1MDgwODYx
            weapons:
            - name: ドライブワイパー
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/3aa72d418643038a9e3248af734b0d6a0bf3d3bf9793d75912b1b959f93c2258_0.png?Expires=1704844800&Signature=GuDQ5NDwktGPMWalOLv~UKM6z8U2zHaggaSh80ggFU1ZNQWPzXlT~2gMD6029lEZbQbChROpdCmq1f~lL5S97iIjYBJBwBR-YjLISowzU5mNTwNc-2JCJdGONejKwoFp5HcwYpbk2nzLdogXsLvnANahc50rkt84tx5ZhzaBTLAl3GDBNlWHqYicpxWpM8EOQ2SfS2bNemEz2A767qnD4WwSORCQYg5~Fw2QF-7bgv2oUeJagNpD6ydNPGkCyQ1qZRUDbMJNn3cVAoXJffRKf8mfB9vH6x9kEnCZ8VUKBtwjnof19ahJQgtLcXTOo1aT1PNJGt36gKmeAUuxHAiEPA__&Key-Pair-Id=KNBS2THMRC385
            - name: クアッドホッパーブラック
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/e68609e51d30dfb13e1ea996e46995ed1f7cf561caef0fe96314966d0a039109_0.png?Expires=1704844800&Signature=Jh-xT10a-IchDF557-5QYrJZTYHjj8Ic1E8bfw3oU0bc8inq3y84nN0D284frsaTj2GM2BXvW6DJGchU18tcFLoM2it9UrRuKeV3P5miQQMKXxa2IL0-H6~sfR2CWrf-zuxukoSmLm-l4oWmLzNr1AM2-vW~55KzkGfh8PK6bhRucgHlueAaCWzTOkOkpV9x9UgnYdzhNJ4YskuX1LJoXHdUWuTSzJBPQ4Ys~l4av6MNZfSUUIuiSAopl-YKESBq-NYm6AwxsPQWHc8OoqjLLnwOzCUbcEsJrb5w2F5w35KivVevEzMdPvtl-KBI8GYwt~Yl--1PEy8ZHbqXOyCnDg__&Key-Pair-Id=KNBS2THMRC385
            - name: オーバーフロッシャー
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/0199e455872acba1ab8ef0040eca7f41afca48c1f9ad2c5d274323d6dbc49133_0.png?Expires=1704844800&Signature=lMhgL84E-gtCLgbojKHdiXWYZhbcwQTaAWXmfLQjo6bT4Kl8vRiyqisxnVwjzqmnGGJD0co2w4mAfAIHOQAOxdz5h5F3zcWMzgYP5SlbdY-ZhH-yLpAeJbbm6Ql6FzftV~yC3VdjgJmS2ccx1cPwZyZ5wiFdX9niLKwHFJtUlP9HBKHm90gmpxTUI6GQnq0pgrpTiPnJqF3rVGIljiAUX8xPO1b-FPYk3MmhUELWBId-Ggbyg6U3PNVLSXJMJmqpu9ElJ2B7iNVdqEPauUs~hC1gerK~aTLRIEG2jVbZVFluze~EX-rnbbeTMrCajBFQn0qZiA4ZBIHhD2Ly70HhFg__&Key-Pair-Id=KNBS2THMRC385
            - name: トライストリンガー
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/676d9f49276f171a93ac06646c0fbdfbeb8c3d0284a057aee306404a6034ffef_0.png?Expires=1704844800&Signature=KCYJWaXXFW4pa3IJYpvasTTg~~Re5LeBuO6UnjIeTe1E4QvGWNj-I9PZf3Rx3GMw9NkFP44NRi8bkBdUpoK3MRKZRwW2tavBrRqZuaeCuT9ij~NAvNL50r6pgo4tdowWE-tENw1HCCVf68IGrMMDH7dcsoYufTvzcsOUupH5rHS3-Zi6MB3M35PFLtQDxaMFAMivH-rhzw6gjXV~JGgHuHl0IiYCBiRWYow98Y4u02GxzNL4ALIjmwlxpPAKXAnp9-iZ-t4-4cjB-jw0V-sutg1FXJgptykaCNV301uM5dQyxKdqUCI~WKvgl-3C1DvOvnNvtf41eH8jpOSNLztrGw__&Key-Pair-Id=KNBS2THMRC385
            nextHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDgxN1QxNTE0NTVfZDQ1NjVmYzctYTI4MC00MGMwLTgwMWYtMTg0MzA1MDgwODYx
            previousHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDgxN1QxNTAwNTFfZDQ1NjVmYzctYTI4MC00MGMwLTgwMWYtMTg0MzA1MDgwODYx
            resultWave: 0
            coopStage:
              name: ムニ・エール海洋発電所
              id: Q29vcFN0YWdlLTc=
            afterGrade:
              name: でんせつ
              id: Q29vcEdyYWRlLTg=
            afterGradePoint: 160
            gradePointDiff: UP
            bossResult:
            myResult:
              deliverCount: 818
            memberResults:
            - deliverCount: 939
            - deliverCount: 892
            - deliverCount: 1226
            waveResults:
            - teamDeliverCount: 68
            - teamDeliverCount: 56
            - teamDeliverCount: 63
          - id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDgxN1QxNTAwNTFfZDQ1NjVmYzctYTI4MC00MGMwLTgwMWYtMTg0MzA1MDgwODYx
            weapons:
            - name: ドライブワイパー
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/3aa72d418643038a9e3248af734b0d6a0bf3d3bf9793d75912b1b959f93c2258_0.png?Expires=1704844800&Signature=GuDQ5NDwktGPMWalOLv~UKM6z8U2zHaggaSh80ggFU1ZNQWPzXlT~2gMD6029lEZbQbChROpdCmq1f~lL5S97iIjYBJBwBR-YjLISowzU5mNTwNc-2JCJdGONejKwoFp5HcwYpbk2nzLdogXsLvnANahc50rkt84tx5ZhzaBTLAl3GDBNlWHqYicpxWpM8EOQ2SfS2bNemEz2A767qnD4WwSORCQYg5~Fw2QF-7bgv2oUeJagNpD6ydNPGkCyQ1qZRUDbMJNn3cVAoXJffRKf8mfB9vH6x9kEnCZ8VUKBtwjnof19ahJQgtLcXTOo1aT1PNJGt36gKmeAUuxHAiEPA__&Key-Pair-Id=KNBS2THMRC385
            - name: クアッドホッパーブラック
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/e68609e51d30dfb13e1ea996e46995ed1f7cf561caef0fe96314966d0a039109_0.png?Expires=1704844800&Signature=Jh-xT10a-IchDF557-5QYrJZTYHjj8Ic1E8bfw3oU0bc8inq3y84nN0D284frsaTj2GM2BXvW6DJGchU18tcFLoM2it9UrRuKeV3P5miQQMKXxa2IL0-H6~sfR2CWrf-zuxukoSmLm-l4oWmLzNr1AM2-vW~55KzkGfh8PK6bhRucgHlueAaCWzTOkOkpV9x9UgnYdzhNJ4YskuX1LJoXHdUWuTSzJBPQ4Ys~l4av6MNZfSUUIuiSAopl-YKESBq-NYm6AwxsPQWHc8OoqjLLnwOzCUbcEsJrb5w2F5w35KivVevEzMdPvtl-KBI8GYwt~Yl--1PEy8ZHbqXOyCnDg__&Key-Pair-Id=KNBS2THMRC385
            - name: オーバーフロッシャー
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/0199e455872acba1ab8ef0040eca7f41afca48c1f9ad2c5d274323d6dbc49133_0.png?Expires=1704844800&Signature=lMhgL84E-gtCLgbojKHdiXWYZhbcwQTaAWXmfLQjo6bT4Kl8vRiyqisxnVwjzqmnGGJD0co2w4mAfAIHOQAOxdz5h5F3zcWMzgYP5SlbdY-ZhH-yLpAeJbbm6Ql6FzftV~yC3VdjgJmS2ccx1cPwZyZ5wiFdX9niLKwHFJtUlP9HBKHm90gmpxTUI6GQnq0pgrpTiPnJqF3rVGIljiAUX8xPO1b-FPYk3MmhUELWBId-Ggbyg6U3PNVLSXJMJmqpu9ElJ2B7iNVdqEPauUs~hC1gerK~aTLRIEG2jVbZVFluze~EX-rnbbeTMrCajBFQn0qZiA4ZBIHhD2Ly70HhFg__&Key-Pair-Id=KNBS2THMRC385
            - name: トライストリンガー
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/676d9f49276f171a93ac06646c0fbdfbeb8c3d0284a057aee306404a6034ffef_0.png?Expires=1704844800&Signature=KCYJWaXXFW4pa3IJYpvasTTg~~Re5LeBuO6UnjIeTe1E4QvGWNj-I9PZf3Rx3GMw9NkFP44NRi8bkBdUpoK3MRKZRwW2tavBrRqZuaeCuT9ij~NAvNL50r6pgo4tdowWE-tENw1HCCVf68IGrMMDH7dcsoYufTvzcsOUupH5rHS3-Zi6MB3M35PFLtQDxaMFAMivH-rhzw6gjXV~JGgHuHl0IiYCBiRWYow98Y4u02GxzNL4ALIjmwlxpPAKXAnp9-iZ-t4-4cjB-jw0V-sutg1FXJgptykaCNV301uM5dQyxKdqUCI~WKvgl-3C1DvOvnNvtf41eH8jpOSNLztrGw__&Key-Pair-Id=KNBS2THMRC385
            nextHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDgxN1QxNTA3NTVfZDQ1NjVmYzctYTI4MC00MGMwLTgwMWYtMTg0MzA1MDgwODYx
            previousHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDgxN1QxNDUzNTJfZDQ1NjVmYzctYTI4MC00MGMwLTgwMWYtMTg0MzA1MDgwODYx
            resultWave: 0
            coopStage:
              name: ムニ・エール海洋発電所
              id: Q29vcFN0YWdlLTc=
            afterGrade:
              name: でんせつ
              id: Q29vcEdyYWRlLTg=
            afterGradePoint: 140
            gradePointDiff: UP
            bossResult:
            myResult:
              deliverCount: 657
            memberResults:
            - deliverCount: 880
            - deliverCount: 923
            - deliverCount: 1061
            waveResults:
            - teamDeliverCount: 64
            - teamDeliverCount: 50
            - teamDeliverCount: 51
          - id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDgxN1QxNDUzNTJfZDQ1NjVmYzctYTI4MC00MGMwLTgwMWYtMTg0MzA1MDgwODYx
            weapons:
            - name: ドライブワイパー
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/3aa72d418643038a9e3248af734b0d6a0bf3d3bf9793d75912b1b959f93c2258_0.png?Expires=1704844800&Signature=GuDQ5NDwktGPMWalOLv~UKM6z8U2zHaggaSh80ggFU1ZNQWPzXlT~2gMD6029lEZbQbChROpdCmq1f~lL5S97iIjYBJBwBR-YjLISowzU5mNTwNc-2JCJdGONejKwoFp5HcwYpbk2nzLdogXsLvnANahc50rkt84tx5ZhzaBTLAl3GDBNlWHqYicpxWpM8EOQ2SfS2bNemEz2A767qnD4WwSORCQYg5~Fw2QF-7bgv2oUeJagNpD6ydNPGkCyQ1qZRUDbMJNn3cVAoXJffRKf8mfB9vH6x9kEnCZ8VUKBtwjnof19ahJQgtLcXTOo1aT1PNJGt36gKmeAUuxHAiEPA__&Key-Pair-Id=KNBS2THMRC385
            - name: クアッドホッパーブラック
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/e68609e51d30dfb13e1ea996e46995ed1f7cf561caef0fe96314966d0a039109_0.png?Expires=1704844800&Signature=Jh-xT10a-IchDF557-5QYrJZTYHjj8Ic1E8bfw3oU0bc8inq3y84nN0D284frsaTj2GM2BXvW6DJGchU18tcFLoM2it9UrRuKeV3P5miQQMKXxa2IL0-H6~sfR2CWrf-zuxukoSmLm-l4oWmLzNr1AM2-vW~55KzkGfh8PK6bhRucgHlueAaCWzTOkOkpV9x9UgnYdzhNJ4YskuX1LJoXHdUWuTSzJBPQ4Ys~l4av6MNZfSUUIuiSAopl-YKESBq-NYm6AwxsPQWHc8OoqjLLnwOzCUbcEsJrb5w2F5w35KivVevEzMdPvtl-KBI8GYwt~Yl--1PEy8ZHbqXOyCnDg__&Key-Pair-Id=KNBS2THMRC385
            - name: オーバーフロッシャー
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/0199e455872acba1ab8ef0040eca7f41afca48c1f9ad2c5d274323d6dbc49133_0.png?Expires=1704844800&Signature=lMhgL84E-gtCLgbojKHdiXWYZhbcwQTaAWXmfLQjo6bT4Kl8vRiyqisxnVwjzqmnGGJD0co2w4mAfAIHOQAOxdz5h5F3zcWMzgYP5SlbdY-ZhH-yLpAeJbbm6Ql6FzftV~yC3VdjgJmS2ccx1cPwZyZ5wiFdX9niLKwHFJtUlP9HBKHm90gmpxTUI6GQnq0pgrpTiPnJqF3rVGIljiAUX8xPO1b-FPYk3MmhUELWBId-Ggbyg6U3PNVLSXJMJmqpu9ElJ2B7iNVdqEPauUs~hC1gerK~aTLRIEG2jVbZVFluze~EX-rnbbeTMrCajBFQn0qZiA4ZBIHhD2Ly70HhFg__&Key-Pair-Id=KNBS2THMRC385
            - name: トライストリンガー
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/676d9f49276f171a93ac06646c0fbdfbeb8c3d0284a057aee306404a6034ffef_0.png?Expires=1704844800&Signature=KCYJWaXXFW4pa3IJYpvasTTg~~Re5LeBuO6UnjIeTe1E4QvGWNj-I9PZf3Rx3GMw9NkFP44NRi8bkBdUpoK3MRKZRwW2tavBrRqZuaeCuT9ij~NAvNL50r6pgo4tdowWE-tENw1HCCVf68IGrMMDH7dcsoYufTvzcsOUupH5rHS3-Zi6MB3M35PFLtQDxaMFAMivH-rhzw6gjXV~JGgHuHl0IiYCBiRWYow98Y4u02GxzNL4ALIjmwlxpPAKXAnp9-iZ-t4-4cjB-jw0V-sutg1FXJgptykaCNV301uM5dQyxKdqUCI~WKvgl-3C1DvOvnNvtf41eH8jpOSNLztrGw__&Key-Pair-Id=KNBS2THMRC385
            nextHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDgxN1QxNTAwNTFfZDQ1NjVmYzctYTI4MC00MGMwLTgwMWYtMTg0MzA1MDgwODYx
            previousHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDgxN1QxNDQ1MjVfZDQ1NjVmYzctYTI4MC00MGMwLTgwMWYtMTg0MzA1MDgwODYx
            resultWave: 0
            coopStage:
              name: ムニ・エール海洋発電所
              id: Q29vcFN0YWdlLTc=
            afterGrade:
              name: でんせつ
              id: Q29vcEdyYWRlLTg=
            afterGradePoint: 120
            gradePointDiff: UP
            bossResult:
            myResult:
              deliverCount: 836
            memberResults:
            - deliverCount: 1225
            - deliverCount: 1039
            - deliverCount: 970
            waveResults:
            - teamDeliverCount: 73
            - teamDeliverCount: 60
            - teamDeliverCount: 53
          - id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDgxN1QxNDQ1MjVfZDQ1NjVmYzctYTI4MC00MGMwLTgwMWYtMTg0MzA1MDgwODYx
            weapons:
            - name: ドライブワイパー
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/3aa72d418643038a9e3248af734b0d6a0bf3d3bf9793d75912b1b959f93c2258_0.png?Expires=1704844800&Signature=GuDQ5NDwktGPMWalOLv~UKM6z8U2zHaggaSh80ggFU1ZNQWPzXlT~2gMD6029lEZbQbChROpdCmq1f~lL5S97iIjYBJBwBR-YjLISowzU5mNTwNc-2JCJdGONejKwoFp5HcwYpbk2nzLdogXsLvnANahc50rkt84tx5ZhzaBTLAl3GDBNlWHqYicpxWpM8EOQ2SfS2bNemEz2A767qnD4WwSORCQYg5~Fw2QF-7bgv2oUeJagNpD6ydNPGkCyQ1qZRUDbMJNn3cVAoXJffRKf8mfB9vH6x9kEnCZ8VUKBtwjnof19ahJQgtLcXTOo1aT1PNJGt36gKmeAUuxHAiEPA__&Key-Pair-Id=KNBS2THMRC385
            - name: クアッドホッパーブラック
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/e68609e51d30dfb13e1ea996e46995ed1f7cf561caef0fe96314966d0a039109_0.png?Expires=1704844800&Signature=Jh-xT10a-IchDF557-5QYrJZTYHjj8Ic1E8bfw3oU0bc8inq3y84nN0D284frsaTj2GM2BXvW6DJGchU18tcFLoM2it9UrRuKeV3P5miQQMKXxa2IL0-H6~sfR2CWrf-zuxukoSmLm-l4oWmLzNr1AM2-vW~55KzkGfh8PK6bhRucgHlueAaCWzTOkOkpV9x9UgnYdzhNJ4YskuX1LJoXHdUWuTSzJBPQ4Ys~l4av6MNZfSUUIuiSAopl-YKESBq-NYm6AwxsPQWHc8OoqjLLnwOzCUbcEsJrb5w2F5w35KivVevEzMdPvtl-KBI8GYwt~Yl--1PEy8ZHbqXOyCnDg__&Key-Pair-Id=KNBS2THMRC385
            - name: オーバーフロッシャー
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/0199e455872acba1ab8ef0040eca7f41afca48c1f9ad2c5d274323d6dbc49133_0.png?Expires=1704844800&Signature=lMhgL84E-gtCLgbojKHdiXWYZhbcwQTaAWXmfLQjo6bT4Kl8vRiyqisxnVwjzqmnGGJD0co2w4mAfAIHOQAOxdz5h5F3zcWMzgYP5SlbdY-ZhH-yLpAeJbbm6Ql6FzftV~yC3VdjgJmS2ccx1cPwZyZ5wiFdX9niLKwHFJtUlP9HBKHm90gmpxTUI6GQnq0pgrpTiPnJqF3rVGIljiAUX8xPO1b-FPYk3MmhUELWBId-Ggbyg6U3PNVLSXJMJmqpu9ElJ2B7iNVdqEPauUs~hC1gerK~aTLRIEG2jVbZVFluze~EX-rnbbeTMrCajBFQn0qZiA4ZBIHhD2Ly70HhFg__&Key-Pair-Id=KNBS2THMRC385
            - name: トライストリンガー
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/676d9f49276f171a93ac06646c0fbdfbeb8c3d0284a057aee306404a6034ffef_0.png?Expires=1704844800&Signature=KCYJWaXXFW4pa3IJYpvasTTg~~Re5LeBuO6UnjIeTe1E4QvGWNj-I9PZf3Rx3GMw9NkFP44NRi8bkBdUpoK3MRKZRwW2tavBrRqZuaeCuT9ij~NAvNL50r6pgo4tdowWE-tENw1HCCVf68IGrMMDH7dcsoYufTvzcsOUupH5rHS3-Zi6MB3M35PFLtQDxaMFAMivH-rhzw6gjXV~JGgHuHl0IiYCBiRWYow98Y4u02GxzNL4ALIjmwlxpPAKXAnp9-iZ-t4-4cjB-jw0V-sutg1FXJgptykaCNV301uM5dQyxKdqUCI~WKvgl-3C1DvOvnNvtf41eH8jpOSNLztrGw__&Key-Pair-Id=KNBS2THMRC385
            nextHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDgxN1QxNDUzNTJfZDQ1NjVmYzctYTI4MC00MGMwLTgwMWYtMTg0MzA1MDgwODYx
            previousHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDgxN1QxNDM3NDJfOTgzNDE0ZWMtNWNkNy00ZmQyLTg3MjUtZGM4NWQ1OWUxMjA2
            resultWave: 0
            coopStage:
              name: ムニ・エール海洋発電所
              id: Q29vcFN0YWdlLTc=
            afterGrade:
              name: でんせつ
              id: Q29vcEdyYWRlLTg=
            afterGradePoint: 100
            gradePointDiff: UP
            bossResult:
              hasDefeatBoss: true
              boss:
                name: タツ
                id: Q29vcEVuZW15LTI0
            myResult:
              deliverCount: 1117
            memberResults:
            - deliverCount: 1647
            - deliverCount: 1403
            - deliverCount: 1220
            waveResults:
            - teamDeliverCount: 66
            - teamDeliverCount: 57
            - teamDeliverCount: 36
            - teamDeliverCount:
          - id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDgxN1QxNDM3NDJfOTgzNDE0ZWMtNWNkNy00ZmQyLTg3MjUtZGM4NWQ1OWUxMjA2
            weapons:
            - name: ドライブワイパー
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/3aa72d418643038a9e3248af734b0d6a0bf3d3bf9793d75912b1b959f93c2258_0.png?Expires=1704844800&Signature=GuDQ5NDwktGPMWalOLv~UKM6z8U2zHaggaSh80ggFU1ZNQWPzXlT~2gMD6029lEZbQbChROpdCmq1f~lL5S97iIjYBJBwBR-YjLISowzU5mNTwNc-2JCJdGONejKwoFp5HcwYpbk2nzLdogXsLvnANahc50rkt84tx5ZhzaBTLAl3GDBNlWHqYicpxWpM8EOQ2SfS2bNemEz2A767qnD4WwSORCQYg5~Fw2QF-7bgv2oUeJagNpD6ydNPGkCyQ1qZRUDbMJNn3cVAoXJffRKf8mfB9vH6x9kEnCZ8VUKBtwjnof19ahJQgtLcXTOo1aT1PNJGt36gKmeAUuxHAiEPA__&Key-Pair-Id=KNBS2THMRC385
            - name: クアッドホッパーブラック
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/e68609e51d30dfb13e1ea996e46995ed1f7cf561caef0fe96314966d0a039109_0.png?Expires=1704844800&Signature=Jh-xT10a-IchDF557-5QYrJZTYHjj8Ic1E8bfw3oU0bc8inq3y84nN0D284frsaTj2GM2BXvW6DJGchU18tcFLoM2it9UrRuKeV3P5miQQMKXxa2IL0-H6~sfR2CWrf-zuxukoSmLm-l4oWmLzNr1AM2-vW~55KzkGfh8PK6bhRucgHlueAaCWzTOkOkpV9x9UgnYdzhNJ4YskuX1LJoXHdUWuTSzJBPQ4Ys~l4av6MNZfSUUIuiSAopl-YKESBq-NYm6AwxsPQWHc8OoqjLLnwOzCUbcEsJrb5w2F5w35KivVevEzMdPvtl-KBI8GYwt~Yl--1PEy8ZHbqXOyCnDg__&Key-Pair-Id=KNBS2THMRC385
            - name: オーバーフロッシャー
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/0199e455872acba1ab8ef0040eca7f41afca48c1f9ad2c5d274323d6dbc49133_0.png?Expires=1704844800&Signature=lMhgL84E-gtCLgbojKHdiXWYZhbcwQTaAWXmfLQjo6bT4Kl8vRiyqisxnVwjzqmnGGJD0co2w4mAfAIHOQAOxdz5h5F3zcWMzgYP5SlbdY-ZhH-yLpAeJbbm6Ql6FzftV~yC3VdjgJmS2ccx1cPwZyZ5wiFdX9niLKwHFJtUlP9HBKHm90gmpxTUI6GQnq0pgrpTiPnJqF3rVGIljiAUX8xPO1b-FPYk3MmhUELWBId-Ggbyg6U3PNVLSXJMJmqpu9ElJ2B7iNVdqEPauUs~hC1gerK~aTLRIEG2jVbZVFluze~EX-rnbbeTMrCajBFQn0qZiA4ZBIHhD2Ly70HhFg__&Key-Pair-Id=KNBS2THMRC385
            - name: トライストリンガー
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/676d9f49276f171a93ac06646c0fbdfbeb8c3d0284a057aee306404a6034ffef_0.png?Expires=1704844800&Signature=KCYJWaXXFW4pa3IJYpvasTTg~~Re5LeBuO6UnjIeTe1E4QvGWNj-I9PZf3Rx3GMw9NkFP44NRi8bkBdUpoK3MRKZRwW2tavBrRqZuaeCuT9ij~NAvNL50r6pgo4tdowWE-tENw1HCCVf68IGrMMDH7dcsoYufTvzcsOUupH5rHS3-Zi6MB3M35PFLtQDxaMFAMivH-rhzw6gjXV~JGgHuHl0IiYCBiRWYow98Y4u02GxzNL4ALIjmwlxpPAKXAnp9-iZ-t4-4cjB-jw0V-sutg1FXJgptykaCNV301uM5dQyxKdqUCI~WKvgl-3C1DvOvnNvtf41eH8jpOSNLztrGw__&Key-Pair-Id=KNBS2THMRC385
            nextHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDgxN1QxNDQ1MjVfZDQ1NjVmYzctYTI4MC00MGMwLTgwMWYtMTg0MzA1MDgwODYx
            previousHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDgxN1QxNDMwMDNfMzRmNGIwMGEtZTQxYy00MzJmLTgwZDItYzdhODBhNmFmNTdk
            resultWave: 0
            coopStage:
              name: ムニ・エール海洋発電所
              id: Q29vcFN0YWdlLTc=
            afterGrade:
              name: でんせつ
              id: Q29vcEdyYWRlLTg=
            afterGradePoint: 80
            gradePointDiff: UP
            bossResult:
            myResult:
              deliverCount: 993
            memberResults:
            - deliverCount: 1092
            - deliverCount: 1255
            - deliverCount: 892
            waveResults:
            - teamDeliverCount: 66
            - teamDeliverCount: 55
            - teamDeliverCount: 44
          - id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDgxN1QxNDMwMDNfMzRmNGIwMGEtZTQxYy00MzJmLTgwZDItYzdhODBhNmFmNTdk
            weapons:
            - name: ドライブワイパー
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/3aa72d418643038a9e3248af734b0d6a0bf3d3bf9793d75912b1b959f93c2258_0.png?Expires=1704844800&Signature=GuDQ5NDwktGPMWalOLv~UKM6z8U2zHaggaSh80ggFU1ZNQWPzXlT~2gMD6029lEZbQbChROpdCmq1f~lL5S97iIjYBJBwBR-YjLISowzU5mNTwNc-2JCJdGONejKwoFp5HcwYpbk2nzLdogXsLvnANahc50rkt84tx5ZhzaBTLAl3GDBNlWHqYicpxWpM8EOQ2SfS2bNemEz2A767qnD4WwSORCQYg5~Fw2QF-7bgv2oUeJagNpD6ydNPGkCyQ1qZRUDbMJNn3cVAoXJffRKf8mfB9vH6x9kEnCZ8VUKBtwjnof19ahJQgtLcXTOo1aT1PNJGt36gKmeAUuxHAiEPA__&Key-Pair-Id=KNBS2THMRC385
            - name: クアッドホッパーブラック
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/e68609e51d30dfb13e1ea996e46995ed1f7cf561caef0fe96314966d0a039109_0.png?Expires=1704844800&Signature=Jh-xT10a-IchDF557-5QYrJZTYHjj8Ic1E8bfw3oU0bc8inq3y84nN0D284frsaTj2GM2BXvW6DJGchU18tcFLoM2it9UrRuKeV3P5miQQMKXxa2IL0-H6~sfR2CWrf-zuxukoSmLm-l4oWmLzNr1AM2-vW~55KzkGfh8PK6bhRucgHlueAaCWzTOkOkpV9x9UgnYdzhNJ4YskuX1LJoXHdUWuTSzJBPQ4Ys~l4av6MNZfSUUIuiSAopl-YKESBq-NYm6AwxsPQWHc8OoqjLLnwOzCUbcEsJrb5w2F5w35KivVevEzMdPvtl-KBI8GYwt~Yl--1PEy8ZHbqXOyCnDg__&Key-Pair-Id=KNBS2THMRC385
            - name: オーバーフロッシャー
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/0199e455872acba1ab8ef0040eca7f41afca48c1f9ad2c5d274323d6dbc49133_0.png?Expires=1704844800&Signature=lMhgL84E-gtCLgbojKHdiXWYZhbcwQTaAWXmfLQjo6bT4Kl8vRiyqisxnVwjzqmnGGJD0co2w4mAfAIHOQAOxdz5h5F3zcWMzgYP5SlbdY-ZhH-yLpAeJbbm6Ql6FzftV~yC3VdjgJmS2ccx1cPwZyZ5wiFdX9niLKwHFJtUlP9HBKHm90gmpxTUI6GQnq0pgrpTiPnJqF3rVGIljiAUX8xPO1b-FPYk3MmhUELWBId-Ggbyg6U3PNVLSXJMJmqpu9ElJ2B7iNVdqEPauUs~hC1gerK~aTLRIEG2jVbZVFluze~EX-rnbbeTMrCajBFQn0qZiA4ZBIHhD2Ly70HhFg__&Key-Pair-Id=KNBS2THMRC385
            - name: トライストリンガー
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/676d9f49276f171a93ac06646c0fbdfbeb8c3d0284a057aee306404a6034ffef_0.png?Expires=1704844800&Signature=KCYJWaXXFW4pa3IJYpvasTTg~~Re5LeBuO6UnjIeTe1E4QvGWNj-I9PZf3Rx3GMw9NkFP44NRi8bkBdUpoK3MRKZRwW2tavBrRqZuaeCuT9ij~NAvNL50r6pgo4tdowWE-tENw1HCCVf68IGrMMDH7dcsoYufTvzcsOUupH5rHS3-Zi6MB3M35PFLtQDxaMFAMivH-rhzw6gjXV~JGgHuHl0IiYCBiRWYow98Y4u02GxzNL4ALIjmwlxpPAKXAnp9-iZ-t4-4cjB-jw0V-sutg1FXJgptykaCNV301uM5dQyxKdqUCI~WKvgl-3C1DvOvnNvtf41eH8jpOSNLztrGw__&Key-Pair-Id=KNBS2THMRC385
            nextHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDgxN1QxNDM3NDJfOTgzNDE0ZWMtNWNkNy00ZmQyLTg3MjUtZGM4NWQ1OWUxMjA2
            previousHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDcyM1QwNzQwMDZfZWMxNzg2MTctYTNjZS00YTI5LWI2ZGEtZDZlYWM2YzZkZTUw
            resultWave: 0
            coopStage:
              name: ムニ・エール海洋発電所
              id: Q29vcFN0YWdlLTc=
            afterGrade:
              name: でんせつ
              id: Q29vcEdyYWRlLTg=
            afterGradePoint: 60
            gradePointDiff: UP
            bossResult:
            myResult:
              deliverCount: 1017
            memberResults:
            - deliverCount: 1597
            - deliverCount: 1163
            - deliverCount: 1089
            waveResults:
            - teamDeliverCount: 30
            - teamDeliverCount: 49
            - teamDeliverCount: 36
      - startTime: '2023-07-22T00:00:00Z'
        endTime: '2023-07-23T16:00:00Z'
        mode: REGULAR
        playCount: 19
        rule: REGULAR
        highestResult:
          grade:
            name: でんせつ
            id: Q29vcEdyYWRlLTg=
          gradePoint: 420
          jobScore: 180
          trophy:
        historyDetails:
          nodes:
          - id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDcyM1QwNzQwMDZfZWMxNzg2MTctYTNjZS00YTI5LWI2ZGEtZDZlYWM2YzZkZTUw
            weapons:
            - name: スプラスピナー
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/32dbc48e000d5d2015468e1dafc05e7c24581a73e54e758af0c8b9e2db3db550_0.png?Expires=1704844800&Signature=SDl4Cuitzqdd10huMNzIHL-ZsewYWYPAByuEstkItEAmsDCsytbcY4p8MeSozXdmNQzJCrxrHtqqPOBBxuk8Lp7vEiqouiwuuIfcdZ~PEJY8rv~t6UBa73~Bh0EcCqoBLBhdBdcnnMs0~XrBpTKM-qX7dYIOXC-zZFWXeBB4C7X0nBb1Wz2Qy4M3kMNoLFvnxv5yb6-W5pdpP8YRM7wcA4g1It1bsyvlxlBxofyUcHmytlv4kIUvLzvY4iOXgrVDXQtugNzufzpsw~zQAtiryicQ9GGaobqtan6dLGuqqQL-jlgobu4iaiTviZagbfTqQFC5~7-rF-f9W2yPM9~OhQ__&Key-Pair-Id=KNBS2THMRC385
            - name: スプラシューター
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/e3874d7d504acf89488ad7f68d29a348caea1a41cd43bd9a272069b0c0466570_0.png?Expires=1704844800&Signature=TIB2P5Iwd6JKGiyYtq9GnZ7Ks4ibMHPYymHBbQjgtoOVkQ6UXm6G~qUIhC4v5Vjt6IT85-vY-RBIC1uBKPhWwcDgi8gX8iOeBAQ36GDGDrSTg3JHZbiS3rs2QzCou-gMdgvAzSjLYj4Me6ML8DjKKG6d6bik5BUsvqUdCBiEjjxOm51E8hKueVhthVdCn8SCZ1e7jsoS2T6cyjKtdTsS1jkE17BJQ~6meTQaYMOuq9VjMRaueJO2xA9lIVofgJfCQrrf2oT1zxE2c1zd4Anzu4CHy8hagtbFyCyzjFUHxA3OWb6YlXjyEkDJXMKzumyoSaiet58IKjDOhb0MZf6pbQ__&Key-Pair-Id=KNBS2THMRC385
            - name: ".96ガロン"
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/fe2b351799aa48fcb48154299ff0ccf0b0413fc291ffc49456e93db29d2f1db5_0.png?Expires=1704844800&Signature=lN1vhYKBX741nzDSIp~O63JGYNdt7TFEhMIFGBJBKgbeNMov-6MD6-JTwE2gU1KnvAOF0djpzugKgZz4kBeZ6BysFCeHYbypPAQOuMbE7cEQf~XDsFgB8p3S55TGKV2IKWMcYteAwT6G4Y8OJnspKN4XmewFVdsgtFA-4t44YYywEMiggkArxS4pq00FyIKVQskYsUy010J~dUonBH9B-aI0mh8afFz40DnX~i60ZIDCTdsKgvTQLqk8tCHOLhmFbPSu0ewCVKJW4OUsaiRYLfF7pqMkEBk~n9f7bdq-fUE6fp~O1nX30SWEHMqwzuFEdVUmbbcC-ygJUFvndEusoQ__&Key-Pair-Id=KNBS2THMRC385
            - name: ランダム
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/ui_img/473fffb2442075078d8bb7125744905abdeae651b6a5b7453ae295582e45f7d1_0.png?Expires=1704844800&Signature=eLsoNcKFcMpLOc6GXQ-5PKakhBYqbyLRv5GVUacwc-9sZG6QUz5Nos9L~Y9ws5bZpn2v-LBfGuKA3KtzyZwiRmq3V5w6X437PgTXnbzB8OWMHYC7J5N-kcpMFmJbfCcRxp8ADYZWCgyQHk3XDXQz-GgeLMkPtRM7fKVv1f5NNyRCLfzPN5Q-lotTRCRs0DgksaJ7x2UxGzLs5w3ixCApqiPCeCcWSlBo0sDT1lCsDUYHp~LAKcUXvidXszycGz4xbUqBwY9Q7QgM~1nYiloZf2D1GpTZD2jFsEIAwQZHeuDuQ5aD2kZFLkWJ65uHyi3T1NHxLahhkZi3Fdt3HSUCFA__&Key-Pair-Id=KNBS2THMRC385
            nextHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDgxN1QxNDMwMDNfMzRmNGIwMGEtZTQxYy00MzJmLTgwZDItYzdhODBhNmFmNTdk
            previousHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDcyM1QwNzMzMDFfZWMxNzg2MTctYTNjZS00YTI5LWI2ZGEtZDZlYWM2YzZkZTUw
            resultWave: 0
            coopStage:
              name: ムニ・エール海洋発電所
              id: Q29vcFN0YWdlLTc=
            afterGrade:
              name: でんせつ
              id: Q29vcEdyYWRlLTg=
            afterGradePoint: 420
            gradePointDiff: UP
            bossResult:
              hasDefeatBoss: true
              boss:
                name: ヨコヅナ
                id: Q29vcEVuZW15LTIz
            myResult:
              deliverCount: 2071
            memberResults:
            - deliverCount: 1345
            - deliverCount: 1140
            - deliverCount: 1895
            waveResults:
            - teamDeliverCount: 48
            - teamDeliverCount: 49
            - teamDeliverCount: 49
            - teamDeliverCount:
          - id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDcyM1QwNzMzMDFfZWMxNzg2MTctYTNjZS00YTI5LWI2ZGEtZDZlYWM2YzZkZTUw
            weapons:
            - name: スプラスピナー
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/32dbc48e000d5d2015468e1dafc05e7c24581a73e54e758af0c8b9e2db3db550_0.png?Expires=1704844800&Signature=SDl4Cuitzqdd10huMNzIHL-ZsewYWYPAByuEstkItEAmsDCsytbcY4p8MeSozXdmNQzJCrxrHtqqPOBBxuk8Lp7vEiqouiwuuIfcdZ~PEJY8rv~t6UBa73~Bh0EcCqoBLBhdBdcnnMs0~XrBpTKM-qX7dYIOXC-zZFWXeBB4C7X0nBb1Wz2Qy4M3kMNoLFvnxv5yb6-W5pdpP8YRM7wcA4g1It1bsyvlxlBxofyUcHmytlv4kIUvLzvY4iOXgrVDXQtugNzufzpsw~zQAtiryicQ9GGaobqtan6dLGuqqQL-jlgobu4iaiTviZagbfTqQFC5~7-rF-f9W2yPM9~OhQ__&Key-Pair-Id=KNBS2THMRC385
            - name: スプラシューター
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/e3874d7d504acf89488ad7f68d29a348caea1a41cd43bd9a272069b0c0466570_0.png?Expires=1704844800&Signature=TIB2P5Iwd6JKGiyYtq9GnZ7Ks4ibMHPYymHBbQjgtoOVkQ6UXm6G~qUIhC4v5Vjt6IT85-vY-RBIC1uBKPhWwcDgi8gX8iOeBAQ36GDGDrSTg3JHZbiS3rs2QzCou-gMdgvAzSjLYj4Me6ML8DjKKG6d6bik5BUsvqUdCBiEjjxOm51E8hKueVhthVdCn8SCZ1e7jsoS2T6cyjKtdTsS1jkE17BJQ~6meTQaYMOuq9VjMRaueJO2xA9lIVofgJfCQrrf2oT1zxE2c1zd4Anzu4CHy8hagtbFyCyzjFUHxA3OWb6YlXjyEkDJXMKzumyoSaiet58IKjDOhb0MZf6pbQ__&Key-Pair-Id=KNBS2THMRC385
            - name: ".96ガロン"
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/fe2b351799aa48fcb48154299ff0ccf0b0413fc291ffc49456e93db29d2f1db5_0.png?Expires=1704844800&Signature=lN1vhYKBX741nzDSIp~O63JGYNdt7TFEhMIFGBJBKgbeNMov-6MD6-JTwE2gU1KnvAOF0djpzugKgZz4kBeZ6BysFCeHYbypPAQOuMbE7cEQf~XDsFgB8p3S55TGKV2IKWMcYteAwT6G4Y8OJnspKN4XmewFVdsgtFA-4t44YYywEMiggkArxS4pq00FyIKVQskYsUy010J~dUonBH9B-aI0mh8afFz40DnX~i60ZIDCTdsKgvTQLqk8tCHOLhmFbPSu0ewCVKJW4OUsaiRYLfF7pqMkEBk~n9f7bdq-fUE6fp~O1nX30SWEHMqwzuFEdVUmbbcC-ygJUFvndEusoQ__&Key-Pair-Id=KNBS2THMRC385
            - name: ランダム
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/ui_img/473fffb2442075078d8bb7125744905abdeae651b6a5b7453ae295582e45f7d1_0.png?Expires=1704844800&Signature=eLsoNcKFcMpLOc6GXQ-5PKakhBYqbyLRv5GVUacwc-9sZG6QUz5Nos9L~Y9ws5bZpn2v-LBfGuKA3KtzyZwiRmq3V5w6X437PgTXnbzB8OWMHYC7J5N-kcpMFmJbfCcRxp8ADYZWCgyQHk3XDXQz-GgeLMkPtRM7fKVv1f5NNyRCLfzPN5Q-lotTRCRs0DgksaJ7x2UxGzLs5w3ixCApqiPCeCcWSlBo0sDT1lCsDUYHp~LAKcUXvidXszycGz4xbUqBwY9Q7QgM~1nYiloZf2D1GpTZD2jFsEIAwQZHeuDuQ5aD2kZFLkWJ65uHyi3T1NHxLahhkZi3Fdt3HSUCFA__&Key-Pair-Id=KNBS2THMRC385
            nextHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDcyM1QwNzQwMDZfZWMxNzg2MTctYTNjZS00YTI5LWI2ZGEtZDZlYWM2YzZkZTUw
            previousHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDcyM1QwNzI1NTRfZWMxNzg2MTctYTNjZS00YTI5LWI2ZGEtZDZlYWM2YzZkZTUw
            resultWave: 0
            coopStage:
              name: ムニ・エール海洋発電所
              id: Q29vcFN0YWdlLTc=
            afterGrade:
              name: でんせつ
              id: Q29vcEdyYWRlLTg=
            afterGradePoint: 400
            gradePointDiff: UP
            bossResult:
            myResult:
              deliverCount: 1011
            memberResults:
            - deliverCount: 656
            - deliverCount: 1015
            - deliverCount: 899
            waveResults:
            - teamDeliverCount: 39
            - teamDeliverCount: 36
            - teamDeliverCount: 53
          - id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDcyM1QwNzI1NTRfZWMxNzg2MTctYTNjZS00YTI5LWI2ZGEtZDZlYWM2YzZkZTUw
            weapons:
            - name: スプラスピナー
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/32dbc48e000d5d2015468e1dafc05e7c24581a73e54e758af0c8b9e2db3db550_0.png?Expires=1704844800&Signature=SDl4Cuitzqdd10huMNzIHL-ZsewYWYPAByuEstkItEAmsDCsytbcY4p8MeSozXdmNQzJCrxrHtqqPOBBxuk8Lp7vEiqouiwuuIfcdZ~PEJY8rv~t6UBa73~Bh0EcCqoBLBhdBdcnnMs0~XrBpTKM-qX7dYIOXC-zZFWXeBB4C7X0nBb1Wz2Qy4M3kMNoLFvnxv5yb6-W5pdpP8YRM7wcA4g1It1bsyvlxlBxofyUcHmytlv4kIUvLzvY4iOXgrVDXQtugNzufzpsw~zQAtiryicQ9GGaobqtan6dLGuqqQL-jlgobu4iaiTviZagbfTqQFC5~7-rF-f9W2yPM9~OhQ__&Key-Pair-Id=KNBS2THMRC385
            - name: スプラシューター
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/e3874d7d504acf89488ad7f68d29a348caea1a41cd43bd9a272069b0c0466570_0.png?Expires=1704844800&Signature=TIB2P5Iwd6JKGiyYtq9GnZ7Ks4ibMHPYymHBbQjgtoOVkQ6UXm6G~qUIhC4v5Vjt6IT85-vY-RBIC1uBKPhWwcDgi8gX8iOeBAQ36GDGDrSTg3JHZbiS3rs2QzCou-gMdgvAzSjLYj4Me6ML8DjKKG6d6bik5BUsvqUdCBiEjjxOm51E8hKueVhthVdCn8SCZ1e7jsoS2T6cyjKtdTsS1jkE17BJQ~6meTQaYMOuq9VjMRaueJO2xA9lIVofgJfCQrrf2oT1zxE2c1zd4Anzu4CHy8hagtbFyCyzjFUHxA3OWb6YlXjyEkDJXMKzumyoSaiet58IKjDOhb0MZf6pbQ__&Key-Pair-Id=KNBS2THMRC385
            - name: ".96ガロン"
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/fe2b351799aa48fcb48154299ff0ccf0b0413fc291ffc49456e93db29d2f1db5_0.png?Expires=1704844800&Signature=lN1vhYKBX741nzDSIp~O63JGYNdt7TFEhMIFGBJBKgbeNMov-6MD6-JTwE2gU1KnvAOF0djpzugKgZz4kBeZ6BysFCeHYbypPAQOuMbE7cEQf~XDsFgB8p3S55TGKV2IKWMcYteAwT6G4Y8OJnspKN4XmewFVdsgtFA-4t44YYywEMiggkArxS4pq00FyIKVQskYsUy010J~dUonBH9B-aI0mh8afFz40DnX~i60ZIDCTdsKgvTQLqk8tCHOLhmFbPSu0ewCVKJW4OUsaiRYLfF7pqMkEBk~n9f7bdq-fUE6fp~O1nX30SWEHMqwzuFEdVUmbbcC-ygJUFvndEusoQ__&Key-Pair-Id=KNBS2THMRC385
            - name: ランダム
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/ui_img/473fffb2442075078d8bb7125744905abdeae651b6a5b7453ae295582e45f7d1_0.png?Expires=1704844800&Signature=eLsoNcKFcMpLOc6GXQ-5PKakhBYqbyLRv5GVUacwc-9sZG6QUz5Nos9L~Y9ws5bZpn2v-LBfGuKA3KtzyZwiRmq3V5w6X437PgTXnbzB8OWMHYC7J5N-kcpMFmJbfCcRxp8ADYZWCgyQHk3XDXQz-GgeLMkPtRM7fKVv1f5NNyRCLfzPN5Q-lotTRCRs0DgksaJ7x2UxGzLs5w3ixCApqiPCeCcWSlBo0sDT1lCsDUYHp~LAKcUXvidXszycGz4xbUqBwY9Q7QgM~1nYiloZf2D1GpTZD2jFsEIAwQZHeuDuQ5aD2kZFLkWJ65uHyi3T1NHxLahhkZi3Fdt3HSUCFA__&Key-Pair-Id=KNBS2THMRC385
            nextHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDcyM1QwNzMzMDFfZWMxNzg2MTctYTNjZS00YTI5LWI2ZGEtZDZlYWM2YzZkZTUw
            previousHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDcyM1QwNzE4NDhfZWMxNzg2MTctYTNjZS00YTI5LWI2ZGEtZDZlYWM2YzZkZTUw
            resultWave: 0
            coopStage:
              name: ムニ・エール海洋発電所
              id: Q29vcFN0YWdlLTc=
            afterGrade:
              name: でんせつ
              id: Q29vcEdyYWRlLTg=
            afterGradePoint: 380
            gradePointDiff: UP
            bossResult:
            myResult:
              deliverCount: 766
            memberResults:
            - deliverCount: 855
            - deliverCount: 776
            - deliverCount: 1022
            waveResults:
            - teamDeliverCount: 49
            - teamDeliverCount: 44
            - teamDeliverCount: 52
          - id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDcyM1QwNzE4NDhfZWMxNzg2MTctYTNjZS00YTI5LWI2ZGEtZDZlYWM2YzZkZTUw
            weapons:
            - name: スプラスピナー
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/32dbc48e000d5d2015468e1dafc05e7c24581a73e54e758af0c8b9e2db3db550_0.png?Expires=1704844800&Signature=SDl4Cuitzqdd10huMNzIHL-ZsewYWYPAByuEstkItEAmsDCsytbcY4p8MeSozXdmNQzJCrxrHtqqPOBBxuk8Lp7vEiqouiwuuIfcdZ~PEJY8rv~t6UBa73~Bh0EcCqoBLBhdBdcnnMs0~XrBpTKM-qX7dYIOXC-zZFWXeBB4C7X0nBb1Wz2Qy4M3kMNoLFvnxv5yb6-W5pdpP8YRM7wcA4g1It1bsyvlxlBxofyUcHmytlv4kIUvLzvY4iOXgrVDXQtugNzufzpsw~zQAtiryicQ9GGaobqtan6dLGuqqQL-jlgobu4iaiTviZagbfTqQFC5~7-rF-f9W2yPM9~OhQ__&Key-Pair-Id=KNBS2THMRC385
            - name: スプラシューター
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/e3874d7d504acf89488ad7f68d29a348caea1a41cd43bd9a272069b0c0466570_0.png?Expires=1704844800&Signature=TIB2P5Iwd6JKGiyYtq9GnZ7Ks4ibMHPYymHBbQjgtoOVkQ6UXm6G~qUIhC4v5Vjt6IT85-vY-RBIC1uBKPhWwcDgi8gX8iOeBAQ36GDGDrSTg3JHZbiS3rs2QzCou-gMdgvAzSjLYj4Me6ML8DjKKG6d6bik5BUsvqUdCBiEjjxOm51E8hKueVhthVdCn8SCZ1e7jsoS2T6cyjKtdTsS1jkE17BJQ~6meTQaYMOuq9VjMRaueJO2xA9lIVofgJfCQrrf2oT1zxE2c1zd4Anzu4CHy8hagtbFyCyzjFUHxA3OWb6YlXjyEkDJXMKzumyoSaiet58IKjDOhb0MZf6pbQ__&Key-Pair-Id=KNBS2THMRC385
            - name: ".96ガロン"
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/fe2b351799aa48fcb48154299ff0ccf0b0413fc291ffc49456e93db29d2f1db5_0.png?Expires=1704844800&Signature=lN1vhYKBX741nzDSIp~O63JGYNdt7TFEhMIFGBJBKgbeNMov-6MD6-JTwE2gU1KnvAOF0djpzugKgZz4kBeZ6BysFCeHYbypPAQOuMbE7cEQf~XDsFgB8p3S55TGKV2IKWMcYteAwT6G4Y8OJnspKN4XmewFVdsgtFA-4t44YYywEMiggkArxS4pq00FyIKVQskYsUy010J~dUonBH9B-aI0mh8afFz40DnX~i60ZIDCTdsKgvTQLqk8tCHOLhmFbPSu0ewCVKJW4OUsaiRYLfF7pqMkEBk~n9f7bdq-fUE6fp~O1nX30SWEHMqwzuFEdVUmbbcC-ygJUFvndEusoQ__&Key-Pair-Id=KNBS2THMRC385
            - name: ランダム
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/ui_img/473fffb2442075078d8bb7125744905abdeae651b6a5b7453ae295582e45f7d1_0.png?Expires=1704844800&Signature=eLsoNcKFcMpLOc6GXQ-5PKakhBYqbyLRv5GVUacwc-9sZG6QUz5Nos9L~Y9ws5bZpn2v-LBfGuKA3KtzyZwiRmq3V5w6X437PgTXnbzB8OWMHYC7J5N-kcpMFmJbfCcRxp8ADYZWCgyQHk3XDXQz-GgeLMkPtRM7fKVv1f5NNyRCLfzPN5Q-lotTRCRs0DgksaJ7x2UxGzLs5w3ixCApqiPCeCcWSlBo0sDT1lCsDUYHp~LAKcUXvidXszycGz4xbUqBwY9Q7QgM~1nYiloZf2D1GpTZD2jFsEIAwQZHeuDuQ5aD2kZFLkWJ65uHyi3T1NHxLahhkZi3Fdt3HSUCFA__&Key-Pair-Id=KNBS2THMRC385
            nextHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDcyM1QwNzI1NTRfZWMxNzg2MTctYTNjZS00YTI5LWI2ZGEtZDZlYWM2YzZkZTUw
            previousHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDcyM1QwNzExNDFfZWMxNzg2MTctYTNjZS00YTI5LWI2ZGEtZDZlYWM2YzZkZTUw
            resultWave: 0
            coopStage:
              name: ムニ・エール海洋発電所
              id: Q29vcFN0YWdlLTc=
            afterGrade:
              name: でんせつ
              id: Q29vcEdyYWRlLTg=
            afterGradePoint: 360
            gradePointDiff: UP
            bossResult:
            myResult:
              deliverCount: 744
            memberResults:
            - deliverCount: 1331
            - deliverCount: 787
            - deliverCount: 871
            waveResults:
            - teamDeliverCount: 45
            - teamDeliverCount: 44
            - teamDeliverCount: 51
          - id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDcyM1QwNzExNDFfZWMxNzg2MTctYTNjZS00YTI5LWI2ZGEtZDZlYWM2YzZkZTUw
            weapons:
            - name: スプラスピナー
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/32dbc48e000d5d2015468e1dafc05e7c24581a73e54e758af0c8b9e2db3db550_0.png?Expires=1704844800&Signature=SDl4Cuitzqdd10huMNzIHL-ZsewYWYPAByuEstkItEAmsDCsytbcY4p8MeSozXdmNQzJCrxrHtqqPOBBxuk8Lp7vEiqouiwuuIfcdZ~PEJY8rv~t6UBa73~Bh0EcCqoBLBhdBdcnnMs0~XrBpTKM-qX7dYIOXC-zZFWXeBB4C7X0nBb1Wz2Qy4M3kMNoLFvnxv5yb6-W5pdpP8YRM7wcA4g1It1bsyvlxlBxofyUcHmytlv4kIUvLzvY4iOXgrVDXQtugNzufzpsw~zQAtiryicQ9GGaobqtan6dLGuqqQL-jlgobu4iaiTviZagbfTqQFC5~7-rF-f9W2yPM9~OhQ__&Key-Pair-Id=KNBS2THMRC385
            - name: スプラシューター
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/e3874d7d504acf89488ad7f68d29a348caea1a41cd43bd9a272069b0c0466570_0.png?Expires=1704844800&Signature=TIB2P5Iwd6JKGiyYtq9GnZ7Ks4ibMHPYymHBbQjgtoOVkQ6UXm6G~qUIhC4v5Vjt6IT85-vY-RBIC1uBKPhWwcDgi8gX8iOeBAQ36GDGDrSTg3JHZbiS3rs2QzCou-gMdgvAzSjLYj4Me6ML8DjKKG6d6bik5BUsvqUdCBiEjjxOm51E8hKueVhthVdCn8SCZ1e7jsoS2T6cyjKtdTsS1jkE17BJQ~6meTQaYMOuq9VjMRaueJO2xA9lIVofgJfCQrrf2oT1zxE2c1zd4Anzu4CHy8hagtbFyCyzjFUHxA3OWb6YlXjyEkDJXMKzumyoSaiet58IKjDOhb0MZf6pbQ__&Key-Pair-Id=KNBS2THMRC385
            - name: ".96ガロン"
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/fe2b351799aa48fcb48154299ff0ccf0b0413fc291ffc49456e93db29d2f1db5_0.png?Expires=1704844800&Signature=lN1vhYKBX741nzDSIp~O63JGYNdt7TFEhMIFGBJBKgbeNMov-6MD6-JTwE2gU1KnvAOF0djpzugKgZz4kBeZ6BysFCeHYbypPAQOuMbE7cEQf~XDsFgB8p3S55TGKV2IKWMcYteAwT6G4Y8OJnspKN4XmewFVdsgtFA-4t44YYywEMiggkArxS4pq00FyIKVQskYsUy010J~dUonBH9B-aI0mh8afFz40DnX~i60ZIDCTdsKgvTQLqk8tCHOLhmFbPSu0ewCVKJW4OUsaiRYLfF7pqMkEBk~n9f7bdq-fUE6fp~O1nX30SWEHMqwzuFEdVUmbbcC-ygJUFvndEusoQ__&Key-Pair-Id=KNBS2THMRC385
            - name: ランダム
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/ui_img/473fffb2442075078d8bb7125744905abdeae651b6a5b7453ae295582e45f7d1_0.png?Expires=1704844800&Signature=eLsoNcKFcMpLOc6GXQ-5PKakhBYqbyLRv5GVUacwc-9sZG6QUz5Nos9L~Y9ws5bZpn2v-LBfGuKA3KtzyZwiRmq3V5w6X437PgTXnbzB8OWMHYC7J5N-kcpMFmJbfCcRxp8ADYZWCgyQHk3XDXQz-GgeLMkPtRM7fKVv1f5NNyRCLfzPN5Q-lotTRCRs0DgksaJ7x2UxGzLs5w3ixCApqiPCeCcWSlBo0sDT1lCsDUYHp~LAKcUXvidXszycGz4xbUqBwY9Q7QgM~1nYiloZf2D1GpTZD2jFsEIAwQZHeuDuQ5aD2kZFLkWJ65uHyi3T1NHxLahhkZi3Fdt3HSUCFA__&Key-Pair-Id=KNBS2THMRC385
            nextHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDcyM1QwNzE4NDhfZWMxNzg2MTctYTNjZS00YTI5LWI2ZGEtZDZlYWM2YzZkZTUw
            previousHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDcyM1QwNzA0MzVfZWMxNzg2MTctYTNjZS00YTI5LWI2ZGEtZDZlYWM2YzZkZTUw
            resultWave: 0
            coopStage:
              name: ムニ・エール海洋発電所
              id: Q29vcFN0YWdlLTc=
            afterGrade:
              name: でんせつ
              id: Q29vcEdyYWRlLTg=
            afterGradePoint: 340
            gradePointDiff: UP
            bossResult:
            myResult:
              deliverCount: 844
            memberResults:
            - deliverCount: 408
            - deliverCount: 696
            - deliverCount: 1053
            waveResults:
            - teamDeliverCount: 48
            - teamDeliverCount: 42
            - teamDeliverCount: 53
          - id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDcyM1QwNzA0MzVfZWMxNzg2MTctYTNjZS00YTI5LWI2ZGEtZDZlYWM2YzZkZTUw
            weapons:
            - name: スプラスピナー
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/32dbc48e000d5d2015468e1dafc05e7c24581a73e54e758af0c8b9e2db3db550_0.png?Expires=1704844800&Signature=SDl4Cuitzqdd10huMNzIHL-ZsewYWYPAByuEstkItEAmsDCsytbcY4p8MeSozXdmNQzJCrxrHtqqPOBBxuk8Lp7vEiqouiwuuIfcdZ~PEJY8rv~t6UBa73~Bh0EcCqoBLBhdBdcnnMs0~XrBpTKM-qX7dYIOXC-zZFWXeBB4C7X0nBb1Wz2Qy4M3kMNoLFvnxv5yb6-W5pdpP8YRM7wcA4g1It1bsyvlxlBxofyUcHmytlv4kIUvLzvY4iOXgrVDXQtugNzufzpsw~zQAtiryicQ9GGaobqtan6dLGuqqQL-jlgobu4iaiTviZagbfTqQFC5~7-rF-f9W2yPM9~OhQ__&Key-Pair-Id=KNBS2THMRC385
            - name: スプラシューター
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/e3874d7d504acf89488ad7f68d29a348caea1a41cd43bd9a272069b0c0466570_0.png?Expires=1704844800&Signature=TIB2P5Iwd6JKGiyYtq9GnZ7Ks4ibMHPYymHBbQjgtoOVkQ6UXm6G~qUIhC4v5Vjt6IT85-vY-RBIC1uBKPhWwcDgi8gX8iOeBAQ36GDGDrSTg3JHZbiS3rs2QzCou-gMdgvAzSjLYj4Me6ML8DjKKG6d6bik5BUsvqUdCBiEjjxOm51E8hKueVhthVdCn8SCZ1e7jsoS2T6cyjKtdTsS1jkE17BJQ~6meTQaYMOuq9VjMRaueJO2xA9lIVofgJfCQrrf2oT1zxE2c1zd4Anzu4CHy8hagtbFyCyzjFUHxA3OWb6YlXjyEkDJXMKzumyoSaiet58IKjDOhb0MZf6pbQ__&Key-Pair-Id=KNBS2THMRC385
            - name: ".96ガロン"
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/fe2b351799aa48fcb48154299ff0ccf0b0413fc291ffc49456e93db29d2f1db5_0.png?Expires=1704844800&Signature=lN1vhYKBX741nzDSIp~O63JGYNdt7TFEhMIFGBJBKgbeNMov-6MD6-JTwE2gU1KnvAOF0djpzugKgZz4kBeZ6BysFCeHYbypPAQOuMbE7cEQf~XDsFgB8p3S55TGKV2IKWMcYteAwT6G4Y8OJnspKN4XmewFVdsgtFA-4t44YYywEMiggkArxS4pq00FyIKVQskYsUy010J~dUonBH9B-aI0mh8afFz40DnX~i60ZIDCTdsKgvTQLqk8tCHOLhmFbPSu0ewCVKJW4OUsaiRYLfF7pqMkEBk~n9f7bdq-fUE6fp~O1nX30SWEHMqwzuFEdVUmbbcC-ygJUFvndEusoQ__&Key-Pair-Id=KNBS2THMRC385
            - name: ランダム
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/ui_img/473fffb2442075078d8bb7125744905abdeae651b6a5b7453ae295582e45f7d1_0.png?Expires=1704844800&Signature=eLsoNcKFcMpLOc6GXQ-5PKakhBYqbyLRv5GVUacwc-9sZG6QUz5Nos9L~Y9ws5bZpn2v-LBfGuKA3KtzyZwiRmq3V5w6X437PgTXnbzB8OWMHYC7J5N-kcpMFmJbfCcRxp8ADYZWCgyQHk3XDXQz-GgeLMkPtRM7fKVv1f5NNyRCLfzPN5Q-lotTRCRs0DgksaJ7x2UxGzLs5w3ixCApqiPCeCcWSlBo0sDT1lCsDUYHp~LAKcUXvidXszycGz4xbUqBwY9Q7QgM~1nYiloZf2D1GpTZD2jFsEIAwQZHeuDuQ5aD2kZFLkWJ65uHyi3T1NHxLahhkZi3Fdt3HSUCFA__&Key-Pair-Id=KNBS2THMRC385
            nextHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDcyM1QwNzExNDFfZWMxNzg2MTctYTNjZS00YTI5LWI2ZGEtZDZlYWM2YzZkZTUw
            previousHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDcyM1QwNjUzNDdfYWU4MDUzOTAtMDQ1Ni00ZWQzLWIyOTMtZGVkMTE1ZTY3NTE5
            resultWave: 0
            coopStage:
              name: ムニ・エール海洋発電所
              id: Q29vcFN0YWdlLTc=
            afterGrade:
              name: でんせつ
              id: Q29vcEdyYWRlLTg=
            afterGradePoint: 320
            gradePointDiff: UP
            bossResult:
            myResult:
              deliverCount: 1127
            memberResults:
            - deliverCount: 854
            - deliverCount: 639
            - deliverCount: 789
            waveResults:
            - teamDeliverCount: 52
            - teamDeliverCount: 44
            - teamDeliverCount: 43
          - id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDcyM1QwNjUzNDdfYWU4MDUzOTAtMDQ1Ni00ZWQzLWIyOTMtZGVkMTE1ZTY3NTE5
            weapons:
            - name: スプラスピナー
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/32dbc48e000d5d2015468e1dafc05e7c24581a73e54e758af0c8b9e2db3db550_0.png?Expires=1704844800&Signature=SDl4Cuitzqdd10huMNzIHL-ZsewYWYPAByuEstkItEAmsDCsytbcY4p8MeSozXdmNQzJCrxrHtqqPOBBxuk8Lp7vEiqouiwuuIfcdZ~PEJY8rv~t6UBa73~Bh0EcCqoBLBhdBdcnnMs0~XrBpTKM-qX7dYIOXC-zZFWXeBB4C7X0nBb1Wz2Qy4M3kMNoLFvnxv5yb6-W5pdpP8YRM7wcA4g1It1bsyvlxlBxofyUcHmytlv4kIUvLzvY4iOXgrVDXQtugNzufzpsw~zQAtiryicQ9GGaobqtan6dLGuqqQL-jlgobu4iaiTviZagbfTqQFC5~7-rF-f9W2yPM9~OhQ__&Key-Pair-Id=KNBS2THMRC385
            - name: スプラシューター
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/e3874d7d504acf89488ad7f68d29a348caea1a41cd43bd9a272069b0c0466570_0.png?Expires=1704844800&Signature=TIB2P5Iwd6JKGiyYtq9GnZ7Ks4ibMHPYymHBbQjgtoOVkQ6UXm6G~qUIhC4v5Vjt6IT85-vY-RBIC1uBKPhWwcDgi8gX8iOeBAQ36GDGDrSTg3JHZbiS3rs2QzCou-gMdgvAzSjLYj4Me6ML8DjKKG6d6bik5BUsvqUdCBiEjjxOm51E8hKueVhthVdCn8SCZ1e7jsoS2T6cyjKtdTsS1jkE17BJQ~6meTQaYMOuq9VjMRaueJO2xA9lIVofgJfCQrrf2oT1zxE2c1zd4Anzu4CHy8hagtbFyCyzjFUHxA3OWb6YlXjyEkDJXMKzumyoSaiet58IKjDOhb0MZf6pbQ__&Key-Pair-Id=KNBS2THMRC385
            - name: ".96ガロン"
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/fe2b351799aa48fcb48154299ff0ccf0b0413fc291ffc49456e93db29d2f1db5_0.png?Expires=1704844800&Signature=lN1vhYKBX741nzDSIp~O63JGYNdt7TFEhMIFGBJBKgbeNMov-6MD6-JTwE2gU1KnvAOF0djpzugKgZz4kBeZ6BysFCeHYbypPAQOuMbE7cEQf~XDsFgB8p3S55TGKV2IKWMcYteAwT6G4Y8OJnspKN4XmewFVdsgtFA-4t44YYywEMiggkArxS4pq00FyIKVQskYsUy010J~dUonBH9B-aI0mh8afFz40DnX~i60ZIDCTdsKgvTQLqk8tCHOLhmFbPSu0ewCVKJW4OUsaiRYLfF7pqMkEBk~n9f7bdq-fUE6fp~O1nX30SWEHMqwzuFEdVUmbbcC-ygJUFvndEusoQ__&Key-Pair-Id=KNBS2THMRC385
            - name: ランダム
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/ui_img/473fffb2442075078d8bb7125744905abdeae651b6a5b7453ae295582e45f7d1_0.png?Expires=1704844800&Signature=eLsoNcKFcMpLOc6GXQ-5PKakhBYqbyLRv5GVUacwc-9sZG6QUz5Nos9L~Y9ws5bZpn2v-LBfGuKA3KtzyZwiRmq3V5w6X437PgTXnbzB8OWMHYC7J5N-kcpMFmJbfCcRxp8ADYZWCgyQHk3XDXQz-GgeLMkPtRM7fKVv1f5NNyRCLfzPN5Q-lotTRCRs0DgksaJ7x2UxGzLs5w3ixCApqiPCeCcWSlBo0sDT1lCsDUYHp~LAKcUXvidXszycGz4xbUqBwY9Q7QgM~1nYiloZf2D1GpTZD2jFsEIAwQZHeuDuQ5aD2kZFLkWJ65uHyi3T1NHxLahhkZi3Fdt3HSUCFA__&Key-Pair-Id=KNBS2THMRC385
            nextHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDcyM1QwNzA0MzVfZWMxNzg2MTctYTNjZS00YTI5LWI2ZGEtZDZlYWM2YzZkZTUw
            previousHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDcyM1QwNjQ2NDZfYWU4MDUzOTAtMDQ1Ni00ZWQzLWIyOTMtZGVkMTE1ZTY3NTE5
            resultWave: 0
            coopStage:
              name: ムニ・エール海洋発電所
              id: Q29vcFN0YWdlLTc=
            afterGrade:
              name: でんせつ
              id: Q29vcEdyYWRlLTg=
            afterGradePoint: 300
            gradePointDiff: UP
            bossResult:
              hasDefeatBoss: true
              boss:
                name: ヨコヅナ
                id: Q29vcEVuZW15LTIz
            myResult:
              deliverCount: 943
            memberResults:
            - deliverCount: 1230
            - deliverCount: 991
            - deliverCount: 1267
            waveResults:
            - teamDeliverCount: 44
            - teamDeliverCount: 82
            - teamDeliverCount: 49
            - teamDeliverCount:
          - id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDcyM1QwNjQ2NDZfYWU4MDUzOTAtMDQ1Ni00ZWQzLWIyOTMtZGVkMTE1ZTY3NTE5
            weapons:
            - name: スプラスピナー
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/32dbc48e000d5d2015468e1dafc05e7c24581a73e54e758af0c8b9e2db3db550_0.png?Expires=1704844800&Signature=SDl4Cuitzqdd10huMNzIHL-ZsewYWYPAByuEstkItEAmsDCsytbcY4p8MeSozXdmNQzJCrxrHtqqPOBBxuk8Lp7vEiqouiwuuIfcdZ~PEJY8rv~t6UBa73~Bh0EcCqoBLBhdBdcnnMs0~XrBpTKM-qX7dYIOXC-zZFWXeBB4C7X0nBb1Wz2Qy4M3kMNoLFvnxv5yb6-W5pdpP8YRM7wcA4g1It1bsyvlxlBxofyUcHmytlv4kIUvLzvY4iOXgrVDXQtugNzufzpsw~zQAtiryicQ9GGaobqtan6dLGuqqQL-jlgobu4iaiTviZagbfTqQFC5~7-rF-f9W2yPM9~OhQ__&Key-Pair-Id=KNBS2THMRC385
            - name: スプラシューター
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/e3874d7d504acf89488ad7f68d29a348caea1a41cd43bd9a272069b0c0466570_0.png?Expires=1704844800&Signature=TIB2P5Iwd6JKGiyYtq9GnZ7Ks4ibMHPYymHBbQjgtoOVkQ6UXm6G~qUIhC4v5Vjt6IT85-vY-RBIC1uBKPhWwcDgi8gX8iOeBAQ36GDGDrSTg3JHZbiS3rs2QzCou-gMdgvAzSjLYj4Me6ML8DjKKG6d6bik5BUsvqUdCBiEjjxOm51E8hKueVhthVdCn8SCZ1e7jsoS2T6cyjKtdTsS1jkE17BJQ~6meTQaYMOuq9VjMRaueJO2xA9lIVofgJfCQrrf2oT1zxE2c1zd4Anzu4CHy8hagtbFyCyzjFUHxA3OWb6YlXjyEkDJXMKzumyoSaiet58IKjDOhb0MZf6pbQ__&Key-Pair-Id=KNBS2THMRC385
            - name: ".96ガロン"
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/fe2b351799aa48fcb48154299ff0ccf0b0413fc291ffc49456e93db29d2f1db5_0.png?Expires=1704844800&Signature=lN1vhYKBX741nzDSIp~O63JGYNdt7TFEhMIFGBJBKgbeNMov-6MD6-JTwE2gU1KnvAOF0djpzugKgZz4kBeZ6BysFCeHYbypPAQOuMbE7cEQf~XDsFgB8p3S55TGKV2IKWMcYteAwT6G4Y8OJnspKN4XmewFVdsgtFA-4t44YYywEMiggkArxS4pq00FyIKVQskYsUy010J~dUonBH9B-aI0mh8afFz40DnX~i60ZIDCTdsKgvTQLqk8tCHOLhmFbPSu0ewCVKJW4OUsaiRYLfF7pqMkEBk~n9f7bdq-fUE6fp~O1nX30SWEHMqwzuFEdVUmbbcC-ygJUFvndEusoQ__&Key-Pair-Id=KNBS2THMRC385
            - name: ランダム
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/ui_img/473fffb2442075078d8bb7125744905abdeae651b6a5b7453ae295582e45f7d1_0.png?Expires=1704844800&Signature=eLsoNcKFcMpLOc6GXQ-5PKakhBYqbyLRv5GVUacwc-9sZG6QUz5Nos9L~Y9ws5bZpn2v-LBfGuKA3KtzyZwiRmq3V5w6X437PgTXnbzB8OWMHYC7J5N-kcpMFmJbfCcRxp8ADYZWCgyQHk3XDXQz-GgeLMkPtRM7fKVv1f5NNyRCLfzPN5Q-lotTRCRs0DgksaJ7x2UxGzLs5w3ixCApqiPCeCcWSlBo0sDT1lCsDUYHp~LAKcUXvidXszycGz4xbUqBwY9Q7QgM~1nYiloZf2D1GpTZD2jFsEIAwQZHeuDuQ5aD2kZFLkWJ65uHyi3T1NHxLahhkZi3Fdt3HSUCFA__&Key-Pair-Id=KNBS2THMRC385
            nextHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDcyM1QwNjUzNDdfYWU4MDUzOTAtMDQ1Ni00ZWQzLWIyOTMtZGVkMTE1ZTY3NTE5
            previousHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDcyM1QwNjM5NDJfYWU4MDUzOTAtMDQ1Ni00ZWQzLWIyOTMtZGVkMTE1ZTY3NTE5
            resultWave: 0
            coopStage:
              name: ムニ・エール海洋発電所
              id: Q29vcFN0YWdlLTc=
            afterGrade:
              name: でんせつ
              id: Q29vcEdyYWRlLTg=
            afterGradePoint: 280
            gradePointDiff: UP
            bossResult:
            myResult:
              deliverCount: 1296
            memberResults:
            - deliverCount: 1596
            - deliverCount: 900
            - deliverCount: 1322
            waveResults:
            - teamDeliverCount: 59
            - teamDeliverCount: 34
            - teamDeliverCount: 43
          - id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDcyM1QwNjM5NDJfYWU4MDUzOTAtMDQ1Ni00ZWQzLWIyOTMtZGVkMTE1ZTY3NTE5
            weapons:
            - name: スプラスピナー
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/32dbc48e000d5d2015468e1dafc05e7c24581a73e54e758af0c8b9e2db3db550_0.png?Expires=1704844800&Signature=SDl4Cuitzqdd10huMNzIHL-ZsewYWYPAByuEstkItEAmsDCsytbcY4p8MeSozXdmNQzJCrxrHtqqPOBBxuk8Lp7vEiqouiwuuIfcdZ~PEJY8rv~t6UBa73~Bh0EcCqoBLBhdBdcnnMs0~XrBpTKM-qX7dYIOXC-zZFWXeBB4C7X0nBb1Wz2Qy4M3kMNoLFvnxv5yb6-W5pdpP8YRM7wcA4g1It1bsyvlxlBxofyUcHmytlv4kIUvLzvY4iOXgrVDXQtugNzufzpsw~zQAtiryicQ9GGaobqtan6dLGuqqQL-jlgobu4iaiTviZagbfTqQFC5~7-rF-f9W2yPM9~OhQ__&Key-Pair-Id=KNBS2THMRC385
            - name: スプラシューター
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/e3874d7d504acf89488ad7f68d29a348caea1a41cd43bd9a272069b0c0466570_0.png?Expires=1704844800&Signature=TIB2P5Iwd6JKGiyYtq9GnZ7Ks4ibMHPYymHBbQjgtoOVkQ6UXm6G~qUIhC4v5Vjt6IT85-vY-RBIC1uBKPhWwcDgi8gX8iOeBAQ36GDGDrSTg3JHZbiS3rs2QzCou-gMdgvAzSjLYj4Me6ML8DjKKG6d6bik5BUsvqUdCBiEjjxOm51E8hKueVhthVdCn8SCZ1e7jsoS2T6cyjKtdTsS1jkE17BJQ~6meTQaYMOuq9VjMRaueJO2xA9lIVofgJfCQrrf2oT1zxE2c1zd4Anzu4CHy8hagtbFyCyzjFUHxA3OWb6YlXjyEkDJXMKzumyoSaiet58IKjDOhb0MZf6pbQ__&Key-Pair-Id=KNBS2THMRC385
            - name: ".96ガロン"
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/fe2b351799aa48fcb48154299ff0ccf0b0413fc291ffc49456e93db29d2f1db5_0.png?Expires=1704844800&Signature=lN1vhYKBX741nzDSIp~O63JGYNdt7TFEhMIFGBJBKgbeNMov-6MD6-JTwE2gU1KnvAOF0djpzugKgZz4kBeZ6BysFCeHYbypPAQOuMbE7cEQf~XDsFgB8p3S55TGKV2IKWMcYteAwT6G4Y8OJnspKN4XmewFVdsgtFA-4t44YYywEMiggkArxS4pq00FyIKVQskYsUy010J~dUonBH9B-aI0mh8afFz40DnX~i60ZIDCTdsKgvTQLqk8tCHOLhmFbPSu0ewCVKJW4OUsaiRYLfF7pqMkEBk~n9f7bdq-fUE6fp~O1nX30SWEHMqwzuFEdVUmbbcC-ygJUFvndEusoQ__&Key-Pair-Id=KNBS2THMRC385
            - name: ランダム
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/ui_img/473fffb2442075078d8bb7125744905abdeae651b6a5b7453ae295582e45f7d1_0.png?Expires=1704844800&Signature=eLsoNcKFcMpLOc6GXQ-5PKakhBYqbyLRv5GVUacwc-9sZG6QUz5Nos9L~Y9ws5bZpn2v-LBfGuKA3KtzyZwiRmq3V5w6X437PgTXnbzB8OWMHYC7J5N-kcpMFmJbfCcRxp8ADYZWCgyQHk3XDXQz-GgeLMkPtRM7fKVv1f5NNyRCLfzPN5Q-lotTRCRs0DgksaJ7x2UxGzLs5w3ixCApqiPCeCcWSlBo0sDT1lCsDUYHp~LAKcUXvidXszycGz4xbUqBwY9Q7QgM~1nYiloZf2D1GpTZD2jFsEIAwQZHeuDuQ5aD2kZFLkWJ65uHyi3T1NHxLahhkZi3Fdt3HSUCFA__&Key-Pair-Id=KNBS2THMRC385
            nextHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDcyM1QwNjQ2NDZfYWU4MDUzOTAtMDQ1Ni00ZWQzLWIyOTMtZGVkMTE1ZTY3NTE5
            previousHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDcyM1QwNjMyMzZfYWU4MDUzOTAtMDQ1Ni00ZWQzLWIyOTMtZGVkMTE1ZTY3NTE5
            resultWave: 0
            coopStage:
              name: ムニ・エール海洋発電所
              id: Q29vcFN0YWdlLTc=
            afterGrade:
              name: でんせつ
              id: Q29vcEdyYWRlLTg=
            afterGradePoint: 260
            gradePointDiff: UP
            bossResult:
            myResult:
              deliverCount: 1199
            memberResults:
            - deliverCount: 1093
            - deliverCount: 784
            - deliverCount: 1065
            waveResults:
            - teamDeliverCount: 48
            - teamDeliverCount: 74
            - teamDeliverCount: 58
          - id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDcyM1QwNjMyMzZfYWU4MDUzOTAtMDQ1Ni00ZWQzLWIyOTMtZGVkMTE1ZTY3NTE5
            weapons:
            - name: スプラスピナー
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/32dbc48e000d5d2015468e1dafc05e7c24581a73e54e758af0c8b9e2db3db550_0.png?Expires=1704844800&Signature=SDl4Cuitzqdd10huMNzIHL-ZsewYWYPAByuEstkItEAmsDCsytbcY4p8MeSozXdmNQzJCrxrHtqqPOBBxuk8Lp7vEiqouiwuuIfcdZ~PEJY8rv~t6UBa73~Bh0EcCqoBLBhdBdcnnMs0~XrBpTKM-qX7dYIOXC-zZFWXeBB4C7X0nBb1Wz2Qy4M3kMNoLFvnxv5yb6-W5pdpP8YRM7wcA4g1It1bsyvlxlBxofyUcHmytlv4kIUvLzvY4iOXgrVDXQtugNzufzpsw~zQAtiryicQ9GGaobqtan6dLGuqqQL-jlgobu4iaiTviZagbfTqQFC5~7-rF-f9W2yPM9~OhQ__&Key-Pair-Id=KNBS2THMRC385
            - name: スプラシューター
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/e3874d7d504acf89488ad7f68d29a348caea1a41cd43bd9a272069b0c0466570_0.png?Expires=1704844800&Signature=TIB2P5Iwd6JKGiyYtq9GnZ7Ks4ibMHPYymHBbQjgtoOVkQ6UXm6G~qUIhC4v5Vjt6IT85-vY-RBIC1uBKPhWwcDgi8gX8iOeBAQ36GDGDrSTg3JHZbiS3rs2QzCou-gMdgvAzSjLYj4Me6ML8DjKKG6d6bik5BUsvqUdCBiEjjxOm51E8hKueVhthVdCn8SCZ1e7jsoS2T6cyjKtdTsS1jkE17BJQ~6meTQaYMOuq9VjMRaueJO2xA9lIVofgJfCQrrf2oT1zxE2c1zd4Anzu4CHy8hagtbFyCyzjFUHxA3OWb6YlXjyEkDJXMKzumyoSaiet58IKjDOhb0MZf6pbQ__&Key-Pair-Id=KNBS2THMRC385
            - name: ".96ガロン"
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/fe2b351799aa48fcb48154299ff0ccf0b0413fc291ffc49456e93db29d2f1db5_0.png?Expires=1704844800&Signature=lN1vhYKBX741nzDSIp~O63JGYNdt7TFEhMIFGBJBKgbeNMov-6MD6-JTwE2gU1KnvAOF0djpzugKgZz4kBeZ6BysFCeHYbypPAQOuMbE7cEQf~XDsFgB8p3S55TGKV2IKWMcYteAwT6G4Y8OJnspKN4XmewFVdsgtFA-4t44YYywEMiggkArxS4pq00FyIKVQskYsUy010J~dUonBH9B-aI0mh8afFz40DnX~i60ZIDCTdsKgvTQLqk8tCHOLhmFbPSu0ewCVKJW4OUsaiRYLfF7pqMkEBk~n9f7bdq-fUE6fp~O1nX30SWEHMqwzuFEdVUmbbcC-ygJUFvndEusoQ__&Key-Pair-Id=KNBS2THMRC385
            - name: ランダム
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/ui_img/473fffb2442075078d8bb7125744905abdeae651b6a5b7453ae295582e45f7d1_0.png?Expires=1704844800&Signature=eLsoNcKFcMpLOc6GXQ-5PKakhBYqbyLRv5GVUacwc-9sZG6QUz5Nos9L~Y9ws5bZpn2v-LBfGuKA3KtzyZwiRmq3V5w6X437PgTXnbzB8OWMHYC7J5N-kcpMFmJbfCcRxp8ADYZWCgyQHk3XDXQz-GgeLMkPtRM7fKVv1f5NNyRCLfzPN5Q-lotTRCRs0DgksaJ7x2UxGzLs5w3ixCApqiPCeCcWSlBo0sDT1lCsDUYHp~LAKcUXvidXszycGz4xbUqBwY9Q7QgM~1nYiloZf2D1GpTZD2jFsEIAwQZHeuDuQ5aD2kZFLkWJ65uHyi3T1NHxLahhkZi3Fdt3HSUCFA__&Key-Pair-Id=KNBS2THMRC385
            nextHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDcyM1QwNjM5NDJfYWU4MDUzOTAtMDQ1Ni00ZWQzLWIyOTMtZGVkMTE1ZTY3NTE5
            previousHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDcyMlQxNTQxNDRfMzhjOGM3MjQtMTY4Zi00NDJhLWFhMzUtMWY1MGNmMmFkMzk2
            resultWave: 0
            coopStage:
              name: ムニ・エール海洋発電所
              id: Q29vcFN0YWdlLTc=
            afterGrade:
              name: でんせつ
              id: Q29vcEdyYWRlLTg=
            afterGradePoint: 240
            gradePointDiff: UP
            bossResult:
            myResult:
              deliverCount: 1507
            memberResults:
            - deliverCount: 1002
            - deliverCount: 1575
            - deliverCount: 704
            waveResults:
            - teamDeliverCount: 65
            - teamDeliverCount: 40
            - teamDeliverCount: 36
          - id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDcyMlQxNTQxNDRfMzhjOGM3MjQtMTY4Zi00NDJhLWFhMzUtMWY1MGNmMmFkMzk2
            weapons:
            - name: スプラスピナー
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/32dbc48e000d5d2015468e1dafc05e7c24581a73e54e758af0c8b9e2db3db550_0.png?Expires=1704844800&Signature=SDl4Cuitzqdd10huMNzIHL-ZsewYWYPAByuEstkItEAmsDCsytbcY4p8MeSozXdmNQzJCrxrHtqqPOBBxuk8Lp7vEiqouiwuuIfcdZ~PEJY8rv~t6UBa73~Bh0EcCqoBLBhdBdcnnMs0~XrBpTKM-qX7dYIOXC-zZFWXeBB4C7X0nBb1Wz2Qy4M3kMNoLFvnxv5yb6-W5pdpP8YRM7wcA4g1It1bsyvlxlBxofyUcHmytlv4kIUvLzvY4iOXgrVDXQtugNzufzpsw~zQAtiryicQ9GGaobqtan6dLGuqqQL-jlgobu4iaiTviZagbfTqQFC5~7-rF-f9W2yPM9~OhQ__&Key-Pair-Id=KNBS2THMRC385
            - name: スプラシューター
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/e3874d7d504acf89488ad7f68d29a348caea1a41cd43bd9a272069b0c0466570_0.png?Expires=1704844800&Signature=TIB2P5Iwd6JKGiyYtq9GnZ7Ks4ibMHPYymHBbQjgtoOVkQ6UXm6G~qUIhC4v5Vjt6IT85-vY-RBIC1uBKPhWwcDgi8gX8iOeBAQ36GDGDrSTg3JHZbiS3rs2QzCou-gMdgvAzSjLYj4Me6ML8DjKKG6d6bik5BUsvqUdCBiEjjxOm51E8hKueVhthVdCn8SCZ1e7jsoS2T6cyjKtdTsS1jkE17BJQ~6meTQaYMOuq9VjMRaueJO2xA9lIVofgJfCQrrf2oT1zxE2c1zd4Anzu4CHy8hagtbFyCyzjFUHxA3OWb6YlXjyEkDJXMKzumyoSaiet58IKjDOhb0MZf6pbQ__&Key-Pair-Id=KNBS2THMRC385
            - name: ".96ガロン"
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/fe2b351799aa48fcb48154299ff0ccf0b0413fc291ffc49456e93db29d2f1db5_0.png?Expires=1704844800&Signature=lN1vhYKBX741nzDSIp~O63JGYNdt7TFEhMIFGBJBKgbeNMov-6MD6-JTwE2gU1KnvAOF0djpzugKgZz4kBeZ6BysFCeHYbypPAQOuMbE7cEQf~XDsFgB8p3S55TGKV2IKWMcYteAwT6G4Y8OJnspKN4XmewFVdsgtFA-4t44YYywEMiggkArxS4pq00FyIKVQskYsUy010J~dUonBH9B-aI0mh8afFz40DnX~i60ZIDCTdsKgvTQLqk8tCHOLhmFbPSu0ewCVKJW4OUsaiRYLfF7pqMkEBk~n9f7bdq-fUE6fp~O1nX30SWEHMqwzuFEdVUmbbcC-ygJUFvndEusoQ__&Key-Pair-Id=KNBS2THMRC385
            - name: ランダム
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/ui_img/473fffb2442075078d8bb7125744905abdeae651b6a5b7453ae295582e45f7d1_0.png?Expires=1704844800&Signature=eLsoNcKFcMpLOc6GXQ-5PKakhBYqbyLRv5GVUacwc-9sZG6QUz5Nos9L~Y9ws5bZpn2v-LBfGuKA3KtzyZwiRmq3V5w6X437PgTXnbzB8OWMHYC7J5N-kcpMFmJbfCcRxp8ADYZWCgyQHk3XDXQz-GgeLMkPtRM7fKVv1f5NNyRCLfzPN5Q-lotTRCRs0DgksaJ7x2UxGzLs5w3ixCApqiPCeCcWSlBo0sDT1lCsDUYHp~LAKcUXvidXszycGz4xbUqBwY9Q7QgM~1nYiloZf2D1GpTZD2jFsEIAwQZHeuDuQ5aD2kZFLkWJ65uHyi3T1NHxLahhkZi3Fdt3HSUCFA__&Key-Pair-Id=KNBS2THMRC385
            nextHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDcyM1QwNjMyMzZfYWU4MDUzOTAtMDQ1Ni00ZWQzLWIyOTMtZGVkMTE1ZTY3NTE5
            previousHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDcyMlQxNTM0NDNfMzhjOGM3MjQtMTY4Zi00NDJhLWFhMzUtMWY1MGNmMmFkMzk2
            resultWave: 0
            coopStage:
              name: ムニ・エール海洋発電所
              id: Q29vcFN0YWdlLTc=
            afterGrade:
              name: でんせつ
              id: Q29vcEdyYWRlLTg=
            afterGradePoint: 220
            gradePointDiff: UP
            bossResult:
              hasDefeatBoss: true
              boss:
                name: ヨコヅナ
                id: Q29vcEVuZW15LTIz
            myResult:
              deliverCount: 1188
            memberResults:
            - deliverCount: 1431
            - deliverCount: 1058
            - deliverCount: 1086
            waveResults:
            - teamDeliverCount: 56
            - teamDeliverCount: 30
            - teamDeliverCount: 47
            - teamDeliverCount:
          - id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDcyMlQxNTM0NDNfMzhjOGM3MjQtMTY4Zi00NDJhLWFhMzUtMWY1MGNmMmFkMzk2
            weapons:
            - name: スプラスピナー
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/32dbc48e000d5d2015468e1dafc05e7c24581a73e54e758af0c8b9e2db3db550_0.png?Expires=1704844800&Signature=SDl4Cuitzqdd10huMNzIHL-ZsewYWYPAByuEstkItEAmsDCsytbcY4p8MeSozXdmNQzJCrxrHtqqPOBBxuk8Lp7vEiqouiwuuIfcdZ~PEJY8rv~t6UBa73~Bh0EcCqoBLBhdBdcnnMs0~XrBpTKM-qX7dYIOXC-zZFWXeBB4C7X0nBb1Wz2Qy4M3kMNoLFvnxv5yb6-W5pdpP8YRM7wcA4g1It1bsyvlxlBxofyUcHmytlv4kIUvLzvY4iOXgrVDXQtugNzufzpsw~zQAtiryicQ9GGaobqtan6dLGuqqQL-jlgobu4iaiTviZagbfTqQFC5~7-rF-f9W2yPM9~OhQ__&Key-Pair-Id=KNBS2THMRC385
            - name: スプラシューター
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/e3874d7d504acf89488ad7f68d29a348caea1a41cd43bd9a272069b0c0466570_0.png?Expires=1704844800&Signature=TIB2P5Iwd6JKGiyYtq9GnZ7Ks4ibMHPYymHBbQjgtoOVkQ6UXm6G~qUIhC4v5Vjt6IT85-vY-RBIC1uBKPhWwcDgi8gX8iOeBAQ36GDGDrSTg3JHZbiS3rs2QzCou-gMdgvAzSjLYj4Me6ML8DjKKG6d6bik5BUsvqUdCBiEjjxOm51E8hKueVhthVdCn8SCZ1e7jsoS2T6cyjKtdTsS1jkE17BJQ~6meTQaYMOuq9VjMRaueJO2xA9lIVofgJfCQrrf2oT1zxE2c1zd4Anzu4CHy8hagtbFyCyzjFUHxA3OWb6YlXjyEkDJXMKzumyoSaiet58IKjDOhb0MZf6pbQ__&Key-Pair-Id=KNBS2THMRC385
            - name: ".96ガロン"
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/fe2b351799aa48fcb48154299ff0ccf0b0413fc291ffc49456e93db29d2f1db5_0.png?Expires=1704844800&Signature=lN1vhYKBX741nzDSIp~O63JGYNdt7TFEhMIFGBJBKgbeNMov-6MD6-JTwE2gU1KnvAOF0djpzugKgZz4kBeZ6BysFCeHYbypPAQOuMbE7cEQf~XDsFgB8p3S55TGKV2IKWMcYteAwT6G4Y8OJnspKN4XmewFVdsgtFA-4t44YYywEMiggkArxS4pq00FyIKVQskYsUy010J~dUonBH9B-aI0mh8afFz40DnX~i60ZIDCTdsKgvTQLqk8tCHOLhmFbPSu0ewCVKJW4OUsaiRYLfF7pqMkEBk~n9f7bdq-fUE6fp~O1nX30SWEHMqwzuFEdVUmbbcC-ygJUFvndEusoQ__&Key-Pair-Id=KNBS2THMRC385
            - name: ランダム
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/ui_img/473fffb2442075078d8bb7125744905abdeae651b6a5b7453ae295582e45f7d1_0.png?Expires=1704844800&Signature=eLsoNcKFcMpLOc6GXQ-5PKakhBYqbyLRv5GVUacwc-9sZG6QUz5Nos9L~Y9ws5bZpn2v-LBfGuKA3KtzyZwiRmq3V5w6X437PgTXnbzB8OWMHYC7J5N-kcpMFmJbfCcRxp8ADYZWCgyQHk3XDXQz-GgeLMkPtRM7fKVv1f5NNyRCLfzPN5Q-lotTRCRs0DgksaJ7x2UxGzLs5w3ixCApqiPCeCcWSlBo0sDT1lCsDUYHp~LAKcUXvidXszycGz4xbUqBwY9Q7QgM~1nYiloZf2D1GpTZD2jFsEIAwQZHeuDuQ5aD2kZFLkWJ65uHyi3T1NHxLahhkZi3Fdt3HSUCFA__&Key-Pair-Id=KNBS2THMRC385
            nextHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDcyMlQxNTQxNDRfMzhjOGM3MjQtMTY4Zi00NDJhLWFhMzUtMWY1MGNmMmFkMzk2
            previousHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDcyMlQxNTI3NDNfMzhjOGM3MjQtMTY4Zi00NDJhLWFhMzUtMWY1MGNmMmFkMzk2
            resultWave: 0
            coopStage:
              name: ムニ・エール海洋発電所
              id: Q29vcFN0YWdlLTc=
            afterGrade:
              name: でんせつ
              id: Q29vcEdyYWRlLTg=
            afterGradePoint: 200
            gradePointDiff: UP
            bossResult:
            myResult:
              deliverCount: 799
            memberResults:
            - deliverCount: 1005
            - deliverCount: 989
            - deliverCount: 1108
            waveResults:
            - teamDeliverCount: 61
            - teamDeliverCount: 33
            - teamDeliverCount: 41
          - id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDcyMlQxNTI3NDNfMzhjOGM3MjQtMTY4Zi00NDJhLWFhMzUtMWY1MGNmMmFkMzk2
            weapons:
            - name: スプラスピナー
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/32dbc48e000d5d2015468e1dafc05e7c24581a73e54e758af0c8b9e2db3db550_0.png?Expires=1704844800&Signature=SDl4Cuitzqdd10huMNzIHL-ZsewYWYPAByuEstkItEAmsDCsytbcY4p8MeSozXdmNQzJCrxrHtqqPOBBxuk8Lp7vEiqouiwuuIfcdZ~PEJY8rv~t6UBa73~Bh0EcCqoBLBhdBdcnnMs0~XrBpTKM-qX7dYIOXC-zZFWXeBB4C7X0nBb1Wz2Qy4M3kMNoLFvnxv5yb6-W5pdpP8YRM7wcA4g1It1bsyvlxlBxofyUcHmytlv4kIUvLzvY4iOXgrVDXQtugNzufzpsw~zQAtiryicQ9GGaobqtan6dLGuqqQL-jlgobu4iaiTviZagbfTqQFC5~7-rF-f9W2yPM9~OhQ__&Key-Pair-Id=KNBS2THMRC385
            - name: スプラシューター
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/e3874d7d504acf89488ad7f68d29a348caea1a41cd43bd9a272069b0c0466570_0.png?Expires=1704844800&Signature=TIB2P5Iwd6JKGiyYtq9GnZ7Ks4ibMHPYymHBbQjgtoOVkQ6UXm6G~qUIhC4v5Vjt6IT85-vY-RBIC1uBKPhWwcDgi8gX8iOeBAQ36GDGDrSTg3JHZbiS3rs2QzCou-gMdgvAzSjLYj4Me6ML8DjKKG6d6bik5BUsvqUdCBiEjjxOm51E8hKueVhthVdCn8SCZ1e7jsoS2T6cyjKtdTsS1jkE17BJQ~6meTQaYMOuq9VjMRaueJO2xA9lIVofgJfCQrrf2oT1zxE2c1zd4Anzu4CHy8hagtbFyCyzjFUHxA3OWb6YlXjyEkDJXMKzumyoSaiet58IKjDOhb0MZf6pbQ__&Key-Pair-Id=KNBS2THMRC385
            - name: ".96ガロン"
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/fe2b351799aa48fcb48154299ff0ccf0b0413fc291ffc49456e93db29d2f1db5_0.png?Expires=1704844800&Signature=lN1vhYKBX741nzDSIp~O63JGYNdt7TFEhMIFGBJBKgbeNMov-6MD6-JTwE2gU1KnvAOF0djpzugKgZz4kBeZ6BysFCeHYbypPAQOuMbE7cEQf~XDsFgB8p3S55TGKV2IKWMcYteAwT6G4Y8OJnspKN4XmewFVdsgtFA-4t44YYywEMiggkArxS4pq00FyIKVQskYsUy010J~dUonBH9B-aI0mh8afFz40DnX~i60ZIDCTdsKgvTQLqk8tCHOLhmFbPSu0ewCVKJW4OUsaiRYLfF7pqMkEBk~n9f7bdq-fUE6fp~O1nX30SWEHMqwzuFEdVUmbbcC-ygJUFvndEusoQ__&Key-Pair-Id=KNBS2THMRC385
            - name: ランダム
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/ui_img/473fffb2442075078d8bb7125744905abdeae651b6a5b7453ae295582e45f7d1_0.png?Expires=1704844800&Signature=eLsoNcKFcMpLOc6GXQ-5PKakhBYqbyLRv5GVUacwc-9sZG6QUz5Nos9L~Y9ws5bZpn2v-LBfGuKA3KtzyZwiRmq3V5w6X437PgTXnbzB8OWMHYC7J5N-kcpMFmJbfCcRxp8ADYZWCgyQHk3XDXQz-GgeLMkPtRM7fKVv1f5NNyRCLfzPN5Q-lotTRCRs0DgksaJ7x2UxGzLs5w3ixCApqiPCeCcWSlBo0sDT1lCsDUYHp~LAKcUXvidXszycGz4xbUqBwY9Q7QgM~1nYiloZf2D1GpTZD2jFsEIAwQZHeuDuQ5aD2kZFLkWJ65uHyi3T1NHxLahhkZi3Fdt3HSUCFA__&Key-Pair-Id=KNBS2THMRC385
            nextHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDcyMlQxNTM0NDNfMzhjOGM3MjQtMTY4Zi00NDJhLWFhMzUtMWY1MGNmMmFkMzk2
            previousHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDcyMlQxNTIwMzdfMzhjOGM3MjQtMTY4Zi00NDJhLWFhMzUtMWY1MGNmMmFkMzk2
            resultWave: 0
            coopStage:
              name: ムニ・エール海洋発電所
              id: Q29vcFN0YWdlLTc=
            afterGrade:
              name: でんせつ
              id: Q29vcEdyYWRlLTg=
            afterGradePoint: 180
            gradePointDiff: UP
            bossResult:
            myResult:
              deliverCount: 1147
            memberResults:
            - deliverCount: 911
            - deliverCount: 1078
            - deliverCount: 806
            waveResults:
            - teamDeliverCount: 47
            - teamDeliverCount: 48
            - teamDeliverCount: 33
          - id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDcyMlQxNTIwMzdfMzhjOGM3MjQtMTY4Zi00NDJhLWFhMzUtMWY1MGNmMmFkMzk2
            weapons:
            - name: スプラスピナー
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/32dbc48e000d5d2015468e1dafc05e7c24581a73e54e758af0c8b9e2db3db550_0.png?Expires=1704844800&Signature=SDl4Cuitzqdd10huMNzIHL-ZsewYWYPAByuEstkItEAmsDCsytbcY4p8MeSozXdmNQzJCrxrHtqqPOBBxuk8Lp7vEiqouiwuuIfcdZ~PEJY8rv~t6UBa73~Bh0EcCqoBLBhdBdcnnMs0~XrBpTKM-qX7dYIOXC-zZFWXeBB4C7X0nBb1Wz2Qy4M3kMNoLFvnxv5yb6-W5pdpP8YRM7wcA4g1It1bsyvlxlBxofyUcHmytlv4kIUvLzvY4iOXgrVDXQtugNzufzpsw~zQAtiryicQ9GGaobqtan6dLGuqqQL-jlgobu4iaiTviZagbfTqQFC5~7-rF-f9W2yPM9~OhQ__&Key-Pair-Id=KNBS2THMRC385
            - name: スプラシューター
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/e3874d7d504acf89488ad7f68d29a348caea1a41cd43bd9a272069b0c0466570_0.png?Expires=1704844800&Signature=TIB2P5Iwd6JKGiyYtq9GnZ7Ks4ibMHPYymHBbQjgtoOVkQ6UXm6G~qUIhC4v5Vjt6IT85-vY-RBIC1uBKPhWwcDgi8gX8iOeBAQ36GDGDrSTg3JHZbiS3rs2QzCou-gMdgvAzSjLYj4Me6ML8DjKKG6d6bik5BUsvqUdCBiEjjxOm51E8hKueVhthVdCn8SCZ1e7jsoS2T6cyjKtdTsS1jkE17BJQ~6meTQaYMOuq9VjMRaueJO2xA9lIVofgJfCQrrf2oT1zxE2c1zd4Anzu4CHy8hagtbFyCyzjFUHxA3OWb6YlXjyEkDJXMKzumyoSaiet58IKjDOhb0MZf6pbQ__&Key-Pair-Id=KNBS2THMRC385
            - name: ".96ガロン"
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/fe2b351799aa48fcb48154299ff0ccf0b0413fc291ffc49456e93db29d2f1db5_0.png?Expires=1704844800&Signature=lN1vhYKBX741nzDSIp~O63JGYNdt7TFEhMIFGBJBKgbeNMov-6MD6-JTwE2gU1KnvAOF0djpzugKgZz4kBeZ6BysFCeHYbypPAQOuMbE7cEQf~XDsFgB8p3S55TGKV2IKWMcYteAwT6G4Y8OJnspKN4XmewFVdsgtFA-4t44YYywEMiggkArxS4pq00FyIKVQskYsUy010J~dUonBH9B-aI0mh8afFz40DnX~i60ZIDCTdsKgvTQLqk8tCHOLhmFbPSu0ewCVKJW4OUsaiRYLfF7pqMkEBk~n9f7bdq-fUE6fp~O1nX30SWEHMqwzuFEdVUmbbcC-ygJUFvndEusoQ__&Key-Pair-Id=KNBS2THMRC385
            - name: ランダム
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/ui_img/473fffb2442075078d8bb7125744905abdeae651b6a5b7453ae295582e45f7d1_0.png?Expires=1704844800&Signature=eLsoNcKFcMpLOc6GXQ-5PKakhBYqbyLRv5GVUacwc-9sZG6QUz5Nos9L~Y9ws5bZpn2v-LBfGuKA3KtzyZwiRmq3V5w6X437PgTXnbzB8OWMHYC7J5N-kcpMFmJbfCcRxp8ADYZWCgyQHk3XDXQz-GgeLMkPtRM7fKVv1f5NNyRCLfzPN5Q-lotTRCRs0DgksaJ7x2UxGzLs5w3ixCApqiPCeCcWSlBo0sDT1lCsDUYHp~LAKcUXvidXszycGz4xbUqBwY9Q7QgM~1nYiloZf2D1GpTZD2jFsEIAwQZHeuDuQ5aD2kZFLkWJ65uHyi3T1NHxLahhkZi3Fdt3HSUCFA__&Key-Pair-Id=KNBS2THMRC385
            nextHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDcyMlQxNTI3NDNfMzhjOGM3MjQtMTY4Zi00NDJhLWFhMzUtMWY1MGNmMmFkMzk2
            previousHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDcyMlQxNTEyMTFfOWM1N2Q3OGItNTE1NC00MWEyLTgyYTItZDUxNjRjMTNhMjk2
            resultWave: 0
            coopStage:
              name: ムニ・エール海洋発電所
              id: Q29vcFN0YWdlLTc=
            afterGrade:
              name: でんせつ
              id: Q29vcEdyYWRlLTg=
            afterGradePoint: 160
            gradePointDiff: UP
            bossResult:
            myResult:
              deliverCount: 871
            memberResults:
            - deliverCount: 1200
            - deliverCount: 867
            - deliverCount: 874
            waveResults:
            - teamDeliverCount: 32
            - teamDeliverCount: 37
            - teamDeliverCount: 31
          - id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDcyMlQxNTEyMTFfOWM1N2Q3OGItNTE1NC00MWEyLTgyYTItZDUxNjRjMTNhMjk2
            weapons:
            - name: スプラスピナー
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/32dbc48e000d5d2015468e1dafc05e7c24581a73e54e758af0c8b9e2db3db550_0.png?Expires=1704844800&Signature=SDl4Cuitzqdd10huMNzIHL-ZsewYWYPAByuEstkItEAmsDCsytbcY4p8MeSozXdmNQzJCrxrHtqqPOBBxuk8Lp7vEiqouiwuuIfcdZ~PEJY8rv~t6UBa73~Bh0EcCqoBLBhdBdcnnMs0~XrBpTKM-qX7dYIOXC-zZFWXeBB4C7X0nBb1Wz2Qy4M3kMNoLFvnxv5yb6-W5pdpP8YRM7wcA4g1It1bsyvlxlBxofyUcHmytlv4kIUvLzvY4iOXgrVDXQtugNzufzpsw~zQAtiryicQ9GGaobqtan6dLGuqqQL-jlgobu4iaiTviZagbfTqQFC5~7-rF-f9W2yPM9~OhQ__&Key-Pair-Id=KNBS2THMRC385
            - name: スプラシューター
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/e3874d7d504acf89488ad7f68d29a348caea1a41cd43bd9a272069b0c0466570_0.png?Expires=1704844800&Signature=TIB2P5Iwd6JKGiyYtq9GnZ7Ks4ibMHPYymHBbQjgtoOVkQ6UXm6G~qUIhC4v5Vjt6IT85-vY-RBIC1uBKPhWwcDgi8gX8iOeBAQ36GDGDrSTg3JHZbiS3rs2QzCou-gMdgvAzSjLYj4Me6ML8DjKKG6d6bik5BUsvqUdCBiEjjxOm51E8hKueVhthVdCn8SCZ1e7jsoS2T6cyjKtdTsS1jkE17BJQ~6meTQaYMOuq9VjMRaueJO2xA9lIVofgJfCQrrf2oT1zxE2c1zd4Anzu4CHy8hagtbFyCyzjFUHxA3OWb6YlXjyEkDJXMKzumyoSaiet58IKjDOhb0MZf6pbQ__&Key-Pair-Id=KNBS2THMRC385
            - name: ".96ガロン"
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/fe2b351799aa48fcb48154299ff0ccf0b0413fc291ffc49456e93db29d2f1db5_0.png?Expires=1704844800&Signature=lN1vhYKBX741nzDSIp~O63JGYNdt7TFEhMIFGBJBKgbeNMov-6MD6-JTwE2gU1KnvAOF0djpzugKgZz4kBeZ6BysFCeHYbypPAQOuMbE7cEQf~XDsFgB8p3S55TGKV2IKWMcYteAwT6G4Y8OJnspKN4XmewFVdsgtFA-4t44YYywEMiggkArxS4pq00FyIKVQskYsUy010J~dUonBH9B-aI0mh8afFz40DnX~i60ZIDCTdsKgvTQLqk8tCHOLhmFbPSu0ewCVKJW4OUsaiRYLfF7pqMkEBk~n9f7bdq-fUE6fp~O1nX30SWEHMqwzuFEdVUmbbcC-ygJUFvndEusoQ__&Key-Pair-Id=KNBS2THMRC385
            - name: ランダム
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/ui_img/473fffb2442075078d8bb7125744905abdeae651b6a5b7453ae295582e45f7d1_0.png?Expires=1704844800&Signature=eLsoNcKFcMpLOc6GXQ-5PKakhBYqbyLRv5GVUacwc-9sZG6QUz5Nos9L~Y9ws5bZpn2v-LBfGuKA3KtzyZwiRmq3V5w6X437PgTXnbzB8OWMHYC7J5N-kcpMFmJbfCcRxp8ADYZWCgyQHk3XDXQz-GgeLMkPtRM7fKVv1f5NNyRCLfzPN5Q-lotTRCRs0DgksaJ7x2UxGzLs5w3ixCApqiPCeCcWSlBo0sDT1lCsDUYHp~LAKcUXvidXszycGz4xbUqBwY9Q7QgM~1nYiloZf2D1GpTZD2jFsEIAwQZHeuDuQ5aD2kZFLkWJ65uHyi3T1NHxLahhkZi3Fdt3HSUCFA__&Key-Pair-Id=KNBS2THMRC385
            nextHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDcyMlQxNTIwMzdfMzhjOGM3MjQtMTY4Zi00NDJhLWFhMzUtMWY1MGNmMmFkMzk2
            previousHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDcyMlQxNTA0MzFfMjcxODg1ZGUtNjQ5ZC00MWUwLTlmMjUtZTA2ZTE2OWZlYWRi
            resultWave: 0
            coopStage:
              name: ムニ・エール海洋発電所
              id: Q29vcFN0YWdlLTc=
            afterGrade:
              name: でんせつ
              id: Q29vcEdyYWRlLTg=
            afterGradePoint: 140
            gradePointDiff: UP
            bossResult:
            myResult:
              deliverCount: 881
            memberResults:
            - deliverCount: 1048
            - deliverCount: 897
            - deliverCount: 734
            waveResults:
            - teamDeliverCount: 39
            - teamDeliverCount: 28
            - teamDeliverCount: 44
          - id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDcyMlQxNTA0MzFfMjcxODg1ZGUtNjQ5ZC00MWUwLTlmMjUtZTA2ZTE2OWZlYWRi
            weapons:
            - name: スプラスピナー
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/32dbc48e000d5d2015468e1dafc05e7c24581a73e54e758af0c8b9e2db3db550_0.png?Expires=1704844800&Signature=SDl4Cuitzqdd10huMNzIHL-ZsewYWYPAByuEstkItEAmsDCsytbcY4p8MeSozXdmNQzJCrxrHtqqPOBBxuk8Lp7vEiqouiwuuIfcdZ~PEJY8rv~t6UBa73~Bh0EcCqoBLBhdBdcnnMs0~XrBpTKM-qX7dYIOXC-zZFWXeBB4C7X0nBb1Wz2Qy4M3kMNoLFvnxv5yb6-W5pdpP8YRM7wcA4g1It1bsyvlxlBxofyUcHmytlv4kIUvLzvY4iOXgrVDXQtugNzufzpsw~zQAtiryicQ9GGaobqtan6dLGuqqQL-jlgobu4iaiTviZagbfTqQFC5~7-rF-f9W2yPM9~OhQ__&Key-Pair-Id=KNBS2THMRC385
            - name: スプラシューター
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/e3874d7d504acf89488ad7f68d29a348caea1a41cd43bd9a272069b0c0466570_0.png?Expires=1704844800&Signature=TIB2P5Iwd6JKGiyYtq9GnZ7Ks4ibMHPYymHBbQjgtoOVkQ6UXm6G~qUIhC4v5Vjt6IT85-vY-RBIC1uBKPhWwcDgi8gX8iOeBAQ36GDGDrSTg3JHZbiS3rs2QzCou-gMdgvAzSjLYj4Me6ML8DjKKG6d6bik5BUsvqUdCBiEjjxOm51E8hKueVhthVdCn8SCZ1e7jsoS2T6cyjKtdTsS1jkE17BJQ~6meTQaYMOuq9VjMRaueJO2xA9lIVofgJfCQrrf2oT1zxE2c1zd4Anzu4CHy8hagtbFyCyzjFUHxA3OWb6YlXjyEkDJXMKzumyoSaiet58IKjDOhb0MZf6pbQ__&Key-Pair-Id=KNBS2THMRC385
            - name: ".96ガロン"
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/fe2b351799aa48fcb48154299ff0ccf0b0413fc291ffc49456e93db29d2f1db5_0.png?Expires=1704844800&Signature=lN1vhYKBX741nzDSIp~O63JGYNdt7TFEhMIFGBJBKgbeNMov-6MD6-JTwE2gU1KnvAOF0djpzugKgZz4kBeZ6BysFCeHYbypPAQOuMbE7cEQf~XDsFgB8p3S55TGKV2IKWMcYteAwT6G4Y8OJnspKN4XmewFVdsgtFA-4t44YYywEMiggkArxS4pq00FyIKVQskYsUy010J~dUonBH9B-aI0mh8afFz40DnX~i60ZIDCTdsKgvTQLqk8tCHOLhmFbPSu0ewCVKJW4OUsaiRYLfF7pqMkEBk~n9f7bdq-fUE6fp~O1nX30SWEHMqwzuFEdVUmbbcC-ygJUFvndEusoQ__&Key-Pair-Id=KNBS2THMRC385
            - name: ランダム
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/ui_img/473fffb2442075078d8bb7125744905abdeae651b6a5b7453ae295582e45f7d1_0.png?Expires=1704844800&Signature=eLsoNcKFcMpLOc6GXQ-5PKakhBYqbyLRv5GVUacwc-9sZG6QUz5Nos9L~Y9ws5bZpn2v-LBfGuKA3KtzyZwiRmq3V5w6X437PgTXnbzB8OWMHYC7J5N-kcpMFmJbfCcRxp8ADYZWCgyQHk3XDXQz-GgeLMkPtRM7fKVv1f5NNyRCLfzPN5Q-lotTRCRs0DgksaJ7x2UxGzLs5w3ixCApqiPCeCcWSlBo0sDT1lCsDUYHp~LAKcUXvidXszycGz4xbUqBwY9Q7QgM~1nYiloZf2D1GpTZD2jFsEIAwQZHeuDuQ5aD2kZFLkWJ65uHyi3T1NHxLahhkZi3Fdt3HSUCFA__&Key-Pair-Id=KNBS2THMRC385
            nextHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDcyMlQxNTEyMTFfOWM1N2Q3OGItNTE1NC00MWEyLTgyYTItZDUxNjRjMTNhMjk2
            previousHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDcyMlQxNDU0NDdfODQzOGEwODYtYzc2Ny00ZDVmLWJhYTAtYjRkMjk4ZWZmZWMx
            resultWave: 0
            coopStage:
              name: ムニ・エール海洋発電所
              id: Q29vcFN0YWdlLTc=
            afterGrade:
              name: でんせつ
              id: Q29vcEdyYWRlLTg=
            afterGradePoint: 120
            gradePointDiff: UP
            bossResult:
            myResult:
              deliverCount: 1205
            memberResults:
            - deliverCount: 838
            - deliverCount: 1144
            - deliverCount: 906
            waveResults:
            - teamDeliverCount: 40
            - teamDeliverCount: 40
            - teamDeliverCount: 38
          - id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDcyMlQxNDU0NDdfODQzOGEwODYtYzc2Ny00ZDVmLWJhYTAtYjRkMjk4ZWZmZWMx
            weapons:
            - name: スプラスピナー
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/32dbc48e000d5d2015468e1dafc05e7c24581a73e54e758af0c8b9e2db3db550_0.png?Expires=1704844800&Signature=SDl4Cuitzqdd10huMNzIHL-ZsewYWYPAByuEstkItEAmsDCsytbcY4p8MeSozXdmNQzJCrxrHtqqPOBBxuk8Lp7vEiqouiwuuIfcdZ~PEJY8rv~t6UBa73~Bh0EcCqoBLBhdBdcnnMs0~XrBpTKM-qX7dYIOXC-zZFWXeBB4C7X0nBb1Wz2Qy4M3kMNoLFvnxv5yb6-W5pdpP8YRM7wcA4g1It1bsyvlxlBxofyUcHmytlv4kIUvLzvY4iOXgrVDXQtugNzufzpsw~zQAtiryicQ9GGaobqtan6dLGuqqQL-jlgobu4iaiTviZagbfTqQFC5~7-rF-f9W2yPM9~OhQ__&Key-Pair-Id=KNBS2THMRC385
            - name: スプラシューター
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/e3874d7d504acf89488ad7f68d29a348caea1a41cd43bd9a272069b0c0466570_0.png?Expires=1704844800&Signature=TIB2P5Iwd6JKGiyYtq9GnZ7Ks4ibMHPYymHBbQjgtoOVkQ6UXm6G~qUIhC4v5Vjt6IT85-vY-RBIC1uBKPhWwcDgi8gX8iOeBAQ36GDGDrSTg3JHZbiS3rs2QzCou-gMdgvAzSjLYj4Me6ML8DjKKG6d6bik5BUsvqUdCBiEjjxOm51E8hKueVhthVdCn8SCZ1e7jsoS2T6cyjKtdTsS1jkE17BJQ~6meTQaYMOuq9VjMRaueJO2xA9lIVofgJfCQrrf2oT1zxE2c1zd4Anzu4CHy8hagtbFyCyzjFUHxA3OWb6YlXjyEkDJXMKzumyoSaiet58IKjDOhb0MZf6pbQ__&Key-Pair-Id=KNBS2THMRC385
            - name: ".96ガロン"
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/fe2b351799aa48fcb48154299ff0ccf0b0413fc291ffc49456e93db29d2f1db5_0.png?Expires=1704844800&Signature=lN1vhYKBX741nzDSIp~O63JGYNdt7TFEhMIFGBJBKgbeNMov-6MD6-JTwE2gU1KnvAOF0djpzugKgZz4kBeZ6BysFCeHYbypPAQOuMbE7cEQf~XDsFgB8p3S55TGKV2IKWMcYteAwT6G4Y8OJnspKN4XmewFVdsgtFA-4t44YYywEMiggkArxS4pq00FyIKVQskYsUy010J~dUonBH9B-aI0mh8afFz40DnX~i60ZIDCTdsKgvTQLqk8tCHOLhmFbPSu0ewCVKJW4OUsaiRYLfF7pqMkEBk~n9f7bdq-fUE6fp~O1nX30SWEHMqwzuFEdVUmbbcC-ygJUFvndEusoQ__&Key-Pair-Id=KNBS2THMRC385
            - name: ランダム
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/ui_img/473fffb2442075078d8bb7125744905abdeae651b6a5b7453ae295582e45f7d1_0.png?Expires=1704844800&Signature=eLsoNcKFcMpLOc6GXQ-5PKakhBYqbyLRv5GVUacwc-9sZG6QUz5Nos9L~Y9ws5bZpn2v-LBfGuKA3KtzyZwiRmq3V5w6X437PgTXnbzB8OWMHYC7J5N-kcpMFmJbfCcRxp8ADYZWCgyQHk3XDXQz-GgeLMkPtRM7fKVv1f5NNyRCLfzPN5Q-lotTRCRs0DgksaJ7x2UxGzLs5w3ixCApqiPCeCcWSlBo0sDT1lCsDUYHp~LAKcUXvidXszycGz4xbUqBwY9Q7QgM~1nYiloZf2D1GpTZD2jFsEIAwQZHeuDuQ5aD2kZFLkWJ65uHyi3T1NHxLahhkZi3Fdt3HSUCFA__&Key-Pair-Id=KNBS2THMRC385
            nextHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDcyMlQxNTA0MzFfMjcxODg1ZGUtNjQ5ZC00MWUwLTlmMjUtZTA2ZTE2OWZlYWRi
            previousHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDcyMlQxNDQ3NDdfODQzOGEwODYtYzc2Ny00ZDVmLWJhYTAtYjRkMjk4ZWZmZWMx
            resultWave: 0
            coopStage:
              name: ムニ・エール海洋発電所
              id: Q29vcFN0YWdlLTc=
            afterGrade:
              name: でんせつ
              id: Q29vcEdyYWRlLTg=
            afterGradePoint: 100
            gradePointDiff: UP
            bossResult:
              hasDefeatBoss: true
              boss:
                name: ヨコヅナ
                id: Q29vcEVuZW15LTIz
            myResult:
              deliverCount: 1368
            memberResults:
            - deliverCount: 1611
            - deliverCount: 1173
            - deliverCount: 973
            waveResults:
            - teamDeliverCount: 47
            - teamDeliverCount: 42
            - teamDeliverCount: 31
            - teamDeliverCount:
          - id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDcyMlQxNDQ3NDdfODQzOGEwODYtYzc2Ny00ZDVmLWJhYTAtYjRkMjk4ZWZmZWMx
            weapons:
            - name: スプラスピナー
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/32dbc48e000d5d2015468e1dafc05e7c24581a73e54e758af0c8b9e2db3db550_0.png?Expires=1704844800&Signature=SDl4Cuitzqdd10huMNzIHL-ZsewYWYPAByuEstkItEAmsDCsytbcY4p8MeSozXdmNQzJCrxrHtqqPOBBxuk8Lp7vEiqouiwuuIfcdZ~PEJY8rv~t6UBa73~Bh0EcCqoBLBhdBdcnnMs0~XrBpTKM-qX7dYIOXC-zZFWXeBB4C7X0nBb1Wz2Qy4M3kMNoLFvnxv5yb6-W5pdpP8YRM7wcA4g1It1bsyvlxlBxofyUcHmytlv4kIUvLzvY4iOXgrVDXQtugNzufzpsw~zQAtiryicQ9GGaobqtan6dLGuqqQL-jlgobu4iaiTviZagbfTqQFC5~7-rF-f9W2yPM9~OhQ__&Key-Pair-Id=KNBS2THMRC385
            - name: スプラシューター
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/e3874d7d504acf89488ad7f68d29a348caea1a41cd43bd9a272069b0c0466570_0.png?Expires=1704844800&Signature=TIB2P5Iwd6JKGiyYtq9GnZ7Ks4ibMHPYymHBbQjgtoOVkQ6UXm6G~qUIhC4v5Vjt6IT85-vY-RBIC1uBKPhWwcDgi8gX8iOeBAQ36GDGDrSTg3JHZbiS3rs2QzCou-gMdgvAzSjLYj4Me6ML8DjKKG6d6bik5BUsvqUdCBiEjjxOm51E8hKueVhthVdCn8SCZ1e7jsoS2T6cyjKtdTsS1jkE17BJQ~6meTQaYMOuq9VjMRaueJO2xA9lIVofgJfCQrrf2oT1zxE2c1zd4Anzu4CHy8hagtbFyCyzjFUHxA3OWb6YlXjyEkDJXMKzumyoSaiet58IKjDOhb0MZf6pbQ__&Key-Pair-Id=KNBS2THMRC385
            - name: ".96ガロン"
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/fe2b351799aa48fcb48154299ff0ccf0b0413fc291ffc49456e93db29d2f1db5_0.png?Expires=1704844800&Signature=lN1vhYKBX741nzDSIp~O63JGYNdt7TFEhMIFGBJBKgbeNMov-6MD6-JTwE2gU1KnvAOF0djpzugKgZz4kBeZ6BysFCeHYbypPAQOuMbE7cEQf~XDsFgB8p3S55TGKV2IKWMcYteAwT6G4Y8OJnspKN4XmewFVdsgtFA-4t44YYywEMiggkArxS4pq00FyIKVQskYsUy010J~dUonBH9B-aI0mh8afFz40DnX~i60ZIDCTdsKgvTQLqk8tCHOLhmFbPSu0ewCVKJW4OUsaiRYLfF7pqMkEBk~n9f7bdq-fUE6fp~O1nX30SWEHMqwzuFEdVUmbbcC-ygJUFvndEusoQ__&Key-Pair-Id=KNBS2THMRC385
            - name: ランダム
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/ui_img/473fffb2442075078d8bb7125744905abdeae651b6a5b7453ae295582e45f7d1_0.png?Expires=1704844800&Signature=eLsoNcKFcMpLOc6GXQ-5PKakhBYqbyLRv5GVUacwc-9sZG6QUz5Nos9L~Y9ws5bZpn2v-LBfGuKA3KtzyZwiRmq3V5w6X437PgTXnbzB8OWMHYC7J5N-kcpMFmJbfCcRxp8ADYZWCgyQHk3XDXQz-GgeLMkPtRM7fKVv1f5NNyRCLfzPN5Q-lotTRCRs0DgksaJ7x2UxGzLs5w3ixCApqiPCeCcWSlBo0sDT1lCsDUYHp~LAKcUXvidXszycGz4xbUqBwY9Q7QgM~1nYiloZf2D1GpTZD2jFsEIAwQZHeuDuQ5aD2kZFLkWJ65uHyi3T1NHxLahhkZi3Fdt3HSUCFA__&Key-Pair-Id=KNBS2THMRC385
            nextHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDcyMlQxNDU0NDdfODQzOGEwODYtYzc2Ny00ZDVmLWJhYTAtYjRkMjk4ZWZmZWMx
            previousHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDcyMlQxNDQwMzhfODQzOGEwODYtYzc2Ny00ZDVmLWJhYTAtYjRkMjk4ZWZmZWMx
            resultWave: 0
            coopStage:
              name: ムニ・エール海洋発電所
              id: Q29vcFN0YWdlLTc=
            afterGrade:
              name: でんせつ
              id: Q29vcEdyYWRlLTg=
            afterGradePoint: 80
            gradePointDiff: UP
            bossResult:
            myResult:
              deliverCount: 868
            memberResults:
            - deliverCount: 882
            - deliverCount: 854
            - deliverCount: 739
            waveResults:
            - teamDeliverCount: 35
            - teamDeliverCount: 38
            - teamDeliverCount: 49
          - id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDcyMlQxNDQwMzhfODQzOGEwODYtYzc2Ny00ZDVmLWJhYTAtYjRkMjk4ZWZmZWMx
            weapons:
            - name: スプラスピナー
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/32dbc48e000d5d2015468e1dafc05e7c24581a73e54e758af0c8b9e2db3db550_0.png?Expires=1704844800&Signature=SDl4Cuitzqdd10huMNzIHL-ZsewYWYPAByuEstkItEAmsDCsytbcY4p8MeSozXdmNQzJCrxrHtqqPOBBxuk8Lp7vEiqouiwuuIfcdZ~PEJY8rv~t6UBa73~Bh0EcCqoBLBhdBdcnnMs0~XrBpTKM-qX7dYIOXC-zZFWXeBB4C7X0nBb1Wz2Qy4M3kMNoLFvnxv5yb6-W5pdpP8YRM7wcA4g1It1bsyvlxlBxofyUcHmytlv4kIUvLzvY4iOXgrVDXQtugNzufzpsw~zQAtiryicQ9GGaobqtan6dLGuqqQL-jlgobu4iaiTviZagbfTqQFC5~7-rF-f9W2yPM9~OhQ__&Key-Pair-Id=KNBS2THMRC385
            - name: スプラシューター
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/e3874d7d504acf89488ad7f68d29a348caea1a41cd43bd9a272069b0c0466570_0.png?Expires=1704844800&Signature=TIB2P5Iwd6JKGiyYtq9GnZ7Ks4ibMHPYymHBbQjgtoOVkQ6UXm6G~qUIhC4v5Vjt6IT85-vY-RBIC1uBKPhWwcDgi8gX8iOeBAQ36GDGDrSTg3JHZbiS3rs2QzCou-gMdgvAzSjLYj4Me6ML8DjKKG6d6bik5BUsvqUdCBiEjjxOm51E8hKueVhthVdCn8SCZ1e7jsoS2T6cyjKtdTsS1jkE17BJQ~6meTQaYMOuq9VjMRaueJO2xA9lIVofgJfCQrrf2oT1zxE2c1zd4Anzu4CHy8hagtbFyCyzjFUHxA3OWb6YlXjyEkDJXMKzumyoSaiet58IKjDOhb0MZf6pbQ__&Key-Pair-Id=KNBS2THMRC385
            - name: ".96ガロン"
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/fe2b351799aa48fcb48154299ff0ccf0b0413fc291ffc49456e93db29d2f1db5_0.png?Expires=1704844800&Signature=lN1vhYKBX741nzDSIp~O63JGYNdt7TFEhMIFGBJBKgbeNMov-6MD6-JTwE2gU1KnvAOF0djpzugKgZz4kBeZ6BysFCeHYbypPAQOuMbE7cEQf~XDsFgB8p3S55TGKV2IKWMcYteAwT6G4Y8OJnspKN4XmewFVdsgtFA-4t44YYywEMiggkArxS4pq00FyIKVQskYsUy010J~dUonBH9B-aI0mh8afFz40DnX~i60ZIDCTdsKgvTQLqk8tCHOLhmFbPSu0ewCVKJW4OUsaiRYLfF7pqMkEBk~n9f7bdq-fUE6fp~O1nX30SWEHMqwzuFEdVUmbbcC-ygJUFvndEusoQ__&Key-Pair-Id=KNBS2THMRC385
            - name: ランダム
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/ui_img/473fffb2442075078d8bb7125744905abdeae651b6a5b7453ae295582e45f7d1_0.png?Expires=1704844800&Signature=eLsoNcKFcMpLOc6GXQ-5PKakhBYqbyLRv5GVUacwc-9sZG6QUz5Nos9L~Y9ws5bZpn2v-LBfGuKA3KtzyZwiRmq3V5w6X437PgTXnbzB8OWMHYC7J5N-kcpMFmJbfCcRxp8ADYZWCgyQHk3XDXQz-GgeLMkPtRM7fKVv1f5NNyRCLfzPN5Q-lotTRCRs0DgksaJ7x2UxGzLs5w3ixCApqiPCeCcWSlBo0sDT1lCsDUYHp~LAKcUXvidXszycGz4xbUqBwY9Q7QgM~1nYiloZf2D1GpTZD2jFsEIAwQZHeuDuQ5aD2kZFLkWJ65uHyi3T1NHxLahhkZi3Fdt3HSUCFA__&Key-Pair-Id=KNBS2THMRC385
            nextHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDcyMlQxNDQ3NDdfODQzOGEwODYtYzc2Ny00ZDVmLWJhYTAtYjRkMjk4ZWZmZWMx
            previousHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDcwOFQwMDE2MDdfOWM2NTA1MjgtNDM3ZS00ZWYzLWExM2MtMjJjM2JiZGE5N2Y1
            resultWave: 0
            coopStage:
              name: ムニ・エール海洋発電所
              id: Q29vcFN0YWdlLTc=
            afterGrade:
              name: でんせつ
              id: Q29vcEdyYWRlLTg=
            afterGradePoint: 60
            gradePointDiff: UP
            bossResult:
            myResult:
              deliverCount: 1030
            memberResults:
            - deliverCount: 1069
            - deliverCount: 861
            - deliverCount: 852
            waveResults:
            - teamDeliverCount: 34
            - teamDeliverCount: 46
            - teamDeliverCount: 50
      - startTime: '2023-07-07T00:00:00Z'
        endTime: '2023-07-08T16:00:00Z'
        mode: REGULAR
        playCount: 13
        rule: REGULAR
        highestResult:
          grade:
            name: でんせつ
            id: Q29vcEdyYWRlLTg=
          gradePoint: 210
          jobScore: 144
          trophy:
        historyDetails:
          nodes:
          - id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDcwOFQwMDE2MDdfOWM2NTA1MjgtNDM3ZS00ZWYzLWExM2MtMjJjM2JiZGE5N2Y1
            weapons:
            - name: N-ZAP85
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/e6dbf73aa6ff9d1feb61fcabadb2d31e08b228a9736b4f5d8a5baeab9b493255_0.png?Expires=1704844800&Signature=hJtmHciAftMv30zLe7DxC1SzSrgLKEfiqOJjka9QcAtgaAYlmsWnV9uES0vd~18epUONDr5-rH8iEwf~UoKTWa4yQwvwE09D04Ubl6A71U6jrjBqIIu7RgVu6S~UPqToAAjoWq6PHetThUClslng3iI7dSTBjeL-r-s66plRcdkSkzU0Kc8J80L9XvjjCHZv3mXNPmsDB9lpOYyzoHP1bj4cIzc6FGAaqT~8a3QTQHMzpUGJVkcj6KWccnCW4piabmtL-eC-hPXiEQlo~fzgO0ZXAiAFe0sISNX~1MJJeFAV9JVuu2ONMiq2TLpK2AIhTFvd6irv7laAnB~B3TtJPQ__&Key-Pair-Id=KNBS2THMRC385
            - name: H3リールガン
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/418d75d9ca0304922f06eff539c511238b143ef8331969e20d54a9560df57d5a_0.png?Expires=1704844800&Signature=bdxOVPY6rdUWF1mCupqsa9GGPBBQGCSGKz6JNDAML-TMyORy4DL8T4-R1bfLQ-ICXZIQfadsK7damiJE50P9StN76E6HDV0gVNB7SDJq5wzo3-zMI133mrAqk~4gc6uEjyZHXItqUnA-~vT9XXl7A3ztLt3l-9saZZpDEipesZEOFD8CluYWgsQRiAGU6UE-xGqDj9diDxJYOJaVzdMF7VPFLmFdew54Se8LnrWp6nTOHDQjBKxO3o4JZFe-r8xknf78F2oBxPf2R7hj7m55Asp2-HgfTIEn0PrbwRe3t759SUxewiSymXA82pOy7tL~IYfaiwQeFapJwB4UDT~Gdg__&Key-Pair-Id=KNBS2THMRC385
            - name: エクスプロッシャー
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/1e32f5e1e65793585f6423e4fcae1a146a79d2a09e6e15575015af8a2032a4fe_0.png?Expires=1704844800&Signature=DTzJ2ctF6-CanoU0bxfU7qdtyfMqDeWTc5Sl84-tyeQodX0rGvkzv-TZG6Jz7Sc6qRMDGg1O~G7UXW-m5zmFf5adwX-uMV7XXMZF9Ax0VYUPJHoDtsVV30UfhHoFKXIZ71QPa05X~qexGoCCMgmCfEJJ-9MkioaAkN5jXJKaMYaT-pU64IijnHi2evtPV2OEeyV5bB5C-l8kLfkclAF3T~xWEBg3Bt~LNPJDaOnNeeOOZkucOvQaPb~VPI9jz3DETXF1UtRVyyUkcRlZPXSu4i0VagRnnE6w6YJObuNNYV52HMD6d9yjaLHQc5WndWxjdNiCSBIEYeTnk7CMN69RjA__&Key-Pair-Id=KNBS2THMRC385
            - name: ソイチューバー
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/2b349390a464710982d7e1496130898e7b5a66c301aa44fc9e19332d42e360ad_0.png?Expires=1704844800&Signature=oPf-0Z8MBnLrlRYpJbNGgIFk0TKn8cddQeoHFgKIU8A98Wi~xyi3vs7IL77ZOlMaIOmXFcLAJRke1tPRLBpQlql~mavo5D9nqUFBdNGu8Or3ffgPVBbfllIEFp5BKWI2ENQkO5XXJXtjllKTpA0RFFcJ2N12pLrvpOSl1EmkEwF803O66u519TD2Ixst~yvsndXOMB0KUYdRI~Cixi7TEuahIQXGsTaM-IjnDFN36IG~RGYxoBjNeHxWC71Vz3pyYBIPeu88n93XRTjizhRtnKV~0H4bpk7w5UKvSKb-HvJZJqS9Q-UVOyFBCEBZfBKG04ZXiknFrqZaG1iG0uQNGQ__&Key-Pair-Id=KNBS2THMRC385
            nextHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDcyMlQxNDQwMzhfODQzOGEwODYtYzc2Ny00ZDVmLWJhYTAtYjRkMjk4ZWZmZWMx
            previousHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDcwOFQwMDA4NTVfOWM2NTA1MjgtNDM3ZS00ZWYzLWExM2MtMjJjM2JiZGE5N2Y1
            resultWave: 0
            coopStage:
              name: シェケナダム
              id: Q29vcFN0YWdlLTE=
            afterGrade:
              name: でんせつ
              id: Q29vcEdyYWRlLTg=
            afterGradePoint: 210
            gradePointDiff: UP
            bossResult:
            myResult:
              deliverCount: 832
            memberResults:
            - deliverCount: 911
            - deliverCount: 817
            - deliverCount: 387
            waveResults:
            - teamDeliverCount: 41
            - teamDeliverCount: 40
            - teamDeliverCount: 35
          - id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDcwOFQwMDA4NTVfOWM2NTA1MjgtNDM3ZS00ZWYzLWExM2MtMjJjM2JiZGE5N2Y1
            weapons:
            - name: N-ZAP85
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/e6dbf73aa6ff9d1feb61fcabadb2d31e08b228a9736b4f5d8a5baeab9b493255_0.png?Expires=1704844800&Signature=hJtmHciAftMv30zLe7DxC1SzSrgLKEfiqOJjka9QcAtgaAYlmsWnV9uES0vd~18epUONDr5-rH8iEwf~UoKTWa4yQwvwE09D04Ubl6A71U6jrjBqIIu7RgVu6S~UPqToAAjoWq6PHetThUClslng3iI7dSTBjeL-r-s66plRcdkSkzU0Kc8J80L9XvjjCHZv3mXNPmsDB9lpOYyzoHP1bj4cIzc6FGAaqT~8a3QTQHMzpUGJVkcj6KWccnCW4piabmtL-eC-hPXiEQlo~fzgO0ZXAiAFe0sISNX~1MJJeFAV9JVuu2ONMiq2TLpK2AIhTFvd6irv7laAnB~B3TtJPQ__&Key-Pair-Id=KNBS2THMRC385
            - name: H3リールガン
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/418d75d9ca0304922f06eff539c511238b143ef8331969e20d54a9560df57d5a_0.png?Expires=1704844800&Signature=bdxOVPY6rdUWF1mCupqsa9GGPBBQGCSGKz6JNDAML-TMyORy4DL8T4-R1bfLQ-ICXZIQfadsK7damiJE50P9StN76E6HDV0gVNB7SDJq5wzo3-zMI133mrAqk~4gc6uEjyZHXItqUnA-~vT9XXl7A3ztLt3l-9saZZpDEipesZEOFD8CluYWgsQRiAGU6UE-xGqDj9diDxJYOJaVzdMF7VPFLmFdew54Se8LnrWp6nTOHDQjBKxO3o4JZFe-r8xknf78F2oBxPf2R7hj7m55Asp2-HgfTIEn0PrbwRe3t759SUxewiSymXA82pOy7tL~IYfaiwQeFapJwB4UDT~Gdg__&Key-Pair-Id=KNBS2THMRC385
            - name: エクスプロッシャー
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/1e32f5e1e65793585f6423e4fcae1a146a79d2a09e6e15575015af8a2032a4fe_0.png?Expires=1704844800&Signature=DTzJ2ctF6-CanoU0bxfU7qdtyfMqDeWTc5Sl84-tyeQodX0rGvkzv-TZG6Jz7Sc6qRMDGg1O~G7UXW-m5zmFf5adwX-uMV7XXMZF9Ax0VYUPJHoDtsVV30UfhHoFKXIZ71QPa05X~qexGoCCMgmCfEJJ-9MkioaAkN5jXJKaMYaT-pU64IijnHi2evtPV2OEeyV5bB5C-l8kLfkclAF3T~xWEBg3Bt~LNPJDaOnNeeOOZkucOvQaPb~VPI9jz3DETXF1UtRVyyUkcRlZPXSu4i0VagRnnE6w6YJObuNNYV52HMD6d9yjaLHQc5WndWxjdNiCSBIEYeTnk7CMN69RjA__&Key-Pair-Id=KNBS2THMRC385
            - name: ソイチューバー
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/2b349390a464710982d7e1496130898e7b5a66c301aa44fc9e19332d42e360ad_0.png?Expires=1704844800&Signature=oPf-0Z8MBnLrlRYpJbNGgIFk0TKn8cddQeoHFgKIU8A98Wi~xyi3vs7IL77ZOlMaIOmXFcLAJRke1tPRLBpQlql~mavo5D9nqUFBdNGu8Or3ffgPVBbfllIEFp5BKWI2ENQkO5XXJXtjllKTpA0RFFcJ2N12pLrvpOSl1EmkEwF803O66u519TD2Ixst~yvsndXOMB0KUYdRI~Cixi7TEuahIQXGsTaM-IjnDFN36IG~RGYxoBjNeHxWC71Vz3pyYBIPeu88n93XRTjizhRtnKV~0H4bpk7w5UKvSKb-HvJZJqS9Q-UVOyFBCEBZfBKG04ZXiknFrqZaG1iG0uQNGQ__&Key-Pair-Id=KNBS2THMRC385
            nextHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDcwOFQwMDE2MDdfOWM2NTA1MjgtNDM3ZS00ZWYzLWExM2MtMjJjM2JiZGE5N2Y1
            previousHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDcwOFQwMDAxNDJfOWM2NTA1MjgtNDM3ZS00ZWYzLWExM2MtMjJjM2JiZGE5N2Y1
            resultWave: 0
            coopStage:
              name: シェケナダム
              id: Q29vcFN0YWdlLTE=
            afterGrade:
              name: でんせつ
              id: Q29vcEdyYWRlLTg=
            afterGradePoint: 190
            gradePointDiff: UP
            bossResult:
            myResult:
              deliverCount: 743
            memberResults:
            - deliverCount: 1166
            - deliverCount: 808
            - deliverCount: 389
            waveResults:
            - teamDeliverCount: 36
            - teamDeliverCount: 35
            - teamDeliverCount: 45
          - id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDcwOFQwMDAxNDJfOWM2NTA1MjgtNDM3ZS00ZWYzLWExM2MtMjJjM2JiZGE5N2Y1
            weapons:
            - name: N-ZAP85
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/e6dbf73aa6ff9d1feb61fcabadb2d31e08b228a9736b4f5d8a5baeab9b493255_0.png?Expires=1704844800&Signature=hJtmHciAftMv30zLe7DxC1SzSrgLKEfiqOJjka9QcAtgaAYlmsWnV9uES0vd~18epUONDr5-rH8iEwf~UoKTWa4yQwvwE09D04Ubl6A71U6jrjBqIIu7RgVu6S~UPqToAAjoWq6PHetThUClslng3iI7dSTBjeL-r-s66plRcdkSkzU0Kc8J80L9XvjjCHZv3mXNPmsDB9lpOYyzoHP1bj4cIzc6FGAaqT~8a3QTQHMzpUGJVkcj6KWccnCW4piabmtL-eC-hPXiEQlo~fzgO0ZXAiAFe0sISNX~1MJJeFAV9JVuu2ONMiq2TLpK2AIhTFvd6irv7laAnB~B3TtJPQ__&Key-Pair-Id=KNBS2THMRC385
            - name: H3リールガン
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/418d75d9ca0304922f06eff539c511238b143ef8331969e20d54a9560df57d5a_0.png?Expires=1704844800&Signature=bdxOVPY6rdUWF1mCupqsa9GGPBBQGCSGKz6JNDAML-TMyORy4DL8T4-R1bfLQ-ICXZIQfadsK7damiJE50P9StN76E6HDV0gVNB7SDJq5wzo3-zMI133mrAqk~4gc6uEjyZHXItqUnA-~vT9XXl7A3ztLt3l-9saZZpDEipesZEOFD8CluYWgsQRiAGU6UE-xGqDj9diDxJYOJaVzdMF7VPFLmFdew54Se8LnrWp6nTOHDQjBKxO3o4JZFe-r8xknf78F2oBxPf2R7hj7m55Asp2-HgfTIEn0PrbwRe3t759SUxewiSymXA82pOy7tL~IYfaiwQeFapJwB4UDT~Gdg__&Key-Pair-Id=KNBS2THMRC385
            - name: エクスプロッシャー
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/1e32f5e1e65793585f6423e4fcae1a146a79d2a09e6e15575015af8a2032a4fe_0.png?Expires=1704844800&Signature=DTzJ2ctF6-CanoU0bxfU7qdtyfMqDeWTc5Sl84-tyeQodX0rGvkzv-TZG6Jz7Sc6qRMDGg1O~G7UXW-m5zmFf5adwX-uMV7XXMZF9Ax0VYUPJHoDtsVV30UfhHoFKXIZ71QPa05X~qexGoCCMgmCfEJJ-9MkioaAkN5jXJKaMYaT-pU64IijnHi2evtPV2OEeyV5bB5C-l8kLfkclAF3T~xWEBg3Bt~LNPJDaOnNeeOOZkucOvQaPb~VPI9jz3DETXF1UtRVyyUkcRlZPXSu4i0VagRnnE6w6YJObuNNYV52HMD6d9yjaLHQc5WndWxjdNiCSBIEYeTnk7CMN69RjA__&Key-Pair-Id=KNBS2THMRC385
            - name: ソイチューバー
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/2b349390a464710982d7e1496130898e7b5a66c301aa44fc9e19332d42e360ad_0.png?Expires=1704844800&Signature=oPf-0Z8MBnLrlRYpJbNGgIFk0TKn8cddQeoHFgKIU8A98Wi~xyi3vs7IL77ZOlMaIOmXFcLAJRke1tPRLBpQlql~mavo5D9nqUFBdNGu8Or3ffgPVBbfllIEFp5BKWI2ENQkO5XXJXtjllKTpA0RFFcJ2N12pLrvpOSl1EmkEwF803O66u519TD2Ixst~yvsndXOMB0KUYdRI~Cixi7TEuahIQXGsTaM-IjnDFN36IG~RGYxoBjNeHxWC71Vz3pyYBIPeu88n93XRTjizhRtnKV~0H4bpk7w5UKvSKb-HvJZJqS9Q-UVOyFBCEBZfBKG04ZXiknFrqZaG1iG0uQNGQ__&Key-Pair-Id=KNBS2THMRC385
            nextHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDcwOFQwMDA4NTVfOWM2NTA1MjgtNDM3ZS00ZWYzLWExM2MtMjJjM2JiZGE5N2Y1
            previousHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDcwN1QyMzUzMzVfNzYxOWM2ODEtNGRhZC00MWZjLThkZDctNDVjZGQyYmQ0NDU0
            resultWave: 0
            coopStage:
              name: シェケナダム
              id: Q29vcFN0YWdlLTE=
            afterGrade:
              name: でんせつ
              id: Q29vcEdyYWRlLTg=
            afterGradePoint: 170
            gradePointDiff: UP
            bossResult:
            myResult:
              deliverCount: 1131
            memberResults:
            - deliverCount: 1120
            - deliverCount: 952
            - deliverCount: 835
            waveResults:
            - teamDeliverCount: 50
            - teamDeliverCount: 49
            - teamDeliverCount: 36
          - id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDcwN1QyMzUzMzVfNzYxOWM2ODEtNGRhZC00MWZjLThkZDctNDVjZGQyYmQ0NDU0
            weapons:
            - name: N-ZAP85
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/e6dbf73aa6ff9d1feb61fcabadb2d31e08b228a9736b4f5d8a5baeab9b493255_0.png?Expires=1704844800&Signature=hJtmHciAftMv30zLe7DxC1SzSrgLKEfiqOJjka9QcAtgaAYlmsWnV9uES0vd~18epUONDr5-rH8iEwf~UoKTWa4yQwvwE09D04Ubl6A71U6jrjBqIIu7RgVu6S~UPqToAAjoWq6PHetThUClslng3iI7dSTBjeL-r-s66plRcdkSkzU0Kc8J80L9XvjjCHZv3mXNPmsDB9lpOYyzoHP1bj4cIzc6FGAaqT~8a3QTQHMzpUGJVkcj6KWccnCW4piabmtL-eC-hPXiEQlo~fzgO0ZXAiAFe0sISNX~1MJJeFAV9JVuu2ONMiq2TLpK2AIhTFvd6irv7laAnB~B3TtJPQ__&Key-Pair-Id=KNBS2THMRC385
            - name: H3リールガン
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/418d75d9ca0304922f06eff539c511238b143ef8331969e20d54a9560df57d5a_0.png?Expires=1704844800&Signature=bdxOVPY6rdUWF1mCupqsa9GGPBBQGCSGKz6JNDAML-TMyORy4DL8T4-R1bfLQ-ICXZIQfadsK7damiJE50P9StN76E6HDV0gVNB7SDJq5wzo3-zMI133mrAqk~4gc6uEjyZHXItqUnA-~vT9XXl7A3ztLt3l-9saZZpDEipesZEOFD8CluYWgsQRiAGU6UE-xGqDj9diDxJYOJaVzdMF7VPFLmFdew54Se8LnrWp6nTOHDQjBKxO3o4JZFe-r8xknf78F2oBxPf2R7hj7m55Asp2-HgfTIEn0PrbwRe3t759SUxewiSymXA82pOy7tL~IYfaiwQeFapJwB4UDT~Gdg__&Key-Pair-Id=KNBS2THMRC385
            - name: エクスプロッシャー
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/1e32f5e1e65793585f6423e4fcae1a146a79d2a09e6e15575015af8a2032a4fe_0.png?Expires=1704844800&Signature=DTzJ2ctF6-CanoU0bxfU7qdtyfMqDeWTc5Sl84-tyeQodX0rGvkzv-TZG6Jz7Sc6qRMDGg1O~G7UXW-m5zmFf5adwX-uMV7XXMZF9Ax0VYUPJHoDtsVV30UfhHoFKXIZ71QPa05X~qexGoCCMgmCfEJJ-9MkioaAkN5jXJKaMYaT-pU64IijnHi2evtPV2OEeyV5bB5C-l8kLfkclAF3T~xWEBg3Bt~LNPJDaOnNeeOOZkucOvQaPb~VPI9jz3DETXF1UtRVyyUkcRlZPXSu4i0VagRnnE6w6YJObuNNYV52HMD6d9yjaLHQc5WndWxjdNiCSBIEYeTnk7CMN69RjA__&Key-Pair-Id=KNBS2THMRC385
            - name: ソイチューバー
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/2b349390a464710982d7e1496130898e7b5a66c301aa44fc9e19332d42e360ad_0.png?Expires=1704844800&Signature=oPf-0Z8MBnLrlRYpJbNGgIFk0TKn8cddQeoHFgKIU8A98Wi~xyi3vs7IL77ZOlMaIOmXFcLAJRke1tPRLBpQlql~mavo5D9nqUFBdNGu8Or3ffgPVBbfllIEFp5BKWI2ENQkO5XXJXtjllKTpA0RFFcJ2N12pLrvpOSl1EmkEwF803O66u519TD2Ixst~yvsndXOMB0KUYdRI~Cixi7TEuahIQXGsTaM-IjnDFN36IG~RGYxoBjNeHxWC71Vz3pyYBIPeu88n93XRTjizhRtnKV~0H4bpk7w5UKvSKb-HvJZJqS9Q-UVOyFBCEBZfBKG04ZXiknFrqZaG1iG0uQNGQ__&Key-Pair-Id=KNBS2THMRC385
            nextHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDcwOFQwMDAxNDJfOWM2NTA1MjgtNDM3ZS00ZWYzLWExM2MtMjJjM2JiZGE5N2Y1
            previousHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDcwN1QyMzQ2MjlfNzYxOWM2ODEtNGRhZC00MWZjLThkZDctNDVjZGQyYmQ0NDU0
            resultWave: 0
            coopStage:
              name: シェケナダム
              id: Q29vcFN0YWdlLTE=
            afterGrade:
              name: でんせつ
              id: Q29vcEdyYWRlLTg=
            afterGradePoint: 150
            gradePointDiff: UP
            bossResult:
            myResult:
              deliverCount: 1355
            memberResults:
            - deliverCount: 1189
            - deliverCount: 1220
            - deliverCount: 671
            waveResults:
            - teamDeliverCount: 27
            - teamDeliverCount: 32
            - teamDeliverCount: 33
          - id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDcwN1QyMzQ2MjlfNzYxOWM2ODEtNGRhZC00MWZjLThkZDctNDVjZGQyYmQ0NDU0
            weapons:
            - name: N-ZAP85
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/e6dbf73aa6ff9d1feb61fcabadb2d31e08b228a9736b4f5d8a5baeab9b493255_0.png?Expires=1704844800&Signature=hJtmHciAftMv30zLe7DxC1SzSrgLKEfiqOJjka9QcAtgaAYlmsWnV9uES0vd~18epUONDr5-rH8iEwf~UoKTWa4yQwvwE09D04Ubl6A71U6jrjBqIIu7RgVu6S~UPqToAAjoWq6PHetThUClslng3iI7dSTBjeL-r-s66plRcdkSkzU0Kc8J80L9XvjjCHZv3mXNPmsDB9lpOYyzoHP1bj4cIzc6FGAaqT~8a3QTQHMzpUGJVkcj6KWccnCW4piabmtL-eC-hPXiEQlo~fzgO0ZXAiAFe0sISNX~1MJJeFAV9JVuu2ONMiq2TLpK2AIhTFvd6irv7laAnB~B3TtJPQ__&Key-Pair-Id=KNBS2THMRC385
            - name: H3リールガン
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/418d75d9ca0304922f06eff539c511238b143ef8331969e20d54a9560df57d5a_0.png?Expires=1704844800&Signature=bdxOVPY6rdUWF1mCupqsa9GGPBBQGCSGKz6JNDAML-TMyORy4DL8T4-R1bfLQ-ICXZIQfadsK7damiJE50P9StN76E6HDV0gVNB7SDJq5wzo3-zMI133mrAqk~4gc6uEjyZHXItqUnA-~vT9XXl7A3ztLt3l-9saZZpDEipesZEOFD8CluYWgsQRiAGU6UE-xGqDj9diDxJYOJaVzdMF7VPFLmFdew54Se8LnrWp6nTOHDQjBKxO3o4JZFe-r8xknf78F2oBxPf2R7hj7m55Asp2-HgfTIEn0PrbwRe3t759SUxewiSymXA82pOy7tL~IYfaiwQeFapJwB4UDT~Gdg__&Key-Pair-Id=KNBS2THMRC385
            - name: エクスプロッシャー
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/1e32f5e1e65793585f6423e4fcae1a146a79d2a09e6e15575015af8a2032a4fe_0.png?Expires=1704844800&Signature=DTzJ2ctF6-CanoU0bxfU7qdtyfMqDeWTc5Sl84-tyeQodX0rGvkzv-TZG6Jz7Sc6qRMDGg1O~G7UXW-m5zmFf5adwX-uMV7XXMZF9Ax0VYUPJHoDtsVV30UfhHoFKXIZ71QPa05X~qexGoCCMgmCfEJJ-9MkioaAkN5jXJKaMYaT-pU64IijnHi2evtPV2OEeyV5bB5C-l8kLfkclAF3T~xWEBg3Bt~LNPJDaOnNeeOOZkucOvQaPb~VPI9jz3DETXF1UtRVyyUkcRlZPXSu4i0VagRnnE6w6YJObuNNYV52HMD6d9yjaLHQc5WndWxjdNiCSBIEYeTnk7CMN69RjA__&Key-Pair-Id=KNBS2THMRC385
            - name: ソイチューバー
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/2b349390a464710982d7e1496130898e7b5a66c301aa44fc9e19332d42e360ad_0.png?Expires=1704844800&Signature=oPf-0Z8MBnLrlRYpJbNGgIFk0TKn8cddQeoHFgKIU8A98Wi~xyi3vs7IL77ZOlMaIOmXFcLAJRke1tPRLBpQlql~mavo5D9nqUFBdNGu8Or3ffgPVBbfllIEFp5BKWI2ENQkO5XXJXtjllKTpA0RFFcJ2N12pLrvpOSl1EmkEwF803O66u519TD2Ixst~yvsndXOMB0KUYdRI~Cixi7TEuahIQXGsTaM-IjnDFN36IG~RGYxoBjNeHxWC71Vz3pyYBIPeu88n93XRTjizhRtnKV~0H4bpk7w5UKvSKb-HvJZJqS9Q-UVOyFBCEBZfBKG04ZXiknFrqZaG1iG0uQNGQ__&Key-Pair-Id=KNBS2THMRC385
            nextHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDcwN1QyMzUzMzVfNzYxOWM2ODEtNGRhZC00MWZjLThkZDctNDVjZGQyYmQ0NDU0
            previousHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDcwN1QyMzM3NTRfNzYxOWM2ODEtNGRhZC00MWZjLThkZDctNDVjZGQyYmQ0NDU0
            resultWave: 0
            coopStage:
              name: シェケナダム
              id: Q29vcFN0YWdlLTE=
            afterGrade:
              name: でんせつ
              id: Q29vcEdyYWRlLTg=
            afterGradePoint: 130
            gradePointDiff: UP
            bossResult:
            myResult:
              deliverCount: 1415
            memberResults:
            - deliverCount: 360
            - deliverCount: 1550
            - deliverCount: 1266
            waveResults:
            - teamDeliverCount: 30
            - teamDeliverCount: 33
            - teamDeliverCount: 38
          - id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDcwN1QyMzM3NTRfNzYxOWM2ODEtNGRhZC00MWZjLThkZDctNDVjZGQyYmQ0NDU0
            weapons:
            - name: N-ZAP85
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/e6dbf73aa6ff9d1feb61fcabadb2d31e08b228a9736b4f5d8a5baeab9b493255_0.png?Expires=1704844800&Signature=hJtmHciAftMv30zLe7DxC1SzSrgLKEfiqOJjka9QcAtgaAYlmsWnV9uES0vd~18epUONDr5-rH8iEwf~UoKTWa4yQwvwE09D04Ubl6A71U6jrjBqIIu7RgVu6S~UPqToAAjoWq6PHetThUClslng3iI7dSTBjeL-r-s66plRcdkSkzU0Kc8J80L9XvjjCHZv3mXNPmsDB9lpOYyzoHP1bj4cIzc6FGAaqT~8a3QTQHMzpUGJVkcj6KWccnCW4piabmtL-eC-hPXiEQlo~fzgO0ZXAiAFe0sISNX~1MJJeFAV9JVuu2ONMiq2TLpK2AIhTFvd6irv7laAnB~B3TtJPQ__&Key-Pair-Id=KNBS2THMRC385
            - name: H3リールガン
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/418d75d9ca0304922f06eff539c511238b143ef8331969e20d54a9560df57d5a_0.png?Expires=1704844800&Signature=bdxOVPY6rdUWF1mCupqsa9GGPBBQGCSGKz6JNDAML-TMyORy4DL8T4-R1bfLQ-ICXZIQfadsK7damiJE50P9StN76E6HDV0gVNB7SDJq5wzo3-zMI133mrAqk~4gc6uEjyZHXItqUnA-~vT9XXl7A3ztLt3l-9saZZpDEipesZEOFD8CluYWgsQRiAGU6UE-xGqDj9diDxJYOJaVzdMF7VPFLmFdew54Se8LnrWp6nTOHDQjBKxO3o4JZFe-r8xknf78F2oBxPf2R7hj7m55Asp2-HgfTIEn0PrbwRe3t759SUxewiSymXA82pOy7tL~IYfaiwQeFapJwB4UDT~Gdg__&Key-Pair-Id=KNBS2THMRC385
            - name: エクスプロッシャー
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/1e32f5e1e65793585f6423e4fcae1a146a79d2a09e6e15575015af8a2032a4fe_0.png?Expires=1704844800&Signature=DTzJ2ctF6-CanoU0bxfU7qdtyfMqDeWTc5Sl84-tyeQodX0rGvkzv-TZG6Jz7Sc6qRMDGg1O~G7UXW-m5zmFf5adwX-uMV7XXMZF9Ax0VYUPJHoDtsVV30UfhHoFKXIZ71QPa05X~qexGoCCMgmCfEJJ-9MkioaAkN5jXJKaMYaT-pU64IijnHi2evtPV2OEeyV5bB5C-l8kLfkclAF3T~xWEBg3Bt~LNPJDaOnNeeOOZkucOvQaPb~VPI9jz3DETXF1UtRVyyUkcRlZPXSu4i0VagRnnE6w6YJObuNNYV52HMD6d9yjaLHQc5WndWxjdNiCSBIEYeTnk7CMN69RjA__&Key-Pair-Id=KNBS2THMRC385
            - name: ソイチューバー
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/2b349390a464710982d7e1496130898e7b5a66c301aa44fc9e19332d42e360ad_0.png?Expires=1704844800&Signature=oPf-0Z8MBnLrlRYpJbNGgIFk0TKn8cddQeoHFgKIU8A98Wi~xyi3vs7IL77ZOlMaIOmXFcLAJRke1tPRLBpQlql~mavo5D9nqUFBdNGu8Or3ffgPVBbfllIEFp5BKWI2ENQkO5XXJXtjllKTpA0RFFcJ2N12pLrvpOSl1EmkEwF803O66u519TD2Ixst~yvsndXOMB0KUYdRI~Cixi7TEuahIQXGsTaM-IjnDFN36IG~RGYxoBjNeHxWC71Vz3pyYBIPeu88n93XRTjizhRtnKV~0H4bpk7w5UKvSKb-HvJZJqS9Q-UVOyFBCEBZfBKG04ZXiknFrqZaG1iG0uQNGQ__&Key-Pair-Id=KNBS2THMRC385
            nextHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDcwN1QyMzQ2MjlfNzYxOWM2ODEtNGRhZC00MWZjLThkZDctNDVjZGQyYmQ0NDU0
            previousHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDcwN1QyMTI2MjZfOWVhYWQwMGUtZTYyMC00MzQwLTgzODgtN2VjYTAyYmM0NGEz
            resultWave: 0
            coopStage:
              name: シェケナダム
              id: Q29vcFN0YWdlLTE=
            afterGrade:
              name: でんせつ
              id: Q29vcEdyYWRlLTg=
            afterGradePoint: 110
            gradePointDiff: UP
            bossResult:
              hasDefeatBoss: true
              boss:
                name: タツ
                id: Q29vcEVuZW15LTI0
            myResult:
              deliverCount: 1278
            memberResults:
            - deliverCount: 1242
            - deliverCount: 788
            - deliverCount: 818
            waveResults:
            - teamDeliverCount: 35
            - teamDeliverCount: 37
            - teamDeliverCount: 46
            - teamDeliverCount:
          - id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDcwN1QyMTI2MjZfOWVhYWQwMGUtZTYyMC00MzQwLTgzODgtN2VjYTAyYmM0NGEz
            weapons:
            - name: N-ZAP85
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/e6dbf73aa6ff9d1feb61fcabadb2d31e08b228a9736b4f5d8a5baeab9b493255_0.png?Expires=1704844800&Signature=hJtmHciAftMv30zLe7DxC1SzSrgLKEfiqOJjka9QcAtgaAYlmsWnV9uES0vd~18epUONDr5-rH8iEwf~UoKTWa4yQwvwE09D04Ubl6A71U6jrjBqIIu7RgVu6S~UPqToAAjoWq6PHetThUClslng3iI7dSTBjeL-r-s66plRcdkSkzU0Kc8J80L9XvjjCHZv3mXNPmsDB9lpOYyzoHP1bj4cIzc6FGAaqT~8a3QTQHMzpUGJVkcj6KWccnCW4piabmtL-eC-hPXiEQlo~fzgO0ZXAiAFe0sISNX~1MJJeFAV9JVuu2ONMiq2TLpK2AIhTFvd6irv7laAnB~B3TtJPQ__&Key-Pair-Id=KNBS2THMRC385
            - name: H3リールガン
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/418d75d9ca0304922f06eff539c511238b143ef8331969e20d54a9560df57d5a_0.png?Expires=1704844800&Signature=bdxOVPY6rdUWF1mCupqsa9GGPBBQGCSGKz6JNDAML-TMyORy4DL8T4-R1bfLQ-ICXZIQfadsK7damiJE50P9StN76E6HDV0gVNB7SDJq5wzo3-zMI133mrAqk~4gc6uEjyZHXItqUnA-~vT9XXl7A3ztLt3l-9saZZpDEipesZEOFD8CluYWgsQRiAGU6UE-xGqDj9diDxJYOJaVzdMF7VPFLmFdew54Se8LnrWp6nTOHDQjBKxO3o4JZFe-r8xknf78F2oBxPf2R7hj7m55Asp2-HgfTIEn0PrbwRe3t759SUxewiSymXA82pOy7tL~IYfaiwQeFapJwB4UDT~Gdg__&Key-Pair-Id=KNBS2THMRC385
            - name: エクスプロッシャー
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/1e32f5e1e65793585f6423e4fcae1a146a79d2a09e6e15575015af8a2032a4fe_0.png?Expires=1704844800&Signature=DTzJ2ctF6-CanoU0bxfU7qdtyfMqDeWTc5Sl84-tyeQodX0rGvkzv-TZG6Jz7Sc6qRMDGg1O~G7UXW-m5zmFf5adwX-uMV7XXMZF9Ax0VYUPJHoDtsVV30UfhHoFKXIZ71QPa05X~qexGoCCMgmCfEJJ-9MkioaAkN5jXJKaMYaT-pU64IijnHi2evtPV2OEeyV5bB5C-l8kLfkclAF3T~xWEBg3Bt~LNPJDaOnNeeOOZkucOvQaPb~VPI9jz3DETXF1UtRVyyUkcRlZPXSu4i0VagRnnE6w6YJObuNNYV52HMD6d9yjaLHQc5WndWxjdNiCSBIEYeTnk7CMN69RjA__&Key-Pair-Id=KNBS2THMRC385
            - name: ソイチューバー
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/2b349390a464710982d7e1496130898e7b5a66c301aa44fc9e19332d42e360ad_0.png?Expires=1704844800&Signature=oPf-0Z8MBnLrlRYpJbNGgIFk0TKn8cddQeoHFgKIU8A98Wi~xyi3vs7IL77ZOlMaIOmXFcLAJRke1tPRLBpQlql~mavo5D9nqUFBdNGu8Or3ffgPVBbfllIEFp5BKWI2ENQkO5XXJXtjllKTpA0RFFcJ2N12pLrvpOSl1EmkEwF803O66u519TD2Ixst~yvsndXOMB0KUYdRI~Cixi7TEuahIQXGsTaM-IjnDFN36IG~RGYxoBjNeHxWC71Vz3pyYBIPeu88n93XRTjizhRtnKV~0H4bpk7w5UKvSKb-HvJZJqS9Q-UVOyFBCEBZfBKG04ZXiknFrqZaG1iG0uQNGQ__&Key-Pair-Id=KNBS2THMRC385
            nextHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDcwN1QyMzM3NTRfNzYxOWM2ODEtNGRhZC00MWZjLThkZDctNDVjZGQyYmQ0NDU0
            previousHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDcwN1QyMTE3MzRfOWVhYWQwMGUtZTYyMC00MzQwLTgzODgtN2VjYTAyYmM0NGEz
            resultWave: 0
            coopStage:
              name: シェケナダム
              id: Q29vcFN0YWdlLTE=
            afterGrade:
              name: でんせつ
              id: Q29vcEdyYWRlLTg=
            afterGradePoint: 90
            gradePointDiff: UP
            bossResult:
            myResult:
              deliverCount: 929
            memberResults:
            - deliverCount: 451
            - deliverCount: 848
            - deliverCount: 962
            waveResults:
            - teamDeliverCount: 28
            - teamDeliverCount: 41
            - teamDeliverCount: 38
          - id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDcwN1QyMTE3MzRfOWVhYWQwMGUtZTYyMC00MzQwLTgzODgtN2VjYTAyYmM0NGEz
            weapons:
            - name: N-ZAP85
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/e6dbf73aa6ff9d1feb61fcabadb2d31e08b228a9736b4f5d8a5baeab9b493255_0.png?Expires=1704844800&Signature=hJtmHciAftMv30zLe7DxC1SzSrgLKEfiqOJjka9QcAtgaAYlmsWnV9uES0vd~18epUONDr5-rH8iEwf~UoKTWa4yQwvwE09D04Ubl6A71U6jrjBqIIu7RgVu6S~UPqToAAjoWq6PHetThUClslng3iI7dSTBjeL-r-s66plRcdkSkzU0Kc8J80L9XvjjCHZv3mXNPmsDB9lpOYyzoHP1bj4cIzc6FGAaqT~8a3QTQHMzpUGJVkcj6KWccnCW4piabmtL-eC-hPXiEQlo~fzgO0ZXAiAFe0sISNX~1MJJeFAV9JVuu2ONMiq2TLpK2AIhTFvd6irv7laAnB~B3TtJPQ__&Key-Pair-Id=KNBS2THMRC385
            - name: H3リールガン
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/418d75d9ca0304922f06eff539c511238b143ef8331969e20d54a9560df57d5a_0.png?Expires=1704844800&Signature=bdxOVPY6rdUWF1mCupqsa9GGPBBQGCSGKz6JNDAML-TMyORy4DL8T4-R1bfLQ-ICXZIQfadsK7damiJE50P9StN76E6HDV0gVNB7SDJq5wzo3-zMI133mrAqk~4gc6uEjyZHXItqUnA-~vT9XXl7A3ztLt3l-9saZZpDEipesZEOFD8CluYWgsQRiAGU6UE-xGqDj9diDxJYOJaVzdMF7VPFLmFdew54Se8LnrWp6nTOHDQjBKxO3o4JZFe-r8xknf78F2oBxPf2R7hj7m55Asp2-HgfTIEn0PrbwRe3t759SUxewiSymXA82pOy7tL~IYfaiwQeFapJwB4UDT~Gdg__&Key-Pair-Id=KNBS2THMRC385
            - name: エクスプロッシャー
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/1e32f5e1e65793585f6423e4fcae1a146a79d2a09e6e15575015af8a2032a4fe_0.png?Expires=1704844800&Signature=DTzJ2ctF6-CanoU0bxfU7qdtyfMqDeWTc5Sl84-tyeQodX0rGvkzv-TZG6Jz7Sc6qRMDGg1O~G7UXW-m5zmFf5adwX-uMV7XXMZF9Ax0VYUPJHoDtsVV30UfhHoFKXIZ71QPa05X~qexGoCCMgmCfEJJ-9MkioaAkN5jXJKaMYaT-pU64IijnHi2evtPV2OEeyV5bB5C-l8kLfkclAF3T~xWEBg3Bt~LNPJDaOnNeeOOZkucOvQaPb~VPI9jz3DETXF1UtRVyyUkcRlZPXSu4i0VagRnnE6w6YJObuNNYV52HMD6d9yjaLHQc5WndWxjdNiCSBIEYeTnk7CMN69RjA__&Key-Pair-Id=KNBS2THMRC385
            - name: ソイチューバー
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/2b349390a464710982d7e1496130898e7b5a66c301aa44fc9e19332d42e360ad_0.png?Expires=1704844800&Signature=oPf-0Z8MBnLrlRYpJbNGgIFk0TKn8cddQeoHFgKIU8A98Wi~xyi3vs7IL77ZOlMaIOmXFcLAJRke1tPRLBpQlql~mavo5D9nqUFBdNGu8Or3ffgPVBbfllIEFp5BKWI2ENQkO5XXJXtjllKTpA0RFFcJ2N12pLrvpOSl1EmkEwF803O66u519TD2Ixst~yvsndXOMB0KUYdRI~Cixi7TEuahIQXGsTaM-IjnDFN36IG~RGYxoBjNeHxWC71Vz3pyYBIPeu88n93XRTjizhRtnKV~0H4bpk7w5UKvSKb-HvJZJqS9Q-UVOyFBCEBZfBKG04ZXiknFrqZaG1iG0uQNGQ__&Key-Pair-Id=KNBS2THMRC385
            nextHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDcwN1QyMTI2MjZfOWVhYWQwMGUtZTYyMC00MzQwLTgzODgtN2VjYTAyYmM0NGEz
            previousHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDcwN1QyMTEwMDVfMWFmY2E1YTItYzU5MS00MzE1LTk1ZTEtMDJjNDExYjU5ZWVi
            resultWave: 0
            coopStage:
              name: シェケナダム
              id: Q29vcFN0YWdlLTE=
            afterGrade:
              name: でんせつ
              id: Q29vcEdyYWRlLTg=
            afterGradePoint: 70
            gradePointDiff: UP
            bossResult:
              hasDefeatBoss: true
              boss:
                name: タツ
                id: Q29vcEVuZW15LTI0
            myResult:
              deliverCount: 1137
            memberResults:
            - deliverCount: 192
            - deliverCount: 1225
            - deliverCount: 1739
            waveResults:
            - teamDeliverCount: 25
            - teamDeliverCount: 26
            - teamDeliverCount: 38
            - teamDeliverCount:
          - id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDcwN1QyMTEwMDVfMWFmY2E1YTItYzU5MS00MzE1LTk1ZTEtMDJjNDExYjU5ZWVi
            weapons:
            - name: N-ZAP85
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/e6dbf73aa6ff9d1feb61fcabadb2d31e08b228a9736b4f5d8a5baeab9b493255_0.png?Expires=1704844800&Signature=hJtmHciAftMv30zLe7DxC1SzSrgLKEfiqOJjka9QcAtgaAYlmsWnV9uES0vd~18epUONDr5-rH8iEwf~UoKTWa4yQwvwE09D04Ubl6A71U6jrjBqIIu7RgVu6S~UPqToAAjoWq6PHetThUClslng3iI7dSTBjeL-r-s66plRcdkSkzU0Kc8J80L9XvjjCHZv3mXNPmsDB9lpOYyzoHP1bj4cIzc6FGAaqT~8a3QTQHMzpUGJVkcj6KWccnCW4piabmtL-eC-hPXiEQlo~fzgO0ZXAiAFe0sISNX~1MJJeFAV9JVuu2ONMiq2TLpK2AIhTFvd6irv7laAnB~B3TtJPQ__&Key-Pair-Id=KNBS2THMRC385
            - name: H3リールガン
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/418d75d9ca0304922f06eff539c511238b143ef8331969e20d54a9560df57d5a_0.png?Expires=1704844800&Signature=bdxOVPY6rdUWF1mCupqsa9GGPBBQGCSGKz6JNDAML-TMyORy4DL8T4-R1bfLQ-ICXZIQfadsK7damiJE50P9StN76E6HDV0gVNB7SDJq5wzo3-zMI133mrAqk~4gc6uEjyZHXItqUnA-~vT9XXl7A3ztLt3l-9saZZpDEipesZEOFD8CluYWgsQRiAGU6UE-xGqDj9diDxJYOJaVzdMF7VPFLmFdew54Se8LnrWp6nTOHDQjBKxO3o4JZFe-r8xknf78F2oBxPf2R7hj7m55Asp2-HgfTIEn0PrbwRe3t759SUxewiSymXA82pOy7tL~IYfaiwQeFapJwB4UDT~Gdg__&Key-Pair-Id=KNBS2THMRC385
            - name: エクスプロッシャー
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/1e32f5e1e65793585f6423e4fcae1a146a79d2a09e6e15575015af8a2032a4fe_0.png?Expires=1704844800&Signature=DTzJ2ctF6-CanoU0bxfU7qdtyfMqDeWTc5Sl84-tyeQodX0rGvkzv-TZG6Jz7Sc6qRMDGg1O~G7UXW-m5zmFf5adwX-uMV7XXMZF9Ax0VYUPJHoDtsVV30UfhHoFKXIZ71QPa05X~qexGoCCMgmCfEJJ-9MkioaAkN5jXJKaMYaT-pU64IijnHi2evtPV2OEeyV5bB5C-l8kLfkclAF3T~xWEBg3Bt~LNPJDaOnNeeOOZkucOvQaPb~VPI9jz3DETXF1UtRVyyUkcRlZPXSu4i0VagRnnE6w6YJObuNNYV52HMD6d9yjaLHQc5WndWxjdNiCSBIEYeTnk7CMN69RjA__&Key-Pair-Id=KNBS2THMRC385
            - name: ソイチューバー
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/2b349390a464710982d7e1496130898e7b5a66c301aa44fc9e19332d42e360ad_0.png?Expires=1704844800&Signature=oPf-0Z8MBnLrlRYpJbNGgIFk0TKn8cddQeoHFgKIU8A98Wi~xyi3vs7IL77ZOlMaIOmXFcLAJRke1tPRLBpQlql~mavo5D9nqUFBdNGu8Or3ffgPVBbfllIEFp5BKWI2ENQkO5XXJXtjllKTpA0RFFcJ2N12pLrvpOSl1EmkEwF803O66u519TD2Ixst~yvsndXOMB0KUYdRI~Cixi7TEuahIQXGsTaM-IjnDFN36IG~RGYxoBjNeHxWC71Vz3pyYBIPeu88n93XRTjizhRtnKV~0H4bpk7w5UKvSKb-HvJZJqS9Q-UVOyFBCEBZfBKG04ZXiknFrqZaG1iG0uQNGQ__&Key-Pair-Id=KNBS2THMRC385
            nextHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDcwN1QyMTE3MzRfOWVhYWQwMGUtZTYyMC00MzQwLTgzODgtN2VjYTAyYmM0NGEz
            previousHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDcwN1QyMTAzMDhfMWFmY2E1YTItYzU5MS00MzE1LTk1ZTEtMDJjNDExYjU5ZWVi
            resultWave: 3
            coopStage:
              name: シェケナダム
              id: Q29vcFN0YWdlLTE=
            afterGrade:
              name: でんせつ
              id: Q29vcEdyYWRlLTg=
            afterGradePoint: 50
            gradePointDiff: KEEP
            bossResult:
            myResult:
              deliverCount: 1291
            memberResults:
            - deliverCount: 735
            - deliverCount: 1158
            - deliverCount: 568
            waveResults:
            - teamDeliverCount: 50
            - teamDeliverCount: 39
            - teamDeliverCount: 23
          - id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDcwN1QyMTAzMDhfMWFmY2E1YTItYzU5MS00MzE1LTk1ZTEtMDJjNDExYjU5ZWVi
            weapons:
            - name: N-ZAP85
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/e6dbf73aa6ff9d1feb61fcabadb2d31e08b228a9736b4f5d8a5baeab9b493255_0.png?Expires=1704844800&Signature=hJtmHciAftMv30zLe7DxC1SzSrgLKEfiqOJjka9QcAtgaAYlmsWnV9uES0vd~18epUONDr5-rH8iEwf~UoKTWa4yQwvwE09D04Ubl6A71U6jrjBqIIu7RgVu6S~UPqToAAjoWq6PHetThUClslng3iI7dSTBjeL-r-s66plRcdkSkzU0Kc8J80L9XvjjCHZv3mXNPmsDB9lpOYyzoHP1bj4cIzc6FGAaqT~8a3QTQHMzpUGJVkcj6KWccnCW4piabmtL-eC-hPXiEQlo~fzgO0ZXAiAFe0sISNX~1MJJeFAV9JVuu2ONMiq2TLpK2AIhTFvd6irv7laAnB~B3TtJPQ__&Key-Pair-Id=KNBS2THMRC385
            - name: H3リールガン
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/418d75d9ca0304922f06eff539c511238b143ef8331969e20d54a9560df57d5a_0.png?Expires=1704844800&Signature=bdxOVPY6rdUWF1mCupqsa9GGPBBQGCSGKz6JNDAML-TMyORy4DL8T4-R1bfLQ-ICXZIQfadsK7damiJE50P9StN76E6HDV0gVNB7SDJq5wzo3-zMI133mrAqk~4gc6uEjyZHXItqUnA-~vT9XXl7A3ztLt3l-9saZZpDEipesZEOFD8CluYWgsQRiAGU6UE-xGqDj9diDxJYOJaVzdMF7VPFLmFdew54Se8LnrWp6nTOHDQjBKxO3o4JZFe-r8xknf78F2oBxPf2R7hj7m55Asp2-HgfTIEn0PrbwRe3t759SUxewiSymXA82pOy7tL~IYfaiwQeFapJwB4UDT~Gdg__&Key-Pair-Id=KNBS2THMRC385
            - name: エクスプロッシャー
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/1e32f5e1e65793585f6423e4fcae1a146a79d2a09e6e15575015af8a2032a4fe_0.png?Expires=1704844800&Signature=DTzJ2ctF6-CanoU0bxfU7qdtyfMqDeWTc5Sl84-tyeQodX0rGvkzv-TZG6Jz7Sc6qRMDGg1O~G7UXW-m5zmFf5adwX-uMV7XXMZF9Ax0VYUPJHoDtsVV30UfhHoFKXIZ71QPa05X~qexGoCCMgmCfEJJ-9MkioaAkN5jXJKaMYaT-pU64IijnHi2evtPV2OEeyV5bB5C-l8kLfkclAF3T~xWEBg3Bt~LNPJDaOnNeeOOZkucOvQaPb~VPI9jz3DETXF1UtRVyyUkcRlZPXSu4i0VagRnnE6w6YJObuNNYV52HMD6d9yjaLHQc5WndWxjdNiCSBIEYeTnk7CMN69RjA__&Key-Pair-Id=KNBS2THMRC385
            - name: ソイチューバー
              image:
                url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/2b349390a464710982d7e1496130898e7b5a66c301aa44fc9e19332d42e360ad_0.png?Expires=1704844800&Signature=oPf-0Z8MBnLrlRYpJbNGgIFk0TKn8cddQeoHFgKIU8A98Wi~xyi3vs7IL77ZOlMaIOmXFcLAJRke1tPRLBpQlql~mavo5D9nqUFBdNGu8Or3ffgPVBbfllIEFp5BKWI2ENQkO5XXJXtjllKTpA0RFFcJ2N12pLrvpOSl1EmkEwF803O66u519TD2Ixst~yvsndXOMB0KUYdRI~Cixi7TEuahIQXGsTaM-IjnDFN36IG~RGYxoBjNeHxWC71Vz3pyYBIPeu88n93XRTjizhRtnKV~0H4bpk7w5UKvSKb-HvJZJqS9Q-UVOyFBCEBZfBKG04ZXiknFrqZaG1iG0uQNGQ__&Key-Pair-Id=KNBS2THMRC385
            nextHistoryDetail:
              id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDcwN1QyMTEwMDVfMWFmY2E1YTItYzU5MS00MzE1LTk1ZTEtMDJjNDExYjU5ZWVi
            previousHistoryDetail:
            resultWave: 3
            coopStage:
              name: シェケナダム
              id: Q29vcFN0YWdlLTE=
            afterGrade:
              name: でんせつ
              id: Q29vcEdyYWRlLTg=
            afterGradePoint: 50
            gradePointDiff: KEEP
            bossResult:
            myResult:
              deliverCount: 769
            memberResults:
            - deliverCount: 843
            - deliverCount: 919
            - deliverCount: 676
            waveResults:
            - teamDeliverCount: 31
            - teamDeliverCount: 32
            - teamDeliverCount: 29
```
