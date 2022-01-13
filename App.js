
import React from 'react';
import {
  Text,
} from 'react-native';

import Intro from './src/pages/Intro';
import Login from './src/pages/Login';
import Contatos from './src/pages/Contatos';
import Contato from './src/pages/Contato';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Introdução' component={Intro}/>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Contatos' component={Contatos}/>
        <Stack.Screen name='Contato' component={Contato}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
