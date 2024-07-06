import {GraduatedStudent} from '@/domain/usecases/graduateStudent';

import {IGraduatedStudent} from '@/data/interfaces/useCases';

import {HttpClientAdapter, StorageAdapter} from '../../adapters';
import { TGraduatedStudent } from '@/data/types/useCases';

async function isGraduatedFactory(
  params: TGraduatedStudent.Params,
): Promise<TGraduatedStudent.Response | undefined> {
  const graduatedStudent = new GraduatedStudent(
    HttpClientAdapter(),
    '/graduatedStudent',
    StorageAdapter<TGraduatedStudent.Response>(),
  );
  const getStudent = graduatedStudent.isGraduated(params);
  return getStudent;
}

async function saveFactory(
  params: TGraduatedStudent.Response,
  keyStorage: string,
): Promise<void> {
  const graduatedStudent = new GraduatedStudent(
    HttpClientAdapter(),
    '/graduatedStudent',
    StorageAdapter<TGraduatedStudent.Response>(),
  );
  graduatedStudent.save(params, keyStorage);
}

function getFactory(storageKey: string): TGraduatedStudent.Response {
  const graduatedStudent = new GraduatedStudent(
    HttpClientAdapter(),
    '/graduatedStudent',
    StorageAdapter<TGraduatedStudent.Response>(),
  );
  return graduatedStudent.get(storageKey);
}

export const GraduatedStudentFactory: IGraduatedStudent = {
  isGraduated: isGraduatedFactory,
  save: saveFactory,
  get: getFactory,
};
