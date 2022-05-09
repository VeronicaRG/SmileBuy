import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs({ elevation: 9 })`
  width: 80%;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.tertiary};
  box-shadow: 0px 7px 5px rgba(194, 193, 248, 0.3);
  margin-top: ${({ theme }) => theme.sizes.spaces.x4}px;
  border-radius: ${({ theme }) => theme.sizes.radius.x10}px;
  align-self: center;
  justify-content: center;
  align-items: center;
`;
