import { Product } from '@ts/app/Product';
import { User } from '@ts/app/User';

export type UserStore = {
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

export type DialogStore = {
  content?: {
    title: string;
    subtitle: string;
    confirm: {
      message: string;
      action: () => void;
    };
    cancel: {
      message: string;
      action: () => void;
    };
  };
};
