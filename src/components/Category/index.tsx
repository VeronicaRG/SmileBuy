import React from 'react';

import BaseText from '@components/BaseText';

import { theme } from '@src/theme';

import { Container } from './styles';
import { CategoryProps } from './types';

const Category: React.FC<CategoryProps> = ({ active, category, onPress }) => {
  return (
    <Container onPress={onPress} active={active}>
      {active ? (
        <BaseText align="center" size="b8" color={theme.colors.neutral._00}>
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
