import { Expose, Type, plainToInstance } from 'class-transformer';

import 'reflect-metadata';

import { EnemyId } from '../../enum/enemy';
import { CoopEventId } from '../../enum/event_id';
import { GradeId } from '../../enum/grade';
import { NameplateBdInfoId } from '../../enum/nameplate';
import { RuleType } from '../../enum/rule';
import { SHA256Hash } from '../../enum/sha256hash';
import { SkinId } from '../../enum/skin';
import { SpecialId } from '../../enum/special';
import { SpecieKey } from '../../enum/specie';
import { CoopWaterLevelId } from '../../enum/water_level';
import { Common } from '../../utils/common';
import { GraphQL, ResponseType } from '../../utils/graph_ql';
import { Parameters } from '../../utils/request';

export namespace CoopHistoryDetailQuery {
    export class Request implements GraphQL {
        readonly hash: SHA256Hash = SHA256Hash.CoopHistoryDetailQuery;
        readonly parameters: Parameters;

        constructor(result_id: string) {
            this.parameters = {
                coopHistoryDetailId: result_id,
            };
        }

        request(response: any): Response {
            return plainToInstance(Response, { ...response, ...{ rawValue: response } }, { excludeExtraneousValues: true });
        }
    }

    class WaveResult {
        @Expose()
        readonly wave_number: number;
        @Expose()
        readonly water_level: CoopWaterLevelId;
        @Expose()
        readonly event_wave: CoopEventId;
        @Expose()
        readonly deliver_norm: number | null;
        @Expose()
        readonly golden_pop_count: number;
        @Expose()
        readonly team_deliver_count: number | null;
        readonly special_weapon: SpecialId[];
    }

    // class Badge {
    //     readonly id: BadgeInfoId;
    //     readonly image: Common.URL<string>;
    // }

    class Nameplate {
        readonly text_color: Common.TextColor;
        readonly image: Common.URL<string>;
        readonly id: NameplateBdInfoId;
    }

    class ResultPlayer {
        readonly id: Common.PlayerId;
        @Expose()
        readonly byname: string;
        @Expose()
        readonly name: string;
        @Expose()
        readonly nameId: string;
        readonly nameplate: Nameplate;
        readonly uniform: SkinId;
        readonly species: SpecieKey;
    }

    class MemberResult {
        @Expose()
        @Type(() => ResultPlayer)
        readonly player: ResultPlayer;
        readonly weapons: Common.WeaponType[];
        readonly special_weapon: SpecialId;
        @Expose()
        readonly defeat_enemy_count: number;
        @Expose()
        readonly deliver_count: number;
        @Expose()
        readonly golden_assist_count: number;
        @Expose()
        readonly golden_deliver_count: number;
        @Expose()
        readonly rescue_count: number;
        @Expose()
        readonly rescued_count: number;
    }

    class EnemyResult {
        @Expose()
        readonly defeat_count: number;
        @Expose()
        readonly team_defeat_count: number;
        @Expose()
        readonly pop_count: number;
        readonly enemy: EnemyId;
    }

    class BossResult {
        @Expose()
        readonly has_defeat_boss: boolean;
        readonly boss: EnemyId;
    }

    class CoopHistoryDetail {
        readonly id: Common.CoopHistoryDetailId;
        readonly after_grade: GradeId;
        readonly rule: RuleType;
        @Expose()
        @Type(() => MemberResult)
        readonly my_result: MemberResult;
        @Expose()
        @Type(() => MemberResult)
        readonly member_results: MemberResult[];
        @Expose()
        @Type(() => BossResult)
        readonly boss_result: BossResult | null;
        @Expose()
        @Type(() => EnemyResult)
        readonly enemy_results: EnemyResult[];
        @Expose()
        @Type(() => WaveResult)
        readonly wave_results: WaveResult[];
        @Expose()
        readonly result_wave: number;
        @Expose()
        readonly played_time: string;
        readonly coop_stage: string;
        @Expose()
        readonly danger_rate: number;
        @Expose()
        readonly scenario_code: string | null;
        @Expose()
        readonly smell_meter: number | null;
        readonly weapons: Common.WeaponType[];
        @Expose()
        readonly after_grade_point: number | null;
        readonly scale: number | null;
        @Expose()
        readonly job_point: number | null;
        @Expose()
        readonly job_score: number | null;
        @Expose()
        readonly job_rate: number | null;
        @Expose()
        readonly job_bonus: number | null;
    }

    class DataClass {
        @Expose()
        @Type(() => CoopHistoryDetail)
        readonly coop_history_detail: CoopHistoryDetail;
    }

    export class Response implements ResponseType {
        @Expose()
        @Type(() => DataClass)
        readonly data: DataClass;

        @Expose()
        private readonly rawValue: JSON;

        json(): JSON {
            return this.rawValue;
        }
    }
}
