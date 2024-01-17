import { MikroORM, PostgreSqlDriver } from '@mikro-orm/postgresql';
import { makeDbConfig } from '@application/db/config';
import { Student } from '@domain/student/entities/students.entity';
import { Score } from '@domain/student/entities/scores.entity';
import { Subject } from '@domain/subject/entities/subjects.entity';

const { DB_HOST, DB_PORT, DB_NAME, DB_USERNAME, DB_PASSWORD } = makeDbConfig();

const entities = [Student, Score, Subject];

const orm = await MikroORM.init({
  entities,
  dbName: DB_NAME,
  host: DB_HOST,
  port: Number(DB_PORT),
  user: DB_USERNAME,
  password: DB_PASSWORD,
  driver: PostgreSqlDriver,
});

const entityManager = orm.em.fork();

export const repositories = {
  student: entityManager.getRepository(Student),
  subject: entityManager.getRepository(Subject),
  score: entityManager.getRepository(Score),
};
