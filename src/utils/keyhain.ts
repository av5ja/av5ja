import { SecureStorage } from '@aparajita/capacitor-secure-storage';

import { get_user_info, node_env } from './env';
import { UserInfo } from './user_info';

export class Keychain {
    constructor() {}

    private identifier = '2790ca15b31bc7eae3a056d2066532499d25a719a601c84c7178fb591f3dc7ad';

    async get(): Promise<UserInfo> {
        if (node_env === 'test') {
            return get_user_info();
        }
        if (typeof window !== 'undefined') {
            const data: string | null = await SecureStorage.getItem(this.identifier);
            if (data !== null) {
                return JSON.parse(data);
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
            await SecureStorage.setItem(this.identifier, JSON.stringify(value));
        }
    }
}
