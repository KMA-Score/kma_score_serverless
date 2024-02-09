import { Config } from 'sst/node/config';

export interface KeycloakConfig {
  KC_URL: string;
  KC_REALM: string;
  KC_CLIENT_ID: string;
  KC_CLIENT_SECRET: string;
}

export const makeKcConfig = (): KeycloakConfig => ({
  KC_URL: Config.KC_URL,
  KC_REALM: Config.KC_REALM,
  KC_CLIENT_ID: Config.KC_CLIENT_ID,
  KC_CLIENT_SECRET: Config.KC_CLIENT_SECRET,
});
