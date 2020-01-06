import React from 'react';
import { createStore } from 'redux';

import CharactersReducer from './reducer';
const store = createStore(
  CharactersReducer,
  window.devToolsExtension && window.devToolsExtension()
);

export default store;
