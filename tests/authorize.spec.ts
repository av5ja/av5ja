import fs from 'fs';

import { AccessToken } from '../src/requests/access_token';
import { BulletToken } from '../src/requests/bullet_token';
import { CoralToken } from '../src/requests/coral_token';
import { GameServiceToken } from '../src/requests/game_service_token';
import { GameWebToken } from '../src/requests/game_web_token';
import { get_user_info } from '../src/utils/env';
import { NSO } from '../src/utils/nso_version';
import { request } from '../src/utils/request';
import { Web } from '../src/utils/web_version';

describe('Authorize', () => {
    const user_info = get_user_info();

    it('Bullet Token', async () => {
        const version: string = (await request(new NSO.Version.Request())).result.version;
        const hash: string = (await request(new Web.Hash.Request())).js;
        const web_version = (await request(new Web.Version.Request(hash))).web_version;
        const access_token = (await request(new AccessToken.Request(user_info.session_token))) as AccessToken.Response;
        const coral_token_nso: CoralToken.Response = await request(
            new CoralToken.Request(access_token.access_token.raw_value, 1, access_token.na_id, undefined, version)
        );
        const game_service_token = (await request(
            new GameServiceToken.Request(access_token.access_token, coral_token_nso, version)
        )) as GameServiceToken.Response;
        const coral_token_app: CoralToken.Response = await request(
            new CoralToken.Request(game_service_token.access_token.raw_value, 2, access_token.na_id, game_service_token.access_token.payload.sub, version)
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
        // トークンを生成する
        fs.writeFileSync(
            'tests/secrets.json',
            JSON.stringify(
                {
                    access_token: access_token.access_token.raw_value,
                    bullet_token: bullet_token.bullet_token,
                    game_service_token: game_service_token.access_token.raw_value,
                    game_web_token: game_web_token.access_token.raw_value,
                    session_token: user_info.session_token.raw_value,
                },
                null,
                2
            )
        );
    }, 10000);
});
