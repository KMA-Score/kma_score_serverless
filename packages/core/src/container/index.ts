import { asClass, createContainer } from 'awilix';
import { Cradle } from './cradle';
import { StudentRepository } from '@infra/student';
import { CalculateScoreService } from '@infra/score';
import { StudentDetailsUseCase } from '@application/useCases';

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
});

// use cases
container.register({
  studentDetailsUseCase: asClass(StudentDetailsUseCase),
});
