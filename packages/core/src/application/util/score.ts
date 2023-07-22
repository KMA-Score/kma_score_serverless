import { Score } from '@prisma/client';

export const isPassedSubject = (score: Score): boolean => {
  return score.alphabetScore !== 'F' && score.alphabetScore !== null;
};

export const shouldCalculateScore = (score: Score): boolean => {
  return !score.subjectId.match(/ATQGTC\d+/);
};
