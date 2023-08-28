import { Method } from "../enum/method";
import { Headers, Parameters, RequestType } from "./request";

export namespace Web {
    export namespace Hash {
        export class Request implements RequestType {
            readonly baseURL: string = 'https://api-lp1.znc.srv.nintendo.net/';
            readonly headers: Headers;
            readonly method: Method = Method.GET;
            readonly parameters: Parameters;
            readonly path: string = ""

            constructor() {}

            request(response: any): Response {
                return new Response(response)
            }
        }

        export class Response {
            readonly js: string
            readonly css: string

            constructor(raw_value: string) {
                let regexp: RegExp = /static\/js\/main.([a-f0-9]{8})/
                let match: RegExpMatchArray | null = regexp.exec(raw_value)
                
                this.js = match === null ? '631eca4e' : match[1]
                regexp = /static\/css\/main.([a-f0-9]{8})/
                match = regexp.exec(raw_value) 
                this.css = match === null ? '726ac373' : match[1]
            }
        }
    }

    export namespace Version {
        export class Request implements RequestType {
            readonly baseURL: string = 'https://api-lp1.znc.srv.nintendo.net/';
            readonly headers: Headers;
            readonly method: Method = Method.GET;
            readonly parameters: Parameters;
            readonly path: string

            constructor(hash: string) {
                this.path = `static/js/main.${hash}.js`
            }

            request(response: any): Response {
                return new Response(response)
            }
        }

        export class Response {
            readonly version: string
            readonly revision: string

            constructor(raw_value: string) {
                let regexp: RegExp = /`(\d\.\d\.\d)-/
                let match: RegExpMatchArray | null = regexp.exec(raw_value)
                
                this.version = match === null ? '4.0.0' : match[1]
                regexp = /REACT_APP_REVISION: "([a-f0-9]{32})"/
                match = regexp.exec(raw_value)
                this.revision = match === null ? '355675c2' : match[1].slice(0, 7)
            }
        }
    }
}
