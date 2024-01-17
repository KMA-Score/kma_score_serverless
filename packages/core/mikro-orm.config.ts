import { Options } from '@mikro-orm/core';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import * as dotenv from 'dotenv';
import { Migrator } from '@mikro-orm/migrations';

dotenv.config();

const config: Options = {
  entities: ['./src/domain/**/entities/*.entity.js'],
  entitiesTs: ['./src/domain/**/entities/*.entity.ts'],
  dbName: process.env.DB_NAME,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
  driver: PostgreSqlDriver,
  extensions: [Migrator],
  migrations: {
    path: './migrations',
  },
};

export default config;
