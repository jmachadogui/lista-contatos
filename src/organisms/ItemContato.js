import React from "react";
import { View } from "react-native";
import Card from "../atoms/Card";
import Texto from "../atoms/Texto";

const ItemContato = (props) => {
    return (
        <View style={{width:'100%', height:90}}>
         <Card flex={1}>
             <Texto>{props.contato.name}</Texto>
             <Texto>{props.contato.email}</Texto>
             <Texto>{props.contato.mobile}</Texto>
         </Card>
        </View>
    )
}

export default ItemContato;