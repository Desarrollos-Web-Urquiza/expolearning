import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView, Platform, TextInput } from 'react-native';
import CompBienvenid from './src/main/components/compBienvenido';
import Header from './src/main/containers/header.js';

// export default function App() {
  



// 	const version = Platform.OS




//   return (



//     <View style={styles.container}>
      
//     	<View style={styles.header}>

//     		<Image source={require('./assets/ciapfa.jpg')} style={styles.logo} /> 
    		
//     		<Button title="LOGIN" />
          
          
//   		</View>
    	
//     	<View style={styles.body}>

//     		<Text style={styles.textColor}>BIENVENIDO A MI PRIMERA APP MÓVIL</Text>
//     		<Text style={styles.textColor}>Estamos en el SO: { version }</Text>
          
//   		</View>

//   		<View style={styles.footer}>

//     		<Text  style={styles.textColor}>CIAPFA </Text>
//     		<Text style={styles.textColor}>Hola CIAPFA </Text>
//     		<Image source={require('./assets/menu-login.png')} style={styles.logo2} /> 
          
//   		</View>

    

//     </View>
  










//   );
// }





class App extends Component {
  
	constructor() {
	    super();
	    

	    this.state = {user : 'Hola mundo', pass: '', login: 0 }


					 
 	 }



	render(){
	
	  const version = Platform.OS

	  let {user} = this.state
	  let {pass} = this.state
	  let {login} = this.state
	  let log 
	
	  if(login == 0) {


		log = "LOGIN"


	  }
	  else {


	  	log = "LOGOUT"

	  }


 
	 

	  return (



	    <View style={styles.container}>
	      
	    	<View style={styles.header}>

	    		<Image source={require('./assets/ciapfa.jpg')} style={styles.logo} /> 
	    		
	    		<Button title={log} onPress= {  () => {this.setState({login: 0})}  }  />
	          
	          
	  		</View>
	    	
	    	<View style={styles.body}>

	    		<Text style={styles.textColor}>BIENVENIDO A MI PRIMERA APP MÓVIL</Text>
	    		<Text style={styles.textColor}>Estamos en el SO: { version }</Text>
	    		<TextInput style={styles.textColor}  placeholder="Ingrese usuario " onChangeText = {   (user) => this.setState({user})       }></TextInput>
	    		<TextInput style={styles.textColor}  placeholder="Ingrese contraseña " onChangeText = {   (pass) => this.setState({pass})       }></TextInput>
	    		<Button title="INICIAR SESIÓN" onPress= {  () => {this.setState({login: 1})}  } > </Button>

	    		{

	    			this.state.login == 0
	    			?
	    			<Text> Usuario no logueado </Text>
	    			:
	    			<CompBienvenid params={{user: user, pass: pass}}  />   



	    		}


	          
	  		</View>

	  		<View style={styles.footer}>

	    		<Text  style={styles.textColor}>{ user }</Text>
	    		<Text style={styles.textColor}>Hola CIAPFA </Text>
	    		<Image source={require('./assets/menu-login.png')} style={styles.logo2} /> 
	          
	  		</View>

	    

	    </View>
	  










	  );
	}
}











const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',

    flexDirection: 'column'
  },

  header: {
    flex: 1,
    
   flexDirection: 'row',
   
	alignItems: 'flex-end',
	padding: 20,
	justifyContent: 'space-between'
    
  },

  body: {
    flex: 5,
    
    alignItems: 'center',
    justifyContent: 'center',

    
  },

  footer: {
    flex: 1,
    flexDirection: 'row',
   
	
	justifyContent: 'space-around'
    
  },

  logo: {
    
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 500


  },

  logo2: {
    
    width: 100,
    height: 100,
    marginTop: -50
   

  },

   textColor: {
    
   color: 'white',
   

  },

});


export default App