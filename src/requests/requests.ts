import { request } from '../utils/graph_ql';
import { SplatNet2 } from '../utils/splatnet2';

import { CoopHistoryDetailQuery } from './av5ja/coop_history_detail_query';
import { CoopHistoryQuery } from './av5ja/coop_history_query';
import { StageScheduleQuery } from './av5ja/stage_schedule_query';

/**
 * スケジュール取得
 * @returns レギュラー、ビッグラン、チームコンテストのスケジュールを取得します
 */
export async function get_stage_schedules(): Promise<StageScheduleQuery.CoopSchedule[]> {
    const stage_schedule_query = await request(new StageScheduleQuery.Request());
    return stage_schedule_query.schedules;
}

/**
 * 履歴グループを取得します
 * @returns
 */
export async function get_coop_history_groups(): Promise<CoopHistoryQuery.HistoryGroup[]> {
    const coop_history_query = await request(new CoopHistoryQuery.Request());
    return coop_history_query.history_groups;
}

/**
 * 指定された履歴グループの詳細を取得します
 * @param history_group 履歴グループ
 * @returns
 */
async function get_coop_history_group_details(history_group: CoopHistoryQuery.HistoryGroup): Promise<SplatNet2.CoopResult[]> {
    const results = await Promise.all(history_group.history_details.nodes.map((node) => request(new CoopHistoryDetailQuery.Request(node.id.raw_value))));
    return results.map((result) => new SplatNet2.CoopResult(history_group, result.data.coop_history_detail));
}

/**
 * 最後に取得したリザルト以降のリザルトを取得します
 * @param force_fetch 強制的に全件リザルトを取得します
 */
export async function get_coop_history_details(force_fetch: boolean = false): Promise<SplatNet2.CoopResult[]> {
    const coop_history_groups: CoopHistoryQuery.HistoryGroup[] = await this.get_coop_history_groups();
    return (await Promise.all(coop_history_groups.map((group) => get_coop_history_group_details(group)))).flat();
}
