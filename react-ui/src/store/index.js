import { /* combineReducers, createStore, */ applyMiddleware, compose } from 'redux';
// import { routerMiddleware } from 'connected-react-router';
import { init } from '@rematch/core';
// import createHistory from 'history/createBrowserHistory';
// import createRootReducer from './reducers';
import * as models from '../models';
import createLoadingPlugin from '@rematch/loading';
import selectPlugin from '@rematch/select';
import createReactRouterPlugin from './createReactRouterPlugin';

// export const history = createHistory();

// const initialState = {};
// const enhancers = [];
// const middleware = [
//   routerMiddleware(history),
// ];

// if (process.env.NODE_ENV === 'development') {
//   const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

//   if (typeof devToolsExtension === 'function') {
//     enhancers.push(devToolsExtension())
//   }
// }

// const composedEnhancers = compose(
//   applyMiddleware(...middleware),
//   ...enhancers,
// );

// const oldstore = createStore(
//   createRootReducer(history),
//   initialState,
//   composedEnhancers
// );

// const enhanceWithConnectRouter = (history) => (config) => ({
//   ...config,
//   redux: {
//     ...config.redux,
//     combineReducers: (rootReducers) => connectRouter(history)(combineReducers(rootReducers))
//   },
//   middlewares: [...config.middlewares, routerMiddleware(history)]
// })

// see options API below
const options = {};

const loading = createLoadingPlugin(options);
const router = createReactRouterPlugin();

const store = init({
  models,
  // redux: {
  //   initialState,
  //   // combineReducers: (rootReducers) => connectRouter(history)(combineReducers(rootReducers)),
  //   reducers: {
  //     router: connectRouter(history),
  //   },
  //   middlewares: [ routerMiddleware(history) ],
  //   // enhancers: [composedEnhancers()],
  // },
  plugins: [
    loading,
    router,
    selectPlugin(),
  ],
});

export default store;
