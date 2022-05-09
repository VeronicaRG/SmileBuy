import React from 'react';

import { useColorScheme } from 'react-native';
import { ThemeProvider } from 'styled-components/native';

import { colors } from './constants/colors';
import { fonts } from './constants/fonts';
import { sizes } from './constants/sizes';

export const theme = {
  colors: colors.light,
  fonts,
  sizes,
} as const;

export const Theme: React.FC = props => {
  const deviceTheme = useColorScheme() || 'light';
  const themeColors = colors[deviceTheme];

  return <ThemeProvider theme={{ ...theme, colors: themeColors }} {...props} />;
};

export default Theme;
