import {TStudent } from '@/data/types/useCases'

export interface IStudent {
  add: (
    params: TStudent.Params,
  ) => Promise<TStudent.Response | undefined>;

  get: (
    params: TStudent.GetStudent,
  ) => Promise<TStudent.Response | undefined>;

  remove: (
    params: TStudent.RemoveStudentParams,
  ) => Promise<TStudent.Response | undefined>;
}
