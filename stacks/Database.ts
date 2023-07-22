import { Config, StackContext } from 'sst/constructs';

export function Database({ stack }: StackContext) {
  const DB_HOST = new Config.Secret(stack, 'DB_HOST');
  const DB_NAME = new Config.Secret(stack, 'DB_NAME');
  const DB_PORT = new Config.Secret(stack, 'DB_PORT');
  const DB_USERNAME = new Config.Secret(stack, 'DB_USERNAME');
  const DB_PASSWORD = new Config.Secret(stack, 'DB_PASSWORD');

  return {
    DB_HOST,
    DB_NAME,
    DB_PORT,
    DB_USERNAME,
    DB_PASSWORD,
  };
}
