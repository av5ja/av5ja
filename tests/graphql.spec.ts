import { CoopHistoryQuery } from '../src/requests/av5ja/coop_history_query';
import { request } from '../src/utils/graph_ql';

import token from './token.json';

describe('Authorize', () => {
  const bullet_token = token.bullet_token;

  it('Game Web Token', async () => {
    const coop_history_query = await request(new CoopHistoryQuery.Request(), bullet_token)
    expect(coop_history_query.data.coop_result.history_groups.nodes.length).toBe(4);
    expect(coop_history_query.results.length).toBe(50);
  }, 10000);
});
