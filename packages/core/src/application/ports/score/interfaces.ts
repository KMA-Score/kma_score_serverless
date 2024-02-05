import { StudentQueryResult } from '@infra/student';
import { LearningResult } from '../subject';
import { ScoreSelectType } from '@domain/student';

export interface ICalculateScoreService {
  getLearningResult(scores: ScoreSelectType[]): LearningResult;
  getAverageScore(student: StudentQueryResult): number;
}
