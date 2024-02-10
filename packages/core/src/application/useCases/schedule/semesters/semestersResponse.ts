import { Result } from 'true-myth';
import { Response } from '@shared/domain';
import { SemesterData } from '@domain/schedule/proto/quantum/schedule';

export class SemestersResponseDTO implements Response {
  readonly semesterList!: SemesterData[];
}

export type SemestersResponse = Result<SemestersResponseDTO, Error>;
