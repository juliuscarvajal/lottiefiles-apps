import { SSTConfig } from 'sst';
import { Default } from './lottiefiles-apps-iac/stacks/Default';

export default {
  config(_input) {
    return {
      name: 'lottiefiles-apps',
      region: 'us-east-1',
    };
  },
  stacks(app) {
    app.stack(Default);
  },
} satisfies SSTConfig;
