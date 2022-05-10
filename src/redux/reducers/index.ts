import { combineReducers } from 'redux';

import auth from './auth';
import cart from './cart';
import dialog from './dialog';
import preferences from './preferences';

const reducers = combineReducers({
  auth,
  preferences,
  cart,
  dialog,
});

export default reducers;
