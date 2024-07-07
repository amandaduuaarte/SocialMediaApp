import { TUserPhotos } from '@/data/types/useCases/profile/useGetUserPhotosTypes';
import {HttpClientAdapter} from '@/main/adapters';
import {useQuery} from 'react-query';

const getPhotos = async (): Promise<TUserPhotos | undefined> => {
  const httpClient = HttpClientAdapter();

  try {
    const response = await httpClient.request({
      method: 'GET',
      url: 'http://localhost:3000/profile',
    });

    return response.body;
  } catch (err) {
    console.error(err);
  }
};

export const getUserPhotos = () => {
  const {data, isSuccess, isError} = useQuery({
    queryKey: 'USER_PHOTOS',
    queryFn: getPhotos,
  });

  return {
    data,
    isSuccess,
    isError,
  };
};
