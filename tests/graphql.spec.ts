import { CapacitorHttp, HttpOptions } from '@capacitor/core';
import snakecaseKeys from 'snakecase-keys';

import { Method } from '../src/enum/method';
import { CoopHistoryDetailQuery } from '../src/requests/av5ja/coop_history_detail_query';
import { CoopHistoryQuery } from '../src/requests/av5ja/coop_history_query';
import { StageScheduleQuery } from '../src/requests/av5ja/stage_schedule_query';
import { GraphQL } from '../src/utils/graph_ql';

import token from './token.json';
import { SplatNet2 } from '../src/utils/splatnet2';

/**
 * GraphQLリクエストを送信する
 * @param request リクエスト
 * @param bullet_token トークン
 * @returns レスポンス
 */
async function request<T extends GraphQL, U extends ReturnType<T['request']>>(request: T, bullet_token: string): Promise<U> {
    const url = new URL('https://api.lp1.av5ja.srv.nintendo.net/api/graphql');
    const body = JSON.stringify({
        extensions: {
            persistedQuery: {
                sha256Hash: request.hash,
                version: 1,
            },
        },
        variables: request.parameters,
    });
    const version = '4.0.0-b8c1e0fc';
    const headers = {
        Authorization: `Bearer ${bullet_token}`,
        'Content-Type': 'application/json',
        'X-Web-View-Ver': version,
    };
    const options: HttpOptions = {
        data: body,
        headers: headers,
        method: Method.POST,
        responseType: 'json',
        url: url.href,
    };
    const response = await CapacitorHttp.request(options);
    return request.request(snakecaseKeys(response.data)) as U;
}

async function get_coop_history_details(group: CoopHistoryQuery.HistoryGroup, bullet_token: string): Promise<SplatNet2.CoopResult[]> {
    const details: CoopHistoryDetailQuery.Response[] = await Promise.all(
        group.result_id_list.map((result_id) => request(new CoopHistoryDetailQuery.Request(result_id.raw_value), bullet_token))
    );
    return details.map((detail) => new SplatNet2.CoopResult(group, detail.data.coop_history_detail));
}

async function get_coop_history_detail(group: CoopHistoryQuery.HistoryGroup, bullet_token: string): Promise<SplatNet2.CoopResult> {
    const detail: CoopHistoryDetailQuery.Response = await request(
        new CoopHistoryDetailQuery.Request(group.history_details.nodes[0].id.raw_value),
        bullet_token
    );
    return new SplatNet2.CoopResult(group, detail.data.coop_history_detail);
}

async function get_coop_history_results(bullet_token: string): Promise<SplatNet2.CoopResult[]> {
    const history_groups = (await request(new CoopHistoryQuery.Request(), bullet_token)).history_groups;
    return (await Promise.all(history_groups.map((group) => get_coop_history_details(group, bullet_token)))).flat();
}

describe('GraphQL', () => {
    const bullet_token = token.bullet_token;

    // it('CoopHistoryQuery', async () => {
    //     const coop_history_query = await request(new CoopHistoryQuery.Request(), bullet_token);
    //     expect(coop_history_query.data.coop_result.history_groups.nodes.length).toBe(4);
    // }, 5000);

    // it('StageScheduleQuery', async () => {
    //     const stage_schedule_query = await request(new StageScheduleQuery.Request(), bullet_token);
    //     expect(stage_schedule_query.schedules.length).toBeGreaterThan(3);
    // }, 5000);

    // it('CoopHistoryDetailQuery', async () => {
    //     const coop_history_query = await request(new CoopHistoryQuery.Request(), bullet_token);
    //     expect(coop_history_query.data.coop_result.history_groups.nodes.length).toBe(4);
    //     const history_group = coop_history_query.history_groups[0]
    //     const coop_history_detail = await request(new CoopHistoryDetailQuery.Request(history_group.result_id_list[0].raw_value), bullet_token);
    //     console.log(JSON.stringify(coop_history_detail, null, 2))
    // }, 50000);

    it('CoopHistoryDetailQuery', async () => {
        const coop_history_query = await request(new CoopHistoryQuery.Request(), bullet_token);
        expect(coop_history_query.data.coop_result.history_groups.nodes.length).toBe(4);
        const history_group = coop_history_query.history_groups[0];
        const coop_history_detail = await get_coop_history_detail(history_group, bullet_token);
        console.log(JSON.stringify(coop_history_detail, null, 2));
    }, 50000);

    // it('CoopHistoryDetailQuery All', async () => {
    //     // eslint-disable-next-line @typescript-eslint/no-unused-vars
    //     const results = await get_coop_history_results(bullet_token);
    //     console.log(results.length)
    // }, 50000);
});
