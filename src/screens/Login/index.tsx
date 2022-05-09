import React, { useEffect, useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';

import { useAppSelector } from '@src/redux/hooks';
import { setUser } from '@src/redux/reducers/user';
import { changeCurrentLanguage } from '@src/utils/language';

import LoginView from './view';

const Login: React.FC = () => {
  const [nickname, setNickname] = useState('');

  const { user } = useAppSelector(state => state.user);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { t } = useTranslation();

  async function setLogin() {
    try {
      let userSchema = yup.object({
        nickname: yup
          .string()
          .min(3, t('Login.Errors.Nickname.Min'))
          .max(8, t('Login.Errors.Nickname.Max'))
          .required(t('Login.Errors.Nickname.Required')),
      });
      await userSchema.validate({ nickname }, { abortEarly: false });

      dispatch(
        setUser({
          nickname: nickname,
        }),
      );
    } catch (e) {
      if (e instanceof yup.ValidationError) {
        e?.errors.forEach(error => {
          Alert.alert('Error', error);
        });
      } else {
        Alert.alert('Error', t('General.error'));
      }
    }
  }

  useEffect(() => {
    if (user) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      });
    }
  }, [user, navigation]);

  return (
    <LoginView
      changeLanguage={changeCurrentLanguage}
      valueNickname={nickname}
      onChangeTextNickname={text => setNickname(text)}
      onPress={setLogin}
    />
  );
};

export default Login;
