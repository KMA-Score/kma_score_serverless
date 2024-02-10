import { Response } from '@shared/domain';
import {
  StudentInfo,
  StudentSchedule,
} from '@domain/schedule/proto/quantum/schedule';
import { Result } from 'true-myth';

export class StudentScheduleResponseDTO implements Response {
  readonly studentInfo?: StudentInfo;
  readonly scheduleData!: StudentSchedule[];
}

export type StudentScheduleResponse = Result<StudentScheduleResponseDTO, Error>;
