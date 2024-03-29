import { StackContext, Api } from 'sst/constructs';
import { Certificate } from 'aws-cdk-lib/aws-certificatemanager';
import { createConfig } from './config';

export function API(stackContext: StackContext) {
  const { app, stack } = stackContext;
  const config = createConfig(stackContext);

  const { dbConfig, kcConfig, studentScheduleConfig } = config;

  const { DB_HOST, DB_PORT, DB_NAME, DB_USERNAME, DB_PASSWORD } = dbConfig;
  const { KC_URL, KC_REALM, KC_CLIENT_ID, KC_CLIENT_SECRET } = kcConfig;
  const { SCHEDULE_GRPC } = studentScheduleConfig;

  const api = new Api(stack, 'api', {
    defaults: {
      function: {
        runtime: 'nodejs18.x',
        bind: [
          // Database
          DB_HOST,
          DB_PORT,
          DB_NAME,
          DB_USERNAME,
          DB_PASSWORD,
          // Keycloak
          KC_URL,
          KC_REALM,
          KC_CLIENT_ID,
          KC_CLIENT_SECRET,
          // Schedule
          SCHEDULE_GRPC,
        ],
      },
    },
    routes: {
      // Legacy support
      'GET /student/{id}':
        'packages/functions/src/student/studentDetails.handler',
      // Get semester list
      'GET /semesters': 'packages/functions/src/schedule/semesterList.handler',
      // Users API
      'GET /user': 'packages/functions/src/user/userDetails.handler',
      'GET /user/schedule/{semesterHash}':
        'packages/functions/src/user/userSchedule.handler',
      'GET /user/score': 'packages/functions/src/user/userScore.handler',
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
