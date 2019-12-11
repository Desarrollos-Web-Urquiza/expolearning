import React, { Component } from 'react';
import {StyleSheet, TextInput} from 'react-native'
import { Container, Header, Content, Card, CardItem, Text, Body, Button, Item ,Label, Input, Icon,  } from 'native-base';
export default class Login extends Component {
  

    register = () => {

      this.props.navigation.navigate('Register')
     
    } 



  render() {
    return (
       <Container>
   
        <Header style={styles.header} />
        <Content padder contentContainerStyle={styles.content}>
          <Card>
            <CardItem header bordered>
              <Text style={styles.textCenter}>Inicio de sesión</Text>
            </CardItem>
            <CardItem bordered>
              <Body  style={styles.body}>
                <Item inlineLabel>
                  <Icon active name='person'></Icon>
                  
                  <Input placeholder='Nombre de usuario' />
                </Item>
               <Item inlineLabe last>
                 <Icon active name='lock'></Icon>
                 <Input  placeholder='Contraseña' secureTextEntry={true} />
               </Item>
              
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Button success onPress={this.register}>
                <Text>RESGISTRO</Text>
              </Button>
              <Button primary style={styles.boton}>
                <Text>ENTRAR</Text>
              </Button>
            </CardItem>
          </Card>
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

  boton: {

    marginLeft: '70%'

  },
  body: {

    paddingVertical:  30

  }, 
  header: {

    marginTop:  24

  },






})