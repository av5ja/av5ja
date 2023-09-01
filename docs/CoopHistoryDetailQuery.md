## CoopHistoryDetailQuery

指定されたリザルトIDのリザルト詳細を返します.

## 注意点

1. `played_time`及び`play_time`は同一のリザルトであってもユーザーごとに持つ可能性があります
   - この値をDBに保存するときのプライマリキーに設定しないでください
   - プレイ時間を参照する場合は`id.start_time`を利用して下さい
2. `id.uuid`はユニークな値ではありません
   - この値をDBに保存するときのプライマリキーに設定しないでください
3. `id.host_npln_user_id`
   - ホストなのかどうか未検証
   - 部屋を立てた人かどうか未検証
4. `job_result.is_clear`
   - オカシラ討伐に失敗しても`true`が返ります
   - オカシラの討伐結果は`job_result.is_boss_defeated`を利用してください
5. `wave.is_clear`
   - そのWAVEをクリアできたかの値です
   - オカシラ討伐失敗時は`false`が返ります

### SP2形式

```json
{
   "id":{
      "id":"CoopHistoryDetail",
      "prefix":"u",
      "npln_user_id":"a7grz65rxkvhfsbwmxmm",
      "start_time":"2023-08-27T10:56:30.000Z",
      "uuid":"7959dbdb-fe1f-4576-bc3e-0f4dfa0b7b0e"
   },
   "scale":[
      null,
      null,
      null
   ],
   "job_score":155,
   "grade_id":8,
   "kuma_point":437,
   "wave_details":[
      {
         "id":1,
         "is_clear":true,
         "water_level":0,
         "event_type":7,
         "golden_ikura_num":54,
         "quota_num":27,
         "golden_ikura_pop_num":84
      },
      {
         "id":2,
         "is_clear":true,
         "water_level":1,
         "event_type":1,
         "golden_ikura_num":46,
         "quota_num":29,
         "golden_ikura_pop_num":60
      },
      {
         "id":3,
         "is_clear":true,
         "water_level":1,
         "event_type":null,
         "golden_ikura_num":33,
         "quota_num":31,
         "golden_ikura_pop_num":75
      }
   ],
   "job_result":{
      "is_clear":true,
      "failure_wave":null,
      "is_boss_defeated":null,
      "boss_id":null
   },
   "my_result":{
      "id":{
         "id":"CoopPlayer",
         "prefix":"u",
         "npln_user_id":"a7grz65rxkvhfsbwmxmm",
         "start_time":"2023-08-27T10:56:30.000Z",
         "uuid":"7959dbdb-fe1f-4576-bc3e-0f4dfa0b7b0e",
         "suffix":"u",
         "host_npln_user_id":"a7grz65rxkvhfsbwmxmm"
      },
      "npln_user_id":"a7grz65rxkvhfsbwmxmm",
      "is_myself":true,
      "byname":"バンカラな若者",
      "name":"しんさとおして",
      "name_id":"2218",
      "nameplate":{
         "badges":[
            null,
            null,
            null
         ],
         "background":{
            "text_color":{
               "a":1,
               "b":1,
               "g":1,
               "r":1
            },
            "id":1
         }
      },
      "golden_ikura_assist_num":24,
      "golden_ikura_num":9,
      "ikura_num":1393,
      "dead_count":2,
      "help_count":4,
      "weapon_list":[
         8000,
         2070,
         3010
      ],
      "special_id":20012,
      "special_counts":[
         0,
         0,
         1
      ],
      "boss_kill_counts":[
         1,
         0,
         0,
         2,
         3,
         0,
         0,
         0,
         0,
         0,
         0,
         2,
         0,
         0
      ],
      "boss_counts_total":8,
      "uniform":1,
      "species":"INKLING"
   },
   "other_results":[
      {
         "id":{
            "id":"CoopPlayer",
            "prefix":"u",
            "npln_user_id":"avtpn3umrfntl5i2cnmm",
            "start_time":"2023-08-27T10:56:30.000Z",
            "uuid":"7959dbdb-fe1f-4576-bc3e-0f4dfa0b7b0e",
            "suffix":"u",
            "host_npln_user_id":"a7grz65rxkvhfsbwmxmm"
         },
         "npln_user_id":"avtpn3umrfntl5i2cnmm",
         "is_myself":false,
         "byname":"朝型の一般人",
         "name":"がひゅー",
         "name_id":"3338",
         "nameplate":{
            "badges":[
               null,
               5200002,
               1030301
            ],
            "background":{
               "text_color":{
                  "a":1,
                  "b":0.00293231895,
                  "g":0.302125514,
                  "r":0.73720479
               },
               "id":11003
            }
         },
         "golden_ikura_assist_num":27,
         "golden_ikura_num":21,
         "ikura_num":1949,
         "dead_count":4,
         "help_count":3,
         "weapon_list":[
            310,
            3010,
            8000
         ],
         "special_id":20007,
         "special_counts":[
            0,
            2,
            0
         ],
         "boss_kill_counts":[
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
         ],
         "boss_counts_total":10,
         "uniform":11,
         "species":"INKLING"
      },
      {
         "id":{
            "id":"CoopPlayer",
            "prefix":"u",
            "npln_user_id":"ax6jhoz75jkj67eaekpm",
            "start_time":"2023-08-27T10:56:30.000Z",
            "uuid":"7959dbdb-fe1f-4576-bc3e-0f4dfa0b7b0e",
            "suffix":"u",
            "host_npln_user_id":"a7grz65rxkvhfsbwmxmm"
         },
         "npln_user_id":"ax6jhoz75jkj67eaekpm",
         "is_myself":false,
         "byname":"ムニ・エール海洋発電所のサーモンラン好き",
         "name":"*しんげきの m*~",
         "name_id":"2011",
         "nameplate":{
            "badges":[
               5110000,
               5000013,
               5000073
            ],
            "background":{
               "text_color":{
                  "a":1,
                  "b":1,
                  "g":1,
                  "r":1
               },
               "id":11067
            }
         },
         "golden_ikura_assist_num":5,
         "golden_ikura_num":62,
         "ikura_num":312,
         "dead_count":3,
         "help_count":6,
         "weapon_list":[
            2070,
            8000,
            310
         ],
         "special_id":20010,
         "special_counts":[
            0,
            0,
            1
         ],
         "boss_kill_counts":[
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
         ],
         "boss_counts_total":7,
         "uniform":9,
         "species":"OCTOLING"
      },
      {
         "id":{
            "id":"CoopPlayer",
            "prefix":"u",
            "npln_user_id":"qpaoipxt57ytvyw2qnmm",
            "start_time":"2023-08-27T10:56:30.000Z",
            "uuid":"7959dbdb-fe1f-4576-bc3e-0f4dfa0b7b0e",
            "suffix":"u",
            "host_npln_user_id":"a7grz65rxkvhfsbwmxmm"
         },
         "npln_user_id":"qpaoipxt57ytvyw2qnmm",
         "is_myself":false,
         "byname":"ゲーミング大統領",
         "name":"ゲーミングチェア",
         "name_id":"2575",
         "nameplate":{
            "badges":[
               1000400,
               2000010,
               5110000
            ],
            "background":{
               "text_color":{
                  "a":1,
                  "b":1,
                  "g":1,
                  "r":1
               },
               "id":11009
            }
         },
         "golden_ikura_assist_num":13,
         "golden_ikura_num":41,
         "ikura_num":857,
         "dead_count":8,
         "help_count":4,
         "weapon_list":[
            3010,
            310,
            2070
         ],
         "special_id":20014,
         "special_counts":[
            0,
            1,
            1
         ],
         "boss_kill_counts":[
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
         ],
         "boss_counts_total":18,
         "uniform":9,
         "species":"INKLING"
      }
   ],
   "grade_point":220,
   "job_rate":2.5,
   "play_time":"2023-08-27T10:56:30.000Z",
   "boss_counts":[
      2,
      0,
      3,
      3,
      5,
      5,
      3,
      2,
      2,
      0,
      3,
      20,
      0,
      0
   ],
   "boss_kill_counts":[
      2,
      0,
      3,
      3,
      5,
      3,
      3,
      2,
      2,
      0,
      2,
      20,
      0,
      0
   ],
   "danger_rate":2.52,
   "job_bonus":50,
   "schedule":{
      "start_time":"2023-08-26T00:00:00.000Z",
      "end_time":"2023-08-27T16:00:00.000Z",
      "mode":"REGULAR",
      "rule":"REGULAR",
      "weaponList":[
         3010,
         8000,
         310,
         2070
      ],
      "stage_id":8
   },
   "golden_ikura_num":133,
   "ikura_num":4511,
   "smell_meter":3,
   "scenario_code":null
}
```

### SP3形式

```json
{
   "after_grade":{
      "id":8
   },
   "rule":"REGULAR",
   "my_result":{
      "player":{
         "id":{
            "id":"CoopPlayer",
            "prefix":"u",
            "npln_user_id":"a7grz65rxkvhfsbwmxmm",
            "start_time":"2023-08-27T01:56:30.000Z",
            "uuid":"7959dbdb-fe1f-4576-bc3e-0f4dfa0b7b0e",
            "suffix":"u",
            "host_npln_user_id":"a7grz65rxkvhfsbwmxmm"
         },
         "byname":"バンカラな若者",
         "name":"しんさとおして",
         "name_id":"2218",
         "nameplate":{
            "badges":[
               null,
               null,
               null
            ],
            "background":{
               "hash":"dba78c8ed1013d420aacb669d31a002691f2bb4ec0c1c853e34244c40dc68ea8",
               "id":1,
               "text_color":{
                  "a":1,
                  "b":1,
                  "g":1,
                  "r":1
               }
            }
         },
         "uniform":{
            "hash":"89df74f2b5fbc49f76fb31f730fed012bb77f903746e81df108958010c95ef53",
            "id":1
         },
         "species":"INKLING"
      },
      "weapons":[
         {
            "hash":"ddd2a4258a70cdaf8a1dbc0ded024db497445d71f950fe7645fa8c69a178a082"
         },
         {
            "hash":"082489b182fbbabddde40831dac5867d6acc4778b6a38d8f5c8d445455d638eb"
         },
         {
            "hash":"f3dbd98d5b0e89f7be7eff25a5c63a06045fe64d8ffd5886e79c855e16791563"
         }
      ],
      "special_weapon":{
         "hash":"680379f8b83e5f9e033b828360827bc2f0e08c34df1abcc23de3d059fe2ac435",
         "id":20012
      },
      "defeat_enemy_count":8,
      "deliver_count":1393,
      "golden_assist_count":24,
      "golden_deliver_count":9,
      "rescue_count":4,
      "rescued_count":2
   },
   "member_results":[],
   "boss_result":null,
   "enemy_results":[
      {
         "defeat_count":1,
         "team_defeat_count":2,
         "pop_count":2,
         "enemy":{
            "hash":"f59fe344bd941f90dc8d3458ffd29b6586c1cffd00864967e7766a5a931dc4f6",
            "id":4
         }
      }
   ],
   "wave_results":[
      {
         "wave_number":1,
         "water_level":0,
         "event_wave":7,
         "deliver_norm":27,
         "golden_pop_count":84,
         "team_deliver_count":54
      }
   ],
   "result_wave":0,
   "played_time":"2023-08-27T10:56:30Z",
   "coop_stage":{
      "hash":"0e05d4caa34089a447535708370286f4ee6068661359b4d7cf6c319863424f84",
      "id":8
   },
   "danger_rate":2.52,
   "scenario_code":null,
   "smell_meter":3,
   "weapons":[
      {
         "hash":"f3dbd98d5b0e89f7be7eff25a5c63a06045fe64d8ffd5886e79c855e16791563"
      },
      {
         "hash":"ddd2a4258a70cdaf8a1dbc0ded024db497445d71f950fe7645fa8c69a178a082"
      },
      {
         "hash":"418d75d9ca0304922f06eff539c511238b143ef8331969e20d54a9560df57d5a"
      },
      {
         "hash":"082489b182fbbabddde40831dac5867d6acc4778b6a38d8f5c8d445455d638eb"
      }
   ],
   "after_grade_point":220,
   "scale":null,
   "job_point":437,
   "job_score":155,
   "job_rate":2.5,
   "job_bonus":50
}
```

### 生データ

```yaml
---
data:
  coopHistoryDetail:
    __typename: CoopHistoryDetail
    id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDgyN1QxMDU2MzBfNzk1OWRiZGItZmUxZi00NTc2LWJjM2UtMGY0ZGZhMGI3YjBl
    afterGrade:
      name: でんせつ
      id: Q29vcEdyYWRlLTg=
    myResult:
      player:
        __isPlayer: CoopPlayer
        byname: バンカラな若者
        name: しんさとおして
        nameId: '2218'
        nameplate:
          badges:
          -
          -
          -
          background:
            textColor:
              a: 1
              b: 1
              g: 1
              r: 1
            image:
              url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/npl_img/dba78c8ed1013d420aacb669d31a002691f2bb4ec0c1c853e34244c40dc68ea8_0.png?Expires=1704844800&Signature=XFwLr8fw1XfJznPLnpDfQOpAwX4sYFgLzCWLaZgQymVjBUbliPYTpzAzYIiZ5~aWkWbXqQpEpUCiH~fK5yTrSMNY2JHHmHdOHu~8Gk4m7~zjM9oNhSmObRoThLpbkRwAAP5BOB3OhasSRp9kvl~YSk9wfeIWnJ8WeKPCryXvwjt98jcIXTI0OFChk4afbtVTo3Qr0zjByxZSXcPmXPt69oYaeg409b0-eOQVEKJxrzWx9hbOd-n0LebkghCpgyOYe-VtAPzY7FLDPOVNvMl7m3Hn2Q8arPC83UGge~cijq7GWcikUHDqAm3x3owvsabwbaTdcTsLqaHnj12fMGWF0w__&Key-Pair-Id=KNBS2THMRC385
            id: TmFtZXBsYXRlQmFja2dyb3VuZC0x
        uniform:
          name: バイトツナギ オレンジ
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/coop_skin_img/89df74f2b5fbc49f76fb31f730fed012bb77f903746e81df108958010c95ef53_0.png?Expires=1704844800&Signature=fSLqAf5x1NcRITeKCdOGFh6MJt0ITHArAWPL7BuDdLyyRTnHlyat68JN6ix~bTow4F~QDGcUkqzr~Cv5qmyZMuR4DWndoIQkvdHAXVjb-kITysJjipkZwJFCHvy1QFQbSysIdYFzLX2UN3LCBB4XOimiSTum2UrO7zuTzYFTNG86ZDFso2fnT1EFJv4uygKp5T1TgB9O4Mv~ZB3V-yBJEy24kspA1ujSwGYnpBr1zyWy~IZ68jdZKWG36awLwWSdNtTaHxCwy-mq9hTYOk1pBYE0~PxBGSvP18eOhjRpUhUbpBhdIA8MwXclJHCzRXmE7y9Yu9wI9dX92hVQiArmWQ__&Key-Pair-Id=KNBS2THMRC385
          id: Q29vcFVuaWZvcm0tMQ==
        id: Q29vcFBsYXllci11LWE3Z3J6NjVyeGt2aGZzYndteG1tOjIwMjMwODI3VDEwNTYzMF83OTU5ZGJkYi1mZTFmLTQ1NzYtYmMzZS0wZjRkZmEwYjdiMGU6dS1hN2dyejY1cnhrdmhmc2J3bXhtbQ==
        species: INKLING
      weapons:
      - name: ジムワイパー
        image:
          url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/ddd2a4258a70cdaf8a1dbc0ded024db497445d71f950fe7645fa8c69a178a082_0.png?Expires=1704844800&Signature=CuvPlq26Vix8my-5ESc-8xMtghoQNuGGG9eJhFQQbaWcegek-gSbp6SzLPtiWE0uGmcl6qvE5XzDLrPRHwwfTDGWxw8vuMuRXKhBeOhu6Qp1lMMg1fpL2N4NOq~pPVPpEuNVrJ05hD7egwOPDj4AoB9BbtDZXeFomI4UqVSbn~2RqRb0V4NrcRv4oQmEF8sCa5G3bvmJ3VVRdzfQWaBpIf6eLYMtsGTd2vUc-aveAJfN373fiUKwdhtcCYsjggqbPjPBtfopjFKrW7TEmfqmZysrfzvqA75LzmwMS3RKkG3etutWJ60CI0m-zpinrWBQ6Q5F0~BiOEts9LRyVTP0EQ__&Key-Pair-Id=KNBS2THMRC385
      - name: R-PEN/5H
        image:
          url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/082489b182fbbabddde40831dac5867d6acc4778b6a38d8f5c8d445455d638eb_0.png?Expires=1704844800&Signature=A6d90ZGjaM~jK1kOdtwwiAqX79b6vAhji~LA7tQ1DTF30iludsig6hM3sZaFhHT~jSZkUBlO3shoqE-V9kZ2dJ9EwLSeDnrBukWNATbLNa~raw2kMiANM-kuA-HukRzAW1z0NApJXa1SgzyDmVaB~yRqnGcAt2aU-lvcfK50qmVEgQxzT8otnK0wDo9t99niK~3pyUFAFRJE-YQeJTUseWiDQpQ9vO0aPoejMCDorfy~4DSCUkgeSjiQ375nCqxO8OgbTWDY5K-MOy~FnfaShanS0QWqXFExcxsW81QIQcn54zZSSZAFOOtlg2D154hQLF-evHLYhoh1Ujuyge06zw__&Key-Pair-Id=KNBS2THMRC385
      - name: ヒッセン
        image:
          url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/f3dbd98d5b0e89f7be7eff25a5c63a06045fe64d8ffd5886e79c855e16791563_0.png?Expires=1704844800&Signature=weorz8KJVwdu4VWi1XduPY4o2NWeZUT1MXpjzYaDYzIzROnrZyppR0ahTkxt5vY2Yb93g6VrQooD8fB69~SXz3X4uKalT6O5DrXQNGeVwbxx9C~KpKl9n6csG31TjPdwcfoJWcK8oCpLzMn8ZoMwTL3KQcKg0YYYwG62jkhrJwBfoYgrRrzFDAVsxM1QnFNL7xXQoEnMbu2Wl8uGhdqXfKmQufUyd9e~EA8ofwRoKHYNrKvBcWEkOSDRaLD2w-rmzkoYD1EQdNt1VWrNeGn6NBrgOu8YkGog2JPs~cxB4nJtCL2tY1je9RfSkxO7xvgBPQBKoj-80ynlPIygSVrbWQ__&Key-Pair-Id=KNBS2THMRC385
      specialWeapon:
        name: カニタンク
        image:
          url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/special_img/blue/680379f8b83e5f9e033b828360827bc2f0e08c34df1abcc23de3d059fe2ac435_0.png?Expires=1704844800&Signature=kUpF-au-~yf9fx7SPB1vn-CNd952GefpYsNM4mpVc3wtciBNAJaPSw1hmVDY10Ko4TxtmQbWvpbq2Thi5MqTB6T2-CRh2Wn0jNJ90gsbQfCsNZgXhO8007teSoKU4e5a2T~kQMF6sNgw9dWLyXJiDvDSpiz7Tx~FRUS~QdX8TlmMbXHncrOe1SjRoBgTQAN8LrUbJ4Cn-UZvOOcx6Vgj4dQ2Hf4w6vId8i5SJPiPGozUR6Fh1UeHMIp7xkE8fIBBOxRl~E0s0Kco23eai7jugkGUd03pED~KIdbqmVQT-wP7lHmGENtanCyiBEXE5RD-lR~seZNFlNLAzlGVQjxgcQ__&Key-Pair-Id=KNBS2THMRC385
        weaponId: 20012
      defeatEnemyCount: 8
      deliverCount: 1393
      goldenAssistCount: 24
      goldenDeliverCount: 9
      rescueCount: 4
      rescuedCount: 2
    memberResults:
    - player:
        __isPlayer: CoopPlayer
        byname: 朝型の一般人
        name: がひゅー
        nameId: '3338'
        nameplate:
          badges:
          -
          - image:
              url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/badge_img/9686d931f7de8254c329c8f72a3988316ce43ac169c9738bcb271b9dc651e6b2_0.png?Expires=1704844800&Signature=WiWEe2ON7LdM~rpz6Dyigi79tNmQN7S8yphjfrKbkEeTDjJy2MP9Hfg3Z98rbrICr1LedeCTScwWmSG04Eupq8ZVHYA1EXtxcR6NrsDXO6GYICzNC6CvVUvk8Dlo8b6Rq9~NWt64It16ukdRcEXI8y1xNyyl4Re9x75fd7gFSAdtQGbWOyMICdODWTcCbNJRfstS0daEqPARSGU2WvNv5l9QMdgg2VMOaPxdlwsKt7IMjt1RSQsmciqcjdd2ZLFALnMjCeqFan9-9W5ngXpLPdnQRUhrpT1VJ~6Cyr9FdIPeBuxOaqmeYPOo6SuDo0Qo7Kttj0cXB9QXe-wHDRGupg__&Key-Pair-Id=KNBS2THMRC385
            id: QmFkZ2UtNTIwMDAwMg==
          - image:
              url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/badge_img/7f1c68521e7da7520a7830dcbcf64c893344dd567277098a79bbd42b79f284ea_0.png?Expires=1704844800&Signature=axHWByrNnb1oi0vpkuRGPVqup3gDXTmiRiPzR1Y5JP79CMxrF78D9NSbZNStD4Z8tH7Am6GLf6EAO2vQ5pBctw-ZiS2ipGOvZUyLVOn~U-pT44NnNqiWXiUhdbi3NrElX4~PCL0mD6DfVcKYabq12dGj3VmoHD5hcYgv25HUmz~2N90HwZa3rprlxOeM8gFd1CyT3pWkk7KjHMFsohocrku2~6-LlyYx7j~3J-Nau5Y3CIu5o8YiggkNVPXalUawcLi52ZQ-DZVreYNZDcFJUZitfaOQt94LZODi5eAiqXn916852ugoPWAVQdureJpGr7kByZFKrRco~2ckPIkGGQ__&Key-Pair-Id=KNBS2THMRC385
            id: QmFkZ2UtMTAzMDMwMQ==
          background:
            textColor:
              a: 1
              b: 0.00293231895
              g: 0.302125514
              r: 0.73720479
            image:
              url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/npl_img/d7b61473019f6ac56967bbd306f9d703302f411ff030976660cda56e6f967ea0_0.png?Expires=1704844800&Signature=ZPJOS1ZlJcbGQKVtLgAjrA9CZZ3~mnVODezX0J5rRDXntfMA0OjJTpOjTysGsxhxMHTsZc2GlMDSS1eJKva8Ou5AisMal2YXmY18~-UPNaFIzZboEoANogf~YtI9G-KGuZhCFzDJy0exFGlYXvzCoU704TEURqLgOFvsdc~5tM8tlGW~7NgUn9wOub-sk6n0lfbegGrAFinNSAz-BM9cUE6UrbJiDcWXrHAOGb~rE9vCGGU7DK9Gajsy94pOGwQNXjvczMi5XSpB5GoaiC2Dj5WVOsRRnsuz3ThXS~GVVgeNnRNesbpM4RqdOaZmmrQLYCT87MROvLCgksgjt1WTHA__&Key-Pair-Id=KNBS2THMRC385
            id: TmFtZXBsYXRlQmFja2dyb3VuZC0xMTAwMw==
        uniform:
          name: バイトウェーダー ブラウン
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/coop_skin_img/095d4bd4875be88d592980c9322e067fbf8ed22611359d810f5bcb87027c890a_0.png?Expires=1704844800&Signature=ecoSEQaOWn1Q7edxM7KfuEZZ8kfPGe-VmvcxjKE-CRBQP0gr7CoFKVF4Am8CgBO24oS6e3eZD378ZzhmKTRVlpag~9yApUFVdBtqOVPqzkkyBUWTvSSc6l9ZOU8R9n7nkngCa~nBUjK87yeGrqOuEDTBashEPHqB8eJlvYhQmI2ucNFUkL3zSVkKEY7gyU9ffuYEPMZfdD3ltxFgcsfvx4UGrQ4FlS9VQ4EMLsm68MUlgUP~fDY6BpQburKIngrOpqpPttzGcMeuLz0vqIbheI1NTRdfSMvuJom-R8YD63tPZK7WLILcHKU4rF79tFgDfMFT68bg43UocerRCuXCyQ__&Key-Pair-Id=KNBS2THMRC385
          id: Q29vcFVuaWZvcm0tMTE=
        id: Q29vcFBsYXllci11LWE3Z3J6NjVyeGt2aGZzYndteG1tOjIwMjMwODI3VDEwNTYzMF83OTU5ZGJkYi1mZTFmLTQ1NzYtYmMzZS0wZjRkZmEwYjdiMGU6dS1hdnRwbjN1bXJmbnRsNWkyY25tbQ==
        species: INKLING
      weapons:
      - name: H3リールガン
        image:
          url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/418d75d9ca0304922f06eff539c511238b143ef8331969e20d54a9560df57d5a_0.png?Expires=1704844800&Signature=bdxOVPY6rdUWF1mCupqsa9GGPBBQGCSGKz6JNDAML-TMyORy4DL8T4-R1bfLQ-ICXZIQfadsK7damiJE50P9StN76E6HDV0gVNB7SDJq5wzo3-zMI133mrAqk~4gc6uEjyZHXItqUnA-~vT9XXl7A3ztLt3l-9saZZpDEipesZEOFD8CluYWgsQRiAGU6UE-xGqDj9diDxJYOJaVzdMF7VPFLmFdew54Se8LnrWp6nTOHDQjBKxO3o4JZFe-r8xknf78F2oBxPf2R7hj7m55Asp2-HgfTIEn0PrbwRe3t759SUxewiSymXA82pOy7tL~IYfaiwQeFapJwB4UDT~Gdg__&Key-Pair-Id=KNBS2THMRC385
      - name: ヒッセン
        image:
          url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/f3dbd98d5b0e89f7be7eff25a5c63a06045fe64d8ffd5886e79c855e16791563_0.png?Expires=1704844800&Signature=weorz8KJVwdu4VWi1XduPY4o2NWeZUT1MXpjzYaDYzIzROnrZyppR0ahTkxt5vY2Yb93g6VrQooD8fB69~SXz3X4uKalT6O5DrXQNGeVwbxx9C~KpKl9n6csG31TjPdwcfoJWcK8oCpLzMn8ZoMwTL3KQcKg0YYYwG62jkhrJwBfoYgrRrzFDAVsxM1QnFNL7xXQoEnMbu2Wl8uGhdqXfKmQufUyd9e~EA8ofwRoKHYNrKvBcWEkOSDRaLD2w-rmzkoYD1EQdNt1VWrNeGn6NBrgOu8YkGog2JPs~cxB4nJtCL2tY1je9RfSkxO7xvgBPQBKoj-80ynlPIygSVrbWQ__&Key-Pair-Id=KNBS2THMRC385
      - name: ジムワイパー
        image:
          url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/ddd2a4258a70cdaf8a1dbc0ded024db497445d71f950fe7645fa8c69a178a082_0.png?Expires=1704844800&Signature=CuvPlq26Vix8my-5ESc-8xMtghoQNuGGG9eJhFQQbaWcegek-gSbp6SzLPtiWE0uGmcl6qvE5XzDLrPRHwwfTDGWxw8vuMuRXKhBeOhu6Qp1lMMg1fpL2N4NOq~pPVPpEuNVrJ05hD7egwOPDj4AoB9BbtDZXeFomI4UqVSbn~2RqRb0V4NrcRv4oQmEF8sCa5G3bvmJ3VVRdzfQWaBpIf6eLYMtsGTd2vUc-aveAJfN373fiUKwdhtcCYsjggqbPjPBtfopjFKrW7TEmfqmZysrfzvqA75LzmwMS3RKkG3etutWJ60CI0m-zpinrWBQ6Q5F0~BiOEts9LRyVTP0EQ__&Key-Pair-Id=KNBS2THMRC385
      specialWeapon:
        name: ホップソナー
        image:
          url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/special_img/blue/463eedc60013608666b260c79ac8c352f9795c3d0cce074d3fbbdbd2c054a56d_0.png?Expires=1704844800&Signature=exr1FgmaSI10LIb~ZSLSJLEr6CVszwL6YK8bddppEmFZveoSturRcZ5Y7MN8-KZECVEdEIYkVf5YHN~SgXwiL4jB1WNsGymeTcDVzhU0RPYQ5jx0Muu7SxeVzpOIRmI8jfrSWgdSdOLe-vA10wWRmMnDI9WOj5w6mSo8E6dKwIkZj2EYaSUf5Idw8fJNYo81ubcg0Lu4v6z~e33MRyPCZHcpccnxc34zcGhaZu7I~h89XtyA-tfxNbC53g5xeOZHyMAqH-LVqJi~l9D8n8sUOP7Nl~PeOEKs8PhYt5ppyvGTPhMri3tfe8pOQopXHxKQmSqdplhUYJXRm5SQsOtunQ__&Key-Pair-Id=KNBS2THMRC385
        weaponId: 20007
      defeatEnemyCount: 10
      deliverCount: 1949
      goldenAssistCount: 27
      goldenDeliverCount: 21
      rescueCount: 3
      rescuedCount: 4
    - player:
        __isPlayer: CoopPlayer
        byname: ムニ・エール海洋発電所のサーモンラン好き
        name: "*しんげきの m*~"
        nameId: '2011'
        nameplate:
          badges:
          - image:
              url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/badge_img/484e02555039069a8f1e86c1385dcbcb23684c8825922d829766413105c02b96_0.png?Expires=1704844800&Signature=irmkDhNvhUhOTHh3njgpkop-NWJgjbe-kk9Mcxb72qyIZXwslT4f1y~Anauo-jHLQ7leIbv88qpp2eey8t9NAI-bjoWrmRoaSfZfFZknEVMe5QL-gMC-G-xzIAs7peb9J5fHcZJ9TSQC5kbQSAzxvwnLe4K~v2XPJP5dvKvJWKMdt6gGPdVCrapZUS7SS2OxVW87kFmsH-K9twna2K7-dKntRFukFvvlbbfaS7L16PWMraCAtzPY8nk-Re~HwX0i1PtFQHk4yRO0Wt98HGraDLVux~JJqegxV1luRZPoYBm~B5ZDF04UgWZIBuEamSnlgTpXLeUhIqjGNP-3te2hZQ__&Key-Pair-Id=KNBS2THMRC385
            id: QmFkZ2UtNTExMDAwMA==
          - image:
              url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/badge_img/25fb564e13b1e68b671fa485235171cb0c5a24a920092111ac5b878199a7fcbe_0.png?Expires=1704844800&Signature=OBPeHeSLPRjiO5uPyiTXy2cgJrLJ7AlGyKPK7ZO2gETRFeuuS5O6cVNB4NuI-Gu-krbw9gnAyS0dlJcoioQtOXlGJzw6XanXbHhnBAoXNICtYgn7ow1AtZ~SN9aTAeCNxW96vqcYWmWvOSZwOOnGw~6U2WK2es3B~8FLn0X3kNWh-0MzQSuEFPK~uRvfj67tHLKIJHKgAhMd7q8-DYJ1ThqorjIWQusJz6h2nxYvttt8rflQ6MWLK2NnBcpINVFo0Ccx5CK-3sU3cjT~PBh4NPAmL3bsTLxMD9w6JKf7rOmcbhZIqSgqiQPpV48lbldYqz4kyBGHrnx5H48cGhGm0w__&Key-Pair-Id=KNBS2THMRC385
            id: QmFkZ2UtNTAwMDAxMw==
          - image:
              url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/badge_img/58ecb6401619f7b62a6ed35142dc53d93729c732313bcfe356bc656895dba9e4_0.png?Expires=1704844800&Signature=ZljrvgHdhKqJA230tuNg-PtK28V2DRDnDvg8Hva-4VEZzQul~JGKy1I9jSqR~IPYCD4uNXy4l7hQkJugh9Smp6bBf67bkGsOPX~gxv~-D6Yvrot~DNwPsh5-fIfyikHfN5liDsoXHEFMq1XBgdV~eJTlwgFZh5yMphIZLlAm1yXlo5BEMAXpapm9cFvASXD7VNcEHfQl5Pzn2H1pPoA~yUJletwYk6AaPmcyDkZcjP4QWLpn8AMkQ9brGS8bW8qGu5rgJ-XmIIdBogNQaWR8T-IslWeaejT6X6YWW~6PbetBMMLrr0gOwNVoMYwmO-PGX5Bo1~ohOkJyRs6NKw-XUQ__&Key-Pair-Id=KNBS2THMRC385
            id: QmFkZ2UtNTAwMDA3Mw==
          background:
            textColor:
              a: 1
              b: 1
              g: 1
              r: 1
            image:
              url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/npl_img/caa766d2fee9805163bcd918a494d97ab320ba3d55a3da41d1d49955d36ceaf0_0.png?Expires=1704844800&Signature=v5lW-IBzgHmtdnj-7IkLIae011CTzAojPrvC2~ZGLJbWnsvX01xDbK1EPsQbIGfvJ-UWsB82U3BntwlFZfRIlYwj8i1TzrifZEUyXhkbbYwj1P5sZGfSkijLUzVH6ELIysEM4iAfKZS2YYb8IvysDKxaXpin0Fm1aGFv5pUNNbBOf9yazcReLl-e1fRzxkQgJz7H4lDQMq1AwQjSHrRxB-tgcUacMsxvKxJKP2aGTzblMWklO8Eawi~uUnASUjmeic~xD7-wLeXzJK9Aq4TO3RtVeBk9gP-G25piO7uqTDfdt4uTvCM47QMKhyK0oFxkywa~lJVUI6Nn~razsP0tfQ__&Key-Pair-Id=KNBS2THMRC385
            id: TmFtZXBsYXRlQmFja2dyb3VuZC0xMTA2Nw==
        uniform:
          name: バイトウェーダー ブラック
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/coop_skin_img/06ecf4c72d76108a734cd545150fb7af9bfde7e38244c205392224217a66b730_0.png?Expires=1704844800&Signature=ugC2z6RcZ6oXY7GDxSsn~aLuke9eE0v-lG5B4w3rwqeCrdOI0x2eN87QKWMPIG0ivBWMEKhh4M7lQPM2atbXUDlPEztSRX8D~9h2I6ihpWY9hIbCh7jaLTwp-6B7MYyqxspplhUZeTcsCu8roQcd41MLcne1NkNH~tBCD91Glh6DNgmzj2rnVMgVVUcg3sFerL2Sk4t9QUtICMu8Tq3Tml0AnjhV13aIpfTeQbcY3u-FPukQPLZg~8en5oimvUdseb9yG09cxFQlcsvevKwon28yKiGaBU8lIIC8wLx4s~JzZCF5vfBm~PnW9oQGSh42Wi4fDmBJcdWl~7fyqJnWwQ__&Key-Pair-Id=KNBS2THMRC385
          id: Q29vcFVuaWZvcm0tOQ==
        id: Q29vcFBsYXllci11LWE3Z3J6NjVyeGt2aGZzYndteG1tOjIwMjMwODI3VDEwNTYzMF83OTU5ZGJkYi1mZTFmLTQ1NzYtYmMzZS0wZjRkZmEwYjdiMGU6dS1heDZqaG96NzVqa2o2N2VhZWtwbQ==
        species: OCTOLING
      weapons:
      - name: R-PEN/5H
        image:
          url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/082489b182fbbabddde40831dac5867d6acc4778b6a38d8f5c8d445455d638eb_0.png?Expires=1704844800&Signature=A6d90ZGjaM~jK1kOdtwwiAqX79b6vAhji~LA7tQ1DTF30iludsig6hM3sZaFhHT~jSZkUBlO3shoqE-V9kZ2dJ9EwLSeDnrBukWNATbLNa~raw2kMiANM-kuA-HukRzAW1z0NApJXa1SgzyDmVaB~yRqnGcAt2aU-lvcfK50qmVEgQxzT8otnK0wDo9t99niK~3pyUFAFRJE-YQeJTUseWiDQpQ9vO0aPoejMCDorfy~4DSCUkgeSjiQ375nCqxO8OgbTWDY5K-MOy~FnfaShanS0QWqXFExcxsW81QIQcn54zZSSZAFOOtlg2D154hQLF-evHLYhoh1Ujuyge06zw__&Key-Pair-Id=KNBS2THMRC385
      - name: ジムワイパー
        image:
          url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/ddd2a4258a70cdaf8a1dbc0ded024db497445d71f950fe7645fa8c69a178a082_0.png?Expires=1704844800&Signature=CuvPlq26Vix8my-5ESc-8xMtghoQNuGGG9eJhFQQbaWcegek-gSbp6SzLPtiWE0uGmcl6qvE5XzDLrPRHwwfTDGWxw8vuMuRXKhBeOhu6Qp1lMMg1fpL2N4NOq~pPVPpEuNVrJ05hD7egwOPDj4AoB9BbtDZXeFomI4UqVSbn~2RqRb0V4NrcRv4oQmEF8sCa5G3bvmJ3VVRdzfQWaBpIf6eLYMtsGTd2vUc-aveAJfN373fiUKwdhtcCYsjggqbPjPBtfopjFKrW7TEmfqmZysrfzvqA75LzmwMS3RKkG3etutWJ60CI0m-zpinrWBQ6Q5F0~BiOEts9LRyVTP0EQ__&Key-Pair-Id=KNBS2THMRC385
      - name: H3リールガン
        image:
          url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/418d75d9ca0304922f06eff539c511238b143ef8331969e20d54a9560df57d5a_0.png?Expires=1704844800&Signature=bdxOVPY6rdUWF1mCupqsa9GGPBBQGCSGKz6JNDAML-TMyORy4DL8T4-R1bfLQ-ICXZIQfadsK7damiJE50P9StN76E6HDV0gVNB7SDJq5wzo3-zMI133mrAqk~4gc6uEjyZHXItqUnA-~vT9XXl7A3ztLt3l-9saZZpDEipesZEOFD8CluYWgsQRiAGU6UE-xGqDj9diDxJYOJaVzdMF7VPFLmFdew54Se8LnrWp6nTOHDQjBKxO3o4JZFe-r8xknf78F2oBxPf2R7hj7m55Asp2-HgfTIEn0PrbwRe3t759SUxewiSymXA82pOy7tL~IYfaiwQeFapJwB4UDT~Gdg__&Key-Pair-Id=KNBS2THMRC385
      specialWeapon:
        name: ジェットパック
        image:
          url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/special_img/blue/252059408283fbcb69ca9c18b98effd3b8653ab73b7349c42472281e5a1c38f9_0.png?Expires=1704844800&Signature=BxNhz1M6IOCnTjs6NJ87XHxN-6Ib~8EWUIvnpwG8xqXa6X3n42Ghv9vTQaMgkhSNzmJGpsYAIc2wxrDwhNugHg5WgAe6uz~-twvscV54fSjQRfCO5GzD4WjXX3GhM-GJ~mtEuVX3aSQOSo5LDB8ju9QuJFiUBesKq9WMirqX3qUB5SxCfoeY5WMelCcWd-hW-s2bBH2lPo0VL7Nd6tTArB0LffavXjdCLXDAwvvvpDbpDxx~PvTJPJkyd7nnmnHKjuVkAObw8EdaI9vQ2usW~dn3oBGoMeQIvvOEgC-9qi1FVi64GbxmqRGheE1A9Kavh58GGMASnlpcH78t39JYYw__&Key-Pair-Id=KNBS2THMRC385
        weaponId: 20010
      defeatEnemyCount: 7
      deliverCount: 312
      goldenAssistCount: 5
      goldenDeliverCount: 62
      rescueCount: 6
      rescuedCount: 3
    - player:
        __isPlayer: CoopPlayer
        byname: ゲーミング大統領
        name: ゲーミングチェア
        nameId: '2575'
        nameplate:
          badges:
          - image:
              url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/badge_img/0c584686098c6ae055a5d888851e2959b5d8dd01562fe7f2380acf08e01b8501_0.png?Expires=1704844800&Signature=Wiec50UpeyKkLtaLBxGL003~n1eZ-ufHL-N1TSN5SdZ5U0bx5nLoEh~gFIXwBz9UnvxDYEIMXU~TwBvbv2uqgMo4I7FfmTNrKs34YL0AvsC~n7OImoGZI4JkphZi~XYNYRXy5d0k25HdBJgEUH78exHMAt58C~rH9hRPd~GT1zh5fmhgR08k9aAaz07c8IbsyZ1jlhoYZwY003m7AajwfTWQBlqu~eGQLnU9xJaX0O2z40QcxTrWa25vlPmTcq0twPfVeuhR4ucW6R~hjzbCK6yQaGzm~0vd4ukIiuBPNDHtPZy7ovbxFj0LkD-aKzvV0QtMOOu19PlmHpAeHhvwGw__&Key-Pair-Id=KNBS2THMRC385
            id: QmFkZ2UtMTAwMDQwMA==
          - image:
              url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/badge_img/025377e1396bc5fbd46eb04361a2edc7f17b30907c999bca02f88c578512e1ef_0.png?Expires=1704844800&Signature=WBw5bUDQMKEbVjJARVd9LIVHh8619tlYfvg4J0QjSYnhkmSrsyCy5zWGz8N5zaQbVFK4hLqCXN0UOtX-wPy43zSCu0F5UhCOID8Jo5jE8snnMee4sib6KsIZUULbTpV3SB7B5QQJaU-L-drggfkXDPAK~HG2rEH9jzvWS2XeEJ-sy51cNHXIgCBKd0VkCMCErwZ-ScYr~JhIwm4pkGtRasn67uYrCCyEPlz~l7YUTaolpj2G~adftSHHcpssQtStAcQa3zLogeggmxCM1dhB4-8kcMyMYUclvwJN-mUZCJsz4cG0eyS5b6sESTxzqZ9imHc2aZrG6RQiJBISleaiNA__&Key-Pair-Id=KNBS2THMRC385
            id: QmFkZ2UtMjAwMDAxMA==
          - image:
              url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/badge_img/484e02555039069a8f1e86c1385dcbcb23684c8825922d829766413105c02b96_0.png?Expires=1704844800&Signature=irmkDhNvhUhOTHh3njgpkop-NWJgjbe-kk9Mcxb72qyIZXwslT4f1y~Anauo-jHLQ7leIbv88qpp2eey8t9NAI-bjoWrmRoaSfZfFZknEVMe5QL-gMC-G-xzIAs7peb9J5fHcZJ9TSQC5kbQSAzxvwnLe4K~v2XPJP5dvKvJWKMdt6gGPdVCrapZUS7SS2OxVW87kFmsH-K9twna2K7-dKntRFukFvvlbbfaS7L16PWMraCAtzPY8nk-Re~HwX0i1PtFQHk4yRO0Wt98HGraDLVux~JJqegxV1luRZPoYBm~B5ZDF04UgWZIBuEamSnlgTpXLeUhIqjGNP-3te2hZQ__&Key-Pair-Id=KNBS2THMRC385
            id: QmFkZ2UtNTExMDAwMA==
          background:
            textColor:
              a: 1
              b: 1
              g: 1
              r: 1
            image:
              url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/npl_img/b07918ac5f435d5a7fc92c585979113c3c26a035aa75fbab0be8f68c0d959e83_0.png?Expires=1704844800&Signature=piS-9jaBdq1bMBmJcdVHK~xppdp10uzPmZ9s1XAfAjaWvJEQ9aLg1s8QLAC8UldF1pAvmKnKHqlw0gtbFCI464zW9rubmdtTLe7Ps4oag2Zt1Yh~e69GFoyZgWJVY5u1umRBsY-5rr12VbmNKc7JwrUb2xQ8AeQotD4-leJhhXifNclD-~6zeQ8m~x1Oc3MasychPigxbCK8ny9HNvVRWHXE9nhW58~14xnJaf6glOBgx2dyphkh9UYvJHG53SyioMDcc~3IlEnYby6dA4C6KcCg9bu3Kags7Q1yN24Ag4Dxjmu4qXU41OvCJTYgXFhpw4Jaq6~I4C55ZZma6OjdTA__&Key-Pair-Id=KNBS2THMRC385
            id: TmFtZXBsYXRlQmFja2dyb3VuZC0xMTAwOQ==
        uniform:
          name: バイトウェーダー ブラック
          image:
            url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/coop_skin_img/06ecf4c72d76108a734cd545150fb7af9bfde7e38244c205392224217a66b730_0.png?Expires=1704844800&Signature=ugC2z6RcZ6oXY7GDxSsn~aLuke9eE0v-lG5B4w3rwqeCrdOI0x2eN87QKWMPIG0ivBWMEKhh4M7lQPM2atbXUDlPEztSRX8D~9h2I6ihpWY9hIbCh7jaLTwp-6B7MYyqxspplhUZeTcsCu8roQcd41MLcne1NkNH~tBCD91Glh6DNgmzj2rnVMgVVUcg3sFerL2Sk4t9QUtICMu8Tq3Tml0AnjhV13aIpfTeQbcY3u-FPukQPLZg~8en5oimvUdseb9yG09cxFQlcsvevKwon28yKiGaBU8lIIC8wLx4s~JzZCF5vfBm~PnW9oQGSh42Wi4fDmBJcdWl~7fyqJnWwQ__&Key-Pair-Id=KNBS2THMRC385
          id: Q29vcFVuaWZvcm0tOQ==
        id: Q29vcFBsYXllci11LWE3Z3J6NjVyeGt2aGZzYndteG1tOjIwMjMwODI3VDEwNTYzMF83OTU5ZGJkYi1mZTFmLTQ1NzYtYmMzZS0wZjRkZmEwYjdiMGU6dS1xcGFvaXB4dDU3eXR2eXcycW5tbQ==
        species: INKLING
      weapons:
      - name: ヒッセン
        image:
          url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/f3dbd98d5b0e89f7be7eff25a5c63a06045fe64d8ffd5886e79c855e16791563_0.png?Expires=1704844800&Signature=weorz8KJVwdu4VWi1XduPY4o2NWeZUT1MXpjzYaDYzIzROnrZyppR0ahTkxt5vY2Yb93g6VrQooD8fB69~SXz3X4uKalT6O5DrXQNGeVwbxx9C~KpKl9n6csG31TjPdwcfoJWcK8oCpLzMn8ZoMwTL3KQcKg0YYYwG62jkhrJwBfoYgrRrzFDAVsxM1QnFNL7xXQoEnMbu2Wl8uGhdqXfKmQufUyd9e~EA8ofwRoKHYNrKvBcWEkOSDRaLD2w-rmzkoYD1EQdNt1VWrNeGn6NBrgOu8YkGog2JPs~cxB4nJtCL2tY1je9RfSkxO7xvgBPQBKoj-80ynlPIygSVrbWQ__&Key-Pair-Id=KNBS2THMRC385
      - name: H3リールガン
        image:
          url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/418d75d9ca0304922f06eff539c511238b143ef8331969e20d54a9560df57d5a_0.png?Expires=1704844800&Signature=bdxOVPY6rdUWF1mCupqsa9GGPBBQGCSGKz6JNDAML-TMyORy4DL8T4-R1bfLQ-ICXZIQfadsK7damiJE50P9StN76E6HDV0gVNB7SDJq5wzo3-zMI133mrAqk~4gc6uEjyZHXItqUnA-~vT9XXl7A3ztLt3l-9saZZpDEipesZEOFD8CluYWgsQRiAGU6UE-xGqDj9diDxJYOJaVzdMF7VPFLmFdew54Se8LnrWp6nTOHDQjBKxO3o4JZFe-r8xknf78F2oBxPf2R7hj7m55Asp2-HgfTIEn0PrbwRe3t759SUxewiSymXA82pOy7tL~IYfaiwQeFapJwB4UDT~Gdg__&Key-Pair-Id=KNBS2THMRC385
      - name: R-PEN/5H
        image:
          url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/weapon_illust/082489b182fbbabddde40831dac5867d6acc4778b6a38d8f5c8d445455d638eb_0.png?Expires=1704844800&Signature=A6d90ZGjaM~jK1kOdtwwiAqX79b6vAhji~LA7tQ1DTF30iludsig6hM3sZaFhHT~jSZkUBlO3shoqE-V9kZ2dJ9EwLSeDnrBukWNATbLNa~raw2kMiANM-kuA-HukRzAW1z0NApJXa1SgzyDmVaB~yRqnGcAt2aU-lvcfK50qmVEgQxzT8otnK0wDo9t99niK~3pyUFAFRJE-YQeJTUseWiDQpQ9vO0aPoejMCDorfy~4DSCUkgeSjiQ375nCqxO8OgbTWDY5K-MOy~FnfaShanS0QWqXFExcxsW81QIQcn54zZSSZAFOOtlg2D154hQLF-evHLYhoh1Ujuyge06zw__&Key-Pair-Id=KNBS2THMRC385
      specialWeapon:
        name: トリプルトルネード
        image:
          url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/special_img/blue/380e541b5bc5e49d77ff1a616f1343aeba01d500fee36aaddf8f09d74bd3d3bc_0.png?Expires=1704844800&Signature=Cb5O3nABgpKy3rA6EjR8g3dQwQbUIsrsaQMSU4uvjHMhpBa5zywTlymJ3TeOxeuFVHboTAENhtz~hRmDyOhEf5F3W-93dMErpmyMRsvQac8veIt0PkCM~MPgj6M9m1SffVzPVlImkzepEA7-gUpjSwmq~vnGKXH~IT6245S-Mvw~77YGzY8CSQRVjr07ZZapM3~bHihJVJEWhQjgN5SAlGkesbbd7u1y4cdQYyVAv6URmY0tqac6LD--3RdCWxCoFvvoBTXe7wDyBXq6lALxQYeK4rgzeAT0c-caBFDKjWLm-VumfOZUAY6eISDIi9wDfNbNaLuD-PRWJAfSEx114Q__&Key-Pair-Id=KNBS2THMRC385
        weaponId: 20014
      defeatEnemyCount: 18
      deliverCount: 857
      goldenAssistCount: 13
      goldenDeliverCount: 41
      rescueCount: 4
      rescuedCount: 8
    bossResult:
    enemyResults:
    - defeatCount: 1
      teamDefeatCount: 2
      popCount: 2
      enemy:
        name: バクダン
        image:
          url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/coop_enemy_img/f59fe344bd941f90dc8d3458ffd29b6586c1cffd00864967e7766a5a931dc4f6_0.png?Expires=1704844800&Signature=HvwxzTqBuyHTPkSe9gZgje7Z9mb3OokJnc7-D90Vm3WIEF6rA1qBW7AfSuG661hr63MkYYaKQ2~91HaRDUx8~1VMlQMi-T9N~zLJRf7i9OCvXemDBx~Qd0dPDLp7AkvrI7-pbunimFhZMfImR6-XKMDYLdYB~7BMWbwRmWs8DFTXHYmftf6NU381pSr5zZFEH9QPzMOwy7h-BXFBsZsDFN-nGOiQvs7rFAzIhPouo~JKTSLrVrJqhuLnD3fdd9R09c6i8t28TIK5V8oxzY8xUX8-8MtC-koyC-UV7exEMW-d6VbjLSD4fG3LOaHa2kcSFZ~s045xsZmadg7CgpuXuA__&Key-Pair-Id=KNBS2THMRC385
        id: Q29vcEVuZW15LTQ=
    - defeatCount: 0
      teamDefeatCount: 3
      popCount: 3
      enemy:
        name: テッパン
        image:
          url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/coop_enemy_img/3a3e2c87b96b92e31ffc59a273b7d6aca20f9941e05ad84d6ae26092a627aa34_0.png?Expires=1704844800&Signature=Ix4WiDPxAqq8Z1kNj6XuljRz47PJEPPQ5AFyn57eFelfeV9Y9cWLy2AeMDIMScXB63jzy811NcsDmNkFN~bUGFC~5nhT3lytemDLJozJY4ED1vLsiXhgA9veLV6eZWY8ej58vHIvOIvXtm3kMVa3yGtmSgOHAwNIFUlYZ7X9Ez5Ugi~XoNZY-sV3HspedEz6SlG2m-RnFPY8TVLh6nvseMWCcA2O6vYqGhek54MHulbuJdfgn9mjigj4GYbOT2hLaMCdxtqHTn12Uf3oXhz1yam4D8PqF8tX4Sa74g~GdlwttCLzkUMYrjn4TZfzeSiUgFxzPeReK-Tl0EPZTeyymg__&Key-Pair-Id=KNBS2THMRC385
        id: Q29vcEVuZW15LTY=
    - defeatCount: 2
      teamDefeatCount: 3
      popCount: 3
      enemy:
        name: ヘビ
        image:
          url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/coop_enemy_img/999097a0908a4560f05a16e3f97c07b5d10bed22bee6d2ce0eedb2e6a6dcb9d0_0.png?Expires=1704844800&Signature=DH53lE5ynbeVZ9n3KP2uwV0qUIwAr7-W~8hHaFHn9DI99qP7sxw~yZIVUPh2BDOdIY9vqHIMU2oef~L0ihF5TUw1FEq6cMiOp6BKNBoI2RG-wqfNORm9GhAnT~qGpGgDwSAH5DzC~kd79ZjBmMN7znEHFRjxbDqMDqh5bGgB7oYAotKjyAhdRxhelgf9O7AkTW4muUfh9Si7ZWnrdRnptTSccq5KC7meCMqsQUnXXdfwEFnQWwie-yUYFmhnzq9tGqJZUjVhFtBnyuTK6b5HanzP8RU-pHBI4WW1yMtqJJeq5MfQVEVPlE5OiW6qNmP23gFmv2Mb59wv1YIyhcS3hg__&Key-Pair-Id=KNBS2THMRC385
        id: Q29vcEVuZW15LTc=
    - defeatCount: 3
      teamDefeatCount: 5
      popCount: 5
      enemy:
        name: タワー
        image:
          url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/coop_enemy_img/2d740da6f03364c3c289625455374f734fd8a96b25c26fde13912e90f3aea68c_0.png?Expires=1704844800&Signature=Vubdw6Uig0N6mfN1w6xKhK1VhlhvBd2sUuUI~lbnzagZ-VJSqJvQIYdc41MtSVzWuf3KddZoFRmKBmE6sBfvvNkEAeBTDFYNH-etgauRkzDfSWIC2uRQGMNkVPy3FtxG4XtAYZ-OY-MEnt2XjsE2Lgxyv8bkcarhNJ3uxbVN-gMeae3Y03mzQuoL5YhOs62~1UMvUxzEzMPUBSuN-PwaOKcbkYr2RlM5pczXmxaXfgIvTwyK-i-L8do2z6rNmtlpmXZNaxmzMX~CTbeXhiA-csh6HgJrb~C---MJzArkLXHuwHQ-25yLn7macc7wWugBRWEplIJ9iOImiew~wgKZow__&Key-Pair-Id=KNBS2THMRC385
        id: Q29vcEVuZW15LTg=
    - defeatCount: 0
      teamDefeatCount: 3
      popCount: 5
      enemy:
        name: モグラ
        image:
          url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/coop_enemy_img/fd5abb7a9087c528e45a7a4e29c9c03d673b69d6f0ba2f424f6df8b732d9919a_0.png?Expires=1704844800&Signature=Xh0O843QqqXw7IAcmKxyZJZwgqTpfvz-RP3hFkq0UlMClHTPak3DBNpDF696PAtNIgLNCOxmmQ7idEYcgI7ZUPXEpru4aPrtHYpLPwpx1b61lACtiBFsH4cxZ9zUjB44gM3YZdSrm4t6Eq3bE990RzusU2e2Skf6ccbrJvo9xEC7vJ6HrA1a23K~buAgoy~alwjV6~mRB8PAzEx98zIv3VFSm41yd2ZBaGKL97VTmz4vor5Rj~iabV9qGLNVaXj7iCtbjg0kojkUhvsW4jwQ3xvBM4aZ60sTA-V23JwlCDv0j0frX3KDtDA4CLf2oxIhZRXb1hENQKSNGW2kKuXLSw__&Key-Pair-Id=KNBS2THMRC385
        id: Q29vcEVuZW15LTk=
    - defeatCount: 0
      teamDefeatCount: 3
      popCount: 3
      enemy:
        name: コウモリ
        image:
          url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/coop_enemy_img/faed7977b2144ac5979de0ca7d23aefd507e517c3fbe19431054ac5a6ba300fa_0.png?Expires=1704844800&Signature=ZP3o8OgXqTgnemAN2cKgUTSqdrXhfnW77jSMoIzxtx9vF4b8icAcD~duNshjUt8U5UjyFwN-PxRYvbHh5Nk06jQ9YWtH-CA7J1mXDqxjQNtYzCDYxYuY03t4z4jOWu0Mf79WLEfdmL9YICLgLAmqflmyO8Yu7N1Ayb7HOniYoB6gFWtBTQJOD3hpz65WzU9tktitZqnzQSnCGTbpUW6mHE596OvcFfCRQMwP6vh4BAhJrfSjebr0mQTgPCbvPvBKdMZOXN~Xt5wre12BhY-AjzTUlRVmttaZkWHzn-oX5KjwRfHdtLImcSnf21xgPjmSF0RpK6iYfUAYf~Ro-sHtbw__&Key-Pair-Id=KNBS2THMRC385
        id: Q29vcEVuZW15LTEw
    - defeatCount: 0
      teamDefeatCount: 2
      popCount: 2
      enemy:
        name: ハシラ
        image:
          url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/coop_enemy_img/fb4851c75f62b8b50d9bac2128d6ef1c703c7884b63402762ddf78c1555e364a_0.png?Expires=1704844800&Signature=orTY2INrDGXDQkQm~px25VYVTDNz9kldOyaPu5OJhGwa0TJScHDtOdbrx6eEV2Iohzr00Rg9G6I5PlOxykDkeo4PNSR2KdGzVtlT7XN8zw10zCnMM7je6a5wXO5qnq-lSs1O0aGFxnC1Qzk8rWzLGfiFgvO0pio9xnSCQlp0SDdtvQ7vBfiSuS~k142thqPNA3E7q-9cXtIY691unhPM-GVsntXu~dq8je4DvF18ZSjLM-W8SjhYBqw8DO0~X7zBkxywHkQkqzehzMNrVr6CjtbEyoMkL8RYkJHYs8efZw6LSeRp6U-tz~43uk59kb2gV9ETH6gi-wzO4ZP0bMOl3A__&Key-Pair-Id=KNBS2THMRC385
        id: Q29vcEVuZW15LTEx
    - defeatCount: 0
      teamDefeatCount: 2
      popCount: 2
      enemy:
        name: ダイバー
        image:
          url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/coop_enemy_img/dbbf89da359fd880db49730ecc4f66150b148274aa005e22c1152cbf1a45e378_0.png?Expires=1704844800&Signature=Uy-hfkOevpt3BIz2PDGcFbKeAy0h~QivaaAejX7slhOM6xmGlVyeQZiH37J40Mcw9D1-aS0tqIH5A9RzRWo8bbjFV6XXp1GP9Wc4kvkjVQ26jMJjnr5788L7RDQhhbIMSc1csH603LsNgdyVJReoA9kGN67K8xvodliM~Wi3Mc5Oe84D-bdz~6fTbuCKcM1Vy8xdo-vUGT~u~n7AfWiOSQPa7DksxuJ6fRS-36~l96dgG9ZnAbJQItGJ4ramK~~JOfMDxxcXrRhrfgBG3q-MoINIoV2OLGgYTiv4Dhtn-TNDrfOxDez-z5MHqHRD-j7VevZTtzvvfZw0IUCHT0XusQ__&Key-Pair-Id=KNBS2THMRC385
        id: Q29vcEVuZW15LTEy
    - defeatCount: 0
      teamDefeatCount: 2
      popCount: 3
      enemy:
        name: ナベブタ
        image:
          url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/coop_enemy_img/2185696079cc39328cd69f0570e219f09b61d4a56508260fe97b16347ae8a55f_0.png?Expires=1704844800&Signature=TxuHyO7yL3sm9COG-B~gsoC4aHlQexA9veSHG19OI8My6gpZV~eU0Ni~PZ50-xEvB0~0zRpYEjWVFf4ZxD9gsA~38cIxTkZQPgYaiMKTBFPdnGOwKq4BJyIpZDYq2Vg~fnArDi6uCP4iKLBK7VNJjsq98VfUX4r6KtcpKL3yPJIbY~EpYXo6rK70~PgxoIN9U1D7cDbur2XG~19kmmx6YBdZmQvIh9CzIQNxQSXLVL854qEBNMPjdzRFdi8IOh~4Uf5N5TArmk5Gho~IX6GQOREPeZ1qRATxG1LNcjL4kEvLzkqNNCMjj4vBLkbOSXienIBYWpbYYqIU~2B0~31SIw__&Key-Pair-Id=KNBS2THMRC385
        id: Q29vcEVuZW15LTE0
    - defeatCount: 2
      teamDefeatCount: 20
      popCount: 20
      enemy:
        name: キンシャケ
        image:
          url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/coop_enemy_img/a35aa2982499e9a404fdb81f72fbaf553bc47f7682cc67f9b8c32ca9910e2cbf_0.png?Expires=1704844800&Signature=ASlo3PLc5I1SdtLZVgfho0AZ~Q0eVh1oKGxz0TLE9-l~SoeTysGBx4GRWYG3DA4xmjogiXgG4GSQz5kEJEpleDbXCEXOTWdrWbF8T73Gh5z98HDrOmcIfXdJlZ9ON39hZizK0BMoPY37nExsy9We2tv5kILuUwHo1dAcXp-Tq2dgzrYGZKuaLpXV7K-kk3ArXutjU52WkjNOQfaULkBEDl1qd3mfRcOvkBdS37aN2X~4a4NWOB4l0j~kMTJXg~COLoF0UHf-kA6Sua2RwECyz9b3z5Eyygoj4IHdf0yXHgFrTvZ4V4lMO~sRl6byIkh3dLno9DysdUdNtOvf1FFx1w__&Key-Pair-Id=KNBS2THMRC385
        id: Q29vcEVuZW15LTE1
    waveResults:
    - waveNumber: 1
      waterLevel: 0
      eventWave:
        name: 巨大タツマキ
        id: Q29vcEV2ZW50V2F2ZS03
      deliverNorm: 27
      goldenPopCount: 84
      teamDeliverCount: 54
      specialWeapons: []
    - waveNumber: 2
      waterLevel: 1
      eventWave:
        name: ラッシュ
        id: Q29vcEV2ZW50V2F2ZS0x
      deliverNorm: 29
      goldenPopCount: 60
      teamDeliverCount: 46
      specialWeapons:
      - name: ホップソナー
        image:
          url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/special_img/blue/463eedc60013608666b260c79ac8c352f9795c3d0cce074d3fbbdbd2c054a56d_0.png?Expires=1704844800&Signature=exr1FgmaSI10LIb~ZSLSJLEr6CVszwL6YK8bddppEmFZveoSturRcZ5Y7MN8-KZECVEdEIYkVf5YHN~SgXwiL4jB1WNsGymeTcDVzhU0RPYQ5jx0Muu7SxeVzpOIRmI8jfrSWgdSdOLe-vA10wWRmMnDI9WOj5w6mSo8E6dKwIkZj2EYaSUf5Idw8fJNYo81ubcg0Lu4v6z~e33MRyPCZHcpccnxc34zcGhaZu7I~h89XtyA-tfxNbC53g5xeOZHyMAqH-LVqJi~l9D8n8sUOP7Nl~PeOEKs8PhYt5ppyvGTPhMri3tfe8pOQopXHxKQmSqdplhUYJXRm5SQsOtunQ__&Key-Pair-Id=KNBS2THMRC385
        id: U3BlY2lhbFdlYXBvbi0yMDAwNw==
      - name: ホップソナー
        image:
          url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/special_img/blue/463eedc60013608666b260c79ac8c352f9795c3d0cce074d3fbbdbd2c054a56d_0.png?Expires=1704844800&Signature=exr1FgmaSI10LIb~ZSLSJLEr6CVszwL6YK8bddppEmFZveoSturRcZ5Y7MN8-KZECVEdEIYkVf5YHN~SgXwiL4jB1WNsGymeTcDVzhU0RPYQ5jx0Muu7SxeVzpOIRmI8jfrSWgdSdOLe-vA10wWRmMnDI9WOj5w6mSo8E6dKwIkZj2EYaSUf5Idw8fJNYo81ubcg0Lu4v6z~e33MRyPCZHcpccnxc34zcGhaZu7I~h89XtyA-tfxNbC53g5xeOZHyMAqH-LVqJi~l9D8n8sUOP7Nl~PeOEKs8PhYt5ppyvGTPhMri3tfe8pOQopXHxKQmSqdplhUYJXRm5SQsOtunQ__&Key-Pair-Id=KNBS2THMRC385
        id: U3BlY2lhbFdlYXBvbi0yMDAwNw==
      - name: トリプルトルネード
        image:
          url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/special_img/blue/380e541b5bc5e49d77ff1a616f1343aeba01d500fee36aaddf8f09d74bd3d3bc_0.png?Expires=1704844800&Signature=Cb5O3nABgpKy3rA6EjR8g3dQwQbUIsrsaQMSU4uvjHMhpBa5zywTlymJ3TeOxeuFVHboTAENhtz~hRmDyOhEf5F3W-93dMErpmyMRsvQac8veIt0PkCM~MPgj6M9m1SffVzPVlImkzepEA7-gUpjSwmq~vnGKXH~IT6245S-Mvw~77YGzY8CSQRVjr07ZZapM3~bHihJVJEWhQjgN5SAlGkesbbd7u1y4cdQYyVAv6URmY0tqac6LD--3RdCWxCoFvvoBTXe7wDyBXq6lALxQYeK4rgzeAT0c-caBFDKjWLm-VumfOZUAY6eISDIi9wDfNbNaLuD-PRWJAfSEx114Q__&Key-Pair-Id=KNBS2THMRC385
        id: U3BlY2lhbFdlYXBvbi0yMDAxNA==
    - waveNumber: 3
      waterLevel: 1
      eventWave:
      deliverNorm: 31
      goldenPopCount: 75
      teamDeliverCount: 33
      specialWeapons:
      - name: カニタンク
        image:
          url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/special_img/blue/680379f8b83e5f9e033b828360827bc2f0e08c34df1abcc23de3d059fe2ac435_0.png?Expires=1704844800&Signature=kUpF-au-~yf9fx7SPB1vn-CNd952GefpYsNM4mpVc3wtciBNAJaPSw1hmVDY10Ko4TxtmQbWvpbq2Thi5MqTB6T2-CRh2Wn0jNJ90gsbQfCsNZgXhO8007teSoKU4e5a2T~kQMF6sNgw9dWLyXJiDvDSpiz7Tx~FRUS~QdX8TlmMbXHncrOe1SjRoBgTQAN8LrUbJ4Cn-UZvOOcx6Vgj4dQ2Hf4w6vId8i5SJPiPGozUR6Fh1UeHMIp7xkE8fIBBOxRl~E0s0Kco23eai7jugkGUd03pED~KIdbqmVQT-wP7lHmGENtanCyiBEXE5RD-lR~seZNFlNLAzlGVQjxgcQ__&Key-Pair-Id=KNBS2THMRC385
        id: U3BlY2lhbFdlYXBvbi0yMDAxMg==
      - name: ジェットパック
        image:
          url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/special_img/blue/252059408283fbcb69ca9c18b98effd3b8653ab73b7349c42472281e5a1c38f9_0.png?Expires=1704844800&Signature=BxNhz1M6IOCnTjs6NJ87XHxN-6Ib~8EWUIvnpwG8xqXa6X3n42Ghv9vTQaMgkhSNzmJGpsYAIc2wxrDwhNugHg5WgAe6uz~-twvscV54fSjQRfCO5GzD4WjXX3GhM-GJ~mtEuVX3aSQOSo5LDB8ju9QuJFiUBesKq9WMirqX3qUB5SxCfoeY5WMelCcWd-hW-s2bBH2lPo0VL7Nd6tTArB0LffavXjdCLXDAwvvvpDbpDxx~PvTJPJkyd7nnmnHKjuVkAObw8EdaI9vQ2usW~dn3oBGoMeQIvvOEgC-9qi1FVi64GbxmqRGheE1A9Kavh58GGMASnlpcH78t39JYYw__&Key-Pair-Id=KNBS2THMRC385
        id: U3BlY2lhbFdlYXBvbi0yMDAxMA==
      - name: トリプルトルネード
        image:
          url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/special_img/blue/380e541b5bc5e49d77ff1a616f1343aeba01d500fee36aaddf8f09d74bd3d3bc_0.png?Expires=1704844800&Signature=Cb5O3nABgpKy3rA6EjR8g3dQwQbUIsrsaQMSU4uvjHMhpBa5zywTlymJ3TeOxeuFVHboTAENhtz~hRmDyOhEf5F3W-93dMErpmyMRsvQac8veIt0PkCM~MPgj6M9m1SffVzPVlImkzepEA7-gUpjSwmq~vnGKXH~IT6245S-Mvw~77YGzY8CSQRVjr07ZZapM3~bHihJVJEWhQjgN5SAlGkesbbd7u1y4cdQYyVAv6URmY0tqac6LD--3RdCWxCoFvvoBTXe7wDyBXq6lALxQYeK4rgzeAT0c-caBFDKjWLm-VumfOZUAY6eISDIi9wDfNbNaLuD-PRWJAfSEx114Q__&Key-Pair-Id=KNBS2THMRC385
        id: U3BlY2lhbFdlYXBvbi0yMDAxNA==
    resultWave: 0
    playedTime: '2023-08-27T10:56:30Z'
    rule: REGULAR
    coopStage:
      name: すじこジャンクション跡
      image:
        url: https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v1/stage_img/banner/low_resolution/0e05d4caa34089a447535708370286f4ee6068661359b4d7cf6c319863424f84_3.png?Expires=1704844800&Signature=aBLFN8J0BR~7iGOYdG8O9eEVMcIhivyvwFW3VuK7lETMrfYfYwY73IRs0HfFTtzNMUCrTCPF-Lxa7WTq-ibecvJWPOT-Qr8FPJkh45StuGpk7aN8OS3YHOgQJFq7yHNQgVjds-zRvgmq4FYfRtY6viffwJ5Igci4GexBeLiLpMzKxVcLPu6oyydwOZgVXZo3mgHmaVAwNnIL0fTJAgT~KKKcKst85h~jdfUb85xrtzmeQnA8LxYL2JepSDmgUkunyujLs8TFdKG3n3lly2dtoVMJ~oOHBY9BqHDnwTm-WuAWDw9hr8i~7sjqQTeI8126Jp2R-YhYlpa6g7tq~OuqsQ__&Key-Pair-Id=KNBS2THMRC385
      id: Q29vcFN0YWdlLTg=
    dangerRate: 2.52
    scenarioCode:
    smellMeter: 3
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
    afterGradePoint: 220
    scale:
    jobPoint: 437
    jobScore: 155
    jobRate: 2.5
    jobBonus: 50
    nextHistoryDetail:
    previousHistoryDetail:
      id: Q29vcEhpc3RvcnlEZXRhaWwtdS1hN2dyejY1cnhrdmhmc2J3bXhtbToyMDIzMDgyN1QxMDQ5MjlfNzk1OWRiZGItZmUxZi00NTc2LWJjM2UtMGY0ZGZhMGI3YjBl
```
