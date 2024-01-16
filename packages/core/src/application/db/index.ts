import { MikroORM } from '@mikro-orm/postgresql';
import { StudentsEntity } from '@entities/students.entity';
import dbConfig from '../../../../../mikro-orm.config';

const orm = await MikroORM.init(dbConfig);

export const entityManager = orm.em.fork();

export const studentsEntityManager =
  entityManager.getRepository(StudentsEntity);
