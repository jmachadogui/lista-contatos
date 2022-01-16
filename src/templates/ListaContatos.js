import React from "react";
import Container from "../atoms/Container";
import Texto from "../atoms/Texto";
import ItemContato from "../organisms/ItemContato";

const ListaContatos = (props) => {
    return (
        <Container justifyContent='flex-start'>
           <ItemContato></ItemContato>
        </Container>
    )
}

export default ListaContatos;