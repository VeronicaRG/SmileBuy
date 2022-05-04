import React, { useEffect, useState } from 'react';

import { getCategories, getProducts } from '@src/Services/products';

import { Category } from '@ts/app/Category';
import { Product } from '@ts/app/Product';

import { useAppSelector } from '../../redux/hooks';
import HomeView from './view';

const Home: React.FC = () => {
  const [productsList, setProductsList] = useState<Product[]>([]);
  const [categoriesList, setCategoriesList] = useState<Category[]>([]);
  const { quantity } = useAppSelector(state => state.cart);

  async function products() {
    const list = await getProducts();
    setProductsList(list);
  }
  async function categories() {
    const list = await getCategories();
    setCategoriesList(list);
  }

  useEffect(() => {
    products();
    categories();
  }, []);

  return (
    <HomeView
      productsList={productsList}
      categoriesList={categoriesList}
      quantity={quantity}
    />
  );
};

export default Home;
