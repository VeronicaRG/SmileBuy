import React from 'react';

import Logo from '@src/assets/svgs/logo.svg';
import { useTranslation } from 'react-i18next';
import { Text } from 'react-native';

import { Container } from './styles';

const LoginView: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Logo color="#fff" width={106} height={127} />
      <Text>{t('greeting')}</Text>
    </Container>
  );
};

export default LoginView;
