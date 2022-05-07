import React from 'react';

import { Alert } from 'react-native';

import BaseText from '@components/BaseText';

import AddIcon from '@src/assets/svgs/add.svg';
import ReducerIcon from '@src/assets/svgs/reducer.svg';
import { useAppDispatch } from '@src/redux/hooks';
import { addProductToCart, reduceProduct } from '@src/redux/reducers/cart';
import { theme } from '@src/theme';

import { formatToCurrency } from '../../utils/number';
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
  const dispatch = useAppDispatch();

  const alertDeleteProduct = () =>
    Alert.alert('si', 'e', [
      {
        text: 'No delete',
        style: 'cancel',
      },
      {
        text: 'Delete',
        onPress: () => dispatch(reduceProduct(props)),
      },
    ]);

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
        <BaseText numberOfLines={1} size="h6">
          {title.split(' ').slice(0, 3).join(' ')}
        </BaseText>
        <Price>
          <BaseText size="h10" color={theme.colors.primary}>
            {`${quantity}x `}
          </BaseText>
          <BaseText size="h6" color={theme.colors.primary}>
            {`${formatToCurrency(totalAmount)}`}
          </BaseText>
        </Price>
      </Info>

      <Modify>
        <Reducer
          onPress={quantity > 1 ? handlDeleteProduct : alertDeleteProduct}>
          <ReducerIcon color={theme.colors.neutral._25} width={16} height={6} />
        </Reducer>
        <Add onPress={handleAddToCart}>
          <AddIcon color={theme.colors.neutral._25} width={16} height={6} />
        </Add>
      </Modify>
    </Container>
  );
};

export default AddedProduct;
