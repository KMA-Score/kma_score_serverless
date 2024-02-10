import { StudentScheduleData } from '@application/ports';
import {
  GetScheduleByStudentCodeReq,
  SemesterData,
} from '@domain/schedule/proto/quantum/schedule';
import { KmaQuantumServiceClient } from '@domain/schedule';
import { makeStudentScheduleConfig } from '@infra/config';
import { credentials } from '@grpc/grpc-js';

export class StudentScheduleService {
  private grpcClient: KmaQuantumServiceClient;

  constructor() {
    const { SCHEDULE_GRPC } = makeStudentScheduleConfig();

    this.grpcClient = new KmaQuantumServiceClient(
      SCHEDULE_GRPC,
      credentials.createInsecure(),
    );
  }

  public getSemesterList(): Promise<SemesterData[]> {
    return new Promise((resolve, reject) => {
      this.grpcClient.getSemesterList({}, (err, res) => {
        if (err) {
          console.error(err);
          reject(err);
        }

        if (res.code !== 200) {
          console.error(res.message);
          reject(res.message);
        }

        resolve(res.semesterList);
      });
    });
  }

  getStudentSchedule(
    param: GetScheduleByStudentCodeReq,
  ): Promise<StudentScheduleData> {
    return new Promise((resolve, reject) => {
      this.grpcClient.getScheduleByStudentCode(param, (err, res) => {
        if (err) {
          console.error(err);
          reject(err);
        }

        if (res.code !== 200) {
          console.error(res.message);
          reject(res.message);
        }

        resolve({
          studentInfo: res.studentInfo,
          studentSchedule: res.studentSchedule,
        });
      });
    });
  }
}
