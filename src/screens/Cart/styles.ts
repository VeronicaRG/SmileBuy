import { EdgeInsets } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

import BaseText from '@components/BaseText';

export const FullContainer = styled.View<{ safeArea: EdgeInsets }>`
  flex: 1;
  padding-top: ${({ safeArea }) => safeArea?.top || 10}px;
  background-color: ${({ theme }) => theme.colors.neutral._05};
`;

export const Container = styled.View`
  width: 100%;
  padding: 0 ${({ theme }) => theme.sizes.spaces.x4}px;
`;

export const ButtonView = styled.TouchableOpacity`
  width: 85%;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.sizes.radius.x10}px;
  box-shadow: 0px 7px 5px rgba(194, 193, 248, 0.3);
  elevation: 9;
  justify-content: center;
  align-items: center;
  margin: ${({ theme }) => theme.sizes.spaces.x2}px 0;
`;

export const Header = styled.View`
  width: 100%;
  justify-content: space-between;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ArrowView = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
`;

export const EmptyCartView = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const ViewTotal = styled.View<{ safeArea: EdgeInsets }>`
  background: ${({ theme }) => theme.colors.neutral._05};
  padding-bottom: ${({ safeArea }) => safeArea.bottom}px;
`;

export const Total = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: ${({ theme }) => theme.sizes.spaces.x2}px;
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-top-color: ${({ theme }) => theme.colors.neutral._25};
  border-bottom-color: ${({ theme }) => theme.colors.neutral._25};
`;

export const PageTitle = styled(BaseText)`
  flex: 1;
  text-align: center;
`;

export const Title = styled(BaseText)``;

export const FlatList = styled.FlatList.attrs(({ theme }) => ({
  contentContainerStyle: {
    flexGrow: 1,
    padding: theme.sizes.spaces.x4,
  },
}))`
  flex: 1;
`;
