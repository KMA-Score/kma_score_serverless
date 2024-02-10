import middy from '@middy/core';
import { APIGatewayProxyResult } from 'aws-lambda';
import { container } from '@kma-score-serverless/core/container';
import { APIGatewayProxyWithAuthEvent } from './types';

export const authValidatorMiddleware = (): middy.MiddlewareObj<
  APIGatewayProxyWithAuthEvent,
  APIGatewayProxyResult
> => {
  const beforeRequest: middy.MiddlewareFn<
    APIGatewayProxyWithAuthEvent,
    APIGatewayProxyResult
  > = async (request): Promise<void> => {
    const headers = request.event.headers;

    if (!headers.authorization) {
      request.response = {
        statusCode: 401,
        body: JSON.stringify({
          statusCode: 401,
          message: 'Unauthorized',
        }),
      };

      return;
    }

    // Get token from header
    const token = headers.authorization.split(' ')[1];

    // Get authService from DI container
    const { authService } = container.cradle;

    // Introspect token
    const tokenData = await authService.introspectToken(token);

    if (!tokenData.active) {
      request.response = {
        statusCode: 401,
        body: JSON.stringify({
          statusCode: 401,
          message: 'Unauthorized',
        }),
      };

      return;
    }

    // Add token data to event context for later use
    request.event.tokenContext = {
      exp: tokenData.exp,
      sub: tokenData.sub,
      email: tokenData.email,
      name: tokenData.name,
      username: tokenData.username,
      roles: (tokenData.realm_access?.roles || []).filter((x) =>
        x.startsWith('k-'),
      ),
      studentCode: (tokenData.email.split('@')[0] || '').toUpperCase(),
    };
  };

  return {
    before: beforeRequest,
  };
};
