import { ICalculateScoreService, IStudentRepository } from '@application/ports';
import { StudentDetailsUseCase } from '@application/useCases';
import { IAuthService } from '@application/ports/auth';

export interface Cradle {
  // repositories
  studentRepository: IStudentRepository;
  // services
  calculateScoreService: ICalculateScoreService;
  authService: IAuthService;
  // use cases
  studentDetailsUseCase: StudentDetailsUseCase;
}
