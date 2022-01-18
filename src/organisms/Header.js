import React from 'react'
import { View } from 'react-native';
import Texto from '../atoms/Texto';

const Header = ({title, leftButton}) => {
    return (
        <View style={{
            height:96,
            justifyContent:'center',
            backgroundColor:'#FFFFFF',
            borderBottomWidth:1,
            borderColor:'#EEEEEE',
        }}>
            <View style={{flexDirection:'column', flex:1}}>
                <View style={{flexDirection:'row', flex:1}}>
                    <View style={{alignSelf:'center', justifyContent:'center', flex:1}}>
                        {leftButton}
                    </View>
                    <View style={{flexDirection:'column', flex:4}}>
                        <View style={{flex:1, justifyContent:'center'}}>
                            <Texto textAlign='center' color='#244677' fontWeight={600}>{title}</Texto>
                        </View>
                    </View>
                    <View style={{flex:1}}></View>
                </View>
                {/* <View style={{flexDirection:'row', alignSelf:'flex-start', justifyContent:'center', backgroundColor:'grey'}}>
                    {leftButton}
                </View>
                <View style={{ alignSelf:'center', backgroundColor:'red'}}>
                    <Texto textAlign='center' color='#244677' fontWeight={600}>{title}</Texto>
                </View> */}
            </View>
        </View>
    )
}

export default Header;