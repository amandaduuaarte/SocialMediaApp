import {colors} from '@/presentation/colors';
import {Icon, PostInfoContainer, PostUserInfo} from '../../../styles';
import {Typography} from '@/presentation/components/Typography';
import {ImageSourcePropType} from 'react-native';

type TPostInfo = {
  icon: ImageSourcePropType;
  value: number;
  action: () => void;
};
export const PostInfo = ({action, icon, value}: TPostInfo) => {
  return (
    <PostInfoContainer onPress={action}>
      <Icon source={icon} tintColor={colors.c1.white} />
      <Typography value={value} type="Small" color={colors.c1.white} />
    </PostInfoContainer>
  );
};
