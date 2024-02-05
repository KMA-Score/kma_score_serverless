import { Result } from 'true-myth';
import { Response } from '@shared/domain';
import { StudentNotFoundError } from '../errors';
import { StudentQueryResult } from '@infra/student';
import { LearningResult } from '@application/ports';

export class StudentDetailsResponseDTO implements Response {
  readonly student: StudentQueryResult;
  readonly learningResult!: LearningResult;
  readonly averageScore!: number;
}

export type StudentDetailsError = StudentNotFoundError;

export type StudentDetailsResponse = Result<
  StudentDetailsResponseDTO,
  StudentDetailsError
>;
