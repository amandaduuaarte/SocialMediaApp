import React from 'react';
import {ActivityIndicator, FlatList, ListRenderItemInfo} from 'react-native';
import {Photo, PhotosContainerHeader} from '../../styles';

import PhotosIcon from '@/assets/images/icons/ButtonPhotos.svg';
import PhotosSavedIcon from '@/assets/images/icons/ButtonSaved.svg';
import {useCallback} from 'react';
import {
  TUserPhotoPage,
  TUserPhotos,
} from '@/data/types/useCases/profile/useGetUserPhotosTypes';
import {colors} from '@/presentation/colors';

export const UserPosts = ({
  userPhotos,
  isLoading,
}: {
  userPhotos: TUserPhotos;
  isLoading: boolean;
}) => {
  const renderHeader = useCallback(() => {
    return (
      <PhotosContainerHeader>
        <PhotosIcon />
        <PhotosSavedIcon />
      </PhotosContainerHeader>
    );
  }, []);

  const renderPhotoItem = useCallback(
    ({item}: ListRenderItemInfo<TUserPhotoPage>) => {
      return (
        <Photo
          key={item.id}
          testID={item.id.toString()}
          source={{uri: item.source}}
        />
      );
    },
    [],
  );

  return (
    <>
      {isLoading ? (
        <ActivityIndicator color={colors.c2.accentStroke} size={'small'} />
      ) : (
        <FlatList
          keyExtractor={item => item.id}
          ListHeaderComponent={renderHeader}
          data={userPhotos?.photos?.pages}
          renderItem={renderPhotoItem}
          numColumns={2}
          columnWrapperStyle={{gap: 12}}
          showsVerticalScrollIndicator={false}
        />
      )}
    </>
  );
};
