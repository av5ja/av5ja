import { Expose, Type, plainToInstance } from 'class-transformer';

import { Method } from '../enum/method';

import { Headers, Parameters, RequestType } from './request';
import 'reflect-metadata';

export namespace NSO {
    export namespace Version {
        export class Request implements RequestType {
            readonly baseURL: string = 'https://itunes.apple.com/';
            readonly headers: Headers;
            readonly method: Method = Method.GET;
            readonly parameters: Parameters = {
                id: '1234806557',
            };
            readonly path: string = 'lookup';

            constructor() {}

            request(response: any): NSO.Version.Response {
                return plainToInstance(Response, response);
            }
        }

        class Result {
            readonly minimum_os_version: string;
            readonly file_size_bytes: string;
            readonly release_date: string;
            readonly current_version_release_date: string;
            readonly version: string;
        }

        export class Response {
            @Expose()
            @Type(() => Result)
            private readonly results: Result[];

            @Expose()
            readonly revision: string;

            get result(): Result {
                return this.results[0];
            }
        }
    }
}
