import { SecureStorage, DataType } from '@aparajita/capacitor-secure-storage';
import { plainToInstance } from 'class-transformer';

import { node_env, user_info } from './env';
import { UserInfo } from './user_info';

export class Keychain {
    constructor() {}

    private identifier = '2790ca15b31bc7eae3a056d2066532499d25a719a601c84c7178fb591f3dc7ad';

    async get(): Promise<UserInfo> {
        if (node_env === 'test') {
            return user_info;
        }
        if (typeof window !== 'undefined') {
            const data: DataType | null = await SecureStorage.get(this.identifier);
            if (data !== null && typeof data === 'string') {
                return plainToInstance(UserInfo, JSON.parse(data) as object, { excludeExtraneousValues: true });
            }
            throw new Error('Unsupported data type.');
        } else {
            throw new Error('This function is only available in the Native app.');
        }
    }

    async set(value: UserInfo): Promise<void> {
        if (node_env === 'test') {
            return;
        }
        if (typeof window !== 'undefined') {
            await SecureStorage.set(this.identifier, JSON.stringify(value));
        }
    }
}
