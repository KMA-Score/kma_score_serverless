import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';
import 'dotenv/config';

const sql = postgres(process.env.DB_URL as string);
const db = drizzle(sql);

await migrate(db, { migrationsFolder: 'migrations' });
await sql.end();
