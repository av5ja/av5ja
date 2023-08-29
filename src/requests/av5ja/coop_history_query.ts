import { Expose, Type, plainToInstance } from 'class-transformer';

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

        request(response: any): Response {
            return plainToInstance(Response, { ...response, ...{ rawValue: response } }, { excludeExtraneousValues: true });
        }
    }

    class HistoryDetail {
        @Expose()
        readonly id: string;
    }

    class HistoryGroup {
        readonly start_time: string;
        readonly end_time: string;
        readonly mode: ModeType;
        readonly rule: RuleType;
        @Type(() => Common.Node<HistoryDetail>)
        readonly history_details: Common.Node<HistoryDetail>;
    }

    class CoopResult {
        @Expose()
        @Type(() => Common.Node<HistoryGroup>)
        readonly history_groups: Common.Node<HistoryGroup>;
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

        get results(): HistoryDetail[] {
            return this.data.coop_result.history_groups.nodes.flatMap((node) => node.history_details.nodes);
        }

        get result_id_list(): Common.CoopHistoryDetailId[] {
            const results = this.results;
            return results.map((result) => new Common.CoopHistoryDetailId(result.id));
        }

        @Expose()
        private readonly rawValue: JSON;

        json(): JSON {
            return this.rawValue;
        }
    }
}
