import { Product } from '../../@types/app/Product';

export interface ProductBigProps {
  isBig?: boolean;
}

export interface ProductProps extends ProductBigProps, Product {
  onPress?: () => void;
}
