
import React from 'react';
import {
    Button,
  Text,
} from 'react-native';
import { useEffect } from 'react/cjs/react.development';
import Container from '../atoms/Container';
import ListaContatos from '../templates/ListaContatos';
import Toast from 'react-native-toast-message';

const Contatos = ({route, navigation}) => {
  console.log('ROUTE', route)
  useEffect(()=>{
    if(route.params != null){
      console.log(route.params.mensagemToast);
      if(route.params.mensagemToast != null)
        Toast.show({type:'sucessoCadastro'})
    }
  },[route])
  return (
    <>
      <ListaContatos />
    </>
  );
};


export default Contatos;
