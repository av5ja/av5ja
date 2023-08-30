import snakecaseKeys from 'snakecase-keys';

import { CapacitorHttp } from '@capacitor/core';
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
    console.log("CapacitorHttp", request.baseURL, request.headers, request.parameters)
    const url = new URL(request.path, request.baseURL);
    if (request.method === Method.GET) {
        url.search = new URLSearchParams(request.parameters as Record<string, string>).toString();
    }
    const body = request.method === Method.GET ? undefined : JSON.stringify(request.parameters);
    const options = {
        url: url.href,
        method: request.method,
        headers: request.headers,
        data: body
    }
    const response = await CapacitorHttp.request(options);
    try {
        return request.request(snakecaseKeys(JSON.parse(response.data))) as U;
    } catch (e) {
        return request.request(snakecaseKeys(response.data)) as U;
    }
}
