import React, { Component } from 'react';
import {StyleSheet} from 'react-native'
import { Text, FooterTab, Icon, Footer, Button } from 'native-base';

class FooterTabs extends Component {

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
    
    {console.log ("{ footerTabsTEST: 10 }")  }

    {
     
      console.log("Navegación: " + this.props.navigation) 
      console.log("this.props.row: " + this.props.row) 

      console.log("VALIDACIÓN: " + this.props.active == "Home" ) 

    }

    return (
         
        <Footer>
         
          <FooterTab>
         
            <Button vertical active={ this.props.active == "Home" } onPress={this.Home}  >
              <Icon  active={ this.props.active == "Home" } name="home" />
              <Text>Home</Text>
            </Button>
         
            <Button vertical active={ this.props.active == "newNote" } onPress={this.newNote} >
              <Icon active={ this.props.active == "newNote" } name="brush" />
              <Text>Nueva nota</Text>
            </Button>
         
            <Button vertical active={ this.props.active == "myNotes"} onPress={this.myNotes} >
              <Icon active={ this.props.active == "myNotes" }  name="navigate" />
              <Text>Mis notas</Text>
            </Button>           
         
          </FooterTab>
        </Footer>

    );
  }
}

export default FooterTabs