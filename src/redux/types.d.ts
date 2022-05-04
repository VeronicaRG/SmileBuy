import { Product } from '../@types/app/Product';
import { User } from '../@types/app/User';

export type AuthStore = {
  user?: User;
};

export type PreferencesStore = {
  language: string;
};

export type ItemCart = {
  product: Product;
  quantity: number;
  totalAmount: number;
};

export type CartStore = {
  items: ItemCart[];
  quantity: number;
  totalAmount: number;
};
