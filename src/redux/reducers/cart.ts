import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Product } from '../../@types/app/Product';
import { CartStore } from '../types';

const initialState: CartStore = {
  items: [],
  quantity: 0,
  totalAmount: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<Product>) => {
      const product = action.payload;

      const productOnCart = state.items.find(
        itemCart => itemCart.product.id === product.id,
      );

      if (productOnCart) {
        productOnCart.quantity += 1;
        productOnCart.totalAmount = productOnCart.quantity * product.price;
      } else {
        state.items.push({
          product: product,
          totalAmount: product.price,
          quantity: 1,
        });
      }

      state.quantity = state.quantity + 1;
      state.totalAmount = state.totalAmount + product.price;
    },
  },
});

export const { addProductToCart } = cartSlice.actions;

export default cartSlice.reducer;
