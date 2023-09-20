import { Expose, Transform } from 'class-transformer';
import dayjs from 'dayjs';

import { JWT, Token } from '../dto/jwt.dto';
import { UserMe } from '../requests/user_me';

export class UserInfo implements UserMe.Response {
    @Expose()
    @Transform(({ value }) => new JWT<Token.SessionToken>(value))
    readonly session_token: JWT<Token.SessionToken>;

    @Expose()
    @Transform(({ value }) => new JWT<Token.Token>(value))
    readonly access_token: JWT<Token.Token>;

    @Expose()
    @Transform(({ value }) => new JWT<Token.GameServiceToken>(value))
    readonly game_service_token: JWT<Token.GameServiceToken>;

    @Expose()
    @Transform(({ value }) => new JWT<Token.GameWebToken>(value))
    readonly game_web_token: JWT<Token.GameWebToken>;

    @Expose()
    readonly bullet_token: string;

    @Expose()
    @Transform(({ value }) => dayjs(value).toDate())
    readonly expires_in: Date;

    @Expose()
    readonly web_version: string;

    @Expose()
    @Transform(({ value }) => dayjs(value).toDate())
    last_play_time: Date;

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

    @Expose()
    readonly nsa_id: string;

    @Expose()
    readonly friend_code: string;
    @Expose()
    readonly thumbnail_url: string;

    /**
     * トークンが有効期限切れかどうかを返す
     */
    get requires_refresh(): boolean {
        return dayjs(this.expires_in).isBefore(dayjs());
    }
}
