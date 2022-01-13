
import React from 'react';
import {
    Button,
  Text,
} from 'react-native';

const Login = ({navigation}) => {
  return (
    <>
      <Button title='Entrar' onPress={()=>navigation.navigate('Contatos')}>   
      </Button>
    </>
  );
};


export default Login;
