const DEBUG = !(process.env.NODE_ENV === 'production');

const PORT = process.env.PORT || 5000;

const UI_BUILD_PATH = process.env.UI_BUILD_PATH || '../react-ui/build/';

export default {
  DEBUG,
  PORT,
  UI_BUILD_PATH,

  DB_USER: process.env.DB_USER,
  DB_PASS: process.env.DB_PASS,
  DB_SERVER: process.env.DB_SERVER,
};
