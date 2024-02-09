import 'reflect-metadata';
import { APIGatewayProxyEvent } from 'aws-lambda';
import { middleware } from '../shared';
import { plainToInstance } from 'class-transformer';
import { IsString } from 'class-validator';
import {
  StudentDetailsQuery,
  StudentNotFoundError,
} from '@kma-score-serverless/core/index';
import { UnexpectedError } from '@kma-score-serverless/core/shared';
import { container } from '@kma-score-serverless/core/container';
import { HttpResponse } from 'src/shared/util';

class StudentPathParameters {
  @IsString()
  id!: string;
}

export const handler = middleware().handler(
  async (event: APIGatewayProxyEvent): Promise<HttpResponse> => {
    const pathParameters = event.pathParameters as StudentPathParameters | null;

    const query = plainToInstance(StudentDetailsQuery, {
      id: pathParameters?.id,
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
