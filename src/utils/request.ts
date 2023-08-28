export enum Method {
  GET = 'GET',
  POST = 'POST',
}

export interface ResponseType {}
export type Headers = Record<string, string>;
export type Parameters = string | URLSearchParams | undefined | Record<string, string>;

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
    body:  body,
    headers: request.headers,
    method: request.method,
  });
  return request.request(response.json()) as U;
}
