import { EdgeInsets } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled.View<{ safeArea: EdgeInsets }>`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.sizes.spaces.x5}px;
  padding-top: ${({ safeArea }) => safeArea?.top || 10}px;
  background: ${({ theme }) => theme.colors.primary};
`;

export const ViewButtonChangeLanguage = styled.TouchableOpacity`
  width: 100%;
  height: 80px;
`;

export const ChangeLanguage = styled.TouchableOpacity`
  width: 60px;
  height: 25px;
  border-radius: ${({ theme }) => theme.sizes.radius.x6}px;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.fixNeutral.white};
  align-self: flex-end;
`;

export const Input = styled.TextInput.attrs(({ theme }) => {
  return { placeholderTextColor: theme.colors.fixNeutral.grey };
})`
  border-radius: ${({ theme }) => theme.sizes.radius.x4}px;
  font-family: ${({ theme }) => theme.fonts.semiBold};
  background-color: ${({ theme }) => theme.colors.fixNeutral.white};
  padding: ${({ theme }) => theme.sizes.spaces.x2}px;
  width: 80%;
  height: 50px;
`;
export const Space = styled.View<{ flex?: number }>`
  flex: ${({ flex }) => flex || 1};
`;
