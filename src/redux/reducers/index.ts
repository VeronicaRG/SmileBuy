import { combineReducers } from 'redux';

import auth from './auth';
import cart from './cart';
import preferences from './preferences';

const reducers = combineReducers({
  auth,
  preferences,
  cart,
});

export default reducers;
