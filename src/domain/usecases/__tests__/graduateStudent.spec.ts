import {renderHook} from '@testing-library/react-hooks';

import {IHttpClient, IHttpResponse} from '@/data/interfaces';
import {GraduatedStudent} from '@/domain/usecases';
import { TGraduatedStudent } from '@/data/types';


const response: IHttpResponse<TGraduatedStudent.Response> = {
  status: 200,
  body: {
    id: 123,
    data: {
      isGraduated: true,
      daysForGraduation: 4,
    },
  },
};

const HttpClient: IHttpClient = {
  request: jest.fn(async () => {
    return response;
  }),
};

const storage = {
  setItem: jest.fn(),
  deleteItem: jest.fn(),
  getItem: jest.fn(),
};

jest.mock('@/infra/httpclient/axios.ts', () => {
  HttpClient: {
    request: jest.fn();
  }
});

jest.mock('@/infra/storage/mmkvStorage.ts', () => {
  storage: {
    setItem: jest.fn();
    deleteItem: jest.fn();
    getItem: jest.fn();
  }
});

describe('GraduatedStudent', () => {
  it('Should return infos when user was graduate', async () => {
    const {result} = renderHook(
      () => new GraduatedStudent(HttpClient, '', storage),
    );

    const graduateStudentOKMethod = await result.current.isGraduated({
      id: 123,
      email: 'test@',
    });

    expect(graduateStudentOKMethod).toEqual(response.body);
  });

  it('should throw error when payload is incomplete', async () => {
    const {result} = renderHook(
      () => new GraduatedStudent(HttpClient, '', storage),
    );

    const graduateStudentOKMethod = await result.current.isGraduated({
      id: 0,
      email: '',
    });
    expect(graduateStudentOKMethod).toBe(undefined);
  });

  it('should return fails when request is not successfully ', async () => {
    const consoleMock = jest.spyOn(console, 'error');
    const httpClientMock = {
      request: jest.fn().mockRejectedValue(new Error('Request failed')),
    };

    const {result} = renderHook(
      () => new GraduatedStudent(httpClientMock, '', storage),
    );

    await result.current.isGraduated({
      id: 123,
      email: 'test@',
    });

    expect(consoleMock).toHaveBeenCalledWith('Request failed');
  });

  describe('Save', () => {
    it('should save response when request return 200', async () => {
      const {result} = renderHook(
        () => new GraduatedStudent(HttpClient, '', storage),
      );
      const saveFunction = jest.spyOn(result.current, 'save');

      const graduateStudentOKMethod = await result.current.isGraduated({
        id: 123,
        email: 'test@',
      });

      expect(saveFunction).toHaveBeenCalledWith(
        graduateStudentOKMethod,
        'student',
      );
    });

    it.only('should NOT save when request NOT return success', async () => {
      const {result} = renderHook(
        () => new GraduatedStudent(HttpClient, '', storage),
      );
      const saveFunction = jest.spyOn(result.current, 'save');

      jest.spyOn(result.current, 'isGraduated').mockRejectedValue({});

      expect(saveFunction).not.toHaveBeenCalled();
    });
  });

  describe('Get', () => {
    it('should call getItem from storage', () => {
      const storageSpy = jest.spyOn(storage, 'getItem');
      const {result} = renderHook(
        () => new GraduatedStudent(HttpClient, '', storage),
      );
      result.current.get('student');

      expect(storageSpy).toHaveBeenCalled();
    });
  });
});
