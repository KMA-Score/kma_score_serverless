import { StudentDetailsResponse } from './studentDetailsResponse';
import { StudentDetailsQuery } from './studentDetailsQuery';
import { ICalculateScoreService, IStudentRepository } from '@application/ports';
import { Result } from 'true-myth';
import { StudentNotFoundError } from '../errors';
import { QueryHandler } from '@shared/domain';

interface Dependencies {
  studentRepository: IStudentRepository;
  calculateScoreService: ICalculateScoreService;
}

export class StudentDetailsUseCase
  implements QueryHandler<StudentDetailsQuery, StudentDetailsResponse>
{
  private readonly studentRepository: IStudentRepository;
  private readonly calculateScoreService: ICalculateScoreService;

  constructor({ studentRepository, calculateScoreService }: Dependencies) {
    this.studentRepository = studentRepository;
    this.calculateScoreService = calculateScoreService;
  }

  async execute(query: StudentDetailsQuery): Promise<StudentDetailsResponse> {
    const { id } = query;

    if (!id) {
      return Result.err(new StudentNotFoundError());
    }

    const student = await this.studentRepository.getById(id);

    if (!student) {
      return Result.err(new StudentNotFoundError());
    }

    const learningResult = this.calculateScoreService.getLearningResult(
      student?.scores,
    );
    const averageScore = this.calculateScoreService.getAverageScore(student);

    return Result.ok({
      student,
      learningResult,
      averageScore,
    });
  }
}
