
import React from 'react';
import {
    Button,
  Text,
} from 'react-native';
import { ArrowUpCircle } from "react-native-feather";
import If from '../atoms/If';
import { Title } from '../atoms/styles';
import H1 from '../atoms/H1';
import Texto from '../atoms/Texto';
import Container from '../atoms/Container';
const Intro = ({navigation}) => {
  return (
    <Container alignItems='center'>
      <H1>Bem-vindo! É hora de começar uma nova experiência</H1>
      <Texto textAlign='center'>Para ter acesso a todas as funcionalidades que podemos oferecer, faça login ou crie uma nova conta.</Texto>
    </Container>
  );
};


export default Intro;
