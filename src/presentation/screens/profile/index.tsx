import React from 'react';
import {Container, ProfileIcon} from './styles';

import ProfileBackground from '@/assets/images/profileBackground.png';

import {Typography} from '@/presentation/components/Typography';
import {useGetUserPhotosUseCase} from '@/domain/useCases/profile/useGetUserPhotos';

import {useGetAccountInfoUseCase} from '@/domain/useCases/profile/useGetAccountInfo';
import {ProfileInfo} from './components/ProfileInfo';
import {UserPosts} from './components/UserPosts';

export const Profile = () => {
  const {userPhotos} = useGetUserPhotosUseCase();
  const {accountInfo} = useGetAccountInfoUseCase();

  const profilePhoto = userPhotos?.photos?.userPhoto;

  return (
    <Container source={ProfileBackground}>
      <ProfileIcon testID="profile.photo.icon" source={{uri: profilePhoto}} />

      <Typography value={accountInfo?.name} align="center" type="Body" />
      <Typography
        testID="profile.text.userName"
        value={`@${accountInfo?.userName}`}
        align="center"
        type="Small"
      />

      {!!accountInfo && <ProfileInfo info={accountInfo.accountInfo} />}

      {userPhotos && <UserPosts userPhotos={userPhotos} />}
    </Container>
  );
};
