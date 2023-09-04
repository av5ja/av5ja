import { Expose, Transform, plainToInstance } from 'class-transformer';
import dayjs from 'dayjs';

import { Method } from '../../enum/method';
import { camelcaseKeys } from '../../utils/camelcase_keys';
import { RequestType, Headers, Parameters, ResponseType, request } from '../../utils/request';
import { SplatNet2 } from '../../utils/splatnet2';

import 'reflect-metadata';
import { node_env } from '../../utils/env';

export namespace CoopResult {
    export class Request implements RequestType {
        readonly baseURL: string = node_env === 'test' ?  'http://localhost:3000' : 'https://api.splatnet3.com'
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
            this.parameters = {
                results: JSON.parse(JSON.stringify(camelcaseKeys(results))),
            };
        }

        request(response: any): CoopResult.Response[] {
            return response.map((v: any) => plainToInstance(Response, v, { excludeExtraneousValues: true }));
        }
    }

    export class Response implements ResponseType {
        @Expose()
        result_id: number;

        @Expose()
        uuid: string;

        @Expose()
        @Transform(({ value }) => dayjs(value).toDate())
        play_time: Date;
    }
}

export async function set_coop_history_details(results: SplatNet2.CoopResult[]): Promise<CoopResult.Response[]> {
    return await request(new CoopResult.Request(results));
}
