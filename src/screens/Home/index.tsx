import React, { useEffect, useState } from 'react';

import {
  getCategories,
  getNewProducts,
  getProducts,
  getProductsByCategory,
} from '@src/Services/products';

import { Category } from '@ts/app/Category';
import { Product } from '@ts/app/Product';

import { useAppSelector } from '../../redux/hooks';
import HomeView from './view';

const Home: React.FC = () => {
  const [newProductsList, setNewProductsList] = useState<Product[]>([]);
  const [productsList, setProductsList] = useState<Product[]>([]);
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const [categoriesList, setCategoriesList] = useState<Category[]>([]);
  const { quantity } = useAppSelector(state => state.cart);
  const [productsByCategory, setProductsByCategory] = useState<Product[]>([]);

  async function newProducts() {
    const list = await getNewProducts();
    setNewProductsList(list);
  }
  async function products() {
    const list = await getProducts();
    setProductsList(list);
  }
  async function categories() {
    const list = await getCategories();
    setCategoriesList(['all', ...list]);
  }
  async function onPressCategory(category: string) {
    setSelectedCategoryIndex(
      categoriesList.findIndex(_category => category === _category),
    );
    const list = await getProductsByCategory(category);
    setProductsByCategory(list);
  }

  useEffect(() => {
    newProducts();
    products();
    categories();
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
