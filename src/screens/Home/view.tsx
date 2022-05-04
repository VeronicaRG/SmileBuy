import React from 'react';

import { useTranslation } from 'react-i18next';
import { FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import BaseText from '@components/BaseText';
import Button from '@components/Button';
import Category from '@components/Category';
import Product from '@components/Product';

import Car from '@src/assets/svgs/logo.svg';
import { theme } from '@src/theme';

import {
  ButtonView,
  CarAmount,
  CarView,
  Container,
  Header,
  ProductsView,
} from './styles';
import { HomeProps } from './types';

const HomeView: React.FC<HomeProps> = ({
  productsList,
  categoriesList,
  quantity,
  goCart,
}) => {
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();

  return (
    <Container safeArea={insets}>
      <FlatList
        data={productsList}
        keyExtractor={item => `${item.id}`}
        horizontal={false}
        contentContainerStyle={{
          paddingBottom: quantity ? insets.bottom + 90 : insets.bottom,
        }}
        ListHeaderComponent={() => (
          <>
            <Header>
              <BaseText size="h4">{t('Home.Products')}</BaseText>
              <CarView onPress={goCart}>
                <Car color={theme.colors.primary} width={18} height={20} />
                {!!quantity && (
                  <CarAmount>
                    <BaseText size="b8" color={theme.colors.primary}>
                      {quantity}
                    </BaseText>
                  </CarAmount>
                )}
              </CarView>
            </Header>
            <BaseText
              style={{
                paddingLeft: theme.sizes.spaces.x4,
                marginTop: theme.sizes.spaces.x4,
                marginBottom: theme.sizes.spaces.x1,
              }}
              size="b8"
              color={theme.colors.neutral._50}>
              {t('Home.Filter')}
            </BaseText>
            <FlatList
              style={{ paddingLeft: theme.sizes.spaces.x4 }}
              data={categoriesList}
              keyExtractor={item => item}
              horizontal={true}
              renderItem={({ item }) => (
                <Category active={false} category={item} />
              )}
            />
            <ProductsView>
              <BaseText
                style={{ paddingLeft: theme.sizes.spaces.x4 }}
                size="h2">
                {t('Home.News')}
              </BaseText>
              <FlatList
                data={productsList}
                keyExtractor={item => `${item.id}`}
                horizontal={true}
                renderItem={({ item }) => (
                  <Product isBig={true} key={item.id} {...item} />
                )}
              />
            </ProductsView>
            <BaseText style={{ paddingLeft: theme.sizes.spaces.x4 }} size="h2">
              {t('Home.List')}
            </BaseText>
          </>
        )}
        numColumns={2}
        renderItem={({ item }) => <Product {...item} />}
      />
      {!!quantity && (
        <ButtonView safeArea={insets}>
          <Button onPress={goCart} title={t('Home.Car')} />
        </ButtonView>
      )}
    </Container>
  );
};

export default HomeView;
