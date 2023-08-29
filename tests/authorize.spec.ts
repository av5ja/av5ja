import fs from 'fs';

import { AccessToken } from '../src/requests/access_token';
import { BulletToken } from '../src/requests/bullet_token';
import { CoralToken } from '../src/requests/coral_token';
import { GameServiceToken } from '../src/requests/game_service_token';
import { GameWebToken } from '../src/requests/game_web_token';
import { request } from '../src/utils/request';

import token from './token.json';

describe('Authorize', () => {
    const session_token = token.session_token;

    it('Game Web Token', async () => {
        const version: string = '2.7.0';
        const web_version: string = '4.0.0-b8c1e0fc';
        const access_token = (await request(new AccessToken.Request(session_token))) as AccessToken.Response;
        const coral_token_nso: CoralToken.Response = await request(
            new CoralToken.Request(access_token.access_token.rawValue, 1, access_token.na_id, undefined, '2.7.0')
        );
        const game_service_token = (await request(
            new GameServiceToken.Request(access_token.access_token, coral_token_nso, version)
        )) as GameServiceToken.Response;
        const coral_token_app: CoralToken.Response = await request(
            new CoralToken.Request(game_service_token.access_token.rawValue, 2, access_token.na_id, game_service_token.access_token.payload.sub, '2.7.0')
        );
        const game_web_token = (await request(new GameWebToken.Request(game_service_token.access_token, coral_token_app, version))) as GameWebToken.Response;
        const bullet_token = (await request(new BulletToken.Request(game_web_token.access_token, web_version))) as BulletToken.Response;

        // NA_ID
        expect(access_token.na_id).toBe('5ae8f7a78b0cca4d');
        // CORAL_USER_ID
        expect(game_service_token.id).toBe(game_service_token.coral_user_id);
        // NSA_ID
        expect(game_service_token.nsa_id).toBe(game_web_token.nsa_id);
        expect(game_web_token.access_token.payload.aud).toBe('6633677291552768');
        expect(game_web_token.access_token.payload.typ).toBe('id_token');
        expect(bullet_token.lang).toBe('ja-JP');
        expect(bullet_token.is_noe_country).toBe(false);

        token.access_token = access_token.access_token.rawValue;
        token.id_token = access_token.id_token.rawValue;
        token.game_service_token = game_service_token.access_token.rawValue;
        token.game_web_token = game_web_token.access_token.rawValue;
        token.bullet_token = bullet_token.bullet_token;
        fs.writeFileSync('./tests/token.json', JSON.stringify(token, null, 2));
    }, 10000);
});
