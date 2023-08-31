import crypto from 'crypto';

import base64url from 'base64url';
import Randomstring from 'randomstring';

import { JWT, Token } from '../dto/jwt.dto';
import { AccessToken } from '../requests/access_token';
import { BulletToken } from '../requests/bullet_token';
import { CoralToken } from '../requests/coral_token';
import { GameServiceToken } from '../requests/game_service_token';
import { GameWebToken } from '../requests/game_web_token';
import { SessionToken } from '../requests/session_token';

import { Keychain } from './keyhain';
import { NSO } from './nso_version';
import { request } from './request';
import { UserInfo } from './user_info';
import { Web } from './web_version';

export class OAuth {
    private static state: string = Randomstring.generate(64);
    private static verifier: string = Randomstring.generate(64);
    private static keychain: Keychain = new Keychain();

    /**
     * OAuth認証用のURLを返す
     */
    static get oauthURL(): URL {
        // URLを取得する度にstateとverifierを更新する
        this.state = Randomstring.generate(64);
        this.verifier = Randomstring.generate(64);

        const baseURL: URL = new URL('https://accounts.nintendo.com/connect/1.0.0/authorize');
        const challenge = base64url.fromBase64(crypto.createHash('sha256').update(this.verifier).digest('base64'));

        const parameters = new URLSearchParams({
            client_id: '71b963c1b7b6d119',
            redirect_uri: 'npf71b963c1b7b6d119://auth',
            response_type: 'session_token_code',
            scope: 'openid user user.birthday user.mii user.screenName',
            session_token_code_challenge: challenge,
            session_token_code_challenge_method: 'S256',
            state: this.state,
        });
        baseURL.search = parameters.toString();
        return baseURL;
    }

    /**
     * 認証
     */
    static async authorize(state: string, code: string): Promise<boolean> {
        if (state !== this.state) throw new Error('Provided state does not match.');
        const session_token = await this.get_session_token(code, this.verifier);
        await this.refresh_from_token(session_token);
        return true;
    }

    /**
     * トークンをリフレッシュして書き込む
     * @returns
     */
    static async refresh(): Promise<string> {
        const session_token = (await this.keychain.get()).session_token;
        return await this.refresh_from_token(session_token);
    }

    private static async refresh_from_token(session_token: JWT<Token.SessionToken>): Promise<string> {
        const hash = ((await request(new Web.Hash.Request())) as Web.Hash.Response).js;
        const version = ((await request(new NSO.Version.Request())) as NSO.Version.Response).result;
        const web_version = ((await request(new Web.Version.Request(hash))) as Web.Version.Response).web_version;
        const access_token = await this.get_access_token(session_token);
        const hash_nso = await this.get_coral_token(access_token, undefined, version.version);
        const game_service_token = await this.get_game_service_token(access_token, hash_nso, version.version);
        const hash_app = await this.get_coral_token(game_service_token.access_token, access_token.payload.sub, version.version);
        const game_web_token = await this.get_game_web_token(game_service_token.access_token, hash_app, version.version);
        const bullet_token = await this.get_bullet_token(game_web_token, web_version);
        await this.keychain.set(
            new UserInfo(game_service_token.user, session_token, access_token, game_service_token.access_token, game_web_token, bullet_token)
        );
        return bullet_token;
    }

    private static async get_session_token(code: string, verifier: string): Promise<JWT<Token.SessionToken>> {
        return ((await request(new SessionToken.Request(code, verifier))) as SessionToken.Response).session_token;
    }

    private static async get_access_token(session_token: JWT<Token.SessionToken>): Promise<JWT<Token.Token>> {
        return ((await request(new AccessToken.Request(session_token))) as AccessToken.Response).access_token;
    }

    private static async get_coral_token(
        access_token: JWT<Token.Token> | JWT<Token.GameServiceToken>,
        id: string | undefined,
        version: string
    ): Promise<CoralToken.Response> {
        const hash_method = access_token.payload.typ === 'token' ? 1 : 2;
        const na_id = access_token.payload instanceof Token.Token ? access_token.payload.sub : id;
        const coral_user_id = access_token.payload instanceof Token.Token ? undefined : access_token.payload.sub;
        return await request(new CoralToken.Request(access_token.raw_value, hash_method, na_id, coral_user_id, version));
    }

    private static async get_game_service_token(
        access_token: JWT<Token.Token>,
        hash: CoralToken.Response,
        version: string
    ): Promise<GameServiceToken.Response> {
        return (await request(new GameServiceToken.Request(access_token, hash, version))) as GameServiceToken.Response;
    }

    private static async get_game_web_token(
        access_token: JWT<Token.GameServiceToken>,
        hash: CoralToken.Response,
        version: string
    ): Promise<JWT<Token.GameWebToken>> {
        return ((await request(new GameWebToken.Request(access_token, hash, version))) as GameWebToken.Response).access_token;
    }

    private static async get_bullet_token(access_token: JWT<Token.GameWebToken>, version: string) {
        return ((await request(new BulletToken.Request(access_token, version))) as BulletToken.Response).bullet_token;
    }

    static async get_user_info(): Promise<UserInfo> {
        return await this.keychain.get();
    }
}
