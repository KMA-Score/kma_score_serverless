export interface HttpResponse {
  statusCode: number;
  body?: string | object;
  headers?: { [key: string]: string };
  error?: Error | string | object;
}
