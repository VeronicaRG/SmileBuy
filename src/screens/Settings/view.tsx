import React from 'react';

import { useTranslation } from 'react-i18next';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from 'styled-components';

import BaseText from '@components/BaseText';

import ArrowIcon from '@src/assets/svgs/arrow.svg';
import { useAppSelector } from '@src/redux/hooks';

import {
  Option,
  GoBack,
  Container,
  Space,
  PagTitle,
  Header,
  GreetingView,
} from './styles';
import { SettingsProps } from './types';

const SettingsView: React.FC<SettingsProps> = ({
  goback,
  changeLanguage,
  Logout,
}) => {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const insets = useSafeAreaInsets();
  const { user } = useAppSelector(state => state.user);

  return (
    <Container safeArea={insets}>
      <Header>
        <GoBack onPress={goback}>
          <ArrowIcon color={colors.neutral._55} width={10} height={10} />
        </GoBack>
        <PagTitle
          size="h10"
          color={colors.neutral._55}
          margin={{ right: 'x8' }}>
          {t('Settings.Header')}
        </PagTitle>
      </Header>
      <Space flex={3} />
      <GreetingView>
        <BaseText size="h6" color={colors.neutral._55}>
          {t('Settings.Hello')}
        </BaseText>
        <BaseText size="h2" color={colors.neutral._99}>
          {user?.nickname}
        </BaseText>
      </GreetingView>
      <Space flex={1} />
      <Option onPress={changeLanguage}>
        <BaseText size="h6" color={colors.fixNeutral.white}>
          {t('Settings.Language')}
        </BaseText>
        <BaseText size="b10" color={colors.fixNeutral.white}>
          {t('Settings.ChangeLanguage')}
        </BaseText>
      </Option>
      <Option onPress={Logout}>
        <BaseText size="h6" color={colors.fixNeutral.white}>
          {t('Settings.Logout')}
        </BaseText>
      </Option>
      <Space flex={4} />
    </Container>
  );
};

export default SettingsView;
