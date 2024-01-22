import { ScoreSelectType } from '@domain/student';

export const isPassedSubject = (score: ScoreSelectType): boolean => {
  return score.alphabetScore !== 'F' && score.alphabetScore !== null;
};

export const shouldCalculateScore = (score: ScoreSelectType): boolean => {
  return !score.subjectId.match(/ATQGTC\d+/);
};
