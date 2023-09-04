import { RuleType } from '../src/enum/rule';
import { CoopHistoryDetailQuery } from '../src/requests/av5ja/coop_history_detail_query';
import { CoopHistoryQuery } from '../src/requests/av5ja/coop_history_query';
import { StageScheduleQuery } from '../src/requests/av5ja/stage_schedule_query';
import { set_coop_history_details } from '../src/requests/stats/coop_result';
import { node_env } from '../src/utils/env';
import { request } from '../src/utils/graph_ql';
import { SplatNet2 } from '../src/utils/splatnet2';

async function get_coop_schedules(): Promise<SplatNet2.CoopSchedule[]> {
    const schedules = (await request(new StageScheduleQuery.Request())).data.coop_grouping_schedule;
    return [
        ...schedules.regular_schedules.nodes.map((node) => new SplatNet2.CoopSchedule(node, RuleType.REGULAR)),
        ...schedules.big_run_schedules.nodes.map((node) => new SplatNet2.CoopSchedule(node, RuleType.BIG_RUN)),
        ...schedules.team_contest_schedules.nodes.map((node) => new SplatNet2.CoopSchedule(node, RuleType.TEAM_CONTEST)),
    ];
}

describe('GraphQL', () => {
    it('CoopHistoryQuery', async () => {
        const coop_history_query = await request(new CoopHistoryQuery.Request());
        expect(coop_history_query.data.coop_result.history_groups.nodes.length).toBeGreaterThan(1);
        // console.log(JSON.stringify(coop_history_query, null, 2))
    }, 10000);

    it('StageScheduleQuery', async () => {
        const schedules = await get_coop_schedules();
        expect(schedules.length).toBeGreaterThan(3);
        // console.log(JSON.stringify(schedules, null, 2))
    }, 5000);

    it('CoopHistoryDetailQuery', async () => {
        const coop_history_query = await request(new CoopHistoryQuery.Request());
        const history_group = coop_history_query.history_groups[0];
        // 正常にリクエストが送れるかどうか
        const detail = await request(new CoopHistoryDetailQuery.Request(history_group.result_id_list[0].raw_value));
        const result = new SplatNet2.CoopResult(history_group, detail.data.coop_history_detail);
        // ローカルテストのみ
        if (node_env === 'test') {
            const response = (await set_coop_history_details([result]))[0];
            // 返ってきた値と等しいかどうか
            expect(response.uuid).toBe(result.id.uuid);
            expect(response.play_time).toStrictEqual(result.play_time);
        }
        // 変換後のテスト 特に意味はない気がするが、念のため
        expect(result.id.raw_value).toBe(detail.data.coop_history_detail.id.raw_value);
        expect(result.danger_rate).toBe(detail.data.coop_history_detail.danger_rate);
        expect(result.job_bonus).toBe(detail.data.coop_history_detail.job_bonus);
        expect(result.job_rate).toBe(detail.data.coop_history_detail.job_rate);
        expect(result.job_score).toBe(detail.data.coop_history_detail.job_score);
        expect(result.kuma_point).toBe(detail.data.coop_history_detail.job_point);
        expect(result.scenario_code).toBe(detail.data.coop_history_detail.scenario_code);
        expect(result.smell_meter).toBe(detail.data.coop_history_detail.smell_meter);
        expect(result.golden_ikura_num).toBe(detail.data.coop_history_detail.golden_deliver_count);
        expect(result.ikura_num).toBe(detail.data.coop_history_detail.deliver_count);
        expect(result.schedule.stage_id).toBe(detail.data.coop_history_detail.coop_stage.id);
        expect(result.grade_id).toBe(detail.data.coop_history_detail.after_grade.id);
        expect(result.grade_point).toBe(detail.data.coop_history_detail.after_grade_point);
        expect(result.job_result.boss_id).toBe(detail.data.coop_history_detail.boss_result?.boss.id ?? null);
        expect(result.job_result.is_boss_defeated).toBe(detail.data.coop_history_detail.boss_result?.has_defeat_boss ?? null);
        expect(result.job_result.failure_wave).toBe(detail.data.coop_history_detail.result_wave === 0 ? null : detail.data.coop_history_detail.result_wave);
        expect(result.job_result.is_clear).toBe(detail.data.coop_history_detail.result_wave === 0);
        expect(result.wave_details.length).toBe(detail.data.coop_history_detail.wave_results.length);
        expect(result.wave_details.map((wave) => wave.event_type)).toStrictEqual(detail.data.coop_history_detail.wave_results.map((wave) => wave.event_wave));
        expect(result.wave_details.map((wave) => wave.water_level)).toStrictEqual(detail.data.coop_history_detail.wave_results.map((wave) => wave.water_level));
        expect(result.wave_details.map((wave) => wave.golden_ikura_num)).toStrictEqual(
            detail.data.coop_history_detail.wave_results.map((wave) => wave.team_deliver_count)
        );
        expect(result.wave_details.map((wave) => wave.golden_ikura_pop_num)).toStrictEqual(
            detail.data.coop_history_detail.wave_results.map((wave) => wave.golden_pop_count)
        );
        expect(result.wave_details.map((wave) => wave.quota_num)).toStrictEqual(detail.data.coop_history_detail.wave_results.map((wave) => wave.deliver_norm));
        expect(result.wave_details.map((wave) => wave.id)).toStrictEqual(detail.data.coop_history_detail.wave_results.map((wave) => wave.wave_number));
    }, 50000);
});
