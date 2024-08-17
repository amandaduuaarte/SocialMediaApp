import {
  FlatList,
  Image,
  ListRenderItemInfo,
  TouchableOpacity,
} from 'react-native';
import {AccountStoriesPhoto, StoriesContainer} from '../../styles';
import AddStories from '@/assets/images/icons/addPost.png';

type TStoriesData = {
  userProfile: string;
  isAvailable: boolean;
};

const renderItem = ({item}: ListRenderItemInfo<TStoriesData>) => {
  return (
    <TouchableOpacity style={{alignSelf: 'center'}} onPress={() => null}>
      <AccountStoriesPhoto
        source={{uri: item.userProfile}}
        isAvailable={item.isAvailable}
      />
    </TouchableOpacity>
  );
};

export const Stories = ({
  users,
  action,
}: {
  users: TStoriesData[];
  action: () => void;
}) => {
  return (
    <StoriesContainer>
      <TouchableOpacity onPress={action}>
        <Image source={AddStories} />
      </TouchableOpacity>

      <FlatList
        keyExtractor={item => item.userProfile}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{gap: 12}}
        horizontal
        data={users}
        renderItem={renderItem}
      />
    </StoriesContainer>
  );
};
