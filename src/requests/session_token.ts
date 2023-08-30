import { plainToInstance } from 'class-transformer';

import { JWT, Token } from '../dto/jwt.dto';
import { Method } from '../enum/method';
import { ResponseType, RequestType, Headers, Parameters } from '../utils/request';

export namespace SessionToken {
    export class Request implements RequestType {
        readonly baseURL: string = 'https://accounts.nintendo.com/';
        readonly headers: Headers;
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

        request(response: any): ResponseType {
            return plainToInstance(Response, response);
        }
    }

    export class Response implements ResponseType {
        code: string;
        session_token: JWT<Token.SessionToken>;
    }
}
