import {IUseGetPosts} from '@/data/interfaces/useCases/feed/useGetPostsTypes';
import {IUseGetStories} from '@/data/interfaces/useCases/feed/useGetStoriesTypes';
import {HttpClientAdapter} from '@/main/adapters';
import {useQuery} from 'react-query';

type TResponse = (IUseGetStories & IUseGetPosts) | undefined;
const getFeedInfo = async (): Promise<TResponse> => {
  const httpClient = HttpClientAdapter();

  try {
    const response = await httpClient.request({
      method: 'GET',
      url: 'http://192.168.18.7:3000/home',
    });
    return response.body;
  } catch (error) {
    console.error(error);
  }
};

export const getFeedInfoService = () => {
  const {data, isSuccess, isError, refetch, isRefetching} = useQuery({
    queryKey: 'USER_FEED_INFO',
    queryFn: getFeedInfo,
  });

  return {
    data,
    isSuccess,
    isError,
    refetch,
    isRefetching,
  };
};
