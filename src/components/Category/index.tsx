import React from 'react';

import { theme } from '../../theme';
import BaseText from '../BaseText';
import { Container } from './styles';
import { CategoryProps } from './types';

const Category: React.FC<CategoryProps> = ({ active, category }) => {
  return (
    <Container active={active}>
      {active ? (
        <BaseText
          style={{ textAlign: 'center' }}
          size="b8"
          color={theme.colors.neutral._00}>
          {category}
        </BaseText>
      ) : (
        <BaseText size="b8" color={theme.colors.neutral._40}>
          {category}
        </BaseText>
      )}
    </Container>
  );
};

export default Category;
