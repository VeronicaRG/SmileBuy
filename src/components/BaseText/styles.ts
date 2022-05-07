import { Text } from 'react-native';
import styled from 'styled-components/native';

import { theme } from '../../theme';
import { BaseTextProps } from './types';

const { sizes, fonts } = theme;

const fontStyles: { [index: string]: { size: number; font: string } } = {
  h2: { size: sizes.fontSizes.h2, font: fonts.semiBold },
  h3: { size: sizes.fontSizes.h2, font: fonts.bold },
  hn: { size: sizes.fontSizes.hn, font: fonts.bold },
  h4: { size: sizes.fontSizes.h4, font: fonts.bold },
  h10: { size: sizes.fontSizes.h10, font: fonts.bold },
  h6: { size: sizes.fontSizes.h6, font: fonts.bold },
  b8: { size: sizes.fontSizes.b8, font: fonts.bold },
  b10: { size: sizes.fontSizes.b10, font: fonts.medium },
  b14: { size: sizes.fontSizes.b10, font: fonts.medium },
};

function getTextSpaces(props: BaseTextProps) {
  if (!props.margin) return 0;
  const spaces = theme.sizes.spaces;
  if (props.margin.all) return `${spaces[props.margin.all]}px`;
  if (props.margin.top) return `${spaces[props.margin.top]}px 0 0 0`;
  if (props.margin.right) return ` 0 ${spaces[props.margin.right]}px 0 0`;
  if (props.margin.bottom) return `0 0 ${spaces[props.margin.bottom]}px 0`;
  if (props.margin.left) return `0 0 0 ${spaces[props.margin.left]}`;
  if (props.margin.vertical) return `${spaces[props.margin.vertical]}px 0`;
  if (props.margin.horizontal) return `0 ${spaces[props.margin.horizontal]}px`;
  return 0;
}

export const StyledText = styled(Text)<BaseTextProps>`
  font-size: ${({ size }) => fontStyles[size].size}px;
  font-family: ${({ size }) => fontStyles[size].font};
  color: ${({ color }) => color || theme.colors.neutral._99};
  margin: ${props => getTextSpaces(props)};
  ${({ align }) => align && `text-align:${align}`}
`;
