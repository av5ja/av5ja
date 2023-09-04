import { CapacitorHttp, HttpOptions } from '@capacitor/core';
import snakecaseKeys from 'snakecase-keys';

import { Method } from '../enum/method';
import { SHA256Hash } from '../enum/sha256hash';

import { refresh, get_user_info } from './oauth';
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
    const user_info: UserInfo = await get_user_info();

    let { bullet_token } = user_info;
    const { requires_refresh, web_version } = user_info;

    // 未ログインの場合はエラーを返す
    if (bullet_token === undefined) {
        console.error('Bullet token is undefined.');
        throw new Error('Bullet token is undefined.');
    }

    // 有効期限切れの場合は再発行して上書きする
    if (requires_refresh) {
        bullet_token = await refresh();
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
    const headers = {
        Authorization: `Bearer ${bullet_token}`,
        'Content-Type': 'application/json',
        'X-Web-View-Ver': web_version,
    };
    const options: HttpOptions = {
        data: body,
        headers: headers,
        method: Method.POST,
        responseType: 'json',
        url: url.href,
    };
    const response = await CapacitorHttp.request(options);

    if (response.status === 401) {
        throw new Error('Unauthorized.');
    }
    if (response.status === 403) {
        throw new Error('Forbidden.');
    }
    return request.request(snakecaseKeys(response.data)) as U;
}
