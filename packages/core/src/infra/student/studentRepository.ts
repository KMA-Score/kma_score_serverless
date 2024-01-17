import { IStudentRepository, StudentExpandFields } from '@application/ports';
import { Repository } from 'shared';
import { StudentQueryResult } from './types';
import { repositories } from '@application/db';

@Repository()
export class StudentRepository implements IStudentRepository {
  async getById(id: string, expandFields: StudentExpandFields) {
    const student = await repositories.student.findOne(
      { id: id },
      {
        populate: expandFields.withScores ? ['scores.subjectId'] : [],
      },
    );

    return student as unknown as StudentQueryResult;
  }
}
