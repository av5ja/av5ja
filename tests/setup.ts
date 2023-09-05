import dayjs from 'dayjs';
import dotenv from 'dotenv';

export default (): void => {
    dotenv.config({ path: '.env.test' });
    process.env.EXPIRES_IN = dayjs().subtract(2, 'hours').toDate().toISOString();
};
