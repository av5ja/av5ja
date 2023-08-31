import { Transform, Type, plainToInstance } from 'class-transformer';

import { JWT, Token } from '../dto/jwt.dto';
import { Method } from '../enum/method';
import { ResponseType, RequestType, Headers, Parameters } from '../utils/request';

import { CoralToken } from './coral_token';

import 'reflect-metadata';

export namespace GameWebToken {
    export class Request implements RequestType {
        readonly baseURL: string = 'https://api-lp1.znc.srv.nintendo.net/';
        readonly headers: Headers;
        readonly method: Method = Method.POST;
        readonly parameters: Parameters;
        readonly path: string = 'v2/Game/GetWebServiceToken';

        constructor(token: JWT<Token.GameServiceToken>, hash: CoralToken.Response, version: string) {
            this.headers = {
                Authorization: `Bearer ${token.raw_value}`,
                'Content-Type': 'application/json',
                'X-Platform': 'Android',
                'X-ProductVersion': version,
            };
            this.parameters = {
                parameter: {
                    f: hash.f,
                    id: 4_834_290_508_791_808,
                    registrationToken: token.raw_value,
                    requestId: hash.request_id,
                    timestamp: hash.timestamp.toString(),
                },
            };
        }

        request(response: any): ResponseType {
            return plainToInstance(Response, response, { excludeExtraneousValues: false });
        }
    }

    class Result {
        @Transform(({ value }) => new JWT<Token.GameWebToken>(value))
        readonly access_token: JWT<Token.GameWebToken>;
        readonly expires_in: number;
    }

    export class Response implements ResponseType {
        readonly correlation_id: string;
        readonly status: number;
        @Type(() => Result)
        readonly result: Result;

        get access_token(): JWT<Token.GameWebToken> {
            return this.result.access_token;
        }

        get nsa_id(): string {
            return this.access_token.payload.links.networkServiceAccount.id;
        }
    }
}
