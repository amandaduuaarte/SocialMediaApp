import { IHttpClient, IHttpRequest } from '@/data/interfaces/infra/httpclient';
import axios from 'axios';



export class AxiosClient implements IHttpClient {
  async request(params: IHttpRequest) {
    const response = await axios.request({
      url: params.url,
      method: params.method,
      data: params.body,
      headers: params.headers,
    });
    return {
      status: response.status,
      body: response.data,
    };
  }
}
