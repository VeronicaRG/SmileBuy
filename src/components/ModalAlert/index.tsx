import React from 'react';

import { Modal } from 'react-native';
import { useDispatch } from 'react-redux';
import { useTheme } from 'styled-components';

import BaseText from '@components/BaseText';

import { useAppSelector } from '@src/redux/hooks';
import { hideDialog } from '@src/redux/reducers/dialog';

import { Next, Cancel, Container, Content } from './styles';

const ModalAlert: React.FC = () => {
  const { content } = useAppSelector(state => state.dialog);
  const modalVisible = !!content;
  const { title, subtitle, confirm, cancel } = content || {};
  const dispatch = useDispatch();
  const { colors } = useTheme();

  const closeModal = () => {
    dispatch(hideDialog());
  };

  const handleConfirm = () => {
    confirm?.action();
    closeModal();
  };

  const handleCancel = () => {
    cancel?.action();
    closeModal();
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={closeModal}>
      <Container>
        <Content>
          <BaseText
            margin={{ top: 'x6' }}
            align="center"
            size="h6"
            color={colors.fixNeutral.grey}>
            {title}
          </BaseText>

          <BaseText
            margin={{ all: 'x2' }}
            align="center"
            size="b10"
            color={colors.neutral._40}>
            {subtitle}
          </BaseText>
          <Next onPress={handleConfirm}>
            <BaseText size="bn" color={colors.feedback.positive}>
              {confirm?.message}
            </BaseText>
          </Next>
          <Cancel onPress={handleCancel}>
            <BaseText size="bn" color={colors.feedback.negative}>
              {cancel?.message}
            </BaseText>
          </Cancel>
        </Content>
      </Container>
    </Modal>
  );
};

export default ModalAlert;
