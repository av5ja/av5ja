import { SHA256Hash } from '../../enum/sha256hash';
import { GraphQL } from '../../utils/graph_ql';
import { Parameters } from '../../utils/request';

import 'reflect-metadata';

export namespace StageScheduleQuery {
    export class Request implements GraphQL {
        readonly hash: SHA256Hash = SHA256Hash.StageScheduleQuery;
        readonly parameters: Parameters;

        request(response: any): any {
            return response;
        }
    }
}
