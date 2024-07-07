import {getUserPhotos} from '@/data/services/profile/getUserPhotos';


export const useGetUserPhotosUseCase = () => {
  const {data, isError, isSuccess} = getUserPhotos();

  return {
    data,
    isError,
    isSuccess,
  };
};
