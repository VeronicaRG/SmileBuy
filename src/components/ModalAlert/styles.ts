import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #0003;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.View`
  width: 290px;
  height: 166px;
  background: ${({ theme }) => theme.colors.fixedNeutral.white};
  border-radius: ${({ theme }) => theme.sizes.radius.x2}px;
  justify-content: center;
`;

export const Next = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-top-color: ${({ theme }) => theme.colors.neutral._10};
  border-bottom-color: ${({ theme }) => theme.colors.neutral._10};
`;
export const Cancel = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
