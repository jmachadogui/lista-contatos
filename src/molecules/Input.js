import React, { useEffect, useState } from "react";
import { TextInput } from "react-native";
import styled from "styled-components";
import Texto from "../atoms/Texto";
import FormatUtil from '../util/FormatUtil';
const EntradaTexto = styled.TextInput`
    backgroundColor:#F1F3F5;
    width: 100%;
    padding:16px;
    height: 56px;
    borderRadius: 8px;
`
function Input  (props)  {
    console.log('PROPS', props.value);
    const [value, setValue] = useState(props.value);
    const [maxLength, setMaxlength] = useState(null);

    useEffect(()=>{
        getMaxLength();
        if(!FormatUtil.isEmpty(props.value)){
            setValue(props.value)
        }
    },[props.value])
    function getMaxLength(){
        if(props.format == 'telefone')
            setMaxlength(15);
        else if(props.maxLength != null)
            setMaxlength(props.maxLength)
    }
    function handleChange(valor) {
        console.log('HANDLE CHANGE', valor);
        if(props.format == 'telefone'){
            valor = formatar(valor);
        }
        setValue(valor);
        console.log('VALOR', valor);
        let valorSemFormatacao = desformatar(valor);
        if(props.onChange != null){
            props.onChange(props.name, valorSemFormatacao)

        }
    }
    function formatar(v) {
        if(props.format == 'telefone')
            return FormatUtil.formatTelefone(v)
        return v;
    }
    function desformatar (value) {
        var valorSemFormatacao = value;
        let {format} = props;
        if (format === 'telefone') {
            valorSemFormatacao = valorSemFormatacao.replace(/\D/g, "");
        }
        return valorSemFormatacao;
    }
    return (
        <>
            <Texto marginTop='24px' fontWeight={500} color='#142B5D'>{props.label}</Texto>
            <EntradaTexto 
                maxLength={maxLength}
                onChangeText={(value) => {handleChange(value)}}
                value={value}
                placeholder={props.placeholder} 
                placeholderTextColor='#495057' 
                color='#495057'
                keyboardType={props.keyboardType}
            />
        </>
    )
}

export default Input;