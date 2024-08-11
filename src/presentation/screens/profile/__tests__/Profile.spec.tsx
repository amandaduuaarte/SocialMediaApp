import {render} from '@testing-library/react-native';
import {Profile} from '@/presentation/screens/profile';

import {useGetAccountInfoUseCase} from '@/domain/useCases/profile/useGetAccountInfo';
import {useGetUserPhotosUseCase} from '@/domain/useCases/profile/useGetUserPhotos';
import {USER_INFO_MOCK, USER_PHOTOS_MOCK} from './fixture';

jest.mock('@react-navigation/bottom-tabs', () => {
  return {
    createBottomTabNavigator: jest.fn().mockReturnValue({
      Navigator: jest.fn,
      Screen: jest.fn,
    }),
  };
});

jest.mock('@/domain/useCases/profile/useGetAccountInfo', () => ({
  useGetAccountInfoUseCase: jest.fn(),
}));

jest.mock('@/domain/useCases/profile/useGetUserPhotos', () => ({
  useGetUserPhotosUseCase: jest.fn(),
}));

const sut = () => render(<Profile />);

describe('Integration tests', () => {
  beforeAll(() => {
    (useGetAccountInfoUseCase as jest.Mock).mockReturnValue({
      accountInfo: USER_INFO_MOCK,
    });

    (useGetUserPhotosUseCase as jest.Mock).mockReturnValue({
      userPhotos: USER_PHOTOS_MOCK,
    });
  });

  afterEach(jest.clearAllMocks);

  it('should render userName and profile photo', () => {
    const {getByTestId} = sut();

    const userName = getByTestId('profile.text.userName');
    const profilePhoto = getByTestId('profile.photo.icon');

    expect(userName).toBeTruthy();
    expect(profilePhoto).toBeTruthy();
  });

  it.each(USER_INFO_MOCK.accountInfo)(
    'should render all account information: $label $value',
    ({label, value}) => {
      const {getByTestId} = sut();

      const labelText = getByTestId(`profile.text.accountInfo.${label}`);
      const valueText = getByTestId(`profile.text.accountValue.${value}`);

      expect(labelText).toBeTruthy();
      expect(valueText).toBeTruthy();
    },
  );
});
