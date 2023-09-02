import { RuleType } from '../enum/rule';
import { request } from '../utils/graph_ql';
import { SplatNet2 } from '../utils/splatnet2';

import { CoopHistoryDetailQuery } from './av5ja/coop_history_detail_query';
import { CoopHistoryQuery } from './av5ja/coop_history_query';
import { StageScheduleQuery } from './av5ja/stage_schedule_query';

/**
 * スケジュール取得
 * @returns レギュラー、ビッグラン、チームコンテストのスケジュールを取得します
 */
export async function get_coop_schedules(): Promise<SplatNet2.CoopSchedule[]> {
    const schedules = (await request(new StageScheduleQuery.Request())).data.coop_grouping_schedule;
    return [
        ...schedules.regular_schedules.nodes.map((node) => new SplatNet2.CoopSchedule(node, RuleType.REGULAR)),
        ...schedules.big_run_schedules.nodes.map((node) => new SplatNet2.CoopSchedule(node, RuleType.BIG_RUN)),
        ...schedules.team_contest_schedules.nodes.map((node) => new SplatNet2.CoopSchedule(node, RuleType.TEAM_CONTEST)),
    ];
}

/**
 * 履歴グループを取得します
 * @returns
 */
export async function get_coop_history_groups(): Promise<CoopHistoryQuery.HistoryGroup[]> {
    return (await request(new CoopHistoryQuery.Request())).history_groups;
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
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function get_coop_history_details(force_fetch: boolean = false): Promise<SplatNet2.CoopResult[]> {
    const coop_history_groups: CoopHistoryQuery.HistoryGroup[] = await get_coop_history_groups();
    return (await Promise.all(coop_history_groups.map((group) => get_coop_history_group_details(group)))).flat();
}
