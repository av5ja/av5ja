import * as crypto from 'crypto';

import base64url from 'base64url';

import { OAuth } from '../src/utils/oauth';

describe('SHA256', () => {
    const verifier: string = 'OwaTAOolhambwvY3RXSD-efxqdBEVNnQkc0bBJ7zaak';

    it('Challenge', () => {
        const challenge = base64url.fromBase64(crypto.createHash('sha256').update(verifier).digest('base64'));
        expect(challenge).toBe('tYLPO5PxpK-DTcAHJXugD7ztvAZQlo0DQQp3au5ztuM');
    });

    it('OAuthURL', () => {
        [0, 1, 2, 3, 4].forEach(() => {
            console.log(OAuth.getURL.href);
        });
    });
});
