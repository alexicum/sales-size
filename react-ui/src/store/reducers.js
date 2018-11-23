import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import counter from '../models/count';

export default (history) => combineReducers({
  router: connectRouter(history),
  counter,
});