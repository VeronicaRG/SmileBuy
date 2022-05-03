import React from 'react';

import Logo from '@src/assets/svgs/logo.svg';
import { useTranslation } from 'react-i18next';

import BaseText from '../../components/BaseText';
import { theme } from '../../theme';
import { Container } from './styles';

const LoginView: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Logo color="#fff" width={106} height={127} />
      <BaseText size="h2" color={theme.colors.neutral._00}>
        {t('greeting')}
      </BaseText>
    </Container>
  );
};

export default LoginView;
