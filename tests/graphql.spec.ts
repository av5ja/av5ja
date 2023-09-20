import dayjs from 'dayjs';

import { CoopHistoryDetailQuery } from '../src/requests/av5ja/coop_history_detail_query';
import { CoopHistoryQuery } from '../src/requests/av5ja/coop_history_query';
import { request } from '../src/utils/graph_ql';

import secrets from './secrets.json';

describe('GraphQL', () => {
    process.env.EXPIRES_IN = dayjs().add(2, 'hours').toISOString();
    process.env.BULLET_TOKEN = secrets.bullet_token;

    it('CoopHistoryQuery', async () => {
        const coop_history_query = await request(new CoopHistoryQuery.Request());
        expect(coop_history_query.data.coop_result.history_groups.nodes.length).toBeGreaterThan(1);
        // console.log(JSON.stringify(coop_history_query, null, 2))
    }, 10000);

    it('CoopHistoryDetailQuery', async () => {
        const coop_history_query = await request(new CoopHistoryQuery.Request());
        const history_group = coop_history_query.history_groups[0];
        // 正常にリクエストが送れるかどうか
        await request(new CoopHistoryDetailQuery.Request(history_group.result_id_list[0].raw_value));
    }, 50000);
});
