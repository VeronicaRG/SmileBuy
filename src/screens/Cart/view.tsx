import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import { useTheme } from 'styled-components';

import AddedProduct from '@components/AddedProduct';
import BaseText from '@components/BaseText';
import Button from '@components/Button';

import Arrow from '@src/assets/svgs/arrow.svg';
import Logo from '@src/assets/svgs/logo.svg';
import SettingsIcon from '@src/assets/svgs/settings.svg';
import { buyIt } from '@src/redux/reducers/cart';
import { hideDialog, showDialog } from '@src/redux/reducers/dialog';
import { ItemCart } from '@src/redux/types';
import { formatToCurrency } from '@src/utils/number';

import {
  ButtonView,
  Header,
  ArrowView,
  EmptyCartView,
  Total,
  FullContainer,
  ViewTotal,
  FlatList,
  Row,
  PageTitle,
  Settings,
} from './styles';
import { CartProps } from './types';

const CartView: React.FC<CartProps> = ({ items, totalAmount }) => {
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { colors } = useTheme();

  const openModalFinalizePurchase = () => {
    dispatch(
      showDialog({
        title: t('Modal.Title'),
        subtitle: t('Modal.Subtitle'),
        confirm: {
          message: t('Modal.Confirm'),
          action: () => {
            navigation.navigate('SaleSuccessful');
            dispatch(buyIt());
          },
        },
        cancel: {
          message: t('Modal.Cancel'),
          action: () => {
            dispatch(hideDialog());
          },
        },
      }),
    );
  };

  return (
    <FullContainer safeArea={insets}>
      <Header>
        <Row>
          <ArrowView onPress={() => navigation.goBack()}>
            <Arrow color={colors.neutral._55} width={10} height={10} />
          </ArrowView>
          <PageTitle size="h10" color={colors.neutral._55}>
            {t('Cart.Cart')}
          </PageTitle>
          <Settings
            onPress={() => {
              navigation.navigate('Settings');
            }}>
            <SettingsIcon color={colors.neutral._55} width={20} height={20} />
          </Settings>
        </Row>
        <BaseText
          size="h2"
          margin={{ horizontal: 'x4' }}
          color={colors.neutral._99}>
          {t('Cart.MyCart')}
        </BaseText>
      </Header>
      <FlatList<React.ElementType>
        data={items}
        keyExtractor={(item: ItemCart) => `${item?.product?.id}`}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <EmptyCartView>
            <Logo color={colors.neutral._25} width={50} height={70} />
            <BaseText
              align="center"
              size="h6"
              margin={{ horizontal: 'x20' }}
              color={colors.neutral._45}>
              {t('Cart.EmptyCart')}
            </BaseText>
            <ButtonView onPress={navigation.goBack}>
              <BaseText size="h6" color={colors.fixNeutral.white}>
                {t('Cart.AddItem')}
              </BaseText>
            </ButtonView>
          </EmptyCartView>
        )}
        renderItem={({ item }: { item: ItemCart }) => (
          <AddedProduct
            product={item.product}
            quantity={item.quantity}
            totalAmount={item.totalAmount}
            {...item?.product}
          />
        )}
      />
      {!!totalAmount && (
        <ViewTotal safeArea={insets}>
          <Total>
            <BaseText size="h6" color={colors.neutral._99}>
              {`${t('Cart.Total')}:`}
            </BaseText>
            <BaseText size="h6" color={colors.neutral._99}>
              {formatToCurrency(totalAmount)}
            </BaseText>
          </Total>
          <Button
            onPress={openModalFinalizePurchase}
            title={t('Cart.Finish')}
          />
        </ViewTotal>
      )}
    </FullContainer>
  );
};

export default CartView;
