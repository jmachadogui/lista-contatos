import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import Container from "../atoms/Container";
import Texto from "../atoms/Texto";
import ItemContato from "../organisms/ItemContato";
import api from '../util/api'
const ListaContatos = (props) => {
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
           <FlatList 
            data={contatos}
            renderItem={(contato) => <View style={{marginTop:16}}><ItemContato contato={contato.item}/></View>}
            keyExtractor={contato => contato.id}
           />
        </Container>
    )
}

export default ListaContatos;