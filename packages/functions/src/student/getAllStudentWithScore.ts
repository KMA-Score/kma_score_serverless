import { middleware } from '../middleware';
import {
  getStudentWithScoreById,
  getLearningResult,
  getAverageScore,
  StudentWithScoresAndSubjects,
} from '@kma-score-serverless/core/index';

interface StudentPathParameters {
  id: string;
}

export const handler = middleware().handler(async (event) => {
  const pathParameters = event.pathParameters as StudentPathParameters | null;

  if (!pathParameters?.id) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: 'Bad request',
      }),
    };
  }

  const student: StudentWithScoresAndSubjects = await getStudentWithScoreById(
    pathParameters?.id,
  );
  const learningResult = getLearningResult(student?.scores);
  const averageScore = getAverageScore(student);

  if (!student) {
    return {
      statusCode: 404,
      body: JSON.stringify({
        message: 'Not found',
      }),
    };
  }

  return {
    ...student,
    ...learningResult,
    averageScore,
  };
});
