import { LearningResult } from '@application/ports';
import { isPassedSubject, shouldCalculateScore } from '@application/util';
import { AlphabetToTetraScore } from '@domain/index';
import { StudentQueryResult } from '@infra/index';
import { Service } from 'typedi';
import { Collection } from '@mikro-orm/core';
import { ScoresEntity } from '@application/db/entities/scores.entity';

@Service()
export class CalculateScoreService {
  getLearningResult(scores: Collection<ScoresEntity>): LearningResult {
    const passed = scores.filter((score) => isPassedSubject(score)).length;
    const failed = scores.length - passed;

    return {
      passed,
      failed,
    };
  }

  getAverageScore(student?: StudentQueryResult): number {
    if (!student) throw new Error('Student not found');

    const { scores } = student;

    const totalAverageScore = scores.reduce((acc, score) => {
      if (shouldCalculateScore(score)) {
        if (
          !score.alphabetScore ||
          !(score.alphabetScore in AlphabetToTetraScore)
        ) {
          return acc;
        }

        return (
          acc +
          // * This is an enum so it's safe to ignore this
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          AlphabetToTetraScore[score.alphabetScore] *
            score.subjectId.unwrap().numberOfCredits
        );
      }
      return acc;
    }, 0);

    const totalCredits = scores.reduce((acc, score) => {
      if (shouldCalculateScore(score)) {
        return acc + score.subjectId.unwrap().numberOfCredits;
      }
      return acc;
    }, 0);

    const averageScore = totalAverageScore / totalCredits;
    return Number(averageScore.toFixed(2));
  }
}
