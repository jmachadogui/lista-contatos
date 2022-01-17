import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import Container from "../atoms/Container";
import Texto from "../atoms/Texto";
import Botao from "../molecules/Botao";
import ItemContato from "../organisms/ItemContato";
import api from '../util/api'
const ListaContatos = (props) => {
    const navigation = useNavigation();
    const [contatos, setContatos] = useState([]);
    useEffect(() => {
        async function carregarContatos(){
            let response = await api.request('GET', '/contacts');
            console.log('CONTATOS', response);
            setContatos(response)
        }
        carregarContatos()
    },[])
    return (
        <Container justifyContent='flex-start'>
          <Botao title='Cadastrar Contato' onPress={()=>navigation.navigate('Contato')}/>
           <FlatList 
            data={contatos}
            renderItem={(contato) => (
                <View style={{marginBottom:16}}>
                    <ItemContato contato={contato.item} onEdit={(id) =>navigation.navigate('Contato', {id: id})}/>
                </View>)
            }
            keyExtractor={contato => contato.id}
           />
        </Container>
    )
}

export default ListaContatos;