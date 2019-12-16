import React, { Component } from 'react';
import {StyleSheet, TextInput} from 'react-native'
import { Container, Header, Content, Card, CardItem, Text, Body, Button, Item ,Label, Input, Icon,  } from 'native-base';
import * as firebase from 'firebase';
import 'firebase/firestore';
import { config, settings } from "./FirebaseConfig";

firebase.initializeApp(config);

const firestore = firebase.firestore();
firestore.settings(settings);

console.disableYellowBox = ['Remote Debugger'];



export default class Login extends Component {
    

    constructor() {
      super();
      

      this.state = {user : '', pass: '', login: 0, err:'' }

      
           
   }




    register = () => {

      this.props.navigation.navigate('Register')

     
    } 


  render() {
    let {login} = this.state
    let {pass} = this.state
    let {user} = this.state
    let {err} = this.state
    
    console.log(login)
    console.log(user)
    console.log(pass)

    
       
      
      if(login == 1) {

        console.log("Entró al if")
        
        const _getNormalData = () => {
          
          return new Promise(function(resolve, reject) {


            let normalDatabseRef = firestore.collection("users").doc("hola mundo");

            normalDatabseRef.get().then( doc => {

                console.log('--------------- Normal Database ---------------');

                if (doc.exists){ 
              
                  console.log(doc.data().credentials); 


                  return resolve(doc.data().credentials)
                
                }
                else{
                
                  console.log('El documento no existe');

                  console.log('-----------------------------------------------');
                
                }

            }).catch(function(error) {
                console.log("Error getting document:", error);
            });

          });  

        }

        _getNormalData()
        .then(param => {


            console.log(param) 
            if(param.user == user && param.password == pass ){

              console.log("Puede loguearse") 

              this.setState({login: !login})

              this.props.navigation.navigate('Home')


            }else{


              console.log("No puede loguearse") 
              if(user == '' || pass == ''  ){

                this.setState({err: 'Los datos están incompletos.'})
                this.setState({login: !login})

              }else{
                if(err == 'No existe ningún usuario que coincida con esa contraseña. Escriba los datos nuevamente.'){


                  console.log("Entró al if de 'Datos erróneos' ") 
                  this.setState({err: 'Datos erróneos. Escriba los datos nuevamente.'})
                  this.setState({login: !login})

                }else{
                  this.setState({err: 'No existe ningún usuario que coincida con esa contraseña. Escriba los datos nuevamente.'})
                  this.setState({login: !login})
                }
              }
            
            }


        })
      
     }   
     else {


        console.log("NO entró al if")
         
       }

  
     

   
    






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
                  
                  <Input placeholder='Nombre de usuario' onChangeText = {   (user) => this.setState({user})       }/>
                </Item>
               <Item inlineLabe last>
                 <Icon active name='lock'></Icon>
                 <Input  placeholder='Contraseña' secureTextEntry={true} onChangeText = {   (pass) => this.setState({pass})       } />
               </Item>
              
              <Text style={styles.err}>{err}</Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Button success onPress={this.register}>
                <Text>RESGISTRO</Text>
              </Button>
              <Button primary style={styles.boton}  onPress= {  () => {this.setState({login: !login})}  } >

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
  err: {

    marginTop:  24,
    color: 'red'

  },






})