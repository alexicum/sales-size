import * as init from './init';

import worker from './worker.mjs';
import startInCluster from './utils/startInCluster.mjs';
import cfg from './config.mjs';

const configuredWorker = () => worker(cfg);

console.log('isDebug ? ', cfg.DEBUG);

if (cfg.DEBUG) {
  configuredWorker();
} else {
  startInCluster(configuredWorker);
}
