import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { FlatList, RefreshControl, View } from "react-native";
import Container from "../atoms/Container";
import Texto from "../atoms/Texto";
import Botao from "../molecules/Botao";
import ItemContato from "../organisms/ItemContato";
import api from '../util/api'
const ListaContatos = (props) => {
    const navigation = useNavigation();
    const [contatos, setContatos] = useState([]);
    const [isRefreshing, setRefreshing] = useState(false);
    useEffect(() => {
        carregarContatos()
    },[])
    async function carregarContatos(){
        setRefreshing(true)
        let response = await api.request('GET', '/contacts');
        console.log('CONTATOS', response);
        setRefreshing(false);
        setContatos(response)
    }
    function onRefresh(){
        carregarContatos()
    }
    async function deleteContato(contato) {
        console.log('DELETE CONTATO', contato);
    }
    return (
        <Container justifyContent='flex-start'>
          <Botao title='Cadastrar Contato' onPress={()=>navigation.navigate('Contato')}/>
           <FlatList 
            data={contatos}
            renderItem={(contato) => (
                <View style={{marginBottom:16}}>
                    <ItemContato contato={contato.item} 
                        onEdit={(id) =>navigation.navigate('Contato', {id: id})}
                        onDelete={(contato) => deleteContato(contato)}
                    />
                </View>)
            }
            keyExtractor={contato => contato.id}
            refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={onRefresh}/>}
           />
        </Container>
    )
}

export default ListaContatos;