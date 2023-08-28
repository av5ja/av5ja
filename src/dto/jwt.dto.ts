
class Header {
  readonly alg: AlgorithmType;
}

interface PayloadType {
  readonly aud: string;
  readonly exp: number;
  readonly iat: number;
  get isValid(): boolean;

  readonly typ: TokenType;
}

export namespace Token {
  export class SessionToken implements PayloadType {
    readonly aud: string;
    readonly exp: number;
    readonly typ: TokenType;
    readonly iat: number;

    get isValid(): boolean {
      return true;
    }
  }

  export class Token implements PayloadType {
    readonly aud: string;
    readonly exp: number;
    readonly typ: TokenType;
    readonly iat: number;
    readonly sub: string;

    get isValid(): boolean {
      return true;
    }
  }

  export class GameServiceToken implements PayloadType {
    readonly aud: string;
    readonly exp: number;
    readonly typ: TokenType;
    readonly iat: number;
    readonly membership: Membership;
    readonly isChildRestricted: boolean;

    get isValid(): boolean {
      return true;
    }
  }

  export class GameWebToken implements PayloadType {
    readonly aud: string;
    readonly exp: number;
    readonly typ: TokenType;
    readonly iat: number;
    readonly links: Links;

    get isValid(): boolean {
      return true;
    }
  }

}

interface NetworkServiceAccount {
  readonly id: string;
}

interface Links {
  readonly networkServiceAccount: NetworkServiceAccount;
}

interface Membership {
  readonly active: boolean;
}


export class JWT<T extends PayloadType> {
  header: Header;
  payload: T;
  rawValue: string;

  constructor(rawValue: string) {
    this.rawValue = rawValue;
    const [header, payload, signature] = rawValue.split('.');
    this.header = JSON.parse(atob(header));
    this.payload = JSON.parse(atob(payload)) as T;
  }
}
