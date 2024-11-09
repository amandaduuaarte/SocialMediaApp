import {fireEvent, render} from '@testing-library/react-native';

import {Home} from '@/presentation/screens';
import {TAppRoutesNavigationProps} from '@/presentation/routes/types';
import {useGetFeedInfoUseCase} from '@/domain/useCases/feed/useGetFeedInfo';
import {FEED_MOCK} from './fixture';

jest.mock('@/domain/useCases/feed/useGetFeedInfo', () => ({
  useGetFeedInfoUseCase: jest.fn(),
}));

type TProps = TAppRoutesNavigationProps<'Home'>;

const navigation = {
  navigate: jest.fn(),
};

const params = {
  navigation: navigation,
  route: undefined,
} as unknown as TProps;

const sut = () => {
  return render(<Home {...params} />);
};
describe('Home Screen', () => {
  beforeEach(() => {
    (useGetFeedInfoUseCase as jest.Mock).mockReturnValue({
      data: FEED_MOCK,
    });
  });

  afterEach(jest.clearAllMocks);

  it('should render correctly stories elements', () => {
    const {getByTestId} = sut();

    expect(getByTestId('view.stories.feed.home')).toBeTruthy();
    expect(getByTestId('view.stories.feed.home.0')).toBeTruthy();
  });

  it('should render empty view when data was []', () => {
    (useGetFeedInfoUseCase as jest.Mock).mockReturnValue({
      data: [],
    });

    const {getByTestId} = sut();

    expect(getByTestId('view.posts.feed.home.emptyState')).toBeTruthy();
  });

  it('should render correctly posts', () => {
    const {getByTestId} = sut();
    const post = getByTestId('view.posts.feed.home.0');

    expect(post).toBeTruthy();
  });

  it('should navigate to addStories screen when button was press ', () => {
    const {getByTestId} = sut();
    const addStories = getByTestId('button.stories.feed.addStories');

    fireEvent(addStories, 'press');

    expect(navigation.navigate).toHaveBeenCalledWith('AddStories');

    expect(addStories).toBeTruthy();
  });
});
