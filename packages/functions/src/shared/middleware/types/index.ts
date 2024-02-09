import { APIGatewayProxyEvent } from 'aws-lambda';

export type TokenContext = {
  exp: number;
  sub: string;
  email: string;
  name: string;
  username: string;
  studentCode: string;
  roles: string[];
};

export type APIGatewayProxyWithAuthEvent = APIGatewayProxyEvent & {
  tokenContext: TokenContext;
};
