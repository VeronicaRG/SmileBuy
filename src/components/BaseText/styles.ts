import { Text } from 'react-native';
import styled from 'styled-components/native';

import { theme } from '../../theme';
import { BaseTextProps } from './types';

const { sizes, fonts } = theme;

const fontStyles: { [index: string]: { size: number; font: string } } = {
  h2: { size: sizes.fontSizes.h2, font: fonts.semiBold },
  hn: { size: sizes.fontSizes.hn, font: fonts.medium },
  h4: { size: sizes.fontSizes.h4, font: fonts.bold },
  h10: { size: sizes.fontSizes.h10, font: fonts.bold },
  h6: { size: sizes.fontSizes.h6, font: fonts.bold },
  b8: { size: sizes.fontSizes.b8, font: fonts.bold },
  b10: { size: sizes.fontSizes.b10, font: fonts.medium },
};

export const StyledText = styled(Text)<BaseTextProps>`
  font-size: ${({ size }) => fontStyles[size].size}px;
  font-family: ${({ size }) => fontStyles[size].font};
  color: ${({ color }) => color || theme.colors.neutral._99};
`;
