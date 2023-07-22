import fs from "fs-extra";
import * as lambda from "aws-cdk-lib/aws-lambda";
import path from "path";
import { StackContext } from "sst/constructs";

export const prismaLayer = ({ stack, app }: StackContext) => {
  if (!app.local) {
    // This saves shipping Prisma binaries once per function
    const layerPath = ".sst/layers/prisma";

    // Clear out the layer path
    fs.removeSync(layerPath);
    fs.mkdirSync(layerPath, { recursive: true });

    // Copy files to the layer
    const toCopy = [
      "node_modules/.prisma",
      "node_modules/@prisma/client",
      "node_modules/prisma/build",
    ];
    for (const file of toCopy) {
      fs.copySync(file, path.join(layerPath, "nodejs", file), {
        // Do not include binary files that aren't for AWS to save space
        filter: (src) => !src.endsWith("so.node") || src.includes("rhel"),
      });
    }
    const prismaLayer = new lambda.LayerVersion(stack, "PrismaLayer", {
      code: lambda.Code.fromAsset(path.resolve(layerPath)),
    });

    return prismaLayer;
  }
};
