import { Expose, plainToInstance } from 'class-transformer';

import { JWT, Token } from '../dto/jwt.dto';
import { Method } from '../enum/method';
import { ResponseType, RequestType, Headers, Parameters } from '../utils/request';

export namespace UserMe {
    export class Request implements RequestType {
        readonly baseURL: string = 'https://api.accounts.nintendo.com/';
        readonly headers: Headers;
        readonly method: Method = Method.GET;
        readonly parameters: Parameters;
        readonly path: string = '2.0.0/users/me';

        constructor(token: JWT<Token.Token>) {
            this.headers = {
                'Accept-Encoding': 'gzip',
                Authorization: `Bearer ${token.raw_value}`,
                Host: 'api.accounts.nintendo.com',
                'User-Agent': 'NASDKAPI; Android',
            };
        }

        request(response: any): UserMe.Response {
            console.log(response)
            return plainToInstance(Response, response, { excludeExtraneousValues: true });
        }
    }

    export class Response implements ResponseType {
        @Expose()
        readonly nickname: string;

        @Expose()
        readonly language: string;

        @Expose()
        readonly country: string;

        @Expose()
        readonly birthday: string;

        @Expose()
        readonly id: string;
    }
}
