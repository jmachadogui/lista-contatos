
import React, { useEffect, useState } from 'react';
import {
  Alert,
  Text,
  View,
} from 'react-native';
import Container from '../atoms/Container';
import Texto from '../atoms/Texto';
import Botao from '../molecules/Botao';
import Input from '../molecules/Input';
import api from '../util/api';
import FormatUtil from '../util/FormatUtil';
const Contato = ({route, navigation}) => {
  const [contato, setContato] = useState({
    name:'',
    email:'',
    mobile:''
  })
  const [mensagem, setMensagem] = useState('Preencha as informações para cadastrar um novo contato');
  useEffect(()=>{
    console.log(route.params);
    if(route.params && route.params.id){
      navigation.setOptions({title:'Atualizar contato'});
      setMensagem('Faça as alterções necessárias e ao terminar salve seu contato');
      carregaContato();
    } else {
      navigation.setOptions({title:'Cadastrar um novo contato'})
    }
  },[])
  async function carregaContato(){
    console.log('ID', route.params.id);
    let {id, name, email, mobile} = await api.request('GET', '/contacts/'+route.params.id);
    let state = {id:id, name:name, email, mobile}
    console.log('STATE',state);
    setContato(state);

  }
  function handleChange(name, value){
    console.log('handleChange', name, value);
    let state = contato;
    state[name] = value;
    console.log('STATE', state);
    setContato(state);
  }
  function validaCamposOK(campoContato) {
    let retorno = true;
    if(FormatUtil.isEmpty(campoContato.name)){
      Alert.alert('Aviso', 'O nome é uma informação obrigatória')
      retorno = false
    }
    if(FormatUtil.isEmpty(campoContato.email)){
      Alert.alert('Aviso', 'O email é uma informação obrigatória.')
      retorno = false
    }
    if(FormatUtil.isEmpty(campoContato.mobile)){
      Alert.alert('Aviso', 'O telefone é uma informação obrigatória.')
      retorno = false
    }
    if(campoContato.mobile.length != 11){
      console.log(campoContato.mobile.length);
      Alert.alert('Aviso', 'O telefone fornecido é inválido.')
      return;
    }
    return retorno;
  }
  async function salvar(){
    if(!validaCamposOK(contato)){
      return;
    }
    let type = contato.id == null? 'POST':'PUT';
    let url = `/contacts${contato.id? '/'+contato.id:''}`
    let response = await api.request(type, url, contato)
    console.log('RESPONSE', response);
    let mensagem = type == 'POST'? 'Contato cadastrado com sucesso!':'Contato atualizado com sucesso!';
    navigation.navigate({
      name: 'Contatos',
      params: { mensagemToast: mensagem, contatoId: response.id },
      merge: true,
    });
  }
  return (
    <Container justifyContent='flex-start' alignItems='center' paddingTop={32}>
      <Texto textAlign='center' width='80%'>{mensagem}</Texto>
      <View style={{flex:1, width:'100%', justifyContent:'space-between', paddingBottom:32}}>
        <View>
          <Input marginTop={48} name='name' placeholder='Digite o nome do contato' label='Nome Completo' value={contato.name} onChange={(name, value) => handleChange(name, value)}/>
          <Input marginTop={48} name='email' placeholder='Digite o email' label='Email' value={contato.email} onChange={(name, value) => handleChange(name, value)}/>
          <Input marginTop={48} format='telefone' name='mobile' placeholder='Digite o nome do celular' label='Celular' keyboardType='numeric' value={contato.mobile} onChange={(name, value) => handleChange(name, value)}/>
        </View>
        <Botao title='Cadastrar Contato' onPress={()=>salvar()}/>
      </View>
    </Container>
  );
};


export default Contato;
