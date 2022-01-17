import React from "react";
import { View } from "react-native";
import Texto from "../atoms/Texto";
import styled from "styled-components";
import {CheckCircle} from 'react-native-feather'
const ToastDefault = styled.View`
    flexDirection: row;
    flex:1;
    backgroundColor: #FFFFFF;
    alignItems:center;
    borderRadius: 8px;
    borderWidth: 1px;
    borderColor: #E0E0E0;
    padding: 16px;
` 
const ToastCadastro = (props) => (
<View style={{ height: 56, width: '100%', paddingHorizontal:16}}>
    <ToastDefault style={{flexDirection:'row', flex:1, backgroundColor: '#FFFFFF'}}>
        <View style={{marginRight:16}}>
            <CheckCircle stroke='#9DF28F'/>
        </View>
        <Texto fontWeight={500} fontSize={14} color='#424242'>Contato cadastrado com sucesso!</Texto>
    </ToastDefault>
</View>
)

export default ToastCadastro;