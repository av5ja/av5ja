import { CapacitorHttp, HttpOptions } from '@capacitor/core';
import snakecaseKeys from 'snakecase-keys';

import { Method } from '../src/enum/method';
import { CoopHistoryDetailQuery } from '../src/requests/av5ja/coop_history_detail_query';
import { CoopHistoryQuery } from '../src/requests/av5ja/coop_history_query';
import { StageScheduleQuery } from '../src/requests/av5ja/stage_schedule_query';
import { GraphQL } from '../src/utils/graph_ql';

import token from './token.json';

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

describe('GraphQL', () => {
    const bullet_token = token.bullet_token;

    it('CoopHistoryQuery', async () => {
        const coop_history_query = await request(new CoopHistoryQuery.Request(), bullet_token);
        expect(coop_history_query.data.coop_result.history_groups.nodes.length).toBe(4);
    }, 5000);

    it('StageScheduleQuery', async () => {
        const stage_schedule_query = await request(new StageScheduleQuery.Request(), bullet_token);
        expect(stage_schedule_query.schedules.length).toBeGreaterThan(3);
    }, 5000);

    it('CoopHistoryDetailQuery', async () => {
        const coop_history_query = await request(new CoopHistoryQuery.Request(), bullet_token);
        expect(coop_history_query.data.coop_result.history_groups.nodes.length).toBe(4);
        const result_id = coop_history_query.data.coop_result.history_groups.nodes[0].history_details.nodes[0].id;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const result = (await request(new CoopHistoryDetailQuery.Request(result_id.raw_value), bullet_token)) as CoopHistoryDetailQuery.Response;
    }, 50000);
});
