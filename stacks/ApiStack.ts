import { StackContext, Api } from 'sst/constructs';
import { Certificate } from 'aws-cdk-lib/aws-certificatemanager';
import { createConfig } from './config';

export function API(stackContext: StackContext) {
  const { app, stack } = stackContext;
  const config = createConfig(stackContext);

  const { dbConfig } = config;

  const { DB_HOST, DB_PORT, DB_NAME, DB_USERNAME, DB_PASSWORD } = dbConfig;

  const api = new Api(stack, 'api', {
    defaults: {
      function: {
        runtime: 'nodejs18.x',
        bind: [DB_HOST, DB_PORT, DB_NAME, DB_USERNAME, DB_PASSWORD],
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
