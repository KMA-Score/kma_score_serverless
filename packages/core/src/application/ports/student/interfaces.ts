import { StudentQueryResult } from '@infra/index';
import { ExpandFields } from '../shared';

export interface StudentExpandFields extends ExpandFields {
  withScores?: boolean;
}

export interface IStudentRepository {
  getById(
    id: string,
    expandFields?: StudentExpandFields,
  ): Promise<StudentQueryResult>;
}
