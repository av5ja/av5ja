import * as crypto from 'crypto';

import base64url from 'base64url';
import randomstring from 'randomstring';

import { JWT, Token } from '../dto/jwt.dto';
import { SessionToken } from '../requests/session_token';

import { request } from './request';
import { AccessToken } from '../requests/access_token';
import { CoralToken } from '../requests/coral_token';
import { GameServiceToken } from '../requests/game_service_token';
import { GameWebToken } from '../requests/game_web_token';
import { BulletToken } from '../requests/bullet_token';
import { NSO } from './nso_version';
import { Web } from './web_version';

export class OAuth {

    private static state: string
    private static verifier: string
    private static challenge: string
    
    /**
     * OAuth認証用のURLを返す
     */
    static get getURL(): URL {
        const baseURL: URL = new URL('https://accounts.nintendo.com/connect/1.0.0/authorize');
        // 値の更新
        this.state = base64url.fromBase64(crypto.createHash('sha256').update(randomstring.generate(64)).digest('base64'));
        this.verifier = base64url.fromBase64(crypto.createHash('sha256').update(randomstring.generate(64)).digest('base64'));
        this.challenge= base64url.fromBase64(crypto.createHash('sha256').update(this.verifier).digest('base64'));

        const parameters = new URLSearchParams({
            client_id: "71b963c1b7b6d119",
            redirect_uri: "npf71b963c1b7b6d119://auth",
            response_type: "session_token_code",
            scope: "openid user user.birthday user.mii user.screenName",
            session_token_code_challenge: this.challenge,
            session_token_code_challenge_method: "S256",
            state: this.state,
        });
        baseURL.search = parameters.toString()
        return baseURL
    }

    static async authorize(code: string, state: string): Promise<boolean> {
        if (state !== this.state) return false;
        const session_token = await this.get_session_token(code, this.verifier)
        const bullet_token = this.refresh(session_token)
        console.log(bullet_token)
        return true
    }

    /**
     * トークンをリフレッシュする
     * 内部的に勝手に呼び出される
     * @returns 
     */
    private static async refresh(session_token: JWT<Token.SessionToken>): Promise<boolean> {
        const hash = (await request(new Web.Hash.Request()) as Web.Hash.Response).js
        const version = (await request(new NSO.Version.Request()) as NSO.Version.Response).result
        const web_version = (await request(new Web.Version.Request(hash)) as Web.Version.Response).web_version
        const access_token = await this.get_access_token(session_token)
        const hash_nso = await this.get_coral_token(access_token, undefined, version.version)
        const game_service_token = await this.get_game_service_token(access_token, hash_nso, version.version)
        const hash_app = await this.get_coral_token(game_service_token, access_token.payload.sub, version.version)
        const game_web_token = await this.get_game_web_token(game_service_token, hash_app, version.version)
        const bullet_token = await this.get_bullet_token(game_web_token, web_version)
        return true 
    }

    private static async refresh_from_token(): Promise<boolean> {
        // const hash = (await request(new Web.Hash.Request()) as Web.Hash.Response).js
        // const web_version = (await request(new Web.Version.Request(hash)) as Web.Version.Response).web_version
        // const bullet_token = await this.get_bullet_token(access_token, web_version)
        // console.log(bullet_token)
        return true
    }
    
    private static async get_session_token(code: string, verifier: string): Promise<JWT<Token.SessionToken>> {
        return (await request(new SessionToken.Request(code, this.verifier)) as SessionToken.Response).session_token
    }

    private static async get_access_token(session_token: JWT<Token.SessionToken>): Promise<JWT<Token.Token>> {
        return (await request(new AccessToken.Request(session_token)) as AccessToken.Response).access_token
    }
    
    private static async get_coral_token(access_token: JWT<Token.Token> | JWT<Token.GameServiceToken>, id: string | undefined, version: string): Promise<CoralToken.Response> {
        const hash_method = access_token.payload instanceof Token.Token ? 1 : 2
        const na_id = access_token.payload instanceof Token.Token ? access_token.payload.sub : id
        const coral_user_id = access_token.payload instanceof Token.Token ? undefined : access_token.payload.sub
        return await request(new CoralToken.Request(access_token.rawValue, hash_method, na_id, coral_user_id, version))
    }
    
    private static async get_game_service_token(access_token: JWT<Token.Token>, hash: CoralToken.Response, version: string): Promise<JWT<Token.GameServiceToken>> {
        return (await request(new GameServiceToken.Request(access_token, hash, version)) as GameServiceToken.Response).access_token
    }
    
    private static async get_game_web_token(access_token: JWT<Token.GameServiceToken>, hash: CoralToken.Response, version: string): Promise<JWT<Token.GameWebToken>> {
        return (await request(new GameWebToken.Request(access_token, hash, version)) as GameWebToken.Response).access_token
    }
    
    private static async get_bullet_token(access_token: JWT<Token.GameWebToken>, version: string) {
        return (await request(new BulletToken.Request(access_token, version)) as BulletToken.Response).bullet_token
    }
}
