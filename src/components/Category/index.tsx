import React from 'react';

import { useTheme } from 'styled-components';

import BaseText from '@components/BaseText';

import { Container } from './styles';
import { CategoryProps } from './types';

const Category: React.FC<CategoryProps> = ({ active, category, onPress }) => {
  const { colors } = useTheme();
  return (
    <Container onPress={onPress} active={active}>
      {active ? (
        <BaseText align="center" size="b8" color={colors.fixNeutral.white}>
          {category}
        </BaseText>
      ) : (
        <BaseText size="b8" color={colors.neutral._40}>
          {category}
        </BaseText>
      )}
    </Container>
  );
};

export default Category;
