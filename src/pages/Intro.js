
import React from 'react';
import {
    Button,
  Text,
} from 'react-native';

const Intro = ({navigation}) => {
  return (
    <>
      <Button title='Ir para Login' onPress={()=>navigation.navigate('Login')}>   
      </Button>
    </>
  );
};


export default Intro;
