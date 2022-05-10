import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { useAppSelector } from '@src/redux/hooks';
import { buyIt } from '@src/redux/reducers/cart';
import { hideDialog, showDialog } from '@src/redux/reducers/dialog';

import CartView from './view';
const Cart: React.FC = () => {
  const { items } = useAppSelector(state => state.cart);
  const { totalAmount } = useAppSelector(state => state.cart);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { t } = useTranslation();

  const openModalFinalizePurchase = () => {
    dispatch(
      showDialog({
        title: t('Modal.Title'),
        subtitle: t('Modal.Subtitle'),
        confirm: {
          message: t('Modal.Confirm'),
          action: () => {
            navigation.navigate('SaleSuccessful');
            setTimeout(() => dispatch(buyIt()), 800);
          },
        },
        cancel: {
          message: t('Modal.Cancel'),
          action: () => {
            dispatch(hideDialog());
          },
        },
      }),
    );
  };

  return (
    <CartView
      items={items}
      totalAmount={totalAmount}
      handleFinalizePurchase={openModalFinalizePurchase}
    />
  );
};

export default Cart;
