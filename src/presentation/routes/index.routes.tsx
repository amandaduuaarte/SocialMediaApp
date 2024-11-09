import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {TabRoutes} from './app.routes';

export const Routes = () => {
  return <NavigationContainer>{TabRoutes()}</NavigationContainer>;
};
