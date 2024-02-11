import {
  GetScheduleByStudentCodeReq,
  SemesterData,
  StudentInfo,
  StudentSchedule,
} from '@domain/schedule/proto/quantum/schedule';
import {
  GetStudentTuitionFeeReq,
  GetStudentTuitionFeeRsp_Data,
} from '@domain/schedule/proto/quantum/student';

export type StudentScheduleData = {
  studentInfo: StudentInfo | undefined;
  studentSchedule: StudentSchedule[];
};

export interface IScheduleService {
  getSemesterList(): Promise<SemesterData[]>;

  getStudentSchedule(
    param: GetScheduleByStudentCodeReq,
  ): Promise<StudentScheduleData>;

  getStudentTuitionFee(
    param: GetStudentTuitionFeeReq,
  ): Promise<GetStudentTuitionFeeRsp_Data>;
}
