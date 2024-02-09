import middy from '@middy/core';
import httpErrorHandler from '@middy/http-error-handler';
import jsonBodyParser from '@middy/http-json-body-parser';
import httpResponseSerializer from '@middy/http-response-serializer';
import { authValidatorMiddleware } from './authValidator';

export const middleware = () =>
  middy()
    .use(jsonBodyParser())
    .use(httpErrorHandler())
    .use(
      httpResponseSerializer({
        serializers: [
          {
            regex: /^application\/xml$/,
            serializer: ({ body }) => `<message>${body}</message>`,
          },
          {
            regex: /^application\/json$/,
            serializer: ({ body }) => JSON.stringify(body),
          },
          {
            regex: /^text\/plain$/,
            serializer: ({ body }) => body,
          },
        ],
        defaultContentType: 'application/json',
      }),
    );

export const middlewareWithAuth = () =>
  middleware().use(authValidatorMiddleware());
