import { Transform, plainToInstance } from 'class-transformer';

import { JWT, Token } from '../dto/jwt.dto';
import { Method } from '../enum/method';
import { ResponseType, RequestType, Headers, Parameters } from '../utils/request';

export namespace BulletToken {
    export class Request implements RequestType {
        readonly baseURL: string = 'https://api.lp1.av5ja.srv.nintendo.net/';
        readonly headers: Headers;
        readonly method: Method = Method.POST;
        readonly parameters: Parameters;
        readonly path: string = 'api/bullet_tokens';

        constructor(token: JWT<Token.GameWebToken>, version: string) {
            this.headers = {
                "Accept": "*/*",
                'Content-Type': 'application/json',
                "Origin": "https://api.lp1.av5ja.srv.nintendo.net",
                "X-GameWebToken": token.raw_value,
                "X-NaCountry": "US",
                "X-Requested-With": "com.nintendo.znca",
                "X-Web-View-Ver": version,
            };
        }

        request(response: any): BulletToken.Response {
            return plainToInstance(Response, response, { excludeExtraneousValues: false });
        }
    }

    export class Response implements ResponseType {
        readonly bullet_token: string;
        readonly lang: string;
        @Transform(({ value }) => value === 'true')
        readonly is_noe_country: boolean;
    }
}
