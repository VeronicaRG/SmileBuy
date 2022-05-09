import React from 'react';

import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components';

import BaseText from '@components/BaseText';

import AddIcon from '@src/assets/svgs/add.svg';
import ReducerIcon from '@src/assets/svgs/reducer.svg';
import { useAppDispatch } from '@src/redux/hooks';
import { addProductToCart, reduceProduct } from '@src/redux/reducers/cart';
import { hideDialog, showDialog } from '@src/redux/reducers/dialog';
import { formatToCurrency } from '@src/utils/number';

import {
  Add,
  Container,
  Reducer,
  ImageProduct,
  Info,
  Modify,
  Price,
} from './styles';
import { AddedProductProps } from './types';

const AddedProduct: React.FC<AddedProductProps> = props => {
  const { image, title, totalAmount, quantity } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { colors } = useTheme();

  const openModalDeleteProduct = () => {
    dispatch(
      showDialog({
        title: t('Cart.Modal.Title'),
        subtitle: t('Cart.Modal.Subtitle'),
        confirm: {
          message: t('Cart.Modal.Confirm'),
          action: () => {
            dispatch(reduceProduct(props));
          },
        },
        cancel: {
          message: t('Cart.Modal.Cancel'),
          action: () => {
            dispatch(hideDialog());
          },
        },
      }),
    );
  };

  const handleAddToCart = () => {
    dispatch(addProductToCart(props));
  };

  const handlDeleteProduct = () => {
    dispatch(reduceProduct(props));
  };

  return (
    <Container>
      <ImageProduct source={{ uri: image }} />

      <Info>
        <BaseText color={colors.fixedNeutral.black} numberOfLines={1} size="h6">
          {title.split(' ').slice(0, 3).join(' ')}
        </BaseText>
        <Price>
          <BaseText size="h10" color={colors.primary}>
            {`${quantity}x `}
          </BaseText>
          <BaseText size="h6" color={colors.primary}>
            {`${formatToCurrency(totalAmount)}`}
          </BaseText>
        </Price>
      </Info>

      <Modify>
        <Reducer
          onPress={quantity > 1 ? handlDeleteProduct : openModalDeleteProduct}>
          <ReducerIcon color={colors.neutral._25} width={16} height={6} />
        </Reducer>
        <Add onPress={handleAddToCart}>
          <AddIcon color={colors.neutral._25} width={16} height={6} />
        </Add>
      </Modify>
    </Container>
  );
};

export default AddedProduct;
