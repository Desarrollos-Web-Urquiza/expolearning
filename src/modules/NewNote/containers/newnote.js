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
    
    console.log("{ newnoteTEST:  148 }")
    console.log(this.props.navigation.state.routeName)
    console.log("El ID del usuario logueado es: " + this.props.id_user)
 
    function add (noteValue, title, id_user, esto)  {

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
          esto.props.navigation.push('Home')
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
              
              <Button large primary style={styles.boton}  onPress= {  () => {add(this.state.noteValue, this.state.title, this.props.id_user , this) }  } >

                <Text style={styles.textButton}>REGISTRAR</Text>
             
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

  textButton: {
    fontSize: 15,
     
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