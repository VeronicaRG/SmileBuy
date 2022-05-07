import React from 'react';

import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Cart from '@src/screens/Cart';
import Home from '@src/screens/Home';

import SaleSuccessful from '../screens/SaleSuccessful';
import { RootStackParamList } from './types';

export const navigationRef = createNavigationContainerRef();

const Routes: React.FC = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
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
