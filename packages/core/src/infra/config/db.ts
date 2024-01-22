import { Config } from 'sst/node/config';

export interface DbConfig {
  DB_HOST: string;
  DB_PORT: string;
  DB_NAME: string;
  DB_USERNAME: string;
  DB_PASSWORD: string;
}

export const makeDbConfig = (): DbConfig => ({
  DB_HOST: Config.DB_HOST,
  DB_PORT: Config.DB_PORT,
  DB_NAME: Config.DB_NAME,
  DB_USERNAME: Config.DB_USERNAME,
  DB_PASSWORD: Config.DB_PASSWORD,
});
