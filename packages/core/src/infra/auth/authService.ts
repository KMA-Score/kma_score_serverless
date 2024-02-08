import { IAuthService } from '@application/ports/auth';

export class AuthService implements IAuthService {
  private keycloakAccessToken: string;

  validateToken(token: string): boolean {
    this.keycloakAccessToken = token;
    return true;
  }
}
