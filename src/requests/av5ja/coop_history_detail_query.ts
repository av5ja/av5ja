import { Expose, Transform, Type, plainToInstance } from 'class-transformer';

import 'reflect-metadata';

import { CoopEventId } from '../../enum/event_id';
import { RuleType } from '../../enum/rule';
import { SHA256Hash } from '../../enum/sha256hash';
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
            return plainToInstance(Response, { ...response, ...{ raw_value: response } }, { excludeExtraneousValues: true });
        }
    }

    class SpecialType extends Common.Hash {
        @Expose({ name: 'weapon_id' })
        id: number;
    }

    export class WaveResult {
        @Expose()
        readonly wave_number: number;

        @Expose()
        readonly water_level: CoopWaterLevelId;

        @Expose()
        @Transform(({ value }) => (value === null ? null : plainToInstance(Common.Id, value).id))
        readonly event_wave: CoopEventId;

        @Expose()
        readonly deliver_norm: number | null;

        @Expose()
        readonly golden_pop_count: number;

        @Expose()
        readonly team_deliver_count: number | null;

        @Expose()
        @Type(() => SpecialType)
        readonly special_weapons: SpecialType[];
    }

    export class Background extends Common.HashId {
        @Expose()
        @Type(() => Common.TextColor)
        readonly text_color: Common.TextColor;
    }

    export class Nameplate {
        @Expose()
        @Type(() => Common.HashId)
        readonly badges: Common.HashId[];

        @Expose()
        @Type(() => Background)
        readonly background: Background;
    }

    export class ResultPlayer {
        @Expose()
        @Type(() => Common.PlayerId)
        @Transform(({ value }) => new Common.PlayerId(value))
        readonly id: Common.PlayerId;

        @Expose()
        readonly byname: string;

        @Expose()
        readonly name: string;

        @Expose()
        readonly name_id: string;

        @Expose()
        @Type(() => Nameplate)
        readonly nameplate: Nameplate;

        @Expose()
        @Type(() => Common.HashId)
        readonly uniform: Common.HashId;

        @Expose()
        readonly species: SpecieKey;
    }

    export class MemberResult {
        @Expose()
        @Type(() => ResultPlayer)
        readonly player: ResultPlayer;

        @Expose()
        @Type(() => Common.Hash)
        readonly weapons: Common.Hash[];

        @Expose()
        @Type(() => SpecialType)
        readonly special_weapon: SpecialType;

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

    export class EnemyResult {
        @Expose()
        readonly defeat_count: number;

        @Expose()
        readonly team_defeat_count: number;

        @Expose()
        readonly pop_count: number;

        @Expose()
        @Type(() => Common.HashId)
        readonly enemy: Common.HashId;
    }

    export class BossResult {
        @Expose()
        readonly has_defeat_boss: boolean;

        @Expose()
        @Type(() => Common.HashId)
        readonly boss: Common.HashId;
    }

    export class CoopHistoryDetail {
        readonly id: Common.CoopHistoryDetailId;
        @Expose()
        @Type(() => Common.Id)
        readonly after_grade: Common.Id;

        @Expose()
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

        @Expose()
        @Type(() => Common.HashId)
        readonly coop_stage: Common.HashId;

        @Expose()
        readonly danger_rate: number;

        @Expose()
        readonly scenario_code: string | null;

        @Expose()
        readonly smell_meter: number | null;

        @Expose()
        @Type(() => Common.Hash)
        readonly weapons: Common.Hash[];

        @Expose()
        readonly after_grade_point: number | null;

        @Expose()
        @Transform(({ value }) => (value === null ? null : [value.bronze, value.silver, value.gold]))
        readonly scale: number[] | null;

        @Expose()
        readonly job_point: number | null;

        @Expose()
        readonly job_score: number | null;

        @Expose()
        readonly job_rate: number | null;

        @Expose()
        readonly job_bonus: number | null;

        get members(): MemberResult[] {
            return [this.my_result, ...this.member_results];
        }

        get enemy_pop_counts(): number[] {
            return this.enemy_results.sort((a, b) => a.enemy.id - b.enemy.id).map((enemy) => enemy.pop_count);
        }

        get enemy_defeat_counts(): number[] {
            return this.enemy_results.sort((a, b) => a.enemy.id - b.enemy.id).map((enemy) => enemy.defeat_count);
        }

        get enemy_team_defeat_counts(): number[] {
            return this.enemy_results.sort((a, b) => a.enemy.id - b.enemy.id).map((enemy) => enemy.team_defeat_count);
        }

        get golden_deliver_count(): number {
            return this.members.map((member) => member.golden_deliver_count).reduce((a, b) => a + b);
        }

        get deliver_count(): number {
            return this.members.map((member) => member.deliver_count).reduce((a, b) => a + b);
        }
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
        private readonly raw_value: JSON;

        json(): JSON {
            return this.raw_value;
        }
    }
}
