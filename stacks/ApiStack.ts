import { StackContext, Api } from 'sst/constructs';
import { Certificate } from 'aws-cdk-lib/aws-certificatemanager';
import { createConfig } from './config';

export function API(stackContext: StackContext) {
  const { app, stack } = stackContext;
  const config = createConfig(stackContext);
  const layers: never[] = [];

  const { dbConfig } = config;
  const { DB_HOST, DB_PORT, DB_NAME, DB_USERNAME, DB_PASSWORD } = dbConfig;

  const api = new Api(stack, 'api', {
    defaults: {
      function: {
        environment: {},
        bind: [DB_HOST, DB_PORT, DB_NAME, DB_USERNAME, DB_PASSWORD],
        runtime: 'nodejs18.x',
        nodejs: {
          // This is required for Mikro to work
          esbuild: {
            external: [
              'sqlite3',
              'better-sqlite3',
              'mysql',
              'mysql2',
              'oracledb',
              'pg-native',
              'pg-query-stream',
              'tedious',
            ],
          },
        },
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        layers: layers,
      },
    },
    routes: {
      'GET /student/{id}':
        'packages/functions/src/student/getAllStudentWithScore.handler',
    },
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    customDomain: app.local
      ? undefined
      : {
          domainName: 'alphascore.dqtio.com',
          isExternalDomain: true,
          cdk: {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            certificate: Certificate.fromCertificateArn(
              stack,
              'score_api_certificate',
              process.env.CERTIFICATE_ARN ?? '',
            ),
          },
        },
  });
  stack.addOutputs({
    ApiEndpoint: api.url,
  });
}
