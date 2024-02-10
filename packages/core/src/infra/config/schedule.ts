import { Config } from 'sst/node/config';

export interface StudentScheduleConfig {
  SCHEDULE_GRPC: string;
}

export const makeStudentScheduleConfig = (): StudentScheduleConfig => ({
  SCHEDULE_GRPC: Config.SCHEDULE_GRPC,
});
