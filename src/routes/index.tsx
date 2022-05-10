import React from 'react';

import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RNBootSplash from 'react-native-bootsplash';

import Cart from '@src/screens/Cart';
import Home from '@src/screens/Home';
import Login from '@src/screens/Login';
import SaleSuccessful from '@src/screens/SaleSuccessful';
import Settings from '@src/screens/Settings';

import { useAppSelector } from '../redux/hooks';
import { RootStackParamList } from './types';

export const navigationRef = createNavigationContainerRef();

const Routes: React.FC = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  const { user } = useAppSelector(state => state.auth);

  return (
    <NavigationContainer
      onReady={() => RNBootSplash.hide({ fade: true })}
      ref={navigationRef}>
      <Stack.Navigator initialRouteName={user ? 'Home' : 'Login'}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SaleSuccessful"
          component={SaleSuccessful}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

export const navigate = (name: string, params: any) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name as never, params as never);
  }
};
