import {
  Container,
  Photo,
  PhotosContainerHeader,
  ProfileIcon,
  UserInfoContainer,
  UserInfoContent,
} from './styles';

import ProfileBackground from '@/assets/images/profileBackground.png';
import {colors} from '@/presentation/colors';
import {Typography} from '@/presentation/components/Typography';

import PhotosIcon from '@/assets/images/icons/ButtonPhotos.svg';
import PhotosSavedIcon from '@/assets/images/icons/ButtonSaved.svg';
import {useGetUserPhotosUseCase} from '@/domain/usecases/profile/useGetUserPhotos';
import {FlatList, ListRenderItemInfo} from 'react-native';
import {TUserPhotoPage} from '@/data/types/useCases/profile/useGetUserPhotosTypes';

type TUserInfo = {
  label: string;
  value: string;
};

const mockUserInfo: TUserInfo[] = [
  {
    label: 'Posts',
    value: '35',
  },
  {
    label: 'Followers',
    value: '1,553',
  },
  {
    label: 'Follows',
    value: '153',
  },
];

const renderUserInfoItem = ({info}: {info: TUserInfo[]}) => {
  return (
    <UserInfoContainer>
      {info.map(user => (
        <UserInfoContent key={user.value}>
          <Typography value={user.label} type="Small" color={colors.c1.gray} />
          <Typography value={user.value} type="H2Bold" />
        </UserInfoContent>
      ))}
    </UserInfoContainer>
  );
};

const renderHeader = () => {
  return (
    <PhotosContainerHeader>
      <PhotosIcon onPress={() => null} />
      <PhotosSavedIcon onPress={() => null} />
    </PhotosContainerHeader>
  );
};

const renderPhotoItem = ({item}: ListRenderItemInfo<TUserPhotoPage>) => {
  return <Photo key={item.id} source={{uri: item.source}} />;
};
export const Profile = () => {
  const {data} = useGetUserPhotosUseCase();

  return (
    <Container source={ProfileBackground}>
      <ProfileIcon source={{uri: data?.photos.userPhoto}} />

      <Typography value="Dany Tar" align="center" type="Body" />
      <Typography value="@danyDragons" align="center" type="Small" />

      {renderUserInfoItem({info: mockUserInfo})}

      {data && (
        <FlatList
          ListHeaderComponent={renderHeader}
          data={data.photos.pages}
          renderItem={renderPhotoItem}
          numColumns={2}
          columnWrapperStyle={{gap: 12}}
          showsVerticalScrollIndicator={false}
        />
      )}
    </Container>
  );
};
