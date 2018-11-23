const DEBUG = !(process.env.NODE_ENV === 'production');

const PORT = process.env.PORT || 5000;

const REACT_UI_PATH = '../react-ui/build/';

export default {
  DEBUG,
  PORT,
  REACT_UI_PATH,
};
