import React from 'react';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import {Home} from '../screens';
import {Profile} from '../screens/profile';
import {Conversations} from '../screens/conversations';
import {Messaging} from '../screens/messaging';

type TAppRoutes = {
  Home: undefined;
  Profile: undefined;
  Conversations: undefined;
  Messaging: undefined;
};

export type TAppRoutesNavigationProps<T extends keyof TAppRoutes> =
  NativeStackScreenProps<TAppRoutes, T>;
export const AppRoutes = () => {
  const Stack = createNativeStackNavigator<TAppRoutes>();

  return (
    <Stack.Group>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Messaging" component={Messaging} />
      <Stack.Screen name="Conversations" component={Conversations} />
    </Stack.Group>
  );
};
