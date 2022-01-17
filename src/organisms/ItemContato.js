import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import Card from "../atoms/Card";
import Texto from "../atoms/Texto";

const ItemContato = (props) => {
    return (
        <View style={{flex:1}}>
         <Card flex={1}>
             <View>
                <TouchableOpacity onPress={()=>{props.onEdit(props.contato.id)}}>
                    <Texto>Editar</Texto>
                </TouchableOpacity>
                <Texto>{props.contato.name}</Texto>
                <Texto>{props.contato.email}</Texto>
                <Texto>{props.contato.mobile}</Texto>
             </View>
         </Card>
        </View>
    )
}

export default ItemContato;