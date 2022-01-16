import React from "react";
import { TouchableOpacity } from "react-native";
import Texto from "../atoms/Texto";

const Botao = (props) => {
    return (
        <TouchableOpacity
            style={{
                height:56,
                paddingHorizontal:16,
                paddingVertical:16,
                backgroundColor:'#142B5D',
                flexDirection:'row',
                // flex:1,
                // width:'50%',
                alignItems:'center',
                borderRadius:8
            }}
            onPress={()=>props.onPress()}
        >
            <Texto color='#F1F1F1' textAlign='center'>{props.title}</Texto>
        </TouchableOpacity>
    )
} 
export default Botao;