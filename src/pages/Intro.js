
import React from 'react';
import {
    Button,
  Text,
} from 'react-native';
import { ArrowUpCircle } from "react-native-feather";
import { Title } from '../atoms/styles';
const Intro = ({navigation}) => {
  return (
    <>
      <Button title='Ir para Login' onPress={()=>navigation.navigate('Login')}>   
      </Button>
      <Title>Titulo</Title>
      <Text style={{fontFamily: 'Montserrat-Black', color:'black'}}>Texto teste</Text>
    </>
  );
};


export default Intro;
