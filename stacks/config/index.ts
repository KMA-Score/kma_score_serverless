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
  const KC_CLIENT_ID = new Config.Secret(stack, 'KC_CLIENT_ID');
  const KC_CLIENT_SECRET = new Config.Secret(stack, 'KC_CLIENT_SECRET');

  return {
    KC_URL,
    KC_REALM,
    KC_CLIENT_ID,
    KC_CLIENT_SECRET,
  };
}

export function createStudentScheduleConfig({ stack }: StackContext) {
  const SCHEDULE_GRPC = new Config.Secret(stack, 'SCHEDULE_GRPC');

  return {
    SCHEDULE_GRPC,
  };
}

export function createConfig(context: StackContext) {
  const dbConfig = createDbConfig(context);
  const kcConfig = createKcConfig(context);
  const studentScheduleConfig = createStudentScheduleConfig(context);

  return {
    dbConfig,
    kcConfig,
    studentScheduleConfig,
  };
}
