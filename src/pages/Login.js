
import AsyncStorageLib from '@react-native-async-storage/async-storage';
import React from 'react';
import {
  Button,
  Text,
} from 'react-native';
import { clearWarnings } from 'react-native/Libraries/LogBox/Data/LogBoxData';
const axios = require('axios')
const base_url = 'https://contacts-api.prd.parceirodaconstrucao.com.br';

async function testePost(){
    let url = base_url+'/auth/login';
    console.log('URL', url)
    let data = {
      email: 'user@diwe.com.br',
      password: 'Mob20we23##'
    }

    let response = await axios.post(url, data)
    console.log('RESPONSE POST', response.data)
}
const Login = ({navigation}) => {
  return (
    <>
      <Button title='Entrar' onPress={()=>navigation.navigate('Contatos')}>   
      </Button>
     
      <Button title='Teste POST' onPress={()=>testePost()}>   
      </Button>
    </>
  );
};


export default Login;
