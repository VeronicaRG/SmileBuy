import { ItemCart } from '@src/redux/types';

import { Product } from '@ts/app/Product';

export interface AddedProductProps extends Product, ItemCart {
  add?: () => void;
  delete?: () => void;
}
