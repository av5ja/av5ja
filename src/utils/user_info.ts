import { Expose, Transform, plainToInstance } from 'class-transformer';
import dayjs from 'dayjs';

import { JWT, Token } from '../dto/jwt.dto';
import { GameServiceToken } from '../requests/game_service_token';

export class UserInfo {
    @Expose()
    @Transform(({ value }) => new JWT<Token.SessionToken>(value))
    session_token: JWT<Token.SessionToken>;

    @Expose()
    @Transform(({ value }) => new JWT<Token.Token>(value))
    access_token: JWT<Token.Token>;

    @Expose()
    @Transform(({ value }) => new JWT<Token.GameServiceToken>(value))
    game_service_token: JWT<Token.GameServiceToken>;

    @Expose()
    @Transform(({ value }) => new JWT<Token.GameWebToken>(value))
    game_web_token: JWT<Token.GameWebToken>;

    @Expose()
    bullet_token: string;

    @Expose()
    @Transform(({ value }) => dayjs(value).toDate())
    expires_in: Date;

    @Expose()
    @Transform(({ value }) => plainToInstance(GameServiceToken.User, value))
    user: GameServiceToken.User;

    @Expose()
    web_version: string;

    @Expose()
    @Transform(({ value }) => dayjs(value).toDate())
    last_play_time: Date;

    /**
     * トークンが有効期限切れかどうかを返す
     */
    get requires_refresh(): boolean {
        return dayjs(this.expires_in).isBefore(dayjs());
    }
}
