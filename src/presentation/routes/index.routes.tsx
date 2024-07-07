import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {AppRoutes} from './app.routes';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

export const Routes = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>{AppRoutes()}</Tab.Navigator>
    </NavigationContainer>
  );
};
