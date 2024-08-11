import {View} from 'react-native';
import {AccountStoriesPhoto, PostHeader, PostUserInfo} from '../../../styles';
import {Typography} from '@/presentation/components/Typography';
import {colors} from '@/presentation/colors';
import {hourFormatted} from '@/domain/utils/format/hour';

type THeader = {
  photoProfile: string;
  userName: string;
  hour: number;
};
export const Header = ({userName, photoProfile, hour}: THeader) => {
  const userNameFormatted = `@${userName}`;
  const shouldShowPostHours = hourFormatted({hour: hour});

  return (
    <PostHeader>
      <PostUserInfo>
        <AccountStoriesPhoto source={{uri: photoProfile}} />

        <View>
          <Typography
            value={userNameFormatted}
            type="Small"
            align="center"
            color={colors.c1.white}
          />

          {shouldShowPostHours && (
            <Typography
              value={`${hour} hrs ago`}
              type="Small"
              color={colors.c1.lightGray}
            />
          )}
        </View>
      </PostUserInfo>
    </PostHeader>
  );
};
