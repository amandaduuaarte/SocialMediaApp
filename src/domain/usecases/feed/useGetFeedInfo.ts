import {getFeedInfoService} from '@/data/services/feed/getFeedInfo';

export const useGetFeedInfoUseCase = () => {
  const {data, isError, isSuccess, isRefetching, refetch} =
    getFeedInfoService();

  return {
    data,
    isError,
    isSuccess,
    isRefetching,
    refetch,
  };
};
