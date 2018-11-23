import cluster from 'cluster';
import os from 'os';

const startInCluster = (workerFunc) => {
  const numCPUs = os.cpus().length;

  // Multi-process to utilize all CPU cores.
  if (cluster.isMaster) {
    console.error(`Node cluster master ${process.pid} is running`);

    // Fork workers.
    for (let i = 0; i < numCPUs; i += 1) {
      cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
      console.error(`Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`);
    });
  } else {
    workerFunc();
  }
};

export default startInCluster;
