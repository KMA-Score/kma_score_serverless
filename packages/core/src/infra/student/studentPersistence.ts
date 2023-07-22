import { prisma } from '@application/index';

export const getStudentWithScoreById = async (id: string) => {
  const student = await prisma.student.findFirst({
    include: {
      scores: {
        include: {
          subject: true,
        },
        where: {
          studentId: id,
        },
      },
    },
    where: {
      id: id,
    },
  });

  return student;
};
