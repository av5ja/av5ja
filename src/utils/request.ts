import { CapacitorHttp, HttpOptions } from '@capacitor/core';
import snakecaseKeys from 'snakecase-keys';

import { Method } from '../enum/method';
export interface ResponseType {}
export type Headers = Record<string, string>;
export type Parameters = URLSearchParams | undefined | Record<string, string | number | undefined | Record<string, string | number | undefined>>;

export interface RequestType {
    readonly baseURL: string;
    readonly headers: Headers;
    readonly method: Method;
    readonly parameters: Parameters;
    readonly path: string;

    request(response: any): ResponseType | void;
}

export async function request<T extends RequestType, U extends ReturnType<T['request']>>(request: T): Promise<U> {
    const url = new URL(request.path, request.baseURL);
    if (request.method === Method.GET) {
        url.search = new URLSearchParams(request.parameters as Record<string, string>).toString();
    }
    const body = request.method === Method.GET ? undefined : JSON.stringify(request.parameters);
    const options: HttpOptions = {
        data: body,
        headers: request.headers,
        method: request.method,
        responseType: 'json',
        url: url.href,
    };
    const response = await CapacitorHttp.request(options);
    return request.request(snakecaseKeys(response.data)) as U;
}
