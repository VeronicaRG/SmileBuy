import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { DialogStore } from '../types';

const initialState: DialogStore = {};

export const dialogSlice = createSlice({
  name: 'dialog',
  initialState: initialState,
  reducers: {
    showDialog: (state, action: PayloadAction<DialogStore['content']>) => {
      state.content = action.payload;
    },
    hideDialog: state => {
      delete state.content;
    },
  },
});

export const { showDialog, hideDialog } = dialogSlice.actions;

export default dialogSlice.reducer;
