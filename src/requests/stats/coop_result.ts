import { Expose, Type, plainToInstance } from 'class-transformer';

import { Method } from '../../enum/method';
import { RequestType, Headers, Parameters, ResponseType, request } from '../../utils/request';
import { SplatNet2 } from '../../utils/splatnet2';

import 'reflect-metadata';
import { camelcaseKeys } from '../../utils/camelcase_keys';

export namespace CoopResult {
    export class Request implements RequestType {
        readonly baseURL: string = 'http://localhost:3000/';
        readonly headers: Headers = {
            'Content-Type': 'application/json',
        };
        readonly method: Method = Method.POST;
        readonly parameters: Parameters;
        readonly path: string = 'v3/results';

        constructor(results: SplatNet2.CoopResult[]) {
            this.headers = {
                'Content-Type': 'application/json',
                version: '0.0.6',
            };
            console.log(JSON.stringify(results.map((result) => camelcaseKeys(result)), null, 2));
            this.parameters = {
                results: JSON.parse(JSON.stringify(camelcaseKeys(results))),
            };
        }

        request(response: any): ResponseType {
            return response.map((v: any) => plainToInstance(Response, v, { excludeExtraneousValues: true }));
        }
    }

    class Result {
    }

    export class Response implements ResponseType {
        @Expose()
        result_id: number;

        @Expose()
        uuid: string;

        @Expose()
        play_time: Date;
    }
}

export async function set_coop_history_details(results: SplatNet2.CoopResult[]): Promise<CoopResult.Response[]> {
    return await request(new CoopResult.Request(results));
}
