import { CapacitorHttp, HttpOptions } from '@capacitor/core';
import snakecaseKeys from 'snakecase-keys';

import { Method } from '../enum/method';
import { SHA256Hash } from '../enum/sha256hash';

import { OAuth } from './oauth';
import { UserInfo } from './user_info';

export interface ResponseType {
    json(): JSON;
}
export type Headers = Record<string, string>;
export type Parameters = string | URLSearchParams | undefined | Record<string, string | number | undefined | Record<string, string | number | undefined>>;

export interface GraphQL {
    readonly hash: SHA256Hash;
    readonly parameters: Parameters;

    request(response: any): ResponseType | void;
}

export async function request<T extends GraphQL, U extends ReturnType<T['request']>>(request: T): Promise<U> {
    console.log('QraphQL', request)
    /**
     * Native app以外はキーを取得できないのでエラーを投げる
     */
    if (window === undefined) {
        console.error('This function is only available in the Native app.');
        throw new Error('This function is only available in the Native app.');
    }
    const user_info: UserInfo = await OAuth.get_user_info()
    console.log("Current date", new Date())
    console.log("Expiration date", user_info.expires_in)
    console.log("Refresh required", user_info.requires_refresh)
    const bullet_token = user_info.requires_refresh ? await OAuth.refresh() : user_info.bullet_token;
    console.log(bullet_token);

    if (bullet_token === undefined) {
        console.error('Bullet token is undefined.');
        throw new Error('Bullet token is undefined.');
    }

    const url = new URL('https://api.lp1.av5ja.srv.nintendo.net/api/graphql');
    const body = JSON.stringify({
        extensions: {
            persistedQuery: {
                sha256Hash: request.hash,
                version: 1,
            },
        },
        variables: request.parameters,
    });
    const version = '4.0.0-b8c1e0fc';
    const headers = {
        Authorization: `Bearer ${bullet_token}`,
        'Content-Type': 'application/json',
        'X-Web-View-Ver': version,
    };
    const options: HttpOptions = {
        data: body,
        headers: headers,
        method: Method.POST,
        responseType: 'json',
        url: url.href,
    };
    const response = await CapacitorHttp.request(options);
    return request.request(snakecaseKeys(response.data)) as U;
}
