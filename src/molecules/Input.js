import React, { useState } from "react";
import { TextInput } from "react-native";
import styled from "styled-components";
import Texto from "../atoms/Texto";
const EntradaTexto = styled.TextInput`
    backgroundColor:#F1F3F5;
    width: 100%;
    padding:16px;
    height: 56px;
    radius: 8px;
`
const Input = (props) => {
    console.log('PROPS', props);
    const [value, setValue] = useState(props.value);
    return (
        <>
            <Texto fontWeight={500} color='#142B5D'>{props.label}</Texto>
            <EntradaTexto 
                onChangeText={(value) => {setValue(value);props.onChange(value)}}
                value={value}
                placeholder={props.placeholder} 
                placeholderTextColor='#495057' 
                color='#495057'
                keyboardType={props.keyboardType}
            />
            <TextInput />
        </>
    )
}

export default Input;