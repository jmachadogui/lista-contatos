
import AsyncStorageLib from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import {
  Button,
  Text,
} from 'react-native';
import { clearWarnings } from 'react-native/Libraries/LogBox/Data/LogBoxData';
import Container from '../atoms/Container';
import H1 from '../atoms/H1';
import Texto from '../atoms/Texto';
import Botao from '../molecules/Botao';
import Input from '../molecules/Input';
import api from '../util/api';
import Config from '../util/Config';
const axios = require('axios')
const base_url = 'https://contacts-api.prd.parceirodaconstrucao.com.br';

const Login = ({navigation}) => {
  const [infoLogin, setInfoLogin] = useState({email:'user@diwe.com.br', password:'Mob20we23##'})
  const handleChange = (name, value) => {
    console.log(name, value);
    let state = infoLogin;
    state[name] = value;
    setInfoLogin(state)
  }
  async function logar(){
      let response = await api.logar(infoLogin)
      if(response.error){
        alert('Credenciais inválidas. Por favor, tente novamente');
      } else {
        navigation.navigate('Contatos')
      }
  }
  async function get(){
     let response = await api.request('GET', '/contacts');
     console.log(response.data);
  }
  return (
    <Container justifyContent='flex-start' alignItems='center'>
      <H1>Bem Vindo(a)!</H1>
      <Texto width='80%' textAlign='center'>Faça login para acessar nossa plataforma</Texto>
      <Input placeholder='Digite seu email' label='Email' name='email' value={infoLogin.email} onChange={(name, value)=>handleChange(name, value)}/>
      <Input placeholder='Digite sua senha' label='Senha' name='password' value={infoLogin.password} onChange={(name, value)=>handleChange(name, value)}/>
      <Botao title='Entrar' onPress={()=>logar()}/>
    
    </Container>
  );
};


export default Login;
