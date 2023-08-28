import { JWT, Token } from '../src/dto/jwt.dto';
import { request } from '../src/utils/request';
import { Web } from '../src/utils/web_version';

import token from './token.json';

describe('React Web Version', () => {
    it('Hash', async () => {
        const hash = (await request(new Web.Hash.Request()) as Web.Hash.Response);
        expect(hash.js).toBe('631eca4e');
        expect(hash.css).toBe('726ac373');
    });
    it('Web', async () => {
        const hash = (await request(new Web.Hash.Request()) as Web.Hash.Response);
        const version = (await request(new Web.Version.Request(hash.js)) as Web.Version.Response);
        expect(version.version).toBe('4.0.0');
        expect(version.revision).toBe('355675c2');
    });
});
