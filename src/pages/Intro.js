
import React from 'react';
import {
    Button,
  Text,
} from 'react-native';
import { ArrowUpCircle } from "react-native-feather";
const Intro = ({navigation}) => {
  return (
    <>
      <Button title='Ir para Login' onPress={()=>navigation.navigate('Login')}>   
      </Button>
      <Text style={{fontFamily: 'Montserrat-Black', color:'black'}}>Texto teste</Text>
    </>
  );
};


export default Intro;
