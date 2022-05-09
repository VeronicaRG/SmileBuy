import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import { setUserLogout } from '@src/redux/reducers/user';
import { changeCurrentLanguage } from '@src/utils/language';

import SettingsView from './view';

const Settings: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

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
