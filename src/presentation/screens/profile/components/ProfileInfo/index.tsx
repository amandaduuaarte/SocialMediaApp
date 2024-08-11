import React from 'react';
import {Typography} from '@/presentation/components/Typography';
import {UserInfoContainer, UserInfoContent} from '../../styles';
import {colors} from '@/presentation/colors';

type TUserInfo = {
  label: string;
  value: string;
};

export const ProfileInfo = ({info}: {info: TUserInfo[]}) => {
  return (
    <UserInfoContainer>
      {info &&
        info.map(user => (
          <UserInfoContent key={user.value}>
            <Typography
              testID={`profile.text.accountInfo.${user.label}`}
              value={user.label}
              type="Small"
              color={colors.c1.gray}
            />
            <Typography
              value={user.value}
              type="H2Bold"
              testID={`profile.text.accountValue.${user.value}`}
            />
          </UserInfoContent>
        ))}
    </UserInfoContainer>
  );
};
