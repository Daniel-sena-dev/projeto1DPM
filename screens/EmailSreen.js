import React, { useEffect, useState } from "react";

import { StatusBar } from "expo-status-bar";
import {StyleSheet, View, Text, Image} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';



export default function EmailScreen({ route }){
    const { id } = route.params;

    const [chat, setChat] = useState([])
    
    useEffect(() => {
        async function getData() {
            const response = await fetch(`https://mobile.ect.ufrn.br:3002/emails/${id}`);
            const chat = await response.json();
            setChat(chat);
            console.log(chat);
        }
        getData();
    }, []);

    

    return(
        <View style={styles.container}>
            <StatusBar style="auto"/>
            
            <View style={styles.emailContainer}>

                <View style={styles.tituloContainer}>                    
                    <Text style={styles.titulo}>{chat.tittle}</Text>
                    <FontAwesome5 style={chat.star ? styles.estrelaT : styles.estrela} name="star" size={24} color="black"/>
                </View>

                <View style={styles.sendContainer}>
                    <Image style={styles.image} source={{uri: chat.picture}}></Image> 
                    <Text style={styles.fromText}>{chat.from}</Text>
                    <Text style={styles.timeText}>{chat.time}</Text>
                    <Text style={styles.toText}>{chat.to}</Text>
                </View>
                
                <View style={styles.bodyContainer}>
                    <Text style={styles.body}>{chat.body}</Text>
                </View>
                
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    emailContainer:{
        flex: 1,
        
    },
    //Titulo container-----------------------------------
    titulo:{
        fontSize: 30,
        fontWeight: 'bold',
        padding: 10,
    },
    estrela:{
        left: 350,
        bottom: 10,        
    },
    estrelaT:{
        left: 350,
        bottom: 10,
        color: 'yellow',
    },
    //Envio container------------------------------------------
    sendContainer:{
        height: 80,        
    },
    
    fromText:{
        fontSize: 18,
        fontWeight: 'bold',
        left: 80,
        bottom: 70,
    },

    toText:{
        fontSize: 14,
        left: 80,
        bottom: 90,
    },

    timeText:{
        fontSize: 16,
        left: 140,
        bottom: 94,        
    },

    image:{
        height: 60,
        width: 60,
        margin: 8,
        borderRadius: 30,
        bottom: 5,
    },

    //Body container------------------------------------------
    body:{
        fontSize: 24,
        padding: 10,
    }

});