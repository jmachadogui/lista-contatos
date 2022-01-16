
import React, { useEffect, useState } from 'react';
import {
    Button,
  Image,
  Text,
  TextInput,
  View,
} from 'react-native';
import { ArrowUpCircle } from "react-native-feather";
import If from '../atoms/If';
import { Title } from '../atoms/styles';
import H1 from '../atoms/H1';
import Texto from '../atoms/Texto';
import Container from '../atoms/Container';
import Input from '../molecules/Input';
import Botao from '../molecules/Botao';
const Intro = ({navigation}) => {
  const [valorInput, setValorInput] = useState('teste')

  return (
    <Container alignItems='center' justifyContent='flex-start' paddingTop={70}>
      
        <Image style={{marginBottom:69}} source={require('../assets/images/img_tela_intro.png')}/>
        <H1>Bem-vindo! É hora de começar uma nova experiência</H1>
        <Texto textAlign='center'>Para ter acesso a todas as funcionalidades que podemos oferecer, faça login ou crie uma nova conta.</Texto>
        <Botao title='Começar' onPress={()=>navigation.navigate('Login')}/>
    </Container>
  );
};


export default Intro;
