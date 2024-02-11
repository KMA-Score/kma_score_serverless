import { QueryHandler } from '@shared/domain';
import { StudentTuitionFeeQuery } from '@application/useCases';
import { StudentTuitionFeeResponse } from '@application/useCases';
import { IScheduleService } from '@application/ports';
import { Result } from 'true-myth';

type Dependencies = {
  studentScheduleService: IScheduleService;
};

export class StudentTuitionFeeUseCase
  implements QueryHandler<StudentTuitionFeeQuery, StudentTuitionFeeResponse>
{
  private readonly studentScheduleService: IScheduleService;

  constructor({ studentScheduleService }: Dependencies) {
    this.studentScheduleService = studentScheduleService;
  }

  async execute(
    query: StudentTuitionFeeQuery,
  ): Promise<StudentTuitionFeeResponse> {
    try {
      const studentTuitionFeeRspData =
        await this.studentScheduleService.getStudentTuitionFee({
          studentCode: query.studentCode,
        });

      return Result.ok({
        tuitionInfo: studentTuitionFeeRspData.tuitionInfo,
        tuitionDetail: studentTuitionFeeRspData.tuitionDetail,
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      return Result.err(new Error(e.message));
    }
  }
}
