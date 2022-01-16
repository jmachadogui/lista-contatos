import React, { useEffect, useState } from "react";
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
           
        </Container>
    )
}

export default ListaContatos;