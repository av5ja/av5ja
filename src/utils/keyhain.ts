import { SecureStorage, DataType } from '@aparajita/capacitor-secure-storage'

enum Typeof {
    Array = 'array',
    Date = 'date',
    Number = 'number',
    Object = 'object',
    STRING = 'string',
}

export class Keychain {
    constructor(identifier: string) {
        SecureStorage.setKeyPrefix(identifier)
    }

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

    async get(key: string): Promise<JSON> {
        if (typeof window !== 'undefined') {
        try {
            const value = await SecureStorage.get(key, true)
            const type = this.getDataType(value)

            if (type === Typeof.STRING) {
                // @ts-expect-error Disable type check
                return JSON.parse(value)
            }
            throw new Error('Could not decode data.')
        } catch (e) {
            console.error(e)
            return JSON.parse('{}')
        }
        } else {
            console.warn('Keychain is not supported in browser.')
            throw new Error('Keychain is not supported in browser.')
        }
    }

    async set(key: string, value: JSON | Record<string, any>) {
        if (typeof window !== 'undefined') {
            await SecureStorage.set(key, JSON.stringify(value))
        } else {
            console.warn('Keychain is not supported in browser.')
            throw new Error('Keychain is not supported in browser.')
        } 
    }
}
