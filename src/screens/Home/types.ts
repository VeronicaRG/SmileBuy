import { Category } from '@ts/app/Category';
import { Product } from '@ts/app/Product';

export interface HomeProps {
  newProductsList: Product[];
  productsList: Product[];
  categoriesList: Category[];
  quantity: number;
  goCart?: () => {};
}
