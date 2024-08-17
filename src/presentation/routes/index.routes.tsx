import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {StackRoutes, TabRoutes} from './app.routes';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export const Routes = () => {
  return <NavigationContainer>{TabRoutes()}</NavigationContainer>;
};
