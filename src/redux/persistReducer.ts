import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';

import reducers from './reducers';
type RootReducerType = typeof reducers;

const persistReducers = (rootReducer: RootReducerType) => {
  const persistedReducer = persistReducer(
    {
      key: 'Smile Buy',
      storage: AsyncStorage,
      whitelist: [''],
    },
    rootReducer,
  );

  return persistedReducer;
};

export { persistReducers };
