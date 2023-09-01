import { RuleType } from '../enum/rule';
import { request } from '../utils/graph_ql';
import { SplatNet2 } from '../utils/splatnet2';

import { CoopHistoryDetailQuery } from './av5ja/coop_history_detail_query';
import { CoopHistoryQuery } from './av5ja/coop_history_query';
import { StageScheduleQuery } from './av5ja/stage_schedule_query';
import { set_coop_history_details } from './stats/coop_result';

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
async function get_coop_history_group_details(history_group: CoopHistoryQuery.HistoryGroup, force_fetch: boolean = false): Promise<SplatNet2.CoopResult[]> {
    // 現時点ではUserInfoに値が入っていないので仮対応
    const nodes = force_fetch ? history_group.history_details.nodes : history_group.history_details.nodes.filter(() => true);
    const results = await Promise.all(nodes.map((node) => request(new CoopHistoryDetailQuery.Request(node.id.raw_value))));
    return results.map((result) => new SplatNet2.CoopResult(history_group, result.data.coop_history_detail));
}

/**
 * 最後に取得したリザルト以降のリザルトを取得します
 * @param force_fetch 強制的に全件リザルトを取得します
 */
export async function get_coop_history_details(upload: boolean = true, force_fetch: boolean = false): Promise<SplatNet2.CoopResult[]> {
    const coop_history_groups: CoopHistoryQuery.HistoryGroup[] = await get_coop_history_groups();
    const results: SplatNet2.CoopResult[] = (await Promise.all(coop_history_groups.map((group) => get_coop_history_group_details(group, force_fetch)))).flat();

    if (upload) {
        await set_coop_history_details(results);
    }
    return results;
}
