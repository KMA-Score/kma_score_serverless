import { Options } from '@mikro-orm/core';
import { StudentsEntity } from '@app/core/entities/students.entity';
import { ScoresEntity } from '@app/core/entities/scores.entity';
import { SubjectsEntity } from '@app/core/entities/subjects.entity';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import * as dotenv from 'dotenv';

dotenv.config();

const config: Options = {
  entities: [StudentsEntity, ScoresEntity, SubjectsEntity],
  dbName: process.env.DB_NAME,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
  driver: PostgreSqlDriver,
};

export default config;
