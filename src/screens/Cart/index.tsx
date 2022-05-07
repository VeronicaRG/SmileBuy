import React from 'react';

import { useAppSelector } from '@src/redux/hooks';

import CartView from './view';

const Cart: React.FC = () => {
  const { items } = useAppSelector(state => state.cart);
  const { totalAmount } = useAppSelector(state => state.cart);

  return <CartView items={items} totalAmount={totalAmount} />;
};

export default Cart;
