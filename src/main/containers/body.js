import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Image, Button, Platform, ScrollView } from 'react-native';
import CompBienvenido from '../components/compBienvenido.js';

class Body extends Component {

	constructor() {
		super();    
		this.state = {user : 'Hola mundo', pass: '', login: 0 }	    
	}

	render(){

		const version = Platform.Version

		let {user} = this.state
		let {pass} = this.state
		let {login} = this.state
		let log 
	
		if(login == 0) {
			log = "INICIAR SESIÓN"
		}
		else {
			log = "LOGOUT"
		}

		return(
			<View style={styles.body}>
				<Text style={styles.textColor}>BIENVENIDO A MI PRIMERA APP MÓVIL</Text>
				<Text style={styles.textColor}>Estamos en el SO: { version }</Text>
				<TextInput style={styles.textColor}  placeholder="Ingrese usuario " onChangeText = {   (user) => this.setState({user})       }></TextInput>
				<TextInput style={styles.textColor}  placeholder="Ingrese contraseña " onChangeText = {   (pass) => this.setState({pass})       }></TextInput>
				<Button title={log} onPress= {  () => {this.setState({login: !login})}  } > </Button>
				{
					this.state.login == 0
					?
					<Text> Usuario no logueado </Text>
					:
					<CompBienvenido params={{user: user, pass: pass}}  />   
				}
			</View>
		)
	}
}

const styles = StyleSheet.create({
	body: {
		flex: 5,
		alignItems: 'center',
		justifyContent: 'center',
	},
 
	textColor: {
   		color: 'white',
	},
});

export default Body;