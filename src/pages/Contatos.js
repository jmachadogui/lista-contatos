
import React from 'react';
import {
    Button,
  Text,
} from 'react-native';

const Contatos = ({navigation}) => {
  return (
    <>
       <Button title='Ver contato' onPress={()=>navigation.navigate('Contato')}>   
      </Button>
    </>
  );
};


export default Contatos;
