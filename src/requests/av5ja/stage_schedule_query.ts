import { Expose, Transform, Type, plainToInstance } from 'class-transformer';
import dayjs from 'dayjs';

import { SHA256Hash } from '../../enum/sha256hash';
import { Common } from '../../utils/common';
import { GraphQL, ResponseType } from '../../utils/graph_ql';
import { Parameters } from '../../utils/request';

import 'reflect-metadata';

export namespace StageScheduleQuery {
    export class Request implements GraphQL {
        readonly hash: SHA256Hash = SHA256Hash.StageScheduleQuery;
        readonly parameters: Parameters;

        request(response: any): StageScheduleQuery.Response {
            return plainToInstance(Response, { ...response, ...{ raw_value: response } }, { excludeExtraneousValues: true });
        }
    }

    class Setting {
        @Expose()
        @Type(() => Common.HashId)
        coop_stage: Common.HashId;

        @Expose()
        @Type(() => Common.Hash)
        weapons: Common.Hash[];
    }

    export class CoopSchedule {
        @Expose()
        @Transform(({ value }) => (value === null ? null : dayjs(value).toDate()))
        readonly start_time: Date;

        @Expose()
        @Transform(({ value }) => (value === null ? null : dayjs(value).toDate()))
        readonly end_time: Date;

        @Expose()
        @Type(() => Setting)
        readonly setting: Setting;
    }

    class CoopScheduleNode {
        @Expose()
        @Type(() => CoopSchedule)
        readonly nodes: CoopSchedule[];
    }

    class CoopGroupingSchedule {
        @Expose()
        @Type(() => CoopScheduleNode)
        readonly regular_schedules: CoopScheduleNode;

        @Expose()
        @Type(() => CoopScheduleNode)
        readonly big_run_schedules: CoopScheduleNode;

        @Expose()
        @Type(() => CoopScheduleNode)
        readonly team_contest_schedules: CoopScheduleNode;
    }

    class DataClass {
        @Expose()
        @Type(() => CoopGroupingSchedule)
        readonly coop_grouping_schedule: CoopGroupingSchedule;
    }

    export class Response implements ResponseType {
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

        @Expose()
        private readonly raw_value: JSON;

        json(): JSON {
            return this.raw_value;
        }
    }
}
