import React, { Component } from 'react';
import {StyleSheet, TextInput} from 'react-native'
import { Container, Header, Content, Card, CardItem, Text, Body, Button, Item ,Label, Input, Icon,  } from 'native-base';
import { firestore } from "../../../../firebase/FirebaseConfig";  
import { connect } from 'react-redux';
import  ID_USER  from '../../../redux/actions/id_user';

class Login extends Component {
  
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
    console.log("{ loginTEST:  67  }")

    function validate (props, esto)  {

      console.log("Entró a la function")
      
      const _getNormalData = () => {
        
        return new Promise(function(resolve, reject) {

          console.log("pass " + esto.state.pass)
          console.log("user " + esto.state.user)

          let client 

          firestore.collection("el_users").where("user.value", "==", esto.state.user).where("user.pass", "==", esto.state.pass)
          .get()
          .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
          
              client = {
                
                id: doc.id,

                value: doc.data().user.value,

                pass: doc.data().user.pass

              }

            });
            if(client == undefined){
              client= { id:"", value: "", pass: ""}
            }
            console.log("Consulta a BD  " + client)
            return resolve(client) 
          })
          .catch(function(error) {
            console.log("Error getting documents: ", error);
          });

        });  

    }

      _getNormalData(props, esto)
      .then(param => {
          console.log("PARAM" + param.value) 

          if(user == '' || pass == ''  ){

            // esto = this(Login); Recibe como argumento el "this", que sería Login, que viene fuera de la función.
            esto.setState({err: 'Los datos están incompletos.'})
            console.log("No puede loguearse") 
        
         } else{

            
            if(param.value == user && param.pass == pass ){

              console.log("Puede loguearse " + param.id ) 
              //Mandamos el ID a Redux
              
              props.ID_USER(param.id)
              //props = this.props(Login.props); Recibe como argumento el "this.props" de Login de afuera de la función.
              /*  Con esta navigation lo mandamos al home */
              props.navigation.navigate('Home')

            } else{

              if(err == 'No existe ningún usuario que coincida con esa contraseña. Escriba los datos nuevamente.'){

                console.log("Entró al if de 'Datos erróneos' ") 
               
                // esto = this(Login); Recibe como argumento el "this", que sería Login, que viene fuera de la función.
                esto.setState({err: 'Datos erróneos. Escriba los datos nuevamente.'})

              } else{

                // esto = this(Login); Recibe como argumento el "this", que sería Login, que viene fuera de la función.
                esto.setState({err: 'No existe ningún usuario que coincida con esa contraseña. Escriba los datos nuevamente.'})

              }
           
            }
          
          }

      })
    
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
              <Button primary style={styles.boton}  onPress= {  () => {validate(this.props, this)}  } >

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
    marginLeft: '65%'
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

const mapStateToProps = (state) =>{

  return{

    reducidor: state.id_user,

  } 

}

const mapDispatchToProps = {

  ID_USER,

}

export default connect(mapStateToProps, mapDispatchToProps)(Login) ;