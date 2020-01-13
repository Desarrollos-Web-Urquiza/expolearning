import React, { Component } from 'react';
import {StyleSheet, View, Alert} from 'react-native'
import { firestore } from "../../../../firebase/FirebaseConfig";
import { Container, Header, Content, Text, FooterTab, Icon, Footer, Button, Card, CardItem } from 'native-base';
import { connect } from 'react-redux';
import  BACK  from '../../../redux/actions/back';

class Mynotesprint extends Component {
  constructor() {
    super();
    
    this.state = { noDelete: true,  }
   
  }

  render() {
    
    console.log("{ mynotesprintTEST:  97}")

    let toShow = true

    if(this.props.titles == "No tiene notas aún"){

      toShow =   false

    }

    console.log("Reducidor desde print " + this.props.back.yesDelete)
    console.log("Reducidor es un " + typeof(this.props.back.yesDelete))
    console.log("ID desde print " + this.props.id)
    
    if(this.props.back.yesDelete == undefined){

      console.log("Estado BACK es undefined")
    
    } else {

       this.props.back.yesDelete.map((notes) => {
                
          console.log("Entró a .map")
          console.log("Desde .map " + notes)
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
            console.log("A Back se le hace pushe " +  esto.props.back.yesDelete )              
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

        <Button danger style={styles.boton}  onPress= {  () => {deleteNote(esto)}  } >

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
  boton: {

    marginLeft: '85%'

  }
  
})         

const mapStateToProps = (state) =>{

  return{

    back:  state.back,
  
  } 

}

const mapDispatchToProps = {
 
  BACK,

}

export default connect(mapStateToProps, mapDispatchToProps)(Mynotesprint)