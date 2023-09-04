import dayjs from 'dayjs';
import dotenv from 'dotenv';

import token from './token.json';

export default (): void => {
    dotenv.config({ path: '.env.test' });
    process.env.BULLET_TOKEN = token.bullet_token;
    process.env.EXPIRES_IN = dayjs().add(2, 'hours').toDate().toISOString();
};
