import { Transform, Type, plainToInstance } from 'class-transformer';

import { JWT, Membership, Token } from '../dto/jwt.dto';
import { Method } from '../enum/method';
import { ResponseType, RequestType, Headers, Parameters } from '../utils/request';

import { CoralToken } from './coral_token';

import 'reflect-metadata';

export namespace GameServiceToken {
    export class Request implements RequestType {
        readonly baseURL: string = 'https://api-lp1.znc.srv.nintendo.net/';
        readonly headers: Headers;
        readonly method: Method = Method.POST;
        readonly parameters: Parameters;
        readonly path: string = 'v3/Account/Login';

        constructor(token: JWT<Token.Token>, hash: CoralToken.Response, version: string) {
            this.headers = {
                'Content-Type': 'application/json',
                'X-Platform': 'Android',
                'X-ProductVersion': version,
            };
            this.parameters = {
                parameter: {
                    f: hash.f,
                    language: 'ja-JP',
                    naBirthday: '1990-01-01',
                    naCountry: 'JP',
                    naIdToken: token.rawValue,
                    requestId: hash.request_id,
                    timestamp: hash.timestamp.toString(),
                },
            };
        }

        request(response: any): ResponseType {
            return plainToInstance(Response, response, { excludeExtraneousValues: false });
        }
    }

    class NintendoAccount {
        readonly membership: Membership;
    }

    class FriendCode {
        readonly regenerable: boolean;
        readonly regenerable_at: number;
        readonly id: string;
    }

    class Links {
        readonly nintendo_account: NintendoAccount;
        readonly friend_code: FriendCode;
    }

    class User {
        /**
         * Coral User ID
         */
        readonly id: number;
        /**
         * Network Service Account ID(NSA ID)
         */
        readonly nsa_id: string;
        readonly image_uri: URL;
        readonly name: string;
        readonly support_id: string;
        readonly is_child_restricted: boolean;
        readonly etag: string;
        readonly links: Links;
    }

    class Credential {
        @Transform(({ value }) => new JWT<Token.GameServiceToken>(value))
        readonly access_token: JWT<Token.GameServiceToken>;
        readonly expires_in: number;
    }

    class Result {
        @Type(() => User)
        readonly user: User;
        @Type(() => Credential)
        readonly web_api_server_credential: Credential;
    }

    export class Response implements ResponseType {
        readonly status: number;
        @Type(() => Result)
        readonly result: Result;

        get access_token(): JWT<Token.GameServiceToken> {
            return this.result.web_api_server_credential.access_token;
        }

        /**
         * Coral User ID
         */
        get coral_user_id(): number {
            return this.access_token.payload.sub;
        }

        /**
         * Network Service Account ID(NSA ID)
         */
        get nsa_id(): string {
            return this.result.user.nsa_id;
        }

        /**
         * Coral User ID
         */
        get id(): number {
            return this.result.user.id;
        }
    }
}
