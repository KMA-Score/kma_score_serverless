import middy from '@middy/core';
import httpErrorHandler from '@middy/http-error-handler';
import jsonBodyParser from '@middy/http-json-body-parser';

export const middleware = () =>
  middy().use(jsonBodyParser()).use(httpErrorHandler());
