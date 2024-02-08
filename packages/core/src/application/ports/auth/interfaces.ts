export interface IAuthService {
  validateToken(token: string): boolean;
}
