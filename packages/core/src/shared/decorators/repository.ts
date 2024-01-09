import { ClassConstructor } from 'shared/types';
import { Service } from 'typedi';

export function Repository<T>() {
  return function (target: ClassConstructor<T>) {
    // Apply the TypeDI Service decorator
    Service()(target);
  };
}
