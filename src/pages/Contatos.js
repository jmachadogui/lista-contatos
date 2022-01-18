
import React, { useState } from 'react';
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
  const [idSalvo, setIdSalvo] = useState(null);
  useEffect(()=>{
    if(route.params != null){
      console.log(route.params.mensagemToast);
      if(route.params.mensagemToast != null){
        Toast.show({type:'sucessoCadastro'})
        setIdSalvo(route.params.contatoId)
      }
    }
  },[route])
  return (
    <>
      <ListaContatos idSalvo={idSalvo}/>
    </>
  );
};


export default Contatos;
