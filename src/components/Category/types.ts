import { Category } from '@ts/app/Category';

export interface CategoryContainersProps {
  active: boolean;
}

export interface CategoryProps extends CategoryContainersProps {
  category: Category;
  onPress: () => void;
}
