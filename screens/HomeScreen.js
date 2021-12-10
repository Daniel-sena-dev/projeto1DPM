import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';

import Header from '../components/Header';
import Emails from '../components/Emails';


export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto"/>
      <Header/>
      <Emails navigation={navigation}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: Constants.statusBarHeight,
  },
});
