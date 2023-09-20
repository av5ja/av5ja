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
    
    // 仮のデータ
    const lang = 'en-US'
    const country = 'US'
    
    const headers = {
        'Accept': '*/*',
        'Accept-Encoding':  'gzip, deflate',
        'Accept-Language': 'en-US',
        'Authorization': `Bearer ${bullet_token}`,
        'Content-Type': 'application/json',
        'Referer': `https://api.lp1.av5ja.srv.nintendo.net?lang=${lang}&na_country=${country}&na_lang=${lang}`,
        'User-Agent': 'Mozilla/5.0 (Linux; Android 11; Pixel 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Mobile Safari/537.36',
        'X-Requested-With': 'com.nintendo.znca',
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

    const errors = snakecaseKeys(response.data).errors;
    if (errors !== undefined) {
        if (errors[0].message === 'PersistedQueryNotFound') {
            throw new Error('SHA256Hash update required.');
        }
        throw new Error('Unknown error occurred.');
    }

    return request.request(response.data) as U;
}
