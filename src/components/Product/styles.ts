import styled from 'styled-components/native';

import BaseText from '../BaseText';
import { ProductBigProps } from './types';

export const Container = styled.View<ProductBigProps>`
  width: ${({ isBig }) => (isBig === true ? 170 : 150)}px;
  height: ${({ isBig }) => (isBig === true ? 265 : 200)}px;
  margin: ${({ theme }) => theme.sizes.spaces.x5}px
    ${({ theme }) => theme.sizes.spaces.x4}px;
  margin-right: ${({ theme }) => theme.sizes.spaces.x8}px;
`;

export const ImageProduct = styled.Image<ProductBigProps>`
  width: ${({ isBig }) => (isBig === true ? 166 : 143)}px;
  height: ${({ isBig }) => (isBig === true ? 184 : 140)}px;
  border-radius: ${({ isBig, theme }) =>
    isBig === true ? theme.sizes.spaces.x2 : theme.sizes.spaces.x4}px;

  margin-bottom: ${({ theme }) => theme.sizes.spaces.x1}px;
`;

export const Description = styled(BaseText)`
  margin-bottom: ${({ theme }) => theme.sizes.spaces.x4}px;
`;
export const Price = styled(BaseText)<ProductBigProps>`
  margin-bottom: ${({ isBig, theme }) => (isBig ? theme.sizes.spaces.x1 : 0)}px;
  margin-top: ${({ isBig, theme }) => (isBig ? 0 : theme.sizes.spaces.x1)}px;
`;

export const Add = styled.TouchableOpacity<ProductBigProps>`
  width: 30px;
  height: 30px;
  border-radius: ${({ theme }) => theme.sizes.spaces.x5}px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  align-self: center;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  top: ${({ isBig }) => (isBig === true ? 95 : 59)}%;
  bottom: 0;
  margin: 0 ${({ theme }) => theme.sizes.spaces.x1}px;
  background: ${({ theme }) => theme.colors.neutral._00};
`;
