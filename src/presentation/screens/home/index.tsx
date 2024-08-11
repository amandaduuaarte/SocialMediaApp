import React from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  TouchableOpacity,
  View,
} from 'react-native';

import {
  Container,
  ContainerEmptyState,
  NotificationLine,
  Post,
  PostUserInfo,
} from './styles';
import {Typography} from '@/presentation/components/Typography';
import {TAppRoutesNavigationProps} from '@/presentation/routes/app.routes';

import NotificationIcon from '@/assets/images/icons/notification.svg';

import {Stories} from './components/Stories';
import {useGetFeedInfoUseCase} from '@/domain/useCases/feed/useGetFeedInfo';
import {TFeed} from '@/data/types/useCases/feed/useGetPostsTypes';
import {PostInfo} from './components/Posts/components/PostInfo';
import {Header} from './components/Posts/components/Header';

const Likes = '@/assets/images/icons/like.png';
type TProps = TAppRoutesNavigationProps<'Home'>;

const renderEmptyComponent = () => {
  return (
    <ContainerEmptyState>
      <Typography value="Nothing to Show" align="center" />
    </ContainerEmptyState>
  );
};

const renderItem = ({item}: ListRenderItemInfo<TFeed>) => {
  // Regra do tempo da postagem -> so mostra se for acima ou igual a uma hora.
  // Criar um context com zustand para simular essas mudaças tipo storie visto
  // like aumentando

  return (
    <Post source={{uri: item.posts.source}}>
      <Header
        hour={item.posts.postWhenInHours}
        photoProfile={item.userProfile}
        userName={item.userName}
      />
      <PostUserInfo>
        <PostInfo
          icon={require('../../../assets/images/icons/like.png')}
          value={item.posts.likes}
          action={() => null}
        />

        <PostInfo
          icon={require('../../../assets/images/icons/conversations.png')}
          value={item.posts.comments}
          action={() => null}
        />
      </PostUserInfo>
    </Post>
  );
};
export const Home = ({navigation}: TProps) => {
  const {data} = useGetFeedInfoUseCase();

  return (
    <Container>
      <NotificationLine>
        <Typography value="GOT Socially" type="Small" />

        <TouchableOpacity onPress={() => null}>
          <NotificationIcon />
        </TouchableOpacity>
      </NotificationLine>

      <Typography value="Feed" type="H2Bold" />
      {data?.stories && <Stories users={data.stories} />}

      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{gap: 2, paddingBottom: 45}}
        scrollEnabled={!!data?.feed}
        data={data?.feed}
        renderItem={renderItem}
        ListEmptyComponent={renderEmptyComponent}
      />
    </Container>
  );
};
