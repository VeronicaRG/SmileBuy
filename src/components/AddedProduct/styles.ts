import styled from 'styled-components/native';

export const Container = styled.View`
  height: 72px;
  background-color: ${({ theme }) => theme.colors.secondary};
  margin: ${({ theme }) => theme.sizes.spaces.x2}px;
  padding: ${({ theme }) => theme.sizes.spaces.x2}px;
  border-radius: ${({ theme }) => theme.sizes.radius.x3}px;
  flex-direction: row;
  align-items: center;
`;

export const ImageProduct = styled.Image.attrs({ elevation: 9 })`
  width: 38px;
  height: 50px;
  box-shadow: 0px 7px 5px rgba(194, 193, 248, 0.3);
  border-radius: ${({ theme }) => theme.sizes.radius.x2}px;
`;

export const Info = styled.View`
  width: 60%;
  margin: ${({ theme }) => theme.sizes.spaces.x2}px;
`;

export const Price = styled.View`
  flex-direction: row;
  align-items: flex-end;
  margin: ${({ theme }) => theme.sizes.spaces.x1}px;
`;

export const Modify = styled.View`
  flex-direction: row;
`;

export const Reducer = styled.TouchableOpacity`
  width: 32px;
  height: 16px;
  border-top-left-radius: ${({ theme }) => theme.sizes.radius.x2}px;
  border-bottom-left-radius: ${({ theme }) => theme.sizes.radius.x2}px;
  border: 1px solid ${({ theme }) => theme.colors.neutral._25};
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.neutral._00};
`;

export const Add = styled.TouchableOpacity`
  width: 32px;
  height: 16px;
  border-top-right-radius: ${({ theme }) => theme.sizes.radius.x2}px;
  border-bottom-right-radius: ${({ theme }) => theme.sizes.radius.x2}px;
  border: 1px solid ${({ theme }) => theme.colors.neutral._25};
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.neutral._00};
`;
