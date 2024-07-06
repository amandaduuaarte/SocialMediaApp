import {MMKVStorage} from '@/infra';

export const StorageAdapter = <T>() => {
  return new MMKVStorage<T>();
};
