import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView, Platform, TextInput, FlatList } from 'react-native';
import CompBienvenido from './src/main/components/compBienvenido.js';
import Header from './src/main/containers/header.js';
import Footer from './src/main/containers/footer.js';
import Body from './src/main/containers/body.js';
import FlatListComponent from './src/main/containers/flatlist.js';



class App extends Component {
  	constructor() {
	    super();
	    

	    this.state = { misPeliculas : [ {name : 'El Kiosko', key: '0' }, {name : 'El Fútbol o yo', key: '1' }, {name : 'El secreto de sus ojos', key: '2' }  ] }

	    
					 
 	 }
	


	render(){
	
	  


 
	 

	  return (



	    <View style={styles.container}>
	      
	    	
	    	<Header />
	    	
	    	<Body />
	    	
	    	<FlatListComponent />

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