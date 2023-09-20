import 'reflect-metadata';

import { SHA256Hash } from '../../enum/sha256hash';
import { GraphQL } from '../../utils/graph_ql';
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

        request(response: any): any {
            return response 
        }
    }
}
