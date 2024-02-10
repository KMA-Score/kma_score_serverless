import { Result } from 'true-myth';
import { QueryHandler } from '@shared/domain';
import { IScheduleService } from '@application/ports';
import { SemestersResponse } from './semestersResponse';
import { SemestersQuery } from './semestersQuery';

type Dependencies = {
  studentScheduleService: IScheduleService;
};

export class SemestersUseCase
  implements QueryHandler<SemestersQuery, SemestersResponse>
{
  private readonly studentScheduleService: IScheduleService;

  constructor({ studentScheduleService }: Dependencies) {
    this.studentScheduleService = studentScheduleService;
  }

  async execute(): Promise<SemestersResponse> {
    try {
      const semesterList = await this.studentScheduleService.getSemesterList();

      return Result.ok({
        semesterList,
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      return Result.err(new Error(e.message));
    }
  }
}
