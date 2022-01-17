import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components";
import Botao from "../molecules/Botao";

const Modal = styled.Modal`
    flex: 1;
    justifyContent: center;
    alignItems: center;
    marginTop: 22px;
    shadowColor: grey;
    backgroundColor: black,
`
const ModalComponent = (props) => (
    <Modal transparent={true} visible={props.visible}>
        <View style={{flex:1, justifyContent:'center', alignItems:'center', padding:16}}>
          {props.children}
        </View>
    </Modal>
)
export default ModalComponent;