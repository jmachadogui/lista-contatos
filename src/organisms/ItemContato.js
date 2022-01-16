import React from "react";
import { View } from "react-native";
import Card from "../atoms/Card";
import Texto from "../atoms/Texto";

const ItemContato = (props) => {
    return (
        <View style={{width:'100%', height:70}}>
         <Card flex={1}>
             <Texto>teste</Texto>
         </Card>
        </View>
    )
}

export default ItemContato;