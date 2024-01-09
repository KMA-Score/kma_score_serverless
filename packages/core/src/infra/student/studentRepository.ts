import { prisma } from '@application/index';
import { IStudentRepository, StudentExpandFields } from '@application/ports';
import { Prisma } from '@prisma/client';
import { Repository } from 'shared';
import { StudentQueryResult } from './types';

@Repository()
export class StudentRepository implements IStudentRepository {
  async getById(id: string, expandFields: StudentExpandFields) {
    // TODO: Implement a better solution for dynamic include
    const include: Prisma.StudentInclude = {
      scores: expandFields.withScores
        ? {
            include: {
              subject: true,
            },
            where: {
              studentId: id,
            },
          }
        : {},
    };

    const student = await prisma.student.findUnique({
      include,
      where: {
        id: id,
      },
    });

    return student as unknown as StudentQueryResult;
  }
}
