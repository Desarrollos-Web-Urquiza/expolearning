import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView, Platform, TextInput } from 'react-native';

export default function CompBienvenido(props) {
  
	const version = Platform.OS

  return (
    <View>
    	<Text> Bienvenido</Text>
    	<Text> Usuario: {props.params.user}</Text>
    	<Text> Contraseña: {props.params.pass}</Text>          
	</View>
  );
}

const styles = StyleSheet.create({

});

