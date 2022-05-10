/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback } from 'react';

import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from 'styled-components';

import BaseText from '@components/BaseText';
import Button from '@components/Button';
import Category from '@components/Category';
import Product from '@components/Product';
import SkeletonHome from '@components/SkeletonHome';

import Car from '@src/assets/svgs/logo.svg';

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
  newProductsList,
  productsList,
  categoriesList,
  quantity,
  onPressCategory,
  selectedCategoryIndex,
  productsByCategory,
}) => {
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const { colors, sizes } = useTheme();

  const HeaderComponent = useCallback(
    () => (
      <>
        <Header>
          <BaseText color={colors.neutral._99} size="h4">
            {t('Home.Products')}
          </BaseText>
          <CarView onPress={() => navigation.navigate('Cart')}>
            <Car color={colors.logo} width={18} height={20} />
            {!!quantity && (
              <CarAmount>
                <BaseText size="b8" color={colors.primary}>
                  {quantity}
                </BaseText>
              </CarAmount>
            )}
          </CarView>
        </Header>
        <BaseText
          style={{
            paddingLeft: sizes.spaces.x4,
            marginTop: sizes.spaces.x4,
            marginBottom: sizes.spaces.x1,
          }}
          size="b8"
          color={colors.neutral._50}>
          {t('Home.Filter')}
        </BaseText>
        <FlatList
          style={{ paddingLeft: sizes.spaces.x4 }}
          data={categoriesList}
          keyExtractor={item => item}
          horizontal={true}
          ListEmptyComponent={() => <SkeletonHome place="categories" />}
          renderItem={({ item: category, index }) => (
            <Category
              onPress={() => onPressCategory(category)}
              active={index === selectedCategoryIndex}
              category={category}
            />
          )}
        />
        {!selectedCategoryIndex && (
          <ProductsView>
            <BaseText
              color={colors.neutral._99}
              style={{ paddingLeft: sizes.spaces.x4 }}
              size="h2">
              {t('Home.News')}
            </BaseText>
            <FlatList
              data={newProductsList}
              keyExtractor={item => `${item.id}`}
              horizontal={true}
              ListEmptyComponent={() => <SkeletonHome place="newProducts" />}
              renderItem={({ item }) => (
                <Product isBig={true} key={item.id} {...item} />
              )}
            />
          </ProductsView>
        )}
        <BaseText
          color={colors.neutral._99}
          margin={{
            left: 'x4',
            top: selectedCategoryIndex ? 'x4' : undefined,
          }}
          size="h2">
          {selectedCategoryIndex
            ? categoriesList[selectedCategoryIndex]
            : t('Home.List')}
        </BaseText>
      </>
    ),
    [
      t,
      sizes,
      colors,
      quantity,
      categoriesList,
      newProductsList,
      selectedCategoryIndex,
    ],
  );

  return (
    <Container safeArea={insets}>
      <FlatList
        data={selectedCategoryIndex ? productsByCategory : productsList}
        keyExtractor={item => `${item.id}`}
        horizontal={false}
        contentContainerStyle={{
          paddingBottom: quantity ? insets.bottom + 90 : insets.bottom,
        }}
        ListHeaderComponent={HeaderComponent}
        ListEmptyComponent={() => <SkeletonHome />}
        numColumns={2}
        renderItem={({ item }) => <Product {...item} />}
      />
      {!!quantity && (
        <ButtonView safeArea={insets}>
          <Button
            onPress={() => {
              navigation.navigate('Cart');
            }}
            title={t('Home.Car')}
          />
        </ButtonView>
      )}
    </Container>
  );
};

export default HomeView;
