
import AsyncStorageLib from '@react-native-async-storage/async-storage';
import React from 'react';
import {
  Button,
  Text,
} from 'react-native';
import { clearWarnings } from 'react-native/Libraries/LogBox/Data/LogBoxData';
const axios = require('axios')
const base_url = 'https://contacts-api.prd.parceirodaconstrucao.com.br';

async function testLogin(){
    let url = base_url+'/auth/login';
    console.log('URL', url)
    let data = {
      email: 'user@diwe.com.br',
      password: 'Mob20we23##'
    }

    let response = await axios.post(url, data)
    console.log('RESPONSE POST', response.data)
    console.log('TOKEN', response.data.token)
    AsyncStorageLib.setItem('TOKEN', response.data.token)
}
async function testeGet(){
  let url = base_url+'/contacts';
  console.log('GET', url)
  let token =await AsyncStorageLib.getItem('TOKEN');
  console.log('GET TOKEN', token)
  let response = await axios({
    url: url,
    method: "GET",
    headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + token
    }
  })
  console.log(response.data)
}
async function testePost(){
  let url = base_url+'/contacts';
  console.log('POST', url)
  let token =await AsyncStorageLib.getItem('TOKEN');
  
  let data = {
    name: "Guilherme Machado",
    mobile: "51997695256",
    email: "jmachado.gui@gmail.com"
  }

  let response = await axios({
    url: url,
    method: "POST",
    data:data,
    headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + token
    }
  })
  console.log(response.data)
}
async function testePut(){
  let url = base_url+'/contacts/16';
  console.log('PUT', url)
  let token =await AsyncStorageLib.getItem('TOKEN');
  
  let data = {
    name: "Machado",
    mobile: "51997695256",
    email: "jmachado.gui@gmail.com"
  }

  let response = await axios({
    url: url,
    method: "PUT",
    data:data,
    headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + token
    }
  })
  console.log(response.data)
}
async function testeDelete(){
  let url = base_url+'/contacts/16';
  console.log('DELETE', url)
  let token =await AsyncStorageLib.getItem('TOKEN');

  let response = await axios({
    url: url,
    method: "DELETE",
    headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + token
    }
  })
  console.log(response.data)
}
const Login = ({navigation}) => {
  return (
    <>
      <Button title='Entrar' onPress={()=>navigation.navigate('Contatos')}>   
      </Button>
      <Button title='Teste Login' onPress={()=>testLogin()}>   
      </Button>
      <Button title='Teste GET' onPress={()=>testeGet()}>   
      </Button>
      <Button title='Teste POST' onPress={()=>testePost()}>   
      </Button>
      <Button title='Teste PUT' onPress={()=>testePut()}>   
      </Button>
      <Button title='Teste DELETE' onPress={()=>testeDelete()}>   
      </Button>
     
    </>
  );
};


export default Login;
