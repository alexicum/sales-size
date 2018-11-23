import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'connected-react-router';
import reactRouterModel from '../models/reactRouterModel';

export default function createReactRouterPlugin() {
  const history = createHistory();
  const middleware = routerMiddleware();

  return {
    config: {
      models: {
        router: reactRouterModel(history)
      }
    },
    middleware,
    onStoreCreated(store) {
      return {
        history
      }
    }
  }
};