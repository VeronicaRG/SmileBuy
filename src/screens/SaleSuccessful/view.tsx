import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from 'styled-components';

import BaseText from '@components/BaseText';
import Button from '@components/Button';

import Check from '@src/assets/svgs/check.svg';

import { CheckView, Container, Space } from './styles';
import { SaleSuccessfulProps } from './types';

const SaleSuccessfulView: React.FC<SaleSuccessfulProps> = () => {
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const { colors } = useTheme();

  return (
    <Container safeArea={insets}>
      <Space flex={4} />
      <CheckView>
        <Check color="#fff" width={60} height={60} />
      </CheckView>
      <BaseText
        margin={{ top: 'x8' }}
        color={colors.fixedNeutral.white}
        size="h3">
        {t('SaleSuccessful.Successful')}
      </BaseText>
      <BaseText
        margin={{ top: 'x2' }}
        color={colors.fixedNeutral.white}
        size="b14">
        {t('SaleSuccessful.Description')}
      </BaseText>
      <Space flex={2} />
      <Button
        onPress={() => navigation.navigate('Home')}
        title={t('SaleSuccessful.Continue')}
      />
    </Container>
  );
};

export default SaleSuccessfulView;
