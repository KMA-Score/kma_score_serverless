import * as waf from 'aws-cdk-lib/aws-wafv2';
import { Api, StackContext } from 'sst/constructs';

const rateLimitRule = (limit = 500): waf.CfnWebACL.RuleProperty => {
  return {
    name: 'LimitRequests',
    priority: 0,
    action: {
      block: {},
    },
    statement: {
      rateBasedStatement: {
        limit,
        aggregateKeyType: 'IP',
      },
    },
    visibilityConfig: {
      sampledRequestsEnabled: true,
      cloudWatchMetricsEnabled: true,
      metricName: 'LimitRequests',
    },
  };
};

export const createApiWaf = ({ stack }: StackContext, api: Api) => {
  const cfnWebAcl = new waf.CfnWebACL(stack, 'ApiWaf-kma-score-prod', {
    scope: 'REGIONAL',
    defaultAction: { allow: {} },
    visibilityConfig: {
      cloudWatchMetricsEnabled: true,
      metricName: 'ApiWaf-kma-score-prod',
      sampledRequestsEnabled: true,
    },
    description: 'WAF for the KMA Score API',
    rules: [rateLimitRule()],
  });

  new waf.CfnWebACLAssociation(stack, 'ApiWafAssociation-kma-score-prod', {
    resourceArn: api.httpApiArn,
    webAclArn: cfnWebAcl.attrArn,
  });
};
