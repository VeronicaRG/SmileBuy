import { ItemCart } from '@src/redux/types';

export interface CartProps {
  items: ItemCart[];
  totalAmount: number;
}
