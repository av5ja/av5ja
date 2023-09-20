import { Method } from '../../enum/method';
import { base_url } from '../../utils/env';
import { RequestType, Headers, Parameters, request } from '../../utils/request';
import 'reflect-metadata';

export namespace CoopSchedule {
    export class Request implements RequestType {
        readonly baseURL: string = base_url;
        readonly headers: Headers = {
            'Content-Type': 'application/json',
        };
        readonly method: Method = Method.POST;
        readonly parameters: Parameters;
        readonly path: string = 'v1/schedules';

        constructor(results: any) {
            this.parameters = JSON.parse(JSON.stringify(results));
        }

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        request(response: any): void {
            return;
        }
    }
}

export async function set_coop_schedules(schedule: any): Promise<void> {
    return await request(new CoopSchedule.Request(schedule));
}
