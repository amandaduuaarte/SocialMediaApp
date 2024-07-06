export interface IStorage<T> {
  setItem: (key: string, value: T, path?: string) => void;
  deleteItem: (key: string) => void;
  getItem: (key: string) => T;
}
