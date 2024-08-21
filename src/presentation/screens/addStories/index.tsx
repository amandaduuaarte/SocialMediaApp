import {TAppRoutesNavigationProps} from '@/presentation/routes/types';
import {
  CameraFLipIcon,
  Container,
  Header,
  Icon,
  NoPermissionContainer,
  TakePhotoButton,
} from './styles';

import CloseIcon from '@/assets/images/icons/close.svg';
import {useEffect, useState} from 'react';
import {useGetCameraPermission} from '@/domain/useCases/addStories/useGetCameraPermission';
import {Typography} from '@/presentation/components/Typography';

import {colors} from '@/presentation/colors';
import {Linking, StyleSheet} from 'react-native';
import {
  Camera,
  Templates,
  useCameraDevice,
  useCameraFormat,
} from 'react-native-vision-camera';

import CameraFLip from '@/assets/images/icons/cameraFlip.svg';
type TProps = TAppRoutesNavigationProps<'AddStories'>;

type TCameraPosition = 'front' | 'back' | 'external';

const openSettings = () => {
  Linking.openSettings();
};
const NoPermissionScreen = () => {
  return (
    <NoPermissionContainer testID="screen.no-permission-container">
      <Typography
        value="You have not accepted the necessary permissions to access your camera."
        align="center"
        color={colors.c1.white}
      />
      <Icon style={{marginTop: 12}} onPress={openSettings}>
        <Typography value="Change permissions" color={colors.c2.accentStroke} />
      </Icon>
    </NoPermissionContainer>
  );
};

export const AddStories = ({navigation}: TProps) => {
  const [cameraPosition, setCameraPosition] = useState<TCameraPosition>('back');
  const {hasPermission, requestPermission} = useGetCameraPermission();
  const onClose = () => navigation.goBack();

  const device = useCameraDevice(cameraPosition);
  const format = useCameraFormat(device, Templates.Instagram);

  const handleCameraFlip = () => {
    if (cameraPosition === 'back') {
      setCameraPosition('front');
    }

    if (cameraPosition === 'front') {
      setCameraPosition('back');
    }
  };

  console.log(hasPermission);
  useEffect(() => {
    if (!hasPermission) {
      requestPermission();
    }
  }, []);

  return (
    <Container>
      <Header>
        <Icon onPress={onClose}>
          <CloseIcon />
        </Icon>
      </Header>

      {!!device && (
        <Camera
          device={device}
          style={StyleSheet.absoluteFill}
          isActive={true}
          enableZoomGesture
          format={format}>
          <CloseIcon />
        </Camera>
      )}

      <TakePhotoButton />

      <CameraFLipIcon onPress={handleCameraFlip}>
        <CameraFLip />
      </CameraFLipIcon>

      {!hasPermission && <NoPermissionScreen />}
    </Container>
  );
};
