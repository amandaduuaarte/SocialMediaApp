import { IUseGetAccountInfo } from '@/data/interfaces/useCases/profile/useGetAccountInfoTypes';

import {HttpClientAdapter} from '@/main/adapters';
import {useQuery} from 'react-query';

const getAccountInfo = async (): Promise<IUseGetAccountInfo> => {
  const httpClient = HttpClientAdapter();

  try {
    const response = await httpClient.request({
      method: 'GET',
      url: 'http://localhost:3000/userInfo',
    });

    return response.body;
  } catch (err) {
    console.error(err);
  }
};

export const getAccountInfoService = () => {
  const {data, isSuccess, isError, isLoading} = useQuery({
    queryKey: 'USER_ACCOUNT',
    queryFn: getAccountInfo,
  });

  return {
    data,
    isSuccess,
    isError,
    isLoading
  };
};
