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
  bn: { size: sizes.fontSizes.bn, font: fonts.bold },
  b10: { size: sizes.fontSizes.b10, font: fonts.medium },
  b14: { size: sizes.fontSizes.b10, font: fonts.medium },
};

function getTextSpaces(props: BaseTextProps) {
  if (!props.margin) return 0;
  const spaces = theme.sizes.spaces;

  if (props.margin.all) return `${spaces[props.margin.all]}px`;

  let top = props.margin.top ? spaces[props.margin.top] : 0;
  let right = props.margin.right ? spaces[props.margin.right] : 0;
  let bottom = props.margin.bottom ? spaces[props.margin.bottom] : 0;
  let left = props.margin.left ? spaces[props.margin.left] : 0;

  return `${top}px ${right}px ${bottom}px ${left}px`;
}

export const StyledText = styled(Text)<BaseTextProps>`
  font-size: ${({ size }) => fontStyles[size].size}px;
  font-family: ${({ size }) => fontStyles[size].font};
  color: ${({ color }) => color || theme.colors.neutral._99};
  margin: ${props => getTextSpaces(props)};
  ${({ align }) => align && `text-align:${align}`};
  ${({ margin }) =>
    margin?.horizontal &&
    `padding-horizontal: ${theme.sizes.spaces[margin.horizontal]}px`}
  ${({ margin }) =>
    margin?.vertical &&
    `padding-vertical:  ${theme.sizes.spaces[margin.vertical]}px`}
`;
