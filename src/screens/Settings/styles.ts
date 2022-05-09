import { EdgeInsets } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

import BaseText from '@components/BaseText';

export const Container = styled.View<{ safeArea: EdgeInsets }>`
  flex: 1;
  padding: ${({ theme }) => theme.sizes.spaces.x4}px;
  background-color: ${({ theme }) => theme.colors.background};
  padding-top: ${({ safeArea }) => safeArea?.top || 10}px;
`;

export const GreetingView = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const GoBack = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
`;

export const PagTitle = styled(BaseText)`
  flex: 1;
  text-align: center;
`;

export const Option = styled.TouchableOpacity.attrs({ elevation: 9 })`
  width: 100%;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.tertiary};
  border-radius: ${({ theme }) => theme.sizes.radius.x6}px;
  box-shadow: 0px 7px 5px rgba(194, 193, 248, 0.3);
  padding: ${({ theme }) => theme.sizes.spaces.x4}px;
  margin: ${({ theme }) => theme.sizes.spaces.x2}px 0;
`;

export const Space = styled.View<{ flex?: number }>`
  flex: ${({ flex }) => flex || 1};
`;
