import { LearningResult } from '@application/ports';
import { isPassedSubject, shouldCalculateScore } from '@application/util';
import { StudentQueryResult } from '@infra/index';
import { Service } from 'typedi';
import { Collection } from '@mikro-orm/core';
import { AlphabetToTetraScore, Score } from '@domain/index';

@Service()
export class CalculateScoreService {
  getLearningResult(scores: Collection<Score>): LearningResult {
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
          AlphabetToTetraScore[
            score.alphabetScore as keyof typeof AlphabetToTetraScore
          ] *
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
