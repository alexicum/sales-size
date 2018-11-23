import express from 'express';
import path from 'path';
// import morgan from 'morgan';
import router from './router.mjs';

//#region META

/** @todo Replace with import.meta eventually */
// const FILENAME = typeof __filename !== 'undefined' ? __filename : (/^ +at (?:file:\/*(?=\/)|)(.*?):\d+:\d+$/m.exec(Error().stack) || '')[1];
// const DIRNAME = typeof __dirname !== 'undefined' ? __dirname : FILENAME.replace(/[\/\\][^\/\\]*?$/, '');
const DIRNAME = typeof __dirname !== 'undefined'
  ? __dirname
  : path.dirname(new URL(import.meta.url).pathname);
//#endregion

const localFolder = 'E:\\Work\\Projects\\test\\cra\\sales-size\\react-ui\\build';

const worker = (cfg) => {
  const app = express();

  // Priority serve any static files.
  const staticPath = cfg.DEBUG
    ? localFolder
    : path.resolve(DIRNAME, cfg.REACT_UI_PATH);

  const indexPath = cfg.DEBUG
    ? localFolder + '\\index.html'
    : path.resolve(DIRNAME, cfg.REACT_UI_PATH, 'index.html');

  app.use(express.static(staticPath));

  // Answer API requests.
  app.use('/api', router);

  // All remaining requests return the React app, so it can handle routing.
  app.get('*', (req, res) => {
    // console.log('React app index.html path: ', path.resolve(localFolder + '\\index.html'));
    res.sendFile(indexPath);
  });

  // Error handler
  // next is required: mean that this func is error handler
  // eslint-disable-next-line no-unused-vars
  app.use((err, req, res, next) => {
    // handle error
    // if (err instanceof BadRequestError) {
    console.log('err', err);
    res.status(500);
    return res.send(err.message);
    // }
  });

  app.listen(cfg.PORT, () => {
    console.error(`Node (cluster in prod) worker ${process.pid}: listening on port ${cfg.PORT}`);
  });
};

export default worker;
