import fs from 'fs';

import camelCase from 'camelcase';

class Hash {
    id: string;
    key: string;

    constructor(id: string, key: string) {
        this.id = id;
        this.key = key;
    }
}

export class HashHelper {
    static async write(): Promise<void> {
        const hashes: Hash[] = await this.get_hash();
        const source: string[] = ['export enum SHA256Hash {'].concat(
            hashes.sort((a, b) => (a.id > b.id ? 1 : -1)).map((hash) => `\t${camelCase(hash.id, { pascalCase: true })} = "${hash.key}",`)
        );
        source.push('}');
        createFile(source.join('\n'), 'src/enum/sha256hash.ts');
    }

    private static async get_hash(): Promise<Hash[]> {
        const hash: string = await this.get_revision();
        const url = `https://api.lp1.av5ja.srv.nintendo.net/static/js/main.${hash}.js`;
        const response: string = await (await fetch(url)).text();
        const regexp = /id:"([a-f0-9]{64})",metadata:{},name:"([\w]*)"/g;
        const matches: IterableIterator<RegExpMatchArray> = response.matchAll(regexp);
        const hashes = [...matches].map((match) => new Hash(camelCase(match[2], { pascalCase: true }), match[1]));
        return hashes;
    }

    private static async get_revision(): Promise<string> {
        const url = 'https://api.lp1.av5ja.srv.nintendo.net/';
        const response: string = await (await fetch(url)).text();
        const regexp = /static\/js\/main.([a-f0-9]{8}).js/;
        const match = regexp.exec(response);
        if (match == null) throw new Error('Invalid response');
        return match[1];
    }
}

const createFile = (data: string, filePath: string) => {
    fs.writeFile(filePath, data, (err) => {
        // ディレクトリ作成できなかったとき
        if (err && err.code === 'ENOENT') {
            // ディレクトリ部分だけ切り取り
            const dir = filePath.substring(0, filePath.lastIndexOf('/'));

            // 親ディレクトリ作成
            fs.mkdir(dir, { recursive: true }, (err) => {
                if (err) throw err;
                createFile(data, filePath);
            });
            return;
        }
    });
};
