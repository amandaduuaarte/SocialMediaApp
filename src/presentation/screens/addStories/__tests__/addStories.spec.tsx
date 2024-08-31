import {TAppRoutesNavigationProps} from '@/presentation/routes/types';
import {AddStories} from '..';
import {render} from '@testing-library/react-native';
import {useGetCameraPermission} from '@/domain/useCases/addStories/useGetCameraPermission';

jest.mock('@react-navigation/native-stack', () => {
  return {
    createNativeStackNavigator: jest.fn().mockReturnValue({
      Navigator: jest.fn,
      Screen: jest.fn,
    }),
  };
});

jest.mock('react-native/Libraries/Linking/Linking', () => ({
  openURL: jest.fn().mockResolvedValue(null),
  openSettings: jest.fn(),
}));

jest.mock('@/domain/useCases/addStories/useGetCameraPermission', () => ({
  useGetCameraPermission: jest.fn(),
}));

jest.mock('react-native-vision-camera', () => {
  return {
    Camera: {
      getAvailableCameraDevices: jest.fn(),
      requestCameraPermission: jest.fn(),
    },
  };
});

type TProps = TAppRoutesNavigationProps<'AddStories'>;

const params = {
  navigation: {
    goBack: jest.fn(),
  },
  route: undefined,
} as unknown as TProps;

const sut = () => {
  return render(<AddStories {...params} />);
};
describe('Add Stories screen', () => {
  beforeAll(() => {
    (useGetCameraPermission as jest.Mock).mockReturnValue({
      hasPermission: true,
      requestPermission: jest.fn(),
    });
  });

  it('should render NoPermissionScreen when permission was undefined', () => {
    const {getByTestId} = sut();

    const screen = getByTestId('screen.no-permission-container');

    expect(screen).toBeTruthy();
  });
});
