import React from "react";
import { Touchable, TouchableOpacity, View } from "react-native";
import Texto from "../atoms/Texto";
import ModalBox from "../molecules/ModalBox";
import styled from "styled-components";
const Pressable = styled.TouchableOpacity`
    height:56px;
    padding:16px;
    background-color:${props => props.color};
    width:48%;
    borderRadius:8px;
    borderWidth:${props => props.borderWidth != null? props.borderWidth: '0px'};
    borderColor:#424242;
` 
const ConfirmPanel = (props) => {
    return (
        <ModalBox visible={props.visible}>
           <View style={{flex:1}}>
           <View style={{padding:16}}>
                <Texto fontSize='18px' fontWeight={700} textAlign='center'>{props.textConfirm}</Texto>
                <Texto fontSize='16px' fontWeight={600} textAlign='center' marginTop={'8px'}>{props.secondaryText}</Texto>            
            </View>
            <View style={{marginTop:32, flex:1, flexDirection:'row', justifyContent:'space-between'}}>
                <Pressable color='#FC3333' onPress={()=>{
                    props.onConfirm();
                    props.onClose();
                }}>
                    <Texto textAlign='center' color='#F1F1F1' fontWeight='600'>{props.labelConfirm}</Texto>
                </Pressable>
                <Pressable color='#FFFFFF' borderWidth={'1px'} onPress={()=>props.onClose()}>
                    <Texto  textAlign='center' color='#424242' fontWeight='600'>{props.labelCancel}</Texto>
                </Pressable>
            </View>
           </View>
        </ModalBox>
    )
}

export default ConfirmPanel;