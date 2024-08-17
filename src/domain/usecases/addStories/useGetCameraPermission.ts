import {
  useCameraPermission,
  useMicrophonePermission,
} from 'react-native-vision-camera';

export const useGetCameraPermission = () => {
  const {
    hasPermission: hasCamPermission,
    requestPermission: requestCamPermission,
  } = useCameraPermission();

  const {
    hasPermission: hasMicPermission,
    requestPermission: requestMicPermission,
  } = useMicrophonePermission();

  const hasPermission = hasCamPermission && hasMicPermission;
  const requestPermission = () => {
    requestCamPermission();
    requestMicPermission();
  };

  return {
    hasPermission,
    requestPermission,
  };
};
