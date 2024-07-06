
import {IStudent} from '@/data/interfaces/useCases';

import {IHttpClient} from '../../data/interfaces';
import { TStudent } from '@/data/types/useCases';

export class Student implements IStudent {
  constructor(
    private readonly HttpClient: IHttpClient<TStudent.Response>,
    private readonly url: string,
  ) {}

  async add(params: TStudent.Params) {
    try {
      const response = await this.HttpClient.request({
        method: 'POST',
        url: this.url,
        body: params,
      });

      return response.body;
    } catch (err: any) {
      console.error(err.message);
      return;
    }
  }

  async remove(params: TStudent.RemoveStudentParams) {
    try {
      const response = await this.HttpClient.request({
        method: 'DELETE',
        url: this.url,
        body: params,
      });
      return response.body;
    } catch (err: any) {
      console.error(err.message);
      return;
    }
  }

  async get(params: TStudent.GetStudent) {
    try {
      const response = await this.HttpClient.request({
        method: 'POST',
        url: this.url,
        body: params,
      });

      return response.body;
    } catch (err: any) {
      console.error(err.message);
      return;
    }
  }
}
