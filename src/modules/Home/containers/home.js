import React, { Component } from 'react';
import {StyleSheet} from 'react-native'
import { Container, Header, Content,  Text, } from 'native-base';
export default class Home extends Component {
  
 


  render() {
    return (
       <Container>
        <Header style={styles.header} >
          
        </Header>
        <Content padder contentContainerStyle={styles.content}>
          <Text style={styles.textCenter} >BIENVENIDO AL HOME</Text>
        </Content>
        
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