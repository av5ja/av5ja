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
```
