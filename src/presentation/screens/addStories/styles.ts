import {colors} from '@/presentation/colors';
import styled from 'styled-components/native';




export const NoPermissionContainer = styled.View`
  flex: 1;
  background: ${colors.c1.black};
  justify-content: center;
  align-items: center;
`;

export const Container = styled.View`
  flex: 1;
  background: ${colors.c1.black};
`;

export const Header = styled.View`
  position: absolute;
  height: 45px;
  width: 100%;
  justify-content: center;
  padding-left: 16px;
  padding-top: 12px;
  z-index: 1;
`;

export const Icon = styled.TouchableOpacity``;

export const TakePhotoButton = styled.TouchableOpacity`
  position: absolute;
  z-index: 1;
  bottom: 100px;
  background-color: ${colors.c1.white};
  height: 84px;
  width: 84px;
  align-self: center;
  border-radius: 64px;
`;

export const CameraFLipIcon = styled.TouchableOpacity`
  position: absolute;
  z-index: 1;
  bottom: 100px;
  right: 40px;
`;