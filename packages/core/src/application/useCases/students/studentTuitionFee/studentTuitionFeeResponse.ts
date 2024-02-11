import { Response } from '@shared/domain';
import {
  GetStudentTuitionFeeRsp_TuitionDetail,
  GetStudentTuitionFeeRsp_TuitionInfo,
} from '@domain/schedule/proto/quantum/student';
import { Result } from 'true-myth';

export class StudentTuitionFeeResponseDTO implements Response {
  readonly tuitionInfo?: GetStudentTuitionFeeRsp_TuitionInfo;
  readonly tuitionDetail?: GetStudentTuitionFeeRsp_TuitionDetail;
}

export type StudentTuitionFeeResponse = Result<
  StudentTuitionFeeResponseDTO,
  Error
>;
