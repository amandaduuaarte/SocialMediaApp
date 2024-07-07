import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {AppRoutes} from './app.routes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export const Routes = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>{AppRoutes()}</Stack.Navigator>
    </NavigationContainer>
  );
};
