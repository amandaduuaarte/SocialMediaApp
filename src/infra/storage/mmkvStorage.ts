import {MMKV} from 'react-native-mmkv';

import {IStorage} from '@/data/interfaces/infra/storage';

export class MMKVStorage<T> implements IStorage<T> {
  private mmkv: MMKV;

  constructor() {
    this.mmkv = new MMKV();
  }
  setItem(key: string, value: T): void {
    this.mmkv.set(key, JSON.stringify(value));
  }

  deleteItem(key: string): void {
    this.mmkv.delete(key);
  }

  getItem(key: string): T {
    const content = this.mmkv.getString(key) || '';
    return JSON.parse(content);
  }
}
