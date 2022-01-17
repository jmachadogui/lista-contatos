import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { FlatList, RefreshControl, Touchable, TouchableOpacity, View } from "react-native";
import Container from "../atoms/Container";
import ModalComponent from "../atoms/ModalComponent";
import Texto from "../atoms/Texto";
import Botao from "../molecules/Botao";
import ModalBox from "../molecules/ModalBox";
import ConfirmPanel from "../organisms/ConfirmPanel";
import ItemContato from "../organisms/ItemContato";
import api from '../util/api'
const ListaContatos = (props) => {
    const navigation = useNavigation();
    const [contatos, setContatos] = useState([]);
    const [isRefreshing, setRefreshing] = useState(false);
    const [selectedId, setSelectedId] = useState(null);
    const [contatoId, setContatoId] = useState(null);
    const [isConfirmDelete, setConfirmDelete] = useState(true);
    useEffect(() => {
        carregarContatos()
    },[])
    async function carregarContatos(){
        setRefreshing(true)
        let response = await api.request('GET', '/contacts');
        setRefreshing(false);
        setContatos(response)
    }
    function onRefresh(){
        carregarContatos()
    }
    async function deleteContato(id) {
        let index;
        let state = contatos;
        state.map((c, idx) => {
            if(c.id == id)
                index=idx;
        })
        await api.request('DELETE', '/contacts/'+id);
        state.splice(index, 1);
        setSelectedId(id);
        setContatos(state);
    }
    function onConfirmDelete(){
        deleteContato(contatoId);
    }
    function selectContatoDelete(contato){
        console.log(contato.id);
        setContatoId(contato.id);
        setConfirmDelete(true)
    }
    return (
        <Container justifyContent='flex-start'>
            <ConfirmPanel 
                visible={isConfirmDelete}
                textConfirm={'Tem certeza que deseja excluir este contato?'}
                secondaryText={'Após excluir, não será possivel recuperar o contato.'}
                labelConfirm='Excluir contato'
                labelCancel='Não excluir'
                onConfirm={()=>onConfirmDelete()}
                onClose={()=>setConfirmDelete(false)}
            />
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
                            onDelete={(contato) => selectContatoDelete(contato)}
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