import { Exclude, Expose, Type } from 'class-transformer';
import dayjs from 'dayjs';
import 'reflect-metadata';

export namespace Common {
    export type WeaponType = Common.Image<string>;

    export class CoopHistoryDetailId {
        readonly id: string;
        readonly prefix: string;
        readonly npln_user_id: string;
        readonly start_time: Date;
        readonly uuid: string;
        readonly rawValue: string;

        /**
         * オリジナルのリザルトID
         */
        get desciption(): string {
            return btoa(`${this.id}-${this.prefix}-${this.npln_user_id}:${dayjs(this.start_time).format('YYYYMMDDTHHmmss')}_${this.uuid}`);
        }

        constructor(rawValue: string) {
            this.rawValue = rawValue;
            const regexp = /([\w]*)-([\w]{1})-([\w\d]{20}):([\dT]{15})_([a-f0-9-]{36})/;
            const match = regexp.exec(atob(rawValue));
            if (match !== null) {
                const [, id, prefix, npln_user_id, start_time, uuid] = match;
                this.id = id;
                this.prefix = prefix;
                this.npln_user_id = npln_user_id;
                this.start_time = dayjs(start_time).toDate();
                this.uuid = uuid;
            }
        }
    }

    export class Node<T> {
        @Expose()
        @Type((options) => (options?.newObject as Node<T>).type)
        nodes: T[];

        @Exclude()
        private type: Function;
        constructor(type: Function) {
            this.type = type;
        }
    }

    export class URL<T> {
        @Expose()
        @Type((options) => (options?.newObject as URL<T>).type)
        readonly url: T;

        @Exclude()
        private type: Function;
        constructor(type: Function) {
            this.type = type;
        }
    }

    export class Image<T> {
        @Expose()
        @Type((options) => (options?.newObject as Image<T>).type)
        readonly image: Common.URL<T>;

        @Expose()
        readonly name: string;

        @Exclude()
        private type: Function;
        constructor(type: Function) {
            this.type = type;
        }
    }
}
