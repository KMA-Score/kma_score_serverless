import { IAuthService } from '@application/ports/auth';
import { KeycloakConfig, makeKcConfig } from '@infra/config';
import qs from 'querystring';
import axios, { Axios } from 'axios';
import { KeycloakIntrospectTokenRsp } from '@infra/auth/types';

export class AuthService implements IAuthService {
  private readonly kcClientIntrospectUrl;
  private readonly keycloakConfig: KeycloakConfig;
  private readonly keycloakAccessToken: string;
  private axiosInstance: Axios;

  constructor() {
    this.keycloakConfig = makeKcConfig();

    this.kcClientIntrospectUrl = `/realms/${this.keycloakConfig.KC_REALM}/protocol/openid-connect/token/introspect`;

    this.axiosInstance = axios.create({
      baseURL: this.keycloakConfig.KC_URL,
    });

    this.keycloakAccessToken = this.getAccessToken();
  }

  private getAccessToken() {
    if (!this.keycloakConfig) {
      throw new Error('Keycloak config is not set');
    }

    const keyStr = `${this.keycloakConfig.KC_CLIENT_ID}:${this.keycloakConfig.KC_CLIENT_SECRET}`;

    return Buffer.from(keyStr).toString('base64'); // convert to base64
  }

  public async introspectToken(
    token: string,
  ): Promise<KeycloakIntrospectTokenRsp> {
    // TODO: you are useless. f-ing lint rule
    // eslint-disable-next-line no-useless-catch
    try {
      const body = qs.stringify({
        token,
      });

      const headers = {
        Accept: 'application/json',
        Authorization: `Basic ${this.keycloakAccessToken}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      };

      const response = await this.axiosInstance.post(
        this.kcClientIntrospectUrl,
        body,
        {
          headers,
        },
      );

      return response.data;
    } catch (e) {
      throw e;
    }
  }
}
