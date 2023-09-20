import { request } from '../utils/graph_ql';
import { get_user_info, set_user_info } from '../utils/oauth';

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
    const { last_play_time } = await get_user_info();
    const result_ids = (await request(new CoopHistoryQuery.Request())).coop_result_detail_ids.filter((id) => id.play_time > last_play_time);
    console.log("Results count", result_ids.length)
    if (result_ids.length === 0) {
        return []
    }
    /**
     * 最も新しいリザルトIDのプレイ時間をユーザー情報に保存します
     */
    await set_user_info(result_ids[result_ids.length - 1].play_time);
    return await set_coop_history_details(await Promise.all(result_ids.map((id) => request(new CoopHistoryDetailQuery.Request(id.raw_value)))));
}

/**
 * スケジュール一覧を取得します
 * @returns
 */
export async function get_coop_schedules(): Promise<CoopSchedule.Response[]> {
    const schedule = await request(new StageScheduleQuery.Request());
    return await set_coop_schedules(schedule);
}
