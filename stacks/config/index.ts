import { Config, StackContext } from 'sst/constructs';

export function createDbConfig({ stack }: StackContext) {
  const DB_HOST = new Config.Secret(stack, 'DB_HOST');
  const DB_PORT = new Config.Secret(stack, 'DB_PORT');
  const DB_NAME = new Config.Secret(stack, 'DB_NAME');
  const DB_USERNAME = new Config.Secret(stack, 'DB_USERNAME');
  const DB_PASSWORD = new Config.Secret(stack, 'DB_PASSWORD');

  return {
    DB_HOST,
    DB_PORT,
    DB_NAME,
    DB_USERNAME,
    DB_PASSWORD,
  };
}

export function createKcConfig({ stack }: StackContext) {
  const KC_URL = new Config.Secret(stack, 'KC_URL');
  const KC_REALM = new Config.Secret(stack, 'KC_REALM');
  const KC_MASTER_CLIENT_ID = new Config.Secret(stack, 'KC_MASTER_CLIENT_ID');
  const KC_MASTER_CLIENT_SECRET = new Config.Secret(
    stack,
    'KC_MASTER_CLIENT_SECRET',
  );
  const KC_CLIENT_ID = new Config.Secret(stack, 'KC_CLIENT_ID');

  return {
    KC_URL,
    KC_REALM,
    KC_MASTER_CLIENT_ID,
    KC_MASTER_CLIENT_SECRET,
    KC_CLIENT_ID,
  };
}

export function createConfig(context: StackContext) {
  const dbConfig = createDbConfig(context);
  const kcConfig = createKcConfig(context);

  return {
    dbConfig,
    kcConfig,
  };
}
