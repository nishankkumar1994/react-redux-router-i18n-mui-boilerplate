import {
  createStore, compose, applyMiddleware, combineReducers,
} from 'redux';
import thunk from 'redux-thunk';

import reducers from 'AppReducers';

import INITIAL_STATE from './init';

const env = process.env.NODE_ENV;

export default function configureStore(initialState = INITIAL_STATE) {
  return createStore(
    combineReducers(reducers),
    initialState,
    compose(
      applyMiddleware(thunk),
      /* eslint-disable no-underscore-dangle */
      (env === 'development' && window.__REDUX_DEVTOOLS_EXTENSION__) ? window.__REDUX_DEVTOOLS_EXTENSION__() : compose,
    ),
  );
}
