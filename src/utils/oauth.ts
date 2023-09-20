import crypto from 'crypto';

import base64url from 'base64url';
import { plainToInstance } from 'class-transformer';
import dayjs from 'dayjs';
import Randomstring from 'randomstring';

import { JWT, Token } from '../dto/jwt.dto';
import { AccessToken } from '../requests/access_token';
import { BulletToken } from '../requests/bullet_token';
import { CoralToken } from '../requests/coral_token';
import { GameServiceToken } from '../requests/game_service_token';
import { GameWebToken } from '../requests/game_web_token';
import { SessionToken } from '../requests/session_token';
import { UserMe } from '../requests/user_me';

import { Keychain } from './keyhain';
import { NSO } from './nso_version';
import { request } from './request';
import { UserInfo } from './user_info';
import { Web } from './web_version';

/**
 * 認証に使うプライベート変数
 */
const keychain: Keychain = new Keychain();
let state: string = Randomstring.generate(64);
let verifier: string = Randomstring.generate(64);

/**
 * OAuth認証用のURLを返す
 */
export const oauthURL: URL = (() => {
    // URLを取得する度にstateとverifierを更新する
    state = Randomstring.generate(64);
    verifier = Randomstring.generate(64);

    const baseURL: URL = new URL('https://accounts.nintendo.com/connect/1.0.0/authorize');
    const challenge = base64url.fromBase64(crypto.createHash('sha256').update(verifier).digest('base64'));

    const parameters = new URLSearchParams({
        client_id: '71b963c1b7b6d119',
        redirect_uri: 'npf71b963c1b7b6d119://auth',
        response_type: 'session_token_code',
        scope: 'openid user user.birthday user.mii user.screenName',
        session_token_code_challenge: challenge,
        session_token_code_challenge_method: 'S256',
        state: state,
    });
    baseURL.search = parameters.toString();
    return baseURL;
})();

/**
 * 認証
 * 最終プレイ時間をリセットする
 */
export async function authorize(state: string, code: string): Promise<boolean> {
    if (state !== state) throw new Error('Provided state does not match.');
    const session_token = await get_session_token(code, verifier);
    try {
        console.log('Found Previous Account');
        // 旧データがあるならそれを利用する
        const { last_play_time } = await keychain.get();
        await refresh_from_token(session_token, last_play_time);
        return true;
    } catch {
        console.log('Create New Account');
        // ないなら新規で作成する
        await refresh_from_token(session_token, dayjs(0).toDate());
        return true;
    }
}

/**
 * トークンをリフレッシュして書き込む
 * 最終プレイ時間は継続する
 * @returns
 */
export async function refresh(): Promise<string> {
    const { session_token, last_play_time } = await keychain.get();
    console.log('Refreshing token...', session_token, typeof session_token);
    return await refresh_from_token(session_token, last_play_time);
}

async function refresh_from_token(session_token: JWT<Token.SessionToken>, last_play_time: Date): Promise<string> {
    console.log('Refreshing from token...', session_token, last_play_time);
    const hash = ((await request(new Web.Hash.Request())) as Web.Hash.Response).js;
    console.log('Hash', hash);
    const version = ((await request(new NSO.Version.Request())) as NSO.Version.Response).result;
    console.log('Version', version.version);
    const web_version = ((await request(new Web.Version.Request(hash))) as Web.Version.Response).web_version;
    console.log('Web version', web_version);
    const access_token = await get_access_token(session_token);
    console.log('Access Token', access_token);
    const user_me = await get_user_me(access_token);
    console.log('UserMe', user_me);
    const hash_nso = await get_coral_token(access_token, undefined, version.version);
    console.log('Hash NSO', hash_nso);
    const game_service_token = await get_game_service_token(access_token, hash_nso, version.version, user_me);
    console.log('Game Service Token', game_service_token.access_token);
    const hash_app = await get_coral_token(game_service_token.access_token, access_token.payload.sub, version.version);
    console.log('Hash APP', hash_app);
    const game_web_token = await get_game_web_token(game_service_token.access_token, hash_app, version.version);
    console.log('Game Web Token', game_web_token);
    const bullet_token = await get_bullet_token(game_web_token, web_version);
    console.log('Bullet Token', game_web_token);
    await keychain.set(
        plainToInstance(UserInfo, {
            access_token: access_token.raw_value,
            birthday: user_me.birthday,
            bullet_token: bullet_token,
            country: user_me.country,
            expires_in: dayjs().add(2, 'hour').toDate(),
            friend_code: game_service_token.user.links.friend_code.id,
            game_service_token: game_service_token.access_token.raw_value,
            game_web_token: game_web_token.raw_value,
            id: user_me.id,
            language: user_me.language,
            last_play_time: last_play_time,
            nickname: user_me.nickname,
            nsa_id: game_service_token.nsa_id,
            session_token: session_token.raw_value,
            thumbnail_url: game_service_token.user.image_uri,
            web_version: web_version,
        })
    );
    return bullet_token;
}

async function get_session_token(code: string, verifier: string): Promise<JWT<Token.SessionToken>> {
    return ((await request(new SessionToken.Request(code, verifier))) as SessionToken.Response).session_token;
}

async function get_access_token(session_token: JWT<Token.SessionToken>): Promise<JWT<Token.Token>> {
    return ((await request(new AccessToken.Request(session_token))) as AccessToken.Response).access_token;
}

async function get_user_me(access_token: JWT<Token.Token>): Promise<UserMe.Response> {
    return await request(new UserMe.Request(access_token));
}

async function get_coral_token(
    access_token: JWT<Token.Token> | JWT<Token.GameServiceToken>,
    id: string | undefined,
    version: string
): Promise<CoralToken.Response> {
    const hash_method = access_token.payload.typ === 'token' ? 1 : 2;
    const na_id = access_token.payload instanceof Token.Token ? access_token.payload.sub : id;
    const coral_user_id = access_token.payload instanceof Token.Token ? undefined : access_token.payload.sub;
    return await request(new CoralToken.Request(access_token.raw_value, hash_method, na_id, coral_user_id, version));
}

async function get_game_service_token(
    access_token: JWT<Token.Token>,
    hash: CoralToken.Response,
    version: string,
    user: UserMe.Response
): Promise<GameServiceToken.Response> {
    return (await request(new GameServiceToken.Request(access_token, hash, version, user))) as GameServiceToken.Response;
}

async function get_game_web_token(access_token: JWT<Token.GameServiceToken>, hash: CoralToken.Response, version: string): Promise<JWT<Token.GameWebToken>> {
    return ((await request(new GameWebToken.Request(access_token, hash, version))) as GameWebToken.Response).access_token;
}

async function get_bullet_token(access_token: JWT<Token.GameWebToken>, version: string) {
    return ((await request(new BulletToken.Request(access_token, version))) as BulletToken.Response).bullet_token;
}

export async function get_user_info(): Promise<UserInfo> {
    return await keychain.get();
}

export async function set_user_info(last_play_time: Date): Promise<void> {
    const user_info = await keychain.get();
    user_info.last_play_time = last_play_time;
    await keychain.set(user_info);
}
