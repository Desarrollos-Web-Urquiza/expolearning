import React, { Component } from 'react';
import {StyleSheet, View, TextInput, Alert} from 'react-native'
import { Container, Header, Content, Text, FooterTab, Icon, Footer, Button, Card, CardItem, Input } from 'native-base';
import FooterTabs from "../../FooterTabs/containers/footerTabs.js"
import { firestore } from "../../../../firebase/FirebaseConfig";
import { connect } from 'react-redux';
import  ID_USER  from '../../../redux/actions/id_user';
import  NUEVA  from '../../../redux/actions/nueva';

class newNote extends Component {
 
  constructor() {
    super();
    
    this.state = {noteValue : '', title: '' }
   
  }
 
  render() {
    
    console.log("{ newnoteTEST:  135 }")
    console.log(this.props.navigation.state.routeName)
    console.log("El ID del usuario logueado es: " + this.props.id_user)
 
    function add (noteValue, title, id_user)  {

      console.log("Entró a la function add")
     
      if(noteValue == "" || title == "" ){

        Alert.alert(
          'Error ',
           "Los datos están icompletos"  ,

          [
            {text: 'OK', },
          ],
          {cancelable: false},
        );

      } else{

        firestore.collection("notes").add({
              
              note:{ 

                id_user: id_user,
                title: title,
                value: noteValue
              
              }
                 
        })
        .then(function() {
            console.log("Document written");
           
            Alert.alert(
              '¡Nota registrada!',
               'Puede verla en la sección "Mis notas" '  ,

              [
                {text: 'OK', },
              ],
              {cancelable: false},
            );

        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });

     }

    }

    return (
      <Container>
        
        <Header style={styles.header} ></Header>
        
        <Content padder contentContainerStyle={styles.content}>

          <Card>
           
            <CardItem header bordered>
           
              <Text style={styles.textCenter} >ESCRIBA SU NUEVA NOTA</Text>
           
            </CardItem>
           
            <CardItem>
           
              <Input placeholder='Título de la nota' onChangeText = {   (title) => this.setState({title})       }/>
           
            </CardItem>
           
            <CardItem style={styles.textAreaContainer} >
                
                <TextInput
                  style={styles.textArea}
                  underlineColorAndroid="transparent"
                  placeholder="Lo que deseo recordar es..."
                  placeholderTextColor="grey"
                  numberOfLines={10}
                  multiline={true}
                  onChangeText = {   (noteValue) => this.setState({noteValue})       } 

                />

            </CardItem>
           
            <CardItem footer bordered>
              
              <Button primary style={styles.boton}  onPress= {  () => {add(this.state.noteValue, this.state.title, this.props.id_user ) }  } >

                <Text>REGISTRAR NOTA</Text>
             
              </Button>

            </CardItem>

          </Card>

        </Content>
        
        <FooterTabs active="newNote" row={this.props.navigation} />

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
   textAreaContainer: {
    borderColor: "#5A63F7",
    borderWidth: 1,
    padding: 1
  },
  textArea: {
    height: 300
     
  },
  boton: {

    marginLeft: '75%'

  }

})

const mapStateToProps = (state) =>{

  return{

    id_user: state.id_user,
    reducidor: state.reducidor

  } 

}

const mapDispatchToProps = {

  ID_USER,
  NUEVA

}

export default connect(mapStateToProps, mapDispatchToProps)(newNote)

























 // var name = { name: "Note " +  user_notes.amount }

 // //Agregar datos en Firebase (sirve para modificar también)
 //        db.collection("notes").doc(id_user).set({//Si no existe la colección o el documento, te lo crea
 //            notes:{
              
 //              name.name: `${text}`
              
            
 //            }
              
 //        })
 //    .then(function() {
 //        console.log("Document written");
        

 //    })
 //    .catch(function(error) {
 //        console.error("Error adding document: ", error);
      
 //    });




 //        //Agregar datos en Firebase (sirve para modificar también)
 //        db.collection("notes").doc(id_user).set({//Si no existe la colección o el documento, te lo crea
 //            user_notes:{
              
 //              amount: 0,
              
            
 //            }
             
 //        })
 //    .then(function() {
 //        console.log("Document written");
        

 //    })
 //    .catch(function(error) {
 //        console.error("Error adding document: ", error);
      
 //    });




 //  }