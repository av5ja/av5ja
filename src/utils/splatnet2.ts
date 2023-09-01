import dayjs from 'dayjs';
import { GradeId } from '../enum/grade';
import { ModeType } from '../enum/mode';
import { RuleType } from '../enum/rule';
import { SkinId } from '../enum/skin';
import { SpecieKey } from '../enum/specie';
import { CoopHistoryDetailQuery } from '../requests/av5ja/coop_history_detail_query';

import { Common } from './common';

export namespace SplatNet2 {
    class Background {
        readonly text_color: Common.TextColor;
        readonly id: number;
    }

    class Nameplate {
        readonly badges: (number | null)[];
        readonly background: Background;
    }

    class WaveResult {
        readonly id: number;
        readonly is_clear: boolean;
        readonly water_level: number;
        readonly event_type: number;
        readonly golden_ikura_num: number | null;
        readonly quota_num: number | null;
        readonly golden_ikura_pop_num: number;

        constructor(result: CoopHistoryDetailQuery.WaveResult) {
            this.id = result.wave_number
            this.water_level = result.water_level
            this.event_type = result.event_wave
            this.golden_ikura_num = result.team_deliver_count
            this.quota_num = result.deliver_norm
            this.golden_ikura_pop_num = result.golden_pop_count
        }
    }

    class JobResult {
        readonly is_clear: boolean;
        readonly failure_wave: number | null;
        readonly is_boss_defeated: boolean | null;
        readonly boss_id: number | null;

        constructor(is_clear: boolean, failure_wave: number | null, boss_result: CoopHistoryDetailQuery.BossResult) {
            this.is_clear = is_clear
            this.failure_wave = failure_wave
            this.is_boss_defeated = boss_result.has_defeat_boss
            this.boss_id = boss_result.boss.id
        }
    }

    class MemberResult {
        readonly id: Common.PlayerId;
        readonly npln_user_id: string;
        readonly is_myself: boolean;
        readonly byname: string;
        readonly name: string;
        readonly name_id: string;
        readonly nameplate: Nameplate;
        readonly golden_ikura_assist_num: number;
        readonly golden_ikura_num: number;
        readonly ikura_num: number;
        readonly dead_count: number;
        readonly help_count: number;
        readonly weapon_list: number[];
        readonly special_id: number;
        readonly spedal_counts: number[];
        readonly boss_kill_counts: number[];
        readonly boss_counts_total: number;
        readonly uniform: SkinId;
        readonly species: SpecieKey;

        constructor(member_result: CoopHistoryDetailQuery.MemberResult) {
            this.id = member_result.player.id
            this.npln_user_id = member_result.player.id.npln_user_id
            this.is_myself = member_result.player.id.is_myself
            this.byname = member_result.player.byname
            this.name = member_result.player.name
            this.name_id = member_result.player.name_id
            this.nameplate = member_result.player.nameplate
            this.golden_ikura_assist_num = member_result.golden_assist_count
            this.golden_ikura_num = member_result.golden_deliver_count
            this.ikura_num = member_result.deliver_count
            this.dead_count = member_result.rescued_count
            this.help_count = member_result.rescue_count
            this.weapon_list = member_result.weapons.map((weapon) => weapon.id)
            this.special_id = member_result.special_weapon.id
            this.spedal_counts = member_result.special_weapon
            this.boss_kill_counts = member_result.defeat_enemy_count
            this.boss_counts_total = member_result.defeat_enemy_count
            this.uniform = member_result.player.uniform.id
            this.species = member_result.player.species
        }
    }

    class Schedule {
        readonly start_time: Date | null;
        readonly end_time: Date | null;
        readonly mode: ModeType;
        readonly rule: RuleType;
        readonly weaponList: number[];
        readonly stage_id: number;
    }

    export class CoopResult {
        readonly id: Common.CoopHistoryDetailId;
        readonly scale: (number | null)[];
        readonly job_score: number | null;
        readonly grade_id: GradeId | null;
        readonly kuma_point: number | null;
        readonly wave_details: WaveResult[];
        readonly job_result: JobResult;
        readonly my_result: MemberResult;
        readonly other_results: MemberResult[];
        readonly grade_point: number | null;
        readonly job_rate: number | null;
        readonly play_time: Date;
        readonly boss_counts: number[];
        readonly boss_kill_counts: number[];
        readonly danger_rate: number;
        readonly job_bonus: number | null;
        readonly schedule: Schedule;
        readonly golden_ikura_num: number;
        readonly golden_ikura_assist_num: number;
        readonly ikura_num: number;
        readonly smell_meter: number | null;
        readonly scenario_code: string | null;

        constructor(result: CoopHistoryDetailQuery.CoopHistoryDetail) {
            this.id = result.id
            this.scale = result.scale === null
            ? [null, null, null]
            : result.scale;
            this.job_score = result.job_score;
            this.grade_id = result.after_grade.id
            this.kuma_point = result.job_point
            this.wave_details = result.wave_results
            this.job_result = result.job_result
            this.my_result = result.my_result
            this.other_results = result.other_results
            this.grade_point = result.after_grade_point
            this.job_rate = result.job_rate
            this.play_time = dayjs(result.played_time).toDate()
            this.boss_counts = result.boss_result
            this.boss_kill_counts = result.boss_result
            this.danger_rate = result.danger_rate
            this.job_bonus = result.job_bonus
            this.schedule = result.schedule
            this.golden_ikura_num = result
            this.ikura_num = result
            this.smell_meter = result.smell_meter
            this.scenario_code = result.scenario_code
        }
    }
}
