import { JWT, Token } from '../src/dto/jwt.dto';
import { NSO } from '../src/utils/nso_version';
import { request } from '../src/utils/request';
import { Web } from '../src/utils/web_version';

import token from './token.json';

describe('Web', () => {
    it('Hash', async () => {
        const hash = (await request(new Web.Hash.Request())) as Web.Hash.Response;
        expect(hash.js).toBe('631eca4e');
        expect(hash.css).toBe('726ac373');
    });
    it('Version', async () => {
        const hash = (await request(new Web.Hash.Request())) as Web.Hash.Response;
        const version = (await request(new Web.Version.Request(hash.js))) as Web.Version.Response;
        expect(version.version).toBe('4.0.0');
        expect(version.revision).toBe('355675c2');
    });
});

describe('NSO', () => {
    it('Version', async () => {
        const version = (await request(new NSO.Version.Request())) as NSO.Version.Response;
        expect(version.result.version).toBe('2.7.0');
        expect(version.result.minimum_os_version).toBe('14.0');
    });
});
