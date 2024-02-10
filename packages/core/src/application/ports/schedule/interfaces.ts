import {
  GetScheduleByStudentCodeReq,
  SemesterData,
  StudentInfo,
  StudentSchedule,
} from '@domain/schedule/proto/quantum/schedule';

export type StudentScheduleData = {
  studentInfo: StudentInfo | undefined;
  studentSchedule: StudentSchedule[];
};

export interface IScheduleService {
  getSemesterList(): Promise<SemesterData[]>;

  getStudentSchedule(
    param: GetScheduleByStudentCodeReq,
  ): Promise<StudentScheduleData>;
}
