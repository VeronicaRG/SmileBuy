import React from 'react';

import { useTheme } from 'styled-components';

import BaseText from '@components/BaseText';

import { Container } from './styles';
import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = ({ title, onPress }) => {
  const { colors } = useTheme();
  return (
    <Container onPress={onPress}>
      <BaseText size="h6" color={colors.fixNeutral.white}>
        {title}
      </BaseText>
    </Container>
  );
};

export default Button;
