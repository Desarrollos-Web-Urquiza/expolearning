import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Image, Button, Platform, ScrollView, FlatList } from 'react-native';







class FlatListComponent extends Component {


	constructor() {
	

	  super();
	    

	    this.state = { misPeliculas : [ {name : 'El Kiosko', key: '0' }, {name : 'El Fútbol o yo', key: '1' }, {name : 'El secreto de sus ojos', key: '2' }  ] }

	    
					 
 	 }


	render(){

	  


			
		return(

			


			

	    	<FlatList


		    	data={this.state.misPeliculas}
		    	renderItem={   ({item}) => <Text> {item.name} </Text>      }
		    	horizontal={false}
		    	ItemSeparatorComponent= { () => {return(<Text>________________________</Text>)}}
		    	ListEmptyComponent={     <Text style={{marginTop: 30}}>No hay elementos en la lista </Text>       }



	    	>


	    	</FlatList>


	          
	  	







		)



	}








}





export default FlatListComponent ;