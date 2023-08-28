import snakecaseKeys from 'snakecase-keys';

import { Method } from '../enum/method';
import { SHA256Hash } from '../enum/sha256hash';

import { ResponseType, RequestType, Parameters } from './request';

export interface GraphQL extends RequestType {
  readonly hash: SHA256Hash;
  readonly parameters: Parameters;

  request(response: any): ResponseType | void;
}

export async function request<T extends GraphQL, U extends ReturnType<T['request']>>(request: T, bullet_token: string): Promise<U> {
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
  };
  const response = await fetch(url, {
    body: body,
    headers: headers,
    method: Method.POST,
  });

  return request.request(snakecaseKeys(await response.json())) as U;
}
