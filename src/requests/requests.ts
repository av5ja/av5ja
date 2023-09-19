import { request } from '../utils/graph_ql';

import { CoopHistoryDetailQuery } from './av5ja/coop_history_detail_query';
import { CoopHistoryQuery } from './av5ja/coop_history_query';
import { StageScheduleQuery } from './av5ja/stage_schedule_query';
import { CoopResult, set_coop_history_details } from './stats/coop_result';
import { CoopSchedule, set_coop_schedules } from './stats/coop_schedule';

/**
 * リザルト一覧を取得します
 * @returns
 */
export async function get_coop_history_details(): Promise<CoopResult.Response[]> {
    const history_groups = (await request(new CoopHistoryQuery.Request())).history_groups;
    const result_ids: string[] = history_groups.flatMap((v: CoopHistoryQuery.HistoryGroup) => v.history_details.nodes.map((v) => v.id.raw_value));
    const results: CoopHistoryDetailQuery.Response[] = await Promise.all(result_ids.map((id) => request(new CoopHistoryDetailQuery.Request(id))));
    return await set_coop_history_details(results);
}

/**
 * スケジュール一覧を取得します
 * @returns
 */
export async function get_coop_schedules(): Promise<CoopSchedule.Response[]> {
    const schedule = await request(new StageScheduleQuery.Request());
    return await set_coop_schedules(schedule);
}
