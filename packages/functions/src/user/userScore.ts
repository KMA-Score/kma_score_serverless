import { HttpResponse, middlewareWithAuth } from '../shared';
import { APIGatewayProxyWithAuthEvent } from '../shared/middleware/types';
import { plainToInstance } from 'class-transformer';
import {
  StudentDetailsQuery,
  StudentNotFoundError,
} from '@kma-score-serverless/core/application';
import { container } from '@kma-score-serverless/core/container';
import { UnexpectedError } from '@kma-score-serverless/core/shared';

export const handler = middlewareWithAuth().handler(
  async (event: APIGatewayProxyWithAuthEvent): Promise<HttpResponse> => {
    const id = event.tokenContext.studentCode;

    if (!id) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: 'Invalid student code',
        }),
      };
    }

    const query = plainToInstance(StudentDetailsQuery, {
      id,
    });

    const { studentDetailsUseCase } = container.cradle;

    const res = await studentDetailsUseCase.execute(query);

    if (res.isOk) {
      return {
        statusCode: 200,
        body: res.value,
      };
    }

    if (res.error instanceof StudentNotFoundError) {
      return {
        statusCode: 404,
        body: res.error.message,
      };
    }

    return {
      statusCode: 500,
      body: new UnexpectedError().message,
    };
  },
);
