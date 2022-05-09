import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { setUserLogout } from '@src/redux/reducers/user';

import SettingsView from './view';

const Settings: React.FC = () => {
  const { i18n } = useTranslation();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  function changeCurrentLanguage() {
    if (i18n.language === 'en') {
      return i18n.changeLanguage('es');
    } else if (i18n.language === 'es') {
      return i18n.changeLanguage('pt-BR');
    }
    return i18n.changeLanguage('en');
  }
  return (
    <SettingsView
      goback={navigation.goBack}
      changeLanguage={changeCurrentLanguage}
      Logout={() => {
        dispatch(setUserLogout());
        navigation.reset({
          index: 0,
          routes: [{ name: 'Login' }],
        });
      }}
    />
  );
};

export default Settings;
