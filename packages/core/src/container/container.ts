import Container from 'typedi';
import { Cradle } from './cradle';
import { CalculateScoreService } from '@infra/score';
import { StudentRepository } from '@infra/student';

export const container: Cradle = {
  // Services
  calculateScoreService: Container.get(CalculateScoreService),

  // Repositories
  studentRepository: Container.get(StudentRepository),
};
