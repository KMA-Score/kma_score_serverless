import { HttpResponse, middleware } from '../shared';
import { APIGatewayProxyEvent } from 'aws-lambda';
import { container } from '@kma-score-serverless/core/container';
import { UnexpectedError } from '@kma-score-serverless/core/shared';

type SchedulePathParameters = {
  studentCode: string;
  semesterHash: string;
};

export const handler = middleware().handler(
  async (event: APIGatewayProxyEvent): Promise<HttpResponse> => {
    const pathParameters =
      event.pathParameters as SchedulePathParameters | null;

    if (!pathParameters) {
      return {
        statusCode: 400,
        body: 'Missing path parameters',
      };
    }

    const { studentScheduleUseCase } = container.cradle;

    const res = await studentScheduleUseCase.execute({
      studentCode: pathParameters.studentCode,
      semesterHash: pathParameters.semesterHash,
    });

    if (res.isOk) {
      return {
        statusCode: 200,
        body: res.value,
      };
    }

    console.error(res.error);

    return {
      statusCode: res.error.message ? 400 : 500,
      body: res.error.message || new UnexpectedError().message,
    };
  },
);
