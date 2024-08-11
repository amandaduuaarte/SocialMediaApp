import {getUserPhotos} from '@/data/services/profile/getUserPhotos';


export const useGetUserPhotosUseCase = () => {
  const {data, isError, isSuccess} = getUserPhotos();

  return {
    userPhotos: data,
    isError,
    isSuccess,
  };
};
