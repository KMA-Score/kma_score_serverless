import { Prisma } from '@prisma/client';

export const studentIncludeScoreAndSubject =
  Prisma.validator<Prisma.StudentDefaultArgs>()({
    include: {
      scores: {
        include: {
          subject: true,
        },
      },
    },
  });
