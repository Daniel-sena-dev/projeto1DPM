import React from 'react';
import {StyleSheet, Image, View} from 'react-native';

export default function Header(){
    return(
        <View style={styles.header}>
            <Image style={styles.logo} aspectRatio={1.348} source={require('../imagem/gmail-icon.png')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        padding: 10,
        height: 50,
        alignItems: 'center',
        marginBottom: 20,
        
    },  
    logo: {
        height: '100%',
        width: undefined,
    },  


});