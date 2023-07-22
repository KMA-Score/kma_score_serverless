import { SSTConfig } from "sst";
import { API } from "./stacks/ApiStack";

export default {
  config() {
    return {
      name: "kma-score-serverless",
      region: "ap-southeast-1",
    };
  },
  stacks(app) {
    app.stack(API);
  },
} satisfies SSTConfig;
