import { StackContext, Api } from 'sst/constructs';
import { Certificate } from 'aws-cdk-lib/aws-certificatemanager';
import { createConfig } from './config';

export function API(stackContext: StackContext) {
  const { app, stack } = stackContext;
  const config = createConfig(stackContext);

  const { dbConfig, kcConfig } = config;

  const { DB_HOST, DB_PORT, DB_NAME, DB_USERNAME, DB_PASSWORD } = dbConfig;
  const {
    KC_URL,
    KC_REALM,
    KC_MASTER_CLIENT_ID,
    KC_MASTER_CLIENT_SECRET,
    KC_CLIENT_ID,
  } = kcConfig;

  const api = new Api(stack, 'api', {
    defaults: {
      function: {
        runtime: 'nodejs18.x',
        bind: [
          DB_HOST,
          DB_PORT,
          DB_NAME,
          DB_USERNAME,
          DB_PASSWORD,
          KC_URL,
          KC_REALM,
          KC_MASTER_CLIENT_ID,
          KC_MASTER_CLIENT_SECRET,
          KC_CLIENT_ID,
        ],
      },
    },
    routes: {
      'GET /student/{id}':
        'packages/functions/src/student/studentDetails.handler',
    },
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    customDomain: app.local
      ? undefined
      : {
          domainName: process.env.CUSTOM_DOMAIN,
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
