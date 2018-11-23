import {
  connectRouter,
  push,
  replace,
  go,
  goBack,
  goForward,
} from 'connected-react-router';

export default (history) => ({
  baseReducer: connectRouter(history),
  effects: {
    push,
    replace,
    go,
    goBack,
    goForward,
  },
});
