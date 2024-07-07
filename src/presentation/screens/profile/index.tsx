import {
  Container,
  PhotosContainer,
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

// TODO: Ver como posso fazer para listar as fotos do device.
export const Profile = () => {
  return (
    <Container source={ProfileBackground}>
      <ProfileIcon />

      <Typography value="John Doe" align="center" type="Body" />
      <Typography value="@johndoe" align="center" type="Small" />

      {renderUserInfoItem({info: mockUserInfo})}

      <PhotosContainer>
        <PhotosContainerHeader>
          <PhotosIcon onPress={() => console.log('ooi')} />
          <PhotosSavedIcon onPress={() => console.log('ooi')} />
        </PhotosContainerHeader>
      </PhotosContainer>
    </Container>
  );
};
