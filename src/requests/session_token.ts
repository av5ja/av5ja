import { plainToInstance } from 'class-transformer';

import { JWT, Token } from '../dto/jwt.dto';
import { Method } from '../enum/method';
import { ResponseType, RequestType, Headers, Parameters } from '../utils/request';

export namespace SessionToken {
  export class Request implements RequestType {
    readonly baseURL: string;
    readonly headers: Headers;
    readonly method: Method;
    readonly parameters: Parameters;
    readonly path: string;

    request(response: any): ResponseType {
      return plainToInstance(Response, response);
    }
  }

  export class Response implements ResponseType {
    code: string;
    session_token: JWT<Token.SessionToken>;
  }
}
