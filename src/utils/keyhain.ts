import { SecureStorage, DataType } from '@aparajita/capacitor-secure-storage'
import { UserInfo } from './user_info'
import { instanceToPlain, plainToInstance } from 'class-transformer'

enum Typeof {
    Array = 'array',
    Date = 'date',
    Number = 'number',
    Object = 'object',
    STRING = 'string',
}

export class Keychain {
    constructor() {
        console.log('Keychain constructor')
    }

    private identifier = '2790ca15b31bc7eae3a056d2066532499d25a719a601c84c7178fb591f3dc7ad'

    private getDataType(value: DataType | null): Typeof {
        if (value === null) {
            throw new Error('Given value is null.')
        }
        const type = typeof value
        if (type === Typeof.Object) {
            if (value instanceof Date) {
                return Typeof.Date
            }
            if (Array.isArray(value)) {
                return Typeof.Array
            }
            return Typeof.Object
        }
        if (type === Typeof.STRING) {
            return Typeof.STRING
        }
        if (type === Typeof.Number) {
            return Typeof.Number
        }
        throw new Error('Unsupported data type.')
    }

    async get(): Promise<UserInfo> {
        if (typeof window !== 'undefined') {
            const data: DataType | null = await SecureStorage.get(this.identifier)
            if (data !== null && typeof data === 'string') {
                return plainToInstance(UserInfo, data, { excludeExtraneousValues: true })
            }
            throw new Error('Unsupported data type.')
        } else {
            console.warn('Keychain is not supported in browser.')
            throw new Error('Keychain is not supported in browser.')
        }
    }

    async set(value: UserInfo): Promise<void> {
        if (typeof window !== 'undefined') {
            await SecureStorage.set(this.identifier, JSON.stringify(value))
        } else {
            console.warn('Keychain is not supported in browser.')
            throw new Error('Keychain is not supported in browser.')
        } 
    }
}
