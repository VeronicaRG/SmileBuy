import React from 'react';

import AddIcon from '@src/assets/svgs/add.svg';

import { theme } from '../../theme';
import BaseText from '../BaseText';
import { Add, Container, ImageProduct, Price, Description } from './styles';
import { ProductProps } from './types';

const Product: React.FC<ProductProps> = ({
  isBig,
  image,
  title,
  category,
  description,
  price,
  onPress,
}) => {
  console.tron.log(image);
  return (
    <Container isBig={isBig}>
      <ImageProduct source={{ uri: image }} isBig={isBig} />
      <BaseText size="b8" color={theme.colors.primary}>
        {category}
      </BaseText>
      <BaseText numberOfLines={1} size="h6">
        {title.split(' ').slice(0, 3).join(' ')}
      </BaseText>
      {isBig && (
        <>
          <Description
            numberOfLines={2}
            size="b10"
            color={theme.colors.neutral._55}>
            {description}
          </Description>
        </>
      )}
      <Price size="hn" color={theme.colors.primary} isBig={isBig}>
        {`$${price}`}
      </Price>

      <Add onPress={onPress} isBig={isBig}>
        <AddIcon color={theme.colors.primary} width={10} height={10} />
      </Add>
    </Container>
  );
};

export default Product;