import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { middleware } from '../middleware';
import { container } from '@kma-score-serverless/core/index';

interface StudentPathParameters {
  id: string;
}

export const handler = middleware().handler(
  async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    const pathParameters = event.pathParameters as StudentPathParameters | null;
    const { studentRepository, calculateScoreService } = container;

    if (!pathParameters?.id) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: 'Bad request',
        }),
      };
    }

    const student = await studentRepository.getById(pathParameters.id);

    if (!student) {
      return {
        statusCode: 404,
        body: JSON.stringify({
          message: 'Not found',
        }),
      };
    }

    const learningResult = calculateScoreService.getLearningResult(
      student?.scores,
    );
    const averageScore = calculateScoreService.getAverageScore(student);

    return {
      ...student,
      ...learningResult,
      averageScore,
    };
  },
);
