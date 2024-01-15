import { StudentQueryResult } from '@infra/student';

export interface IStudentRepository {
  getById(id: string): Promise<StudentQueryResult>;
}
