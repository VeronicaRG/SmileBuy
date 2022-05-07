import { TextProps, TextStyle } from 'react-native';

import { theme } from '../../theme';

type FontSize = keyof typeof theme.sizes.fontSizes;

type TextSpaces = {
  left?: keyof typeof theme.sizes.spaces;
  right?: keyof typeof theme.sizes.spaces;
  top?: keyof typeof theme.sizes.spaces;
  bottom?: keyof typeof theme.sizes.spaces;
  horizontal?: keyof typeof theme.sizes.spaces;
  vertical?: keyof typeof theme.sizes.spaces;
  all?: keyof typeof theme.sizes.spaces;
};
export interface BaseTextProps extends TextProps {
  accessibilityRole?: any;
  size: FontSize;
  color?: string;
  margin?: TextSpaces;
  align?: TextStyle['textAlign'];
}
