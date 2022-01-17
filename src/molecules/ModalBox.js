import React from 'react';
import { View } from 'react-native';
import Card from '../atoms/Card';
import ModalComponent from '../atoms/ModalComponent';
import Texto from '../atoms/Texto';

const ModalBox = (props) => {
    return (
        <ModalComponent visible={props.visible == true}>
           <View style={{width:'100%', height:250}}>
                <Card flex={1}>
                    {props.children}
                </Card>
           </View>
        </ModalComponent>
    )
}

export default ModalBox;