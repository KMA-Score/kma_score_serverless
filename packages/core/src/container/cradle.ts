import { ICalculateScoreService, IStudentRepository } from '@application/ports';
import {
  SemestersUseCase,
  StudentDetailsUseCase,
  StudentScheduleUseCase,
} from '@application/useCases';
import { IAuthService } from '@application/ports/auth';
import { IScheduleService } from '@application/ports/schedule/interfaces';

export interface Cradle {
  // repositories
  studentRepository: IStudentRepository;
  // services
  calculateScoreService: ICalculateScoreService;
  authService: IAuthService;
  studentScheduleService: IScheduleService;
  // use cases
  studentDetailsUseCase: StudentDetailsUseCase;
  semestersUseCase: SemestersUseCase;
  studentScheduleUseCase: StudentScheduleUseCase;
}
