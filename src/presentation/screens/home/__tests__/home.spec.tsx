import {act, fireEvent, render} from '@testing-library/react-native';

import {GraduatedStudentFactory} from '@/main/factories/graduatedStudent/graduatedStudent-factory';
import {Home} from '@/presentation/screens';

const sut = () => {
  return render(<Home />);
};
describe('Home Screen', () => {
  it('should render correctly all elements', () => {
    const {getByText, getByTestId} = sut();
    expect(getByText('OI')).toBeTruthy();
    expect(getByTestId('save_button')).toBeTruthy();
  });

  it('should save data in storage when button was pressed', () => {
    const {getByTestId} = sut();

    const saveMock = jest.spyOn(GraduatedStudentFactory, 'save');

    const button = getByTestId('save_button');
    act(() => {
      fireEvent.press(button);
    });

    expect(saveMock).toHaveBeenCalled();
  });
});
