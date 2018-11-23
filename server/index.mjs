import worker from './worker.mjs';
import startInCluster from './utils/startInCluster.mjs';
import cfg from './config.mjs';

// eslint-disable-next-line no-unused-vars
// import init from './init';

const configuredWorker = () => worker(cfg);

console.log('isDebug ? ', cfg.DEBUG);

if (cfg.DEBUG) {
  configuredWorker();
} else {
  startInCluster(configuredWorker);
}
