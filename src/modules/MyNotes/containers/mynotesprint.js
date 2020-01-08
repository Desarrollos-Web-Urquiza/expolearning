import React, { Component } from 'react';
import {StyleSheet, View, Alert} from 'react-native'
import { firestore } from "../../../../firebase/FirebaseConfig";
import { Container, Header, Content, Text, FooterTab, Icon, Footer, Button, Card, CardItem } from 'native-base';

class Mynotesprint extends Component {

  render() {
    
    console.log("{ mynotesprintTEST:  56}")

    let toShow = true

    if(this.props.titles == "No tiene notas aún"){

      toShow =   false

    }



             
    return (

      <Card>

        <CardItem header bordered>

          <Text style={styles.textCenter} >{ this.props.titles }</Text>

        </CardItem>

      { toShow  && toShowValidation(this) }

      </Card>  

    );
  }
}

 function toShowValidation(esto) {

  




  function deleteNote (props)  {
  



    function deleteFirebase(id){



        // https://firebase.google.com/docs/firestore/manage-data/delete-data?hl=es
        firestore.collection("notes").doc(id).delete().then(function() {
            console.log("Document successfully deleted!");
            Alert.alert(
            'Nota eliminada',
             "¡La nota ha sido eliminada con éxito!"  ,

            [
              {text: 'OK', },
            ],
            {cancelable: false},
           );
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });



      }


           Alert.alert(
      '¿De verdad desea eliminar esta nota? ',
       props.titles  ,

      [
        {text: 'No', onPress: () => console.log('No quiere eliminar la nota ' + props.id)},
        
        {text: 'Sí', onPress: () => deleteFirebase(props.id) },
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

        <Button danger style={styles.boton}  onPress= {  () => {deleteNote(esto.props)}  } >

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

export default Mynotesprint