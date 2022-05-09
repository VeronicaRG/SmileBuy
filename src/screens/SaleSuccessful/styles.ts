import { EdgeInsets } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

import { SaleSuccessfulProps } from './types';

export const Container = styled.View<{ safeArea: EdgeInsets }>`
  flex: 1;
  padding-bottom: ${({ safeArea }) => safeArea?.top || 10}px;
  background-color: ${({ theme }) => theme.colors.primary};
  justify-content: center;
  align-items: center;
`;

export const CheckView = styled.View`
  width: 160px;
  height: 160px;
  justify-content: center;
  align-items: center;
  border: 5px solid ${({ theme }) => theme.colors.fixedNeutral.white};
  border-radius: ${({ theme }) => theme.sizes.radius.x30}px;
`;

export const Space = styled.View<SaleSuccessfulProps>`
  flex: ${({ flex }) => flex || 1};
`;
