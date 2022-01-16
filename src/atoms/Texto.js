import React from "react";
import styled from 'styled-components/native';

const Texto = styled.Text`
    fontFamily: Montserrat-Regular;
    color: ${props=>props.color != null? props.color:'#757575'};
    fontSize: ${props=>props.fontSize != null? props.fontSize:'16px'};
    width: ${props=> props.width != null? props.width:'100%'};
    fontWeight: ${props=> props.fontWeight != null? props.fontWeight:'500'};
    textAlign:${props=> props.textAlign != null? props.textAlign:'left'};
`
export default Texto;