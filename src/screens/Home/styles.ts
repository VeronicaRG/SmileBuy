import { EdgeInsets } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled.View<{ safeArea: EdgeInsets }>`
  flex: 1;
  padding-top: ${({ safeArea }) => safeArea?.top || 10}px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.sizes.spaces.x4}px;
`;

export const CarView = styled.TouchableOpacity`
  width: 26px;
  height: 24px;
  justify-content: center;
  align-items: center;
`;

export const CarAmount = styled.View`
  width: 14px;
  height: 14px;
  position: absolute;
  top: 0;
  right: 0;
  justify-content: center;
  align-items: center;
  border: 0.5px solid ${({ theme }) => theme.colors.neutral._25};
  background-color: ${({ theme }) => theme.colors.fixNeutral.white};
  border-radius: ${({ theme }) => theme.sizes.radius.x2}px;
`;

export const ProductsView = styled.View`
  width: 100%;
  margin: 25px 0;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.neutral._10};
`;

export const ButtonView = styled.View.attrs({ elevation: 9 })<{
  safeArea: EdgeInsets;
}>`
  position: absolute;
  bottom: 0;
  box-shadow: 10px 10px 10px rgba(000, 000, 000, 0.3);
  background-color: ${({ theme }) => theme.colors.fixNeutral.white};
  width: 100%;
  border-top-right-radius: ${({ theme }) => theme.sizes.radius.x6}px;
  border-top-left-radius: ${({ theme }) => theme.sizes.radius.x6}px;
  padding-bottom: ${({ safeArea }) => safeArea?.bottom || 0}px;
`;
