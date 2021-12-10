import React, { useEffect, useState } from "react";
import { StyleSheet, Image, View, Text, FlatList, TouchableOpacity } from "react-native";
import { StatusBar } from 'expo-status-bar';
import {FontAwesome5} from '@expo/vector-icons';

export default function Emails({navigation}) {
    
    const [email, setEmail] = useState([]);

    useEffect(() => {
        async function getData(){
            const response = await fetch ('https://mobile.ect.ufrn.br:3002/emails/');
            const email = await response.json();
            setEmail(email);
        }

        getData();
    }, []);

    function renderItem({item}) {

        return <TouchableOpacity style={styles.email} onPress={() => navigation.navigate('EmailScreen', {id: item.id})}>
            <Image style={styles.image} source={{uri: item.picture}}></Image> 
            <View style={styles.boxmail}>
                <Text style={styles.nome}>{item.to}</Text>
                <Text style={styles.conteudo}>{item.tittle}</Text>
                <Text style={styles.data}>{item.time}</Text>
                <FontAwesome5 style={item.star ? styles.estrelaT : styles.estrela} name="star" size={24} color="black"/>

            </View>
        </TouchableOpacity>;
    }

    return(
        <View style={styles.container}>
            <StatusBar style="auto"/>
            <FlatList
                data={email}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator = {false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        
    },
    email: {
        height: 90, 
        flexDirection: 'row',       
    },

    image: {
        height: 60,
        width: 60,
        margin: 8,
        borderRadius: 30,
        bottom: 5,
    },

    boxmail:{
        justifyContent: 'center',         
    },
    nome:{
        fontWeight: 'bold',
        fontSize: 18,                
    },
    estrela:{
        left: 280,
        bottom: 30,
        
    },
    estrelaT:{
        left: 280,
        bottom: 30,
        color: 'yellow',
    },

    data:{
        left: 255,
        bottom: 40,
        color: 'blue',
    },
    conteudo: {
        fontSize: 18,
    }
    
});