import {getAccountInfoService} from '@/data/services/profile/getAccountInfo';

export const useGetAccountInfoUseCase = () => {
  const {data, isError, isSuccess} = getAccountInfoService();

  return {
    accountInfo: data,
    isError,
    isSuccess,
  };
};
