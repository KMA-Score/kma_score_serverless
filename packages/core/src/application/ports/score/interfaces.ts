import { LearningResult } from '../subject';
import { StudentQueryResult } from '@infra/student';
import { Collection } from '@mikro-orm/core';
import { ScoresEntity } from '@entities/scores.entity';

export interface ICalculateScoreService {
  getLearningResult(scores: Collection<ScoresEntity>): LearningResult;

  getAverageScore(student: StudentQueryResult): number;
}
