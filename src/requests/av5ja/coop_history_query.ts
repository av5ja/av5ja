import { plainToInstance } from 'class-transformer';

import { ModeType } from '../../enum/mode';
import { RuleType } from '../../enum/rule';
import { SHA256Hash } from '../../enum/sha256hash';
import { Common } from '../../utils/common';
import { GraphQL } from '../../utils/graph_ql';
import { Parameters } from '../../utils/request';

export namespace CoopHistoryQuery {
  export class Request implements GraphQL {
    readonly hash: SHA256Hash;
    readonly parameters: Parameters;

    request(response: any): Response {
      return plainToInstance(Response, response, { excludeExtraneousValues: true });
    }
  }

  class HistoryDetail {
    readonly id: string
  }

  class HistoryGroup {
    readonly start_time: Date
    readonly end_time: Date
    readonly mode: ModeType
    readonly rule: RuleType
    readonly historyDetails: Common.Node<HistoryDetail>
  }

  class CoopResult {
    readonly historyGroup: Common.Node<HistoryGroup>
  }

  class DataClass {
    readonly coopResult: CoopResult
  }

  export class Response {
    readonly data: DataClass
  }
}
