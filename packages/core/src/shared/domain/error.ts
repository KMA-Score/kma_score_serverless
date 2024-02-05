export class AppError extends Error {}

export class UnexpectedError extends AppError {
  constructor() {
    const message = 'An unexpected error occured';
    super(message);
    this.name = 'UnexpectedError';
  }
}
