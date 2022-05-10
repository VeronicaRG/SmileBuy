import React from 'react';

import { useTranslation } from 'react-i18next';
import { StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from 'styled-components';

import BaseText from '@components/BaseText';
import Button from '@components/Button';

import Logo from '@src/assets/svgs/logo.svg';

import {
  ChangeLanguage,
  Container,
  Input,
  ViewButtonChangeLanguage,
  Space,
} from './styles';
import { LoginProps } from './types';

const LoginView: React.FC<LoginProps> = ({
  changeLanguage,
  valueNickname,
  onChangeTextNickname,
  onPress,
}) => {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <Container safeArea={insets}>
      <StatusBar barStyle={'light-content'} />
      <ViewButtonChangeLanguage>
        <ChangeLanguage onPress={changeLanguage}>
          <BaseText align="center" color={colors.fixedNeutral.white} size="bn">
            {t('Language')}
          </BaseText>
        </ChangeLanguage>
      </ViewButtonChangeLanguage>
      <Space flex={2} />
      <Logo color={colors.fixedNeutral.white} width={106} height={127} />
      <Input
        value={valueNickname}
        onChangeText={onChangeTextNickname}
        placeholder={t('Login.Nickname')}
      />

      <Button title={t('Login.Button')} onPress={onPress} />
      <Space flex={3} />
    </Container>
  );
};

export default LoginView;
