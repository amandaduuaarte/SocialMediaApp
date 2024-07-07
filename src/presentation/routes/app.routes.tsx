import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {Home} from '../screens';
import {Profile} from '../screens/profile';
import {Conversations} from '../screens/conversations';
import {Messaging} from '../screens/messaging';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

type TAppRoutes = {
  Home: undefined;
  Profile: undefined;
  Conversations: undefined;
  Messaging: undefined;
};

export type TAppRoutesNavigationProps<T extends keyof TAppRoutes> =
  NativeStackScreenProps<TAppRoutes, T>;
export const AppRoutes = () => {
  // const Stack = createNativeStackNavigator<TAppRoutes>();
  const Tab = createBottomTabNavigator<TAppRoutes>();

  return (
    <Tab.Group>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Messaging" component={Messaging} />
      <Tab.Screen name="Conversations" component={Conversations} />
    </Tab.Group>
  );
};
