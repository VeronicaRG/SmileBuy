import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User } from '@ts/app/User';

import { UserStore } from '../types';

const initialState: UserStore = {};

export const authSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    setUserLogout: () => {
      return initialState;
    },
  },
});

export const { setUser, setUserLogout } = authSlice.actions;

export default authSlice.reducer;
