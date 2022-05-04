import React from 'react';

import { theme } from '../../theme';
import BaseText from '../BaseText';
import { Container } from './styles';
import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = ({ title, onPress }) => {
  return (
    <Container onPress={onPress}>
      <BaseText size="h6" color={theme.colors.neutral._00}>
        {title}
      </BaseText>
    </Container>
  );
};

export default Button;
