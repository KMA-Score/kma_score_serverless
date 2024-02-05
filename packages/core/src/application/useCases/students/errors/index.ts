import { AppError } from '@shared/domain';

export class StudentNotFoundError extends AppError {
  constructor() {
    const message = 'Student not found';
    super(message);
    this.name = 'StudentNotFoundError';
  }
}
