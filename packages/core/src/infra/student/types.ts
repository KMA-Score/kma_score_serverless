import { Prisma } from "@prisma/client";
import { getStudentWithScoreById } from "@infra/student";

export type StudentWithScoresAndSubjects = Prisma.PromiseReturnType<
  typeof getStudentWithScoreById
>;
