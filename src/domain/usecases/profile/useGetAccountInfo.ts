import { getAccountInfoService } from '@/data/services/profile/getAccountInfo';

export const useGetAccountInfoUseCase = () => {
  const {data, isError, isSuccess} = getAccountInfoService();

  return {
    data,
    isError,
    isSuccess,
  };
};
