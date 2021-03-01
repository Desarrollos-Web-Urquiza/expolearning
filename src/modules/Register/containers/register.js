import React, { Component } from 'react';
import {StyleSheet, Alert} from 'react-native'
import { Container, Header, Content, Card, CardItem, Text, Body, Button, Item , Label, Input, Left, Icon } from 'native-base';
import { firestore } from "../../../../firebase/FirebaseConfig";

export default class Register extends Component {
   
  constructor() {
    super();
    
    this.state = {name : '', pass: '', passX2: ''  }
   
  }

  arrow = () => {
    this.props.navigation.navigate('Login')
  } 

  render() {
    
    console.log("{ registerTEST:  16}")
    
    console.log(this.state.name)
    console.log(this.state.pass)
    console.log(this.state.passX2)
    
    function add( estoProps ){
      
      console.log("Entró a la function add")
      console.log(estoProps.name)
      console.log(estoProps.pass)
      console.log(estoProps.passX2)

      if(estoProps.name == "" || estoProps.pass == "" || estoProps.passX2 == "" ){

        Alert.alert(
          'Error ',
           "Los datos están icompletos"  ,

          [
            {text: 'OK', },
          ],
          {cancelable: false},
        );

      } else{

        if(estoProps.pass ==  estoProps.passX2  ){

          firestore.collection("el_users").add({
            user:{ 
              pass: estoProps.pass,
              value: estoProps.name
            }   
          })
          .then(function() {
            
            console.log("Document written");
           
            Alert.alert(
              '¡Usuario registrado!',
               'Ahora puede loguearse '  ,

              [
                {text: 'OK', },
              ],
              {cancelable: false},
            );
          })
          .catch(function(error) {
            console.error("Error adding document: ", error);
          });

    
        } else{

          Alert.alert(
            'Error ',
            "Las contraseñas no coinciden"  ,

            [
              {text: 'OK', },
            ],
            {cancelable: false},
          );

        }
      }
     }
     
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
                  <Input placeholder='Nombre de usuario' onChangeText = {   (name) => this.setState({name})       } />
                </Item>
               <Item inlineLabel last>
                 <Icon active name='lock'></Icon>
                 <Input placeholder='Contraseña' secureTextEntry={true} onChangeText = {   (pass) => this.setState({pass})       }/>
               </Item>
               <Item inlineLabel last>
                 <Icon active name='lock'></Icon>
                 <Input placeholder='Repita Contraseña'  secureTextEntry={true} onChangeText = {   (passX2) => this.setState({passX2})       } />
               </Item>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Button large primary style={styles.boton} onPress= {  () => { add(this.state) }  }>
                <Text style={styles.text}>REGISTRO</Text>
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

  text: {
    fontSize: 14,   
  }, 

  header: {
    marginTop:  24
  },

})