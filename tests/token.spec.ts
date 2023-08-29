import { JWT, Token } from '../src/dto/jwt.dto';

import token from './token.json';

describe('JSONWebToken', () => {
    const session_token: string = token.session_token;
    const id_token: string = token.id_token;
    const access_token: string = token.access_token;
    const game_service_token: string = token.game_service_token;
    const game_web_token: string = token.game_web_token;

    it('Session Token', () => {
        const token = new JWT<Token.SessionToken>(session_token);
        expect(token.payload.aud).toBe('71b963c1b7b6d119');
        expect(token.payload.typ).toBe('session_token');
    });
    it('Id Token', () => {
        const token = new JWT<Token.Token>(id_token);
        expect(token.payload.aud).toBe('71b963c1b7b6d119');
        expect(token.payload.typ).toBe('id_token');
        expect(token.payload.sub).toBe('5ae8f7a78b0cca4d');
    });
    it('Access Token', () => {
        const token = new JWT<Token.Token>(access_token);
        expect(token.payload.aud).toBe('71b963c1b7b6d119');
        expect(token.payload.typ).toBe('token');
        expect(token.payload.sub).toBe('5ae8f7a78b0cca4d');
    });
    it('Game Service Token', () => {
        const token = new JWT<Token.GameServiceToken>(game_service_token);
        expect(token.payload.aud).toBe('f417e1tibjqd91ch99u49iwz5sn9chy3');
        expect(token.payload.typ).toBe('id_token');
        expect(token.payload.sub).toBe(4737360831381504);
        expect(token.payload.membership.active).toBe(true);
        expect(token.payload.isChildRestricted).toBe(false);
    });
    it('Game Web Token', () => {
        const token = new JWT<Token.GameWebToken>(game_web_token);
        expect(token.payload.aud).toBe('6633677291552768');
        expect(token.payload.typ).toBe('id_token');
        expect(token.payload.links.networkServiceAccount.id).toBe('3f89c3791c43ea57');
    });
});
