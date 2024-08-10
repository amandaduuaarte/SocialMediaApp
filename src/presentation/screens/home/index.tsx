import React from 'react';
import {Button} from 'react-native';

import {Container} from './styles';
import {Typography} from '@/presentation/components/Typography';
import {TAppRoutesNavigationProps} from '@/presentation/routes/app.routes';

type TProps = TAppRoutesNavigationProps<'Home'>;

export const Home = ({navigation}: TProps) => {
  const handleSaveStorage = () => {
    navigation.navigate('Profile');
  };

  return (
    <Container>
      <Typography value="oi" type="Large" />
      <Button title="save" onPress={handleSaveStorage} testID="save_button" />
    </Container>
  );
};
