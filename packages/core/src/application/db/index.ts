import { MikroORM, PostgreSqlDriver } from '@mikro-orm/postgresql';
import { StudentsEntity } from '@entities/students.entity';
import { makeDbConfig } from '@application/db/config';
import { ScoresEntity } from '@entities/scores.entity';
import { SubjectsEntity } from '@entities/subjects.entity';

const { DB_HOST, DB_PORT, DB_NAME, DB_USERNAME, DB_PASSWORD } = makeDbConfig();

const orm = await MikroORM.init({
  entities: [StudentsEntity, ScoresEntity, SubjectsEntity],
  dbName: DB_NAME,
  host: DB_HOST,
  port: Number(DB_PORT),
  user: DB_USERNAME,
  password: DB_PASSWORD,
  driver: PostgreSqlDriver,
});

export const entityManager = orm.em.fork();

export const studentsEntityManager =
  entityManager.getRepository(StudentsEntity);
