import { IsString } from 'class-validator';
import { HttpResponse, middleware } from '../shared';
import { APIGatewayProxyEvent } from 'aws-lambda';
import { container } from '@kma-score-serverless/core/container';

class StudentTuitionFeePathParameters {
  @IsString()
  studentCode!: string;
}

export const handler = middleware().handler(
  async (event: APIGatewayProxyEvent): Promise<HttpResponse> => {
    const pathParameters =
      event.pathParameters as StudentTuitionFeePathParameters | null;

    if (!pathParameters) {
      return {
        statusCode: 400,
        body: 'Missing student code',
      };
    }

    const { studentTuitionFeeUseCase } = container.cradle;

    const res = await studentTuitionFeeUseCase.execute({
      studentCode: pathParameters.studentCode,
    });

    if (res.isOk) {
      return {
        statusCode: 200,
        body: res.value,
      };
    }

    return {
      statusCode: 500,
      body: res.error.message,
    };
  },
);
