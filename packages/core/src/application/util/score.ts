import { ScoresEntity } from '@application/db/entities/scores.entity';

export const isPassedSubject = (score: ScoresEntity): boolean => {
  return score.alphabetScore !== 'F' && score.alphabetScore !== null;
};

export const shouldCalculateScore = (score: ScoresEntity): boolean => {
  return !score.subjectId.toString().match(/ATQGTC\d+/);
};
