import { Expose, Transform, Type, plainToInstance } from 'class-transformer';
import dayjs from 'dayjs';
import snakecaseKeys from 'snakecase-keys';

import { ModeType } from '../../enum/mode';
import { RuleType } from '../../enum/rule';
import { SHA256Hash } from '../../enum/sha256hash';
import { Common } from '../../utils/common';
import { GraphQL, ResponseType } from '../../utils/graph_ql';
import { Parameters } from '../../utils/request';

import 'reflect-metadata';

export namespace CoopHistoryQuery {
    export class Request implements GraphQL {
        readonly hash: SHA256Hash = SHA256Hash.CoopHistoryQuery;
        readonly parameters: Parameters;

        request(response: any): CoopHistoryQuery.Response {
            return plainToInstance(Response, { ...snakecaseKeys(response), ...{ raw_value: response } }, { excludeExtraneousValues: true });
        }
    }

    class HistoryDetail {
        @Expose()
        @Transform(({ value }) => new Common.CoopHistoryDetailId(value))
        readonly id: Common.CoopHistoryDetailId;
    }

    class HistoryGroupNode {
        @Expose()
        @Type(() => HistoryGroup)
        readonly nodes: HistoryGroup[];
    }

    class HistoryDetailNode {
        @Expose()
        @Type(() => HistoryDetail)
        readonly nodes: HistoryDetail[];
    }

    export class HistoryGroup {
        @Expose()
        @Transform(({ value }) => (value === null ? null : dayjs(value).toDate()))
        readonly start_time: Date | null;

        @Expose()
        @Transform(({ value }) => (value === null ? null : dayjs(value).toDate()))
        readonly end_time: Date | null;

        @Expose()
        @Transform(({ value }) => Object.values(ModeType).find((mode) => mode === value) || ModeType.UNDEFINED)
        readonly mode: ModeType;

        @Expose()
        @Transform(({ value }) => Object.values(RuleType).find((rule) => rule === value) || RuleType.UNDEFINED)
        readonly rule: RuleType;

        @Expose()
        @Type(() => HistoryDetailNode)
        readonly history_details: HistoryDetailNode;

        get result_id_list(): Common.CoopHistoryDetailId[] {
            return this.history_details.nodes.map((node) => node.id);
        }
    }

    class CoopResult {
        @Expose()
        @Type(() => HistoryGroupNode)
        readonly history_groups: HistoryGroupNode;
    }

    class DataClass {
        @Expose()
        @Type(() => CoopResult)
        readonly coop_result: CoopResult;
    }

    export class Response implements ResponseType {
        @Expose()
        @Type(() => DataClass)
        readonly data: DataClass;

        get history_groups(): HistoryGroup[] {
            return this.data.coop_result.history_groups.nodes;
        }

        @Expose()
        private readonly raw_value: JSON;

        json(): JSON {
            return this.raw_value;
        }
    }
}
