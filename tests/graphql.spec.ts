import { CoopHistoryDetailQuery } from '../src/requests/av5ja/coop_history_detail_query';
import { CoopHistoryQuery } from '../src/requests/av5ja/coop_history_query';
import { StageScheduleQuery } from '../src/requests/av5ja/stage_schedule_query';
import { request } from '../src/utils/graph_ql';

import token from './token.json';

describe('GraphQL', () => {
    const bullet_token = token.bullet_token;

    it('CoopHistoryQuery', async () => {
        const coop_history_query = await request(new CoopHistoryQuery.Request(), bullet_token);
        expect(coop_history_query.data.coop_result.history_groups.nodes.length).toBe(4);
        // console.log(JSON.stringify(coop_history_query.history_groups[0], null, 2))
    }, 5000);

    it('StageScheduleQuery', async () => {
        const stage_schedule_query = await request(new StageScheduleQuery.Request(), bullet_token);
        expect(stage_schedule_query.schedules.length).toBe(4);
        // console.log(JSON.stringify(stage_schedule_query.schedules, null, 2))
    }, 5000);

    it('CoopHistoryDetailQuery', async () => {
        const coop_history_query = await request(new CoopHistoryQuery.Request(), bullet_token);
        expect(coop_history_query.data.coop_result.history_groups.nodes.length).toBe(4);
        const result_id = coop_history_query.data.coop_result.history_groups.nodes[0].history_details.nodes[0].id;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const result = (await request(new CoopHistoryDetailQuery.Request(result_id.rawValue), bullet_token)) as CoopHistoryDetailQuery.Response;
        // console.log(JSON.stringify(result.data.coop_history_detail, null, 2))
    }, 50000);
});
