import React, { Component } from 'react';
import {StyleSheet} from 'react-native'
import { Container, Header, Content, Card, CardItem, Text, Body, Button, Item , Label, Input, Left, Icon } from 'native-base';
export default class Register extends Component {
  
  arrow = () => {

      this.props.navigation.navigate('Login')
     
    } 




  render() {
    return (
       <Container>
        <Header style={styles.header} >
           <Left style={styles.arrow}>
            <Button transparent>
                <Icon name='arrow-back' onPress={this.arrow} />
             </Button>
            </Left>
        </Header>
        <Content padder contentContainerStyle={styles.content}>
          <Card>
            <CardItem header bordered>
              <Text style={styles.textCenter}>Registrese aquí</Text>
            </CardItem>
            <CardItem bordered>
              <Body  style={styles.body}>
                <Item inlineLabel>
                  <Icon active name='person'></Icon>
                  
                  <Input placeholder='Nombre de usuario' />
                </Item>
               <Item inlineLabel last>
                 <Icon active name='lock'></Icon>
                 <Input placeholder='Contraseña' />
               </Item>
               <Item inlineLabel last>
                 <Icon active name='lock'></Icon>
                 <Input placeholder='Repita Contraseña' />
               </Item>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Button primary style={styles.boton}>
                <Text>REGISTRO</Text>
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

    marginLeft: '85%',
    

  },
  arrow: {

    marginRight: '85%',
    

  },
  body: {

    paddingVertical:  30

  }, 
  header: {

    marginTop:  24

  },






})