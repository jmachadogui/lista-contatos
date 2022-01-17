
import React from 'react';
import {
  Text, View,
} from 'react-native';
import Intro from './src/pages/Intro';
import Login from './src/pages/Login';
import Contatos from './src/pages/Contatos';
import Contato from './src/pages/Contato';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
import ToastCadastro from './src/molecules/ToasCadastro';
const Stack = createNativeStackNavigator();
const ToastConfig = {
  success: (props) => (
      <BaseToast
        {...props}
        style={{ borderLeftColor: 'pink' }}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        text1Style={{
          fontSize: 15,
          fontWeight: '500'
        }}
      />
    ),
   sucessoCadastro:  ({ text1, props }) => (
    <ToastCadastro />
  )
}

const App = () => {
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Intro' component={Intro} options={{headerShown: false}}/>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Contatos' component={Contatos}/>
        <Stack.Screen name='Contato' component={Contato}/>
      </Stack.Navigator>
    </NavigationContainer>
    <Toast config={ToastConfig} />
    </>
  );
};


export default App;
