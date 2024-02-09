export interface IAuthService {
  validateToken(token: string): Promise<boolean>;
}
