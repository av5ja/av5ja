import snakecaseKeys from 'snakecase-keys';

import { Method } from '../enum/method';
export interface ResponseType {}
export type Headers = Record<string, string>;
export type Parameters = string | URLSearchParams | undefined | Record<string, string | number | undefined | Record<string, string | number | undefined>>;

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
  const body = request.method === Method.GET ? undefined : JSON.stringify(request.parameters);
  const response = await fetch(url, {
    body: body,
    headers: request.headers,
    method: request.method,
  });

  return request.request(snakecaseKeys(await response.json())) as U;
}
