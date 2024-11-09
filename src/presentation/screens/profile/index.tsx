import React from 'react';
import {Container, ProfileIcon} from './styles';

import ProfileBackground from '@/assets/images/profileBackground.png';

import {Typography} from '@/presentation/components/Typography';
import {useGetUserPhotosUseCase} from '@/domain/useCases/profile/useGetUserPhotos';

import {useGetAccountInfoUseCase} from '@/domain/useCases/profile/useGetAccountInfo';
import {ProfileInfo} from './components/ProfileInfo';
import {UserPosts} from './components/UserPosts';
import {ActivityIndicator} from 'react-native';
import {colors} from '@/presentation/colors';

const ProfilePhotoLoading = () => {
  return <ActivityIndicator color={colors.c3.pink} size={'large'} />;
};

export const Profile = () => {
  const {userPhotos, isLoading: isLoadingPhoto} = useGetUserPhotosUseCase();
  const {accountInfo, isLoading: isLoadingPosts} = useGetAccountInfoUseCase();

  const profilePhoto = userPhotos?.photos?.userPhoto;

  return (
    <Container source={ProfileBackground}>
      {isLoadingPhoto ? (
        <ProfilePhotoLoading />
      ) : (
        <ProfileIcon testID="profile.photo.icon" source={{uri: profilePhoto}} />
      )}

      <Typography value={accountInfo?.name} align="center" type="Body" />
      <Typography
        testID="profile.text.userName"
        value={`@${accountInfo?.userName}`}
        align="center"
        type="Small"
      />

      {!!accountInfo && <ProfileInfo info={accountInfo.accountInfo} />}

      {userPhotos && (
        <UserPosts userPhotos={userPhotos} isLoading={isLoadingPosts} />
      )}
    </Container>
  );
};
