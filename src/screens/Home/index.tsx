import React, { useEffect, useState } from 'react';

import { useAppSelector } from '@src/redux/hooks';
import {
  fetchCategories,
  fetchNewProducts,
  fetchProducts,
  fetchProductsByCategory,
} from '@src/Services/products';

import { Category } from '@ts/app/Category';
import { Product } from '@ts/app/Product';

import HomeView from './view';

const Home: React.FC = () => {
  const [newProductsList, setNewProductsList] = useState<Product[]>([]);
  const [productsList, setProductsList] = useState<Product[]>([]);
  const [productsByCategory, setProductsByCategory] = useState<Product[]>([]);

  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const [categoriesList, setCategoriesList] = useState<Category[]>([]);

  const { quantity } = useAppSelector(state => state.cart);

  async function getNewProducts() {
    const list = await fetchNewProducts();
    setNewProductsList(list);
  }

  async function getProducts() {
    const list = await fetchProducts();
    setProductsList(list);
  }

  async function getCategories() {
    const list = await fetchCategories();
    setCategoriesList(['Últimos', ...list]);
  }

  async function onPressCategory(category: string) {
    setSelectedCategoryIndex(
      categoriesList.findIndex(_category => category === _category),
    );
    const list = await fetchProductsByCategory(category);
    setProductsByCategory(list);
  }

  useEffect(() => {
    getNewProducts();
    getProducts();
    getCategories();
  }, []);

  return (
    <HomeView
      newProductsList={newProductsList}
      productsList={productsList}
      categoriesList={categoriesList}
      quantity={quantity}
      onPressCategory={onPressCategory}
      selectedCategoryIndex={selectedCategoryIndex}
      productsByCategory={productsByCategory}
    />
  );
};

export default Home;
