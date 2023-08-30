import { GradeId } from '../enum/grade';
import { ModeType } from '../enum/mode';
import { RuleType } from '../enum/rule';
import { SkinId } from '../enum/skin';
import { SpecieKey } from '../enum/specie';

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
        readonly golden_ikura_num: number;
        readonly quota_num: number;
        readonly golden_ikura_pop_num: number;
    }

    class JobResult {
        readonly is_clear: boolean;
        readonly failure_wave: number | null;
        readonly is_boss_defeated: boolean | null;
        readonly boss_id: number | null;
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
    }
}
