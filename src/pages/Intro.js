
import React from 'react';
import {
    Button,
  Text,
} from 'react-native';
import { ArrowUpCircle } from "react-native-feather";
import If from '../atoms/If';
import { Title } from '../atoms/styles';
import H1 from '../atoms/H1';
const Intro = ({navigation}) => {
  return (
    <>
      <If test={true}>
        <Text style={{color:'red'}}>a</Text>
      </If>
      <H1>Aaaaaa</H1>
    </>
  );
};


export default Intro;
