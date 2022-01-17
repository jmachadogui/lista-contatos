
import React, { useState } from 'react';
import {
  Alert,
  Text,
} from 'react-native';
import Container from '../atoms/Container';
import Texto from '../atoms/Texto';
import Botao from '../molecules/Botao';
import Input from '../molecules/Input';
import FormatUtil from '../util/FormatUtil';
const Contato = ({navigation}) => {
  const [contato, setContato] = useState({
    name:'',
    email:'',
    mobile:''
  })
  const handleChange = (name, value) => {
    let state = contato;
    state[name] = value;
    setContato(state);
  }
  function validaCamposOK(campoContato) {
    let retorno = true;
    if(FormatUtil.isEmpty(campoContato.name)){
      Alert.alert('Aviso', 'O nome é uma informação obrigatória')
      retorno = false
    }
    if(FormatUtil.isEmpty(campoContato.email)){
      Alert.alert('Aviso', 'O email é uma informação obrigatória.')
      retorno = false
    }
    if(FormatUtil.isEmpty(campoContato.mobile)){
      Alert.alert('Aviso', 'O telefone é uma informação obrigatória.')
      retorno = false
    }
    return retorno;
  }
  function salvar(){
    if(!validaCamposOK(contato)){
      return;
    }
  }
  return (
    <Container justifyContent='flex-start' alignItems='center'>
      <Texto textAlign='center' width='80%'>Preencha as informações para cadastrar um novo contato</Texto>
      <Input name='name' label='Nome Completo' value={contato.name} onChange={(name, value) => handleChange(name, value)}/>
      <Input name='email' label='Email' value={contato.email} onChange={(name, value) => handleChange(name, value)}/>
      <Input name='mobile' label='Celular' keyboardType='numeric' value={contato.mobile} onChange={(name, value) => handleChange(name, value)}/>
      <Botao title='Cadastrar Contato' onPress={()=>salvar()}/>
    </Container>
  );
};


export default Contato;
