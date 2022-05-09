import api from '@src/api';

import { Category } from '@ts/app/Category';
import { Product } from '@ts/app/Product';

export async function fetchNewProducts(): Promise<Product[]> {
  const response = await api.get('/products?limit=5');
  return response.data;
}

export async function fetchProducts(): Promise<Product[]> {
  const response = await api.get('/products');
  return response.data;
}

export async function fetchCategories(): Promise<Category[]> {
  const response = await api.get('/products/categories');
  return response.data;
}

export async function fetchProductsByCategory(
  category: Category,
): Promise<Product[]> {
  const response = await api.get(`/products/category/${category}`);
  return response.data;
}
