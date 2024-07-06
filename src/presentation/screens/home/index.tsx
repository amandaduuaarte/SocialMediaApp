import React from 'react';
import {Button, Text} from 'react-native';

import {GraduatedStudentFactory} from '@/main/factories/graduatedStudent/graduatedStudent-factory';

import {Container} from './styles';
import {Typography} from '@/presentation/components/Typography';
export const Home = (): React.ReactElement => {
  const handleSaveStorage = () => {
    GraduatedStudentFactory.save(
      {
        id: 123,
        data: {
          daysForGraduation: 3,
          isGraduated: true,
        },
      },
      'student',
    );
  };

  return (
    <Container>
      <Typography value="oi" type="Large" />
      <Button title="save" onPress={handleSaveStorage} testID="save_button" />
    </Container>
  );
};
