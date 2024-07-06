
import {IGraduatedStudent} from '@/data/interfaces/useCases';

import {IHttpClient} from '../../data/interfaces';
import {IStorage} from '../../data/interfaces/infra/storage';
import { TGraduatedStudent } from '@/data/types/useCases';

export class GraduatedStudent implements IGraduatedStudent {
  constructor(
    public readonly HttpClient: IHttpClient<TGraduatedStudent.Response>,
    private readonly url: string,
    private readonly Storage: IStorage<TGraduatedStudent.Response>,
  ) {}

  async isGraduated(params: TGraduatedStudent.Params) {
    if (!params.id || !params.email) {
      return;
    }

    try {
      const response = await this.HttpClient.request({
        method: 'GET',
        url: this.url,
        body: params,
      });

      if (response.body) {
        await this.save(response.body, 'student');
      }
      return response.body;
    } catch (err: any) {
      console.error(err?.message);
      return;
    }
  }

  async save(params: TGraduatedStudent.Response, storageKey: string) {
    await this.Storage.setItem(storageKey, params);
  }

  get(storageKey: string) {
    const content = this.Storage.getItem(storageKey);
    return content;
  }
}
