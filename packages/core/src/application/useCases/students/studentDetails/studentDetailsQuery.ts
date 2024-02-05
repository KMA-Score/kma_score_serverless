import { Query } from '@shared/domain';

export class StudentDetailsQuery implements Query {
  readonly id?: string;
}
