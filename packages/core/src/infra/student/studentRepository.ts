import { IStudentRepository, StudentExpandFields } from '@application/ports';
import { Repository } from 'shared';
import { studentsEntityManager } from '@application/db';
import { StudentQueryResult } from '@infra/student/types';

@Repository()
export class StudentRepository implements IStudentRepository {
  async getById(id: string, expandFields: StudentExpandFields) {
    const student = await studentsEntityManager.findOne(
      { id: id },
      {
        populate: expandFields.withScores ? ['scores.subjectId'] : [],
      },
    );

    return student as unknown as StudentQueryResult;
  }
}
