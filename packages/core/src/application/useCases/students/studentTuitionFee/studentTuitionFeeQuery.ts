import { Query } from '@shared/domain';

export class StudentTuitionFeeQuery implements Query {
  readonly studentCode!: string;
}
