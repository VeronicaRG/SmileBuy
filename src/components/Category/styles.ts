import styled from 'styled-components/native';

import { CategoryContainersProps } from './types';

export const Container = styled.TouchableOpacity<CategoryContainersProps>`
  height: 21px;
  background-color: ${({ active, theme }) =>
    active === true
      ? theme.colors.categoryButton.active
      : theme.colors.categoryButton.inactive};
  margin-right: ${({ theme }) => theme.sizes.spaces.x1}px;
  border-radius: ${({ theme }) => theme.sizes.radius.x2}px;
  justify-content: center;
  align-items: center;
  border: ${({ active }) => (active === true ? 0 : 1)}px solid
    ${({ theme }) => theme.colors.neutral._10};
  padding: 0 ${({ theme }) => theme.sizes.spaces.x2}px;
`;
