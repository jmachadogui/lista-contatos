import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import Card from "../atoms/Card";
import Texto from "../atoms/Texto";
import * as Icon from 'react-native-feather';
const ItemContato = (props) => {
    return (
        <View style={{flex:1}}>
         <Card flex={1}>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <View style={{flexDirection:'column'}}>
                        <Texto fontWeight={600} fontSize='16px' color='#424242'>{props.contato.name}</Texto>
                        <Texto marginTop='4px' fontSize='14px'>{props.contato.email}</Texto>
                    </View>
                    <TouchableOpacity onPress={()=>{props.onEdit(props.contato.id)}}>
                        <Texto color='#757575'>Editar</Texto>
                    </TouchableOpacity>
                </View>
                <View style={{marginTop:34, flexDirection:'row', justifyContent:'space-between'}}>
                    <View style={{flexDirection:'row', flex:1}}>
                        <Icon.Smartphone stroke={'#424242'} style={{marginRight:13}}/>
                        <Texto>{props.contato.mobile}</Texto>
                    </View>
                    <View style={{flex:1, alignItems:'flex-end'}}>
                        <Icon.Trash2 stroke={'#FC3333'}/>
                    </View>
                </View>
         </Card>
        </View>
    )
}

export default ItemContato;