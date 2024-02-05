import { ICalculateScoreService, IStudentRepository } from '@application/ports';
import { StudentDetailsUseCase } from '@application/useCases';

export interface Cradle {
  // repositories
  studentRepository: IStudentRepository;
  // services
  calculateScoreService: ICalculateScoreService;
  // use cases
  studentDetailsUseCase: StudentDetailsUseCase;
}
