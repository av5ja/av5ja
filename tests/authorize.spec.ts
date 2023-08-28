import { AccessToken } from "../src/requests/access_token";
import { request } from "../src/utils/request";
import token from "./token.json";

describe('Authorize', () => {
    const session_token = token.session_token

    it('Session Token', () => {
    })

    it('Access Token', async () => {
        const access_token: AccessToken.Response = await request(new AccessToken.Request(session_token))
        expect(access_token.expires_in).toBe(900)
        expect(access_token.scope).toStrictEqual(['openid','user','user.birthday','user.mii','user.screenName'])
        expect(access_token.token_type).toBe('Bearer')
    })
})
