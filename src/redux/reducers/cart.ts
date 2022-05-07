import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Product } from '@ts/app/Product';

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
    reduceProduct: (state, action: PayloadAction<Product>) => {
      const product = action.payload;
      const productOnCart = state.items.find(
        itemCart => itemCart.product.id === product.id,
      );
      if (productOnCart && productOnCart.quantity > 1) {
        productOnCart.quantity--;
        productOnCart.totalAmount -= product.price;
        state.totalAmount -= product.price;
      } else {
        state.items = state.items.filter(
          itemCart => itemCart.product.id !== product.id,
        );
        state.quantity--;
        if (state.items.length) {
          state.totalAmount -= product.price;
          state.quantity--;
        } else {
          state.totalAmount = 0;
          state.quantity = 0;
        }
      }
    },
  },
});

export const { addProductToCart, reduceProduct } = cartSlice.actions;

export default cartSlice.reducer;
