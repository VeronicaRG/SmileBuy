import api from '@src/api';

import { Category } from '@ts/app/Category';
import { Product } from '@ts/app/Product';

export async function getNewProducts(): Promise<Product[]> {
  const response = await api.get('/products?limit=5');
  return response.data;
}

export async function getProducts(): Promise<Product[]> {
  const response = await api.get('/products');
  return response.data;
}

export async function getCategories(): Promise<Category[]> {
  const response = await api.get('/products/categories');
  return response.data;
}

export async function getProductsByCategory(
  category: Category,
): Promise<Product[]> {
  const response = await api.get(`/products/category/${category}`);
  return response.data;
}
