import React, { Component } from 'react';
import {StyleSheet} from 'react-native'
import { Text, FooterTab, Icon, Footer, Button } from 'native-base';

class FooterTabs extends Component {

  constructor() {
    super();
    
    this.state = {Home : false, newNote: false , myNotes:  false}
   
  }

  /*FUNCTIONS DE REDIRECCIÓN*/
  newNote = () => {

    this.props.row.navigate('newNote')

  } 
  
   Home = () => {

   this.props.row.navigate('Home')

  } 

  myNotes = () => {

    this.props.row.navigate('myNotes')

  } 
  /* ↑  RECIBE NAVIGATION*/
  render() {
    
    {console.log ("{ footerTabsTEST: 5 }")  }

    {
     /*VALIDACIÓN PARA SABER DE DÓNDE SE LO ESTÁ LLAMANDO AL COMPONENTE FOOTERTABS*/
     if(this.props.active == "Home"){

        // this.setState({Home: true})
        this.state.Home = true

      }
      else{

         if(this.props.active == "newNote"){

            // this.setState({newNote: true})
            this.state.newNote = true

         }
         else{

            // this.setState({myNotes: true})
            this.state.myNotes = true

         }

      }

      console.log("Esto viene del componente padre " + this.props.active) 
      console.log("Este es el estado de Home en el componente footerTabs " + this.state.Home) 
      console.log("Este es el estado de newNote en el componente footerTabs " + this.state.newNote) 
      console.log("Este es el estado de myNotes en el componente footerTabs " + this.state.myNotes) 
      console.log("Navegación: " + this.props.navigation) 
      console.log("this.props.row: " + this.props.row) 

    }

    return (
         
        <Footer>
         
          <FooterTab>
         
            <Button vertical active={ this.state.Home } onPress={this.Home}  >
              <Icon  active={ this.state.Home } name="home" />
              <Text>Home</Text>
            </Button>
         
            <Button vertical active={ this.state.newNote } onPress={this.newNote} >
              <Icon active={ this.state.newNote } name="brush" />
              <Text>Nueva nota</Text>
            </Button>
         
            <Button vertical active={ this.state.myNotes } onPress={this.myNotes} >
              <Icon active={ this.state.myNotes }  name="navigate" />
              <Text>Mis notas</Text>
            </Button>           
         
          </FooterTab>
        </Footer>

    );
  }
}

export default FooterTabs