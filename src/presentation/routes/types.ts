import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type TTabRoutes = {
  StackRoutes: undefined;
  Profile: undefined;
  Conversations: undefined;
  Messaging: undefined;
};

export type TStackRoutes = {
  Home: undefined;
  AddStories: undefined;
};

export type TAppRoutes = TTabRoutes & TStackRoutes;

export type TAppRoutesNavigationProps<T extends keyof TAppRoutes> =
  NativeStackScreenProps<TAppRoutes, T>;
