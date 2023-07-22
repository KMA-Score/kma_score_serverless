import { Config, StackContext } from "sst/constructs";

export function Domain({ stack }: StackContext) {
  const DOMAIN_ARN = new Config.Secret(stack, "DOMAIN_ARN");

  return {
    DOMAIN_ARN,
  };
}
