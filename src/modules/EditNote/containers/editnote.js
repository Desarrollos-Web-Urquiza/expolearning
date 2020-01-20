import React, { Component } from 'react';
import {StyleSheet, View, TextInput, Alert} from 'react-native'
import { Container, Header, Content, Text, FooterTab, Icon, Footer, Button, Card, CardItem, Input } from 'native-base';
import FooterTabs from "../../FooterTabs/containers/footerTabs.js"
import { connect } from 'react-redux';
import { firestore } from "../../../../firebase/FirebaseConfig";
import  EDIT  from '../../../redux/actions/edit';

class editNote extends Component {
 
  constructor() {
    super();
    
    this.state = {noteValue : '', title: '' }
   
  }

  render() {
    
    console.log("{ editNoteTEST:  53}")
    console.log("EDIT " + this.props.edit.titles)
    console.log(this.props.navigation.state.routeName)
    console.log("Estado title " + this.state.title)
    
    function edit (esto, oldTitle, oldNoteValue, id, newTitle, newNoteValue )  {

      console.log("Entró a la function edit")
      console.log("Desde edit oldTitle " + oldTitle)
      console.log("Desde edit oldNoteValue " + oldNoteValue)
      
      if(newNoteValue == "" && newTitle == "" ){

        Alert.alert(
          'Error ',
           "No ha hecho ninguna modificación a la nota. Para poder editarla debe modificar su contenido antes. "  ,

          [
            {text: 'OK', },
          ],
          {cancelable: false},
        );

     } else {

     	if(newNoteValue == "") {

     		newNoteValue = oldNoteValue
     
     	}
  	
  		if(newTitle == "") {

  			newTitle = oldTitle
  		
      }	

  		firestore.collection("notes").doc(id).update({
  		  note: {
  		  	id_user: 1,
  		    title: newTitle,
  		    value: newNoteValue
  		  }
  		}).then(function() {
  		  console.log("Note updated");
  		});

  	  esto.props.navigation.push('myNotes')

     }

    }

    function backTomyNote(esto) {

      esto.props.navigation.push('myNotes')

    }

    return (
      <Container>
        
        <Header style={styles.header} ></Header>
        
        <Content padder contentContainerStyle={styles.content}>

        <Card>
            <CardItem header bordered>
              <Text style={styles.textCenter} >EDITE SU NOTA</Text>
            </CardItem>
           
            <CardItem>
              <Input placeholder={this.props.edit.titles}  placeholderTextColor="black"  onChangeText = {   (title) => this.setState({title})       }/>
            </CardItem>
           
            <CardItem style={styles.textAreaContainer} >
                <TextInput
                  style={styles.textArea}
                  underlineColorAndroid="transparent"
                  placeholder={this.props.edit.values}
                  placeholderTextColor="black"
                  numberOfLines={10}
                  multiline={true}
                  onChangeText = {   (noteValue) => this.setState({noteValue})       } 

                />
              </CardItem>
              <CardItem footer bordered>
                
                <Button success  onPress= {  () => { backTomyNote(this) }  } >

                  <Text>ATRÁS</Text>
               
                </Button>
                
                <Button primary style={styles.boton}  onPress= {  () => {edit(this, this.props.edit.titles, this.props.edit.values, this.props.edit.id, this.state.title, this.state.noteValue  ) }  } >

                  <Text>EDITAR NOTA</Text>
               
                </Button>

            </CardItem>

          </Card>

        </Content>
        
        <FooterTabs active="myNotes" row={this.props.navigation} />

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

    marginLeft: '72%'

  }

})

const mapStateToProps = (state) =>{

  return{

    edit: state.edit

  } 

}

const mapDispatchToProps = {

  EDIT

}

export default connect(mapStateToProps, mapDispatchToProps)(editNote)





















