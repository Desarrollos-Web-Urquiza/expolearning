import React, { Component } from 'react';
import {StyleSheet, View, TextInput, Alert} from 'react-native'
import { Container, Header, Content, Text, FooterTab, Icon, Footer, Button, Card, CardItem, Left, Input } from 'native-base';
import FooterTabs from "../../FooterTabs/containers/footerTabs.js"
import { connect } from 'react-redux';
import { firestore } from "../../../../firebase/FirebaseConfig";
import  EDIT  from '../../../redux/actions/edit';


class editNote extends Component {
 
  constructor() {
    super();
    
    this.state = {noteValue : '', title: '' }
   
  }

   backTomyNote = () => {

      this.props.navigation.push('myNotes')
     
    } 

  render() {
    
    console.log("{ editNoteTEST:  74}")

    console.log("EDIT " + this.props.edit.titles)
    console.log(this.props.navigation.state.routeName)
    console.log("Estado title " + this.state.title)
    
    function edit (esto, oldTitle, oldNoteValue, id, newTitle, newNoteValue, id_user )  {

      console.log("Entró a la function edit")
      console.log("Desde edit oldTitle " + oldTitle)
      console.log("Desde edit oldNoteValue " + oldNoteValue)
      console.log("Desde edit id_user " + id_user)
      
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
  		  	id_user: id_user,
  		    title: newTitle,
  		    value: newNoteValue
  		  }
  		}).then(function() {
  		  console.log("Note updated");
  		});

      



      esto.props.navigation.push('Home')

     }

    }

    // function backTomyNote(esto) {

    //   esto.props.navigation.push('myNotes')

    // }

    // backTomyNote = () => {

    //   this.props.navigation.navigate('myNotes')
     
    // } 

    return (
      <Container>
        
        <Header style={styles.header} >
          <Left style={styles.arrow}>
              <Button transparent>
                  <Icon name='arrow-back' onPress={ this.backTomyNote } />
               </Button>
          </Left>
        </Header>
        
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
                
                <Button primary style={styles.boton}  onPress= {  () => {edit(this, this.props.edit.titles, this.props.edit.values, this.props.edit.id, this.state.title, this.state.noteValue, this.props.edit.id_user  ) }  } >

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
  arrow: {

    marginRight: '85%',  

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

    edit: state.edit,


  } 

}

const mapDispatchToProps = {

  EDIT,
  

}

export default connect(mapStateToProps, mapDispatchToProps)(editNote)





















