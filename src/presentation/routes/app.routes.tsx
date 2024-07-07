import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Image, ImageProps} from 'react-native';

import {Home} from '../screens';
import {Profile} from '../screens/profile';
import {Conversations} from '../screens/conversations';
import {Messaging} from '../screens/messaging';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {colors} from '../colors';

import HomeIcon from '@/assets/images/icons/home.png';
import ProfileIcon from '@/assets/images/icons/profile.png';
import ConversationsIcon from '@/assets/images/icons/conversations.png';
import LikeIcon from '@/assets/images/icons/like.png';

type TAppRoutes = {
  Home: undefined;
  Profile: undefined;
  Conversations: undefined;
  Messaging: undefined;
};

export type TAppRoutesNavigationProps<T extends keyof TAppRoutes> =
  NativeStackScreenProps<TAppRoutes, T>;

const renderTabIcon = ({icon, color}: {icon: ImageProps; color: string}) => {
  return <Image source={icon} style={{tintColor: color}} />;
};

export const AppRoutes = () => {
  const Tab = createBottomTabNavigator<TAppRoutes>();

  return (
    <Tab.Group
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.c2.accentStroke,
        tabBarInactiveTintColor: colors.c1.black,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => renderTabIcon({icon: HomeIcon, color}),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color}) => renderTabIcon({icon: ProfileIcon, color}),
        }}
      />
      <Tab.Screen
        name="Messaging"
        component={Messaging}
        options={{
          tabBarIcon: ({color}) => renderTabIcon({icon: LikeIcon, color}),
        }}
      />
      <Tab.Screen
        name="Conversations"
        component={Conversations}
        options={{
          tabBarIcon: ({color}) =>
            renderTabIcon({icon: ConversationsIcon, color}),
        }}
      />
    </Tab.Group>
  );
};
