import { Expose } from 'class-transformer';
import dayjs from 'dayjs';

import { JWT, Token } from '../dto/jwt.dto';

export class UserInfo {
    @Expose()
    session_token: JWT<Token.SessionToken>;

    @Expose()
    access_token: JWT<Token.Token>;

    @Expose()
    game_service_token: JWT<Token.GameServiceToken>;

    @Expose()
    game_web_token: JWT<Token.GameWebToken>;

    @Expose()
    bullet_token: string;

    @Expose()
    expires_in: Date;

    constructor(
        session_token: JWT<Token.SessionToken>,
        access_token: JWT<Token.Token>,
        game_service_token: JWT<Token.GameServiceToken>,
        game_web_token: JWT<Token.GameWebToken>,
        bullet_token: string
    ) {
        this.session_token = session_token;
        this.access_token = access_token;
        this.game_service_token = game_service_token;
        this.game_web_token = game_web_token;
        this.bullet_token = bullet_token;
        // とりあえず有効期限を二時間で設定
        this.expires_in = dayjs().add(2, 'hour').toDate();
    }

    /**
     * トークンが有効期限切れかどうかを返す
     */
    get requires_refresh(): boolean {
        return dayjs(this.expires_in).isBefore(dayjs()) 
    }
}
