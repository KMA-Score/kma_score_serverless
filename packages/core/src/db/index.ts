import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { schema } from './schema';
import { makeDbConfig } from '@infra/config';

const { DB_HOST, DB_PORT, DB_NAME, DB_USERNAME, DB_PASSWORD } = makeDbConfig();

const queryClient = postgres({
  host: DB_HOST,
  port: Number(DB_PORT),
  database: DB_NAME,
  username: DB_USERNAME,
  password: DB_PASSWORD,
});
export const db = drizzle(queryClient, { schema });
