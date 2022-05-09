import React from 'react';

import { useTheme } from 'styled-components';

import BaseText from '@components/BaseText';

import AddIcon from '@src/assets/svgs/add.svg';
import { useAppDispatch } from '@src/redux/hooks';
import { addProductToCart } from '@src/redux/reducers/cart';
import { formatToCurrency } from '@src/utils/number';

import { Add, Container, ImageProduct, Price, Description } from './styles';
import { ProductProps } from './types';

const Product: React.FC<ProductProps> = props => {
  const { isBig, image, title, category, description, price } = props;
  const dispatch = useAppDispatch();
  const { colors } = useTheme();

  const handleAddToCart = () => {
    dispatch(addProductToCart(props));
  };

  return (
    <Container isBig={isBig}>
      <ImageProduct source={{ uri: image }} isBig={isBig} />
      <BaseText size="b8" color={colors.primary}>
        {category}
      </BaseText>
      <BaseText color={colors.neutral._99} numberOfLines={1} size="h6">
        {title.split(' ').slice(0, 3).join(' ')}
      </BaseText>
      {isBig && (
        <>
          <Description numberOfLines={2} size="b10" color={colors.neutral._55}>
            {description}
          </Description>
        </>
      )}
      <Price size="hn" color={colors.primary} isBig={isBig}>
        {`${formatToCurrency(price)}`}
      </Price>

      <Add onPress={handleAddToCart} isBig={isBig}>
        <AddIcon color={colors.primary} width={10} height={10} />
      </Add>
    </Container>
  );
};

export default Product;
