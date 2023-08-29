import { CoopHistoryQuery } from '../src/requests/av5ja/coop_history_query';
import { StageScheduleQuery } from '../src/requests/av5ja/stage_schedule_query';
import { Common } from '../src/utils/common';
import { request } from '../src/utils/graph_ql';

import token from './token.json';

describe('GraphQL', () => {
    const bullet_token = token.bullet_token;

    it('CoopHistoryQuery', async () => {
        const coop_history_query = await request(new CoopHistoryQuery.Request(), bullet_token);
        expect(coop_history_query.data.coop_result.history_groups.nodes.length).toBe(4);
        expect(coop_history_query.results.length).toBe(50);

        const result_id_list: Common.CoopHistoryDetailId[] = coop_history_query.result_id_list;
        /**
         * 変換後のリザルトIDが正しいことを確認する
         */
        result_id_list.forEach((result_id: Common.CoopHistoryDetailId) => {
            expect(result_id.rawValue).toBe(result_id.desciption);
        });
    }, 5000);
    
    it('StageScheduleQuery', async () => {
        const stage_schedule_query = await request(new StageScheduleQuery.Request(), bullet_token);
        expect(stage_schedule_query.schedules.length).toBe(4);
    }, 5000);
});
