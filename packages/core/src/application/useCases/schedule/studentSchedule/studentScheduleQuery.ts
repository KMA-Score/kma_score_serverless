import { Query } from '@shared/domain';

export class StudentScheduleQuery implements Query {
  readonly studentCode!: string;
  readonly semesterHash!: string;
}
