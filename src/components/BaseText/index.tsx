import React from 'react';

import { Text } from 'react-native';

import { StyledText } from './styles';
import { BaseTextProps } from './types';

const BaseText = React.forwardRef<Text, BaseTextProps>(
  ({ size, ...props }, ref) => {
    return <StyledText ref={ref} size={size} {...props} />;
  },
);

export default BaseText;
