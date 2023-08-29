import { Expose, Type, plainToInstance } from 'class-transformer';

import { CoopStageId } from '../../enum/coop_stage_id';
import { SHA256Hash } from '../../enum/sha256hash';
import { Common } from '../../utils/common';
import { GraphQL } from '../../utils/graph_ql';
import { Parameters } from '../../utils/request';

import 'reflect-metadata';

export namespace StageScheduleQuery {
    export class Request implements GraphQL {
        readonly hash: SHA256Hash;
        readonly parameters: Parameters;

        constructor() {
            this.hash = SHA256Hash.StageScheduleQuery;
            this.parameters = {};
        }

        request(response: any): Response {
            return plainToInstance(Response, response, { excludeExtraneousValues: false });
        }
    }

    class CoopStage {
        @Expose()
        id: CoopStageId;
        @Expose()
        name: string;
    }

    class Setting {
        @Expose()
        @Type(() => CoopStage)
        coop_stage: CoopStage;

        @Expose()
        weapons: Common.WeaponType[];
    }

    class CoopSchedule {
        @Expose()
        readonly start_time: string;

        @Expose()
        readonly end_time: string;

        @Expose()
        @Type(() => Setting)
        readonly setting: Setting;
    }

    class CoopGroupingSchedule {
        @Expose()
        @Type(() => Common.Node<CoopSchedule>)
        readonly regular_schedules: Common.Node<CoopSchedule>;

        @Expose()
        @Type(() => Common.Node<CoopSchedule>)
        readonly big_run_schedules: Common.Node<CoopSchedule>;

        @Expose()
        @Type(() => Common.Node<CoopSchedule>)
        readonly team_contest_schedules: Common.Node<CoopSchedule>;
    }

    class DataClass {
        @Expose()
        @Type(() => CoopGroupingSchedule)
        readonly coop_grouping_schedule: CoopGroupingSchedule;
    }

    export class Response {
        @Expose()
        @Type(() => DataClass)
        readonly data: DataClass;

        /**
         * スケジュール一覧
         */
        get schedules(): CoopSchedule[] {
            return [
                ...this.data.coop_grouping_schedule.regular_schedules.nodes,
                ...this.data.coop_grouping_schedule.big_run_schedules.nodes,
                ...this.data.coop_grouping_schedule.team_contest_schedules.nodes,
            ];
        }
    }
}
