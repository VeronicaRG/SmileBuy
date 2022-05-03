import AsyncStorage from '@react-native-async-storage/async-storage';
import { Reducer } from 'redux';
import { persistReducer } from 'redux-persist';

const persistReducers = (reducers: Reducer<any>) => {
  const persistedReducer = persistReducer(
    {
      key: 'Smile Buy',
      storage: AsyncStorage,
      whitelist: [''],
    },
    reducers,
  );

  return persistedReducer;
};

export { persistReducers };