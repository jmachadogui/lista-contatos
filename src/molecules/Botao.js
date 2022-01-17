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
                marginTop: props.marginTop? props.marginTop:0,
                marginBottom: props.marginBottom? props.marginBottom:0,
                marginLeft: props.marginLeft? props.marginLeft:0,
                marginRight: props.marginRight? props.marginRight:0,
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