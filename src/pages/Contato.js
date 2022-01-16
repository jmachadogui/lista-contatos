
import React, { useState } from 'react';
import {
  Text,
} from 'react-native';
import Container from '../atoms/Container';
import Texto from '../atoms/Texto';
import Botao from '../molecules/Botao';
import Input from '../molecules/Input'
const Contato = () => {
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
  function salvar(){
    console.log(contato);
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
