import { CalculateScoreService } from '@infra/score';
import { StudentRepository } from '@infra/student';

export interface Cradle {
  // Services
  calculateScoreService: CalculateScoreService;
  // Repositories
  studentRepository: StudentRepository;
}
