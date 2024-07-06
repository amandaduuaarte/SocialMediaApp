import {AxiosClient} from '@/infra';

export const HttpClientAdapter = (): AxiosClient => {
  return new AxiosClient();
};
