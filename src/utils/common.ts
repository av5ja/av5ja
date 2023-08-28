import { Exclude, Expose, Type } from 'class-transformer';
import 'reflect-metadata';

export namespace Common {
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
}
