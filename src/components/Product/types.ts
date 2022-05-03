export interface ProductBigProps {
  isBig?: boolean;
}

export interface ProductProps extends ProductBigProps {
  image: string;
  title: string;
  category: string;
  description: string;
  price: string;
  onPress?: () => void;
}
