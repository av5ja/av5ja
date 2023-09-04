import { plainToInstance } from "class-transformer";
import dayjs from "dayjs";

import { UserInfo } from "./user_info";

enum Env {
    DEV = 'development',
    PROD = 'production',
    TEST = 'test',
}

export const node_env: Env = (() => {
    const node_env = process.env.NODE_ENV;
    if (node_env === undefined) {
        throw new Error('NODE_ENV is not defined.');
    }
    return Object.values(Env).find((env) => env === node_env) ?? Env.DEV;
})();

export const session_token: string = (() => {
    const session_token = process.env.SESSION_TOKEN;
    if (session_token === undefined) {
        throw new Error('SESSION_TOKEN is not defined.');
    }
    return session_token;
})();

export const access_token: string = (() => {
    const access_token = process.env.ACCESS_TOKEN;
    if (access_token === undefined) {
        throw new Error('ACCESS_TOKEN is not defined.');
    }
    return access_token;
})();

export const game_service_token: string = (() => {
    const game_service_token = process.env.GAME_SERVICE_TOKEN;
    if (game_service_token === undefined) {
        throw new Error('GAME_SERVICE_TOKEN is not defined.');
    }
    return game_service_token;
})();

export const game_web_token: string = (() => {
    const game_web_token = process.env.GAME_WEB_TOKEN;
    if (game_web_token === undefined) {
        throw new Error('GAME_WEB_TOKEN is not defined.');
    }
    return game_web_token;
})();

export const bullet_token: string = (() => {
    const bullet_token = process.env.BULLET_TOKEN;
    if (bullet_token === undefined) {
        throw new Error('BULLET_TOKEN is not defined.');
    }
    return bullet_token;
})();

export const web_version: string = (() => {
    const web_version = process.env.WEB_VERSION;
    if (web_version === undefined) {
        return '4.0.0-22ddb0fd'
    }
    return web_version;
})();

export const user_info: UserInfo = (() => {
    return plainToInstance(UserInfo, {
        access_token: access_token,
        bullet_token: bullet_token,
        expires_in: dayjs().subtract(2, 'hours').toDate(),
        game_service_token: game_service_token,
        game_web_token: game_web_token,
        session_token: session_token,
        web_version: web_version
    }, { excludeExtraneousValues: true })
})()
