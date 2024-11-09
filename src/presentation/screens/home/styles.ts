import {colors} from '@/presentation/colors';
import styled from 'styled-components/native';

type TAccountStoriesPhoto = {
  isAvailable?: boolean;
};

export const Container = styled.View`
  flex: 1;
  padding: 10% 24px 0 24px;
`;

export const NotificationLine = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 32px;
`;

export const StoriesContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  gap: 12px;
`;

export const AccountStoriesPhoto = styled.Image<TAccountStoriesPhoto>`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  align-self: center;
  border-width: ${({isAvailable}) => (isAvailable ? 4 : 0)}px;
  border-color: ${colors.c2.accentStroke};
`;

export const ContainerEmptyState = styled.View`
  margin-top: 32px;
`;

export const Post = styled.ImageBackground`
  margin-top: 32px;
  height: 288px;
  width: 328px;
  padding: 12px;
  justify-content: space-between;
  align-self: center;
`;

export const PostHeader = styled.View``;

export const PostUserInfo = styled.View`
  flex-direction: row;
  gap: 12px;
`;

export const PostInfoContainer = styled.TouchableOpacity`
  flex-direction: row;
  gap: 12px;
`;

export const Icon = styled.Image`
  height: 16px;
  width: 16px;
  align-self: center;
`;
