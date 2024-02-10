import { asClass, createContainer } from 'awilix';
import { Cradle } from './cradle';
import { StudentRepository } from '@infra/student';
import { CalculateScoreService } from '@infra/score';
import {
  SemestersUseCase,
  StudentDetailsUseCase,
  StudentScheduleUseCase,
} from '@application/useCases';
import { AuthService } from '@infra/auth';
import { StudentScheduleService } from '@infra/schedule';

export const container = createContainer<Cradle>({
  strict: true,
});

// repositories
container.register({
  studentRepository: asClass(StudentRepository),
});

// services
container.register({
  calculateScoreService: asClass(CalculateScoreService),
  studentScheduleService: asClass(StudentScheduleService),
  authService: asClass(AuthService),
});

// use cases
container.register({
  studentDetailsUseCase: asClass(StudentDetailsUseCase),
  semestersUseCase: asClass(SemestersUseCase),
  studentScheduleUseCase: asClass(StudentScheduleUseCase),
});
