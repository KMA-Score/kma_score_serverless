import { KeycloakIntrospectTokenRsp } from '@infra/auth/types';

export interface IAuthService {
  introspectToken(token: string): Promise<KeycloakIntrospectTokenRsp>;
}
