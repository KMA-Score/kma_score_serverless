import { HttpResponse, middleware } from '../shared';
import { container } from '@kma-score-serverless/core/container';
import { UnexpectedError } from '@kma-score-serverless/core/shared';

export const handler = middleware().handler(async (): Promise<HttpResponse> => {
  const { semestersUseCase } = container.cradle;

  const res = await semestersUseCase.execute();

  if (res.isOk) {
    return {
      statusCode: 200,
      body: res.value,
    };
  }

  console.error(res.error);

  return {
    statusCode: 500,
    body: new UnexpectedError().message,
  };
});
