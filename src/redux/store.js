import { createStore } from 'redux';

// Logger with default options
// import logger from 'redux-logger';

import reducer from './reducer';

export default function configureStore(initialState) {
  const store = createStore(reducer, initialState);
  return store;
}
