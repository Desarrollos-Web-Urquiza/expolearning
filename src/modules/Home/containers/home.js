import React, { Component } from 'react';
import {StyleSheet} from 'react-native'
import { Container, Header, Content, Text, FooterTab, Icon, Footer, Button } from 'native-base';
import FooterTabs from "../../FooterTabs/containers/footerTabs.js"

class Home extends Component {
  
  render() {
  
    {console.log("Navegación Home: " + this.props.navigation)}
        
    {console.log(this.props.navigation.state.routeName)}
    
    return (
       <Container>
        
        <Header style={styles.header} >
        </Header>
        
        <Content padder contentContainerStyle={styles.content}>
          <Text style={styles.textCenter} >BIENVENIDO AL HOME</Text>
        </Content>
        
        <FooterTabs active="Home" row={this.props.navigation} />

      </Container>
    );
  }
}

const styles= StyleSheet.create({


  textCenter: {

    textAlign: 'center',
    width: '100%'

  },
  content: {

    flex: 1,
    justifyContent: 'center'

  },

  header: {

    marginTop:  24

  },

})

export default Home