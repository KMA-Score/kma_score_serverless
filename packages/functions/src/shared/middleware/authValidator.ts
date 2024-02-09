import middy from '@middy/core';
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { container } from '@kma-score-serverless/core/container';

export const authValidatorMiddleware = (): middy.MiddlewareObj<
  APIGatewayProxyEvent,
  APIGatewayProxyResult
> => {
  const beforeRequest: middy.MiddlewareFn<
    APIGatewayProxyEvent,
    APIGatewayProxyResult
  > = async (request): Promise<void> => {
    const headers = request.event.headers;

    if (!headers.authorization) {
      throw new Error('Unauthorized');
    }

    const token = headers.authorization.split(' ')[1];

    const authService = container.cradle.authService;

    const isValid = await authService.validateToken(token);

    if (!isValid) {
      throw new Error('Unauthorized');
    }
  };

  return {
    before: beforeRequest,
  };
};
