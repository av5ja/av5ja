export enum Method {
    GET = 'GET',
    POST = 'POST',
}

export interface ResponseType {}
export type Headers = Record<string, string>
export type Parameters = string | URLSearchParams | undefined

export interface RequestType {
    readonly headers: Headers
    readonly method: Method
    readonly parameters: Parameters
    readonly path: string
    readonly baseURL: string

    request(response: any): ResponseType | void
}

async function request<T extends RequestType, U extends ReturnType<T['request']>>(request: T): Promise<U> {
    const url = new URL(request.path, request.baseURL)
    const response = await fetch(url, {
        body: request.parameters,
        headers: request.headers,
        method: request.method,
    })
    return request.request(response) as U
}
