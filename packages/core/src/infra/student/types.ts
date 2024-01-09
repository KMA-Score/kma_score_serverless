import { Prisma } from '@prisma/client';
import { studentIncludeScoreAndSubject } from './include';

/**
 * * This is a type that is used to dynamically include the fields of the student
 * * This will resolve type error when we use the `include` option of Prisma dynamically
 * TODO: Remove this when Prisma support dynamic include types or when we have better solution
 * https://github.com/prisma/prisma/issues/20816#issuecomment-1873546485
 */
export type StudentQueryResult = Prisma.StudentGetPayload<
  typeof studentIncludeScoreAndSubject
>;
