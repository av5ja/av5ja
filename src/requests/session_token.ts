import { Expose, Transform, plainToInstance } from 'class-transformer';

import { JWT, Token } from '../dto/jwt.dto';
import { Method } from '../enum/method';
import { ResponseType, RequestType, Headers, Parameters } from '../utils/request';

export namespace SessionToken {
    export class Request implements RequestType {
        readonly baseURL: string = 'https://accounts.nintendo.com/';
        readonly headers: Headers = {
            'Accept-Encoding': 'gzip',
            'Accept-Language': 'en-US',
            Connection: 'Keep-Alive',
            'Content-Type': 'application/json',
            Host: 'accounts.nintendo.com',
        };
        readonly method: Method = Method.POST;
        readonly parameters: Parameters;
        readonly path: string = 'connect/1.0.0/api/session_token';

        constructor(code: string, verifier: string) {
            this.parameters = {
                client_id: '71b963c1b7b6d119',
                session_token_code: code,
                session_token_code_verifier: verifier,
            };
        }

        request(response: any): SessionToken.Response {
            return plainToInstance(Response, response, { excludeExtraneousValues: true });
        }
    }

    export class Response implements ResponseType {
        @Expose()
        code: string;

        @Expose()
        @Transform(({ value }) => new JWT<Token.SessionToken>(value))
        session_token: JWT<Token.SessionToken>;
    }
}
