import { Expose, plainToInstance } from 'class-transformer';

import { Method } from '../../enum/method';
import { base_url } from '../../utils/env';
import { RequestType, Headers, Parameters, ResponseType, request } from '../../utils/request';
import 'reflect-metadata';

export namespace CoopResult {
    export class Request implements RequestType {
        readonly baseURL: string = base_url;
        readonly headers: Headers = {
            'Content-Type': 'application/json',
        };
        readonly method: Method = Method.POST;
        readonly parameters: Parameters;
        readonly path: string = 'v1/results';

        constructor(results: any[]) {
            this.parameters = {
                results: JSON.parse(JSON.stringify((results))),
            };
        }

        request(response: any): CoopResult.Response[] {
            return response.map((v: any) => plainToInstance(Response, v, { excludeExtraneousValues: true }));
        }
    }

    export class Response implements ResponseType {
        @Expose()
        result_id: string;

        @Expose()
        schedule_id: string;
    }
}

export async function set_coop_history_details(results: any[]): Promise<CoopResult.Response[]> {
    return await request(new CoopResult.Request(results));
}
