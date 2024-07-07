import styled from 'styled-components/native';

export const Container = styled.ImageBackground`
  flex: 1;
  padding: 10% 24px 0 24px;
  gap: 24px;
  align-items: center;
`;

export const ProfileIcon = styled.View`
  height: 136px;
  width: 100px;
  background: red;
`;

export const UserInfoContainer = styled.View`
  flex-direction: row;
  gap: 24px;
`;

export const UserInfoContent = styled.View`
  flex-direction: column;
  gap: 12px;
`;


export const PhotosContainerHeader = styled.View`
  flex: 1;
  width: 50%;
  margin: 24px 0;
  gap: 12px;
  align-self: center;
  flex-direction: row;
  justify-content: space-between;
  gap: 24px;
`;

export const Photo = styled.Image`
  width: 157px;
  height: 133px;
  margin-top: 12px;
`;
