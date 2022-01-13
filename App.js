
import React from 'react';
import {
  Text,
} from 'react-native';

import Intro from './src/pages/Intro';
import Login from './src/pages/Login';
import Contatos from './src/pages/Contatos';
import Contato from './src/pages/Contato';

const App = () => {
  return (
    <>
      <Intro></Intro>
      <Login></Login>
      <Contatos></Contatos>
      <Contato></Contato>
    </>
  );
};


export default App;
