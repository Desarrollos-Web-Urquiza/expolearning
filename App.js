import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView, Platform, TextInput } from 'react-native';
import CompBienvenido from './src/main/components/compBienvenido.js';
import Header from './src/main/containers/header.js';
import Footer from './src/main/containers/footer.js';
import Body from './src/main/containers/body.js';



class App extends Component {
  
	


	render(){
	
	  


 
	 

	  return (



	    <View style={styles.container}>
	      
	    	
	    	<Header />
	    	
	    	<Body />

	  		<Footer />

	    

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

 
  

});


export default App