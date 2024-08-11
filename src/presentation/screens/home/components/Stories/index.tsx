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

export const Stories = ({users}: {users: TStoriesData[]}) => {
  return (
    <StoriesContainer>
      <TouchableOpacity onPress={() => null}>
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
