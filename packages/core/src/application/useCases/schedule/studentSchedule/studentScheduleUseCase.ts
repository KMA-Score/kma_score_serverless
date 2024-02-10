import { QueryHandler } from '@shared/domain';
import { StudentScheduleQuery } from './studentScheduleQuery';
import { StudentScheduleResponse } from './studentScheduleResponse';
import { IScheduleService } from '@application/ports';
import { Result } from 'true-myth';

type Dependencies = {
  studentScheduleService: IScheduleService;
};

export class StudentScheduleUseCase
  implements QueryHandler<StudentScheduleQuery, StudentScheduleResponse>
{
  private readonly studentScheduleService: IScheduleService;

  constructor({ studentScheduleService }: Dependencies) {
    this.studentScheduleService = studentScheduleService;
  }

  async execute(param: StudentScheduleQuery): Promise<StudentScheduleResponse> {
    try {
      const studentScheduleData =
        await this.studentScheduleService.getStudentSchedule({
          studentCode: param.studentCode,
          semesterHash: param.semesterHash,
        });

      return Result.ok({
        studentInfo: studentScheduleData.studentInfo,
        scheduleData: studentScheduleData.studentSchedule,
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      return Result.err(new Error(e));
    }
  }
}
