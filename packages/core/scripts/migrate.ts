import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import { Client } from 'pg';
import 'dotenv/config';
import { schema } from '@db/schema';

const client = new Client({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
});

const db = drizzle(client, { schema });
await migrate(db, { migrationsFolder: 'migrations' });
await client.end();
