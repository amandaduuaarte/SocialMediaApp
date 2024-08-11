import {fireEvent, render} from '@testing-library/react-native';

import {Home} from '@/presentation/screens';
import {TAppRoutesNavigationProps} from '@/presentation/routes/app.routes';

type TProps = TAppRoutesNavigationProps<'Home'>;

const params = {
  navigation: {
    navigate: jest.fn(),
  },
  route: undefined,
} as unknown as TProps;

const sut = () => {
  return render(<Home {...params} />);
};
describe('Home Screen', () => {
  it('should render correctly all elements', () => {
    const {getByText, getByTestId} = sut();

    expect(getByTestId('save_button')).toBeTruthy();
  });

  it('should save data in storage when button was pressed', () => {
    const {getByTestId} = sut();
    const {navigate} = params.navigation;

    const button = getByTestId('save_button');

    fireEvent.press(button);

    expect(navigate).toHaveBeenCalledWith('Profile');
  });
});
