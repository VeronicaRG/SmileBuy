import { combineReducers } from 'redux';

import cart from './cart';
import dialog from './dialog';
import preferences from './preferences';
import user from './user';

const reducers = combineReducers({
  user,
  preferences,
  cart,
  dialog,
});

export default reducers;
