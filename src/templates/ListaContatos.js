import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { FlatList, RefreshControl, Touchable, TouchableOpacity, View } from "react-native";
import Container from "../atoms/Container";
import Texto from "../atoms/Texto";
import Botao from "../molecules/Botao";
import ItemContato from "../organisms/ItemContato";
import api from '../util/api'
const ListaContatos = (props) => {
    const navigation = useNavigation();
    const [contatos, setContatos] = useState([]);
    const [isRefreshing, setRefreshing] = useState(false);
    const [selectedId, setSelectedId] = useState(null);
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
        let index;
        let state = contatos;
        state.map((c, idx) => {
            if(c.id == contato.id)
                index=idx;
        })
        await api.request('DELETE', '/contacts/'+contato.id);
        state.splice(index, 1);
        setSelectedId(contato.id);
        setContatos(state);
    }
    return (
        <Container justifyContent='flex-start'>
            <Botao marginTop={36} marginBottom={50} title='Cadastrar Contato' onPress={()=>navigation.navigate('Contato')}/>
            <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:16}}>
                <View style={{flex:1}}>
                    <Texto color='#757575'>Total: {contatos.length} usuários</Texto>
                </View>
                <TouchableOpacity>
                    <Texto color='#142B5D' fontSize='14px'>Ver Todos</Texto>
                </TouchableOpacity>
            </View>
            <FlatList 
                extraData={selectedId}
                data={contatos}
                renderItem={(contato) => (
                    <View style={{marginBottom:16}}>
                        <ItemContato contato={contato.item} 
                            onEdit={(id) =>navigation.navigate('Contato', {id: id})}
                            onDelete={(contato) => deleteContato(contato)}
                        />
                    </View>
                )
            }
            keyExtractor={contato => contato.id}
            refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={onRefresh}/>}
           />
        </Container>
    )
}

export default ListaContatos;