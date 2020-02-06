import React, { Component } from 'react';
import {StyleSheet, View, Alert} from 'react-native'
import { firestore } from "../../../../firebase/FirebaseConfig";
import { Container, Header, Content, Text, FooterTab, Icon, Footer, Button, Card, CardItem } from 'native-base';
import { connect } from 'react-redux';
import  BACK  from '../../../redux/actions/back';
import  EDIT  from '../../../redux/actions/edit';

class Mynotesprint extends Component {
  constructor() {
    super();
    
    this.state = { noDelete: true,  }
   
  }

  render() {
    
    console.log("{ mynotesprintTEST:  126}")

    let toShow = true

    if(this.props.titles == "No tiene notas aún"){

      toShow =   false

    }

    console.log("Reducer BACK desde print " + this.props.back.yesDelete)
    console.log("Reducer BACK es un " + typeof(this.props.back.yesDelete))
    console.log("ID desde print " + this.props.id)
    console.log("Redux EDIT " + this.props.EDIT)
    console.log("Redux BACK " + this.props.BACK)
    
    //Fabrica un array con todos los ID de notas eliminadas para saber luego que no se deben volver a imprimir en pantalla.
    if(this.props.back.yesDelete == undefined){

      console.log("Estado BACK es undefined")
    
    } else {

       this.props.back.yesDelete.map((notes) => {
                
          console.log("Entró a .map")
          console.log("Desde .map value" + notes)
          console.log("Desde .map ID " + this.props.id)
          
          if (notes == this.props.id ) {

            this.state.noDelete = false 
            console.log("ENCONTRÓ COINCIDENCIA")
          
          }

        })

    }
         
    return (

      <View>

        { this.state.noDelete  && bodyCardValidation(this, toShow) }

      </View>  

    );
  }
}

function bodyCardValidation (esto, toShow) {

  return (

    <Card>

      <CardItem header bordered>

        <Text style={styles.textCenter} >{ esto.props.titles }</Text> 

      </CardItem>

    { toShow  && footerCardValidation(esto) }

    </Card>  

  )

}

function footerCardValidation(esto) {

  function deleteNote (esto)  {
  
    function deleteFirebase(esto){

      // https://firebase.google.com/docs/firestore/manage-data/delete-data?hl=es
      firestore.collection("notes").doc(esto.props.id).delete().then(function() {
        console.log("Document successfully deleted!");
        Alert.alert(
        'Nota eliminada',
         "¡La nota ha sido eliminada con éxito!"  ,

        [
        {text: 'OK', }, 
        ],
        {cancelable: false},
       );
       esto.setState( { noDelete: false  } )

       if(esto.props.back == "No hay notas eliminadas"){

        let yesDelete = []
        let reduxObject = { yesDelete }
        reduxObject.yesDelete[0] = esto.props.id
        esto.props.BACK(reduxObject)

       } else{

          esto.props.back.yesDelete.push(esto.props.id)
          console.log("A Back se le hace push " +  esto.props.back.yesDelete )              
          // esto.props.BACK(esto.props.back.yesDelete.push(esto.props.id))

       }

      }).catch(function(error) {
          console.error("Error removing document: ", error);
      });
    }
    Alert.alert(
    '¿De verdad desea eliminar esta nota? ',
     esto.props.titles  ,

    [
      {text: 'No', onPress: () => console.log('No quiere eliminar la nota ' + esto.props.id)},
      
      {text: 'Sí', onPress: () => deleteFirebase(esto) },
    ],
    {cancelable: false},
    );
        
  }

  function editNote(esto){
    let objEdit = {}
    
    objEdit.titles =  esto.props.titles
    objEdit.values =  esto.props.values
    objEdit.id =  esto.props.id

    esto.props.EDIT(objEdit)
    esto.props.row.push('editNote')
    
  }  
        
  return(
   
    <View>
  
      <CardItem>
            
       <Text>
             
        { 
                  
          esto.props.values
        
        }
  
       </Text>

      </CardItem>

      <CardItem footer bordered>

        <Button warning onPress= {  () => { editNote(esto)}  } >

          <Text>EDITAR</Text>
        
        </Button>

        <Button danger style={styles.botonDelete}  onPress= {  () => {deleteNote(esto)}  } >

          <Text>ELIMINAR</Text>{console.log("ID de values " + esto.props.id)}
        
        </Button>
     
      </CardItem>
   
    </View>            
 
  )

} 

const styles= StyleSheet.create({

  textCenter: {

    textAlign: 'center',
    width: '100%'

  },
  botonDelete: {

    marginLeft: '68%'

  }
  
})         

const mapStateToProps = (state) =>{

  return{

    back:  state.back,

    edit: state.edit
  
  } 

}

const mapDispatchToProps = {
 
  BACK,
  
  EDIT

}

export default connect(mapStateToProps, mapDispatchToProps)(Mynotesprint)