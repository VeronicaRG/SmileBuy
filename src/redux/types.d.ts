import { User } from '../@types/app/User';

export type AuthStore = {
  user?: User;
};

export type PreferencesStore = {
  language: string;
};
