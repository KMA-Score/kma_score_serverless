import { drizzle } from 'drizzle-orm/node-postgres';
import { schema } from './schema';
import { makeDbConfig } from '@infra/config';
import { Client } from 'pg';

const { DB_HOST, DB_PORT, DB_NAME, DB_USERNAME, DB_PASSWORD } = makeDbConfig();

const client = new Client({
  host: DB_HOST,
  port: Number(DB_PORT),
  database: DB_NAME,
  user: DB_USERNAME,
  password: DB_PASSWORD,
});

await client.connect();
export const db = drizzle(client, { schema });
