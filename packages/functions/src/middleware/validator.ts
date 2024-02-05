import { plainToInstance, ClassConstructor } from 'class-transformer';
import { MiddlewareObj, Request } from '@middy/core';
import { Event as APIGateWayParsedBodyEvent } from '@middy/http-json-body-parser';
import { createError } from '@middy/util';
import { validate } from 'class-validator';

type ValidatedEvent<T> = APIGateWayParsedBodyEvent & {
  validatedBody: T;
};

export const validateBodyMiddleware = <T extends object>(
  bodyInputClass: ClassConstructor<T>,
): MiddlewareObj<ValidatedEvent<T>> => {
  const customMiddlewareBefore = async ({
    event,
  }: Request<ValidatedEvent<T>>): Promise<void> => {
    if (typeof event.body !== 'object') {
      throw createError(400, 'Invalid request body');
    }
    const instance = plainToInstance(bodyInputClass, event.body);
    const errors = await validate(instance, {
      validationError: {
        target: false,
      },
    });
    if (errors.length > 0) {
      const message = errors.map((e) => e.toString()).join('\n');
      throw createError(400, JSON.stringify({ error: message }));
    }

    event.validatedBody = instance;
  };

  return {
    before: customMiddlewareBefore,
  };
};
