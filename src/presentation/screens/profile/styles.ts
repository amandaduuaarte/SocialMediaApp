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

export const PhotosContainer = styled.View`
    width: 50%;
    margin-top: 24px;
`;

export const PhotosContainerHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  gap: 24px;
`;
