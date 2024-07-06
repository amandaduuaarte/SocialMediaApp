import {THeaders, THttpMethods} from '@/data/types/httpClient';

export interface IHttpRequest {
  url: string;
  method: THttpMethods;
  body?: any;
  headers?: THeaders;
}

export interface IHttpClient<T = any> {
  request: (params: IHttpRequest) => Promise<IHttpResponse<T>>;
}

export interface IHttpResponse<T = any> {
  status: number;
  body?: T;
}
