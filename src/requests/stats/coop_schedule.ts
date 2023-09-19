import { Expose, plainToInstance } from 'class-transformer';

import { Method } from '../../enum/method';
import { camelcaseKeys } from '../../utils/camelcase_keys';
import { base_url } from '../../utils/env';
import { RequestType, Headers, Parameters, ResponseType, request } from '../../utils/request';
import 'reflect-metadata';
import { StageScheduleQuery } from '../av5ja/stage_schedule_query';

export namespace CoopSchedule {
    export class Request implements RequestType {
        readonly baseURL: string = base_url;
        readonly headers: Headers = {
            'Content-Type': 'application/json',
        };
        readonly method: Method = Method.POST;
        readonly parameters: Parameters;
        readonly path: string = 'v1/schedules';

        constructor(results: StageScheduleQuery.Response) {
            this.parameters = JSON.parse(JSON.stringify(camelcaseKeys(results)));
        }

        request(response: any): CoopSchedule.Response[] {
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

export async function set_coop_schedules(schedule: StageScheduleQuery.Response): Promise<CoopSchedule.Response[]> {
    return await request(new CoopSchedule.Request(schedule));
}
