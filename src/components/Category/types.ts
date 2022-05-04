import { Category } from '../../@types/app/Category';

export interface CategoryContainersProps {
  active: boolean;
}

export interface CategoryProps extends CategoryContainersProps {
  category: Category;
}
