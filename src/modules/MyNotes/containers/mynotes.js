import React, { Component } from 'react';
import {StyleSheet} from 'react-native'
import { Container, Header, Content, Text, FooterTab, Icon, Footer, Button, Card, CardItem } from 'native-base';
import FooterTabs from "../../FooterTabs/containers/footerTabs.js"
import { firestore } from "../../../../firebase/FirebaseConfig";
import { connect } from 'react-redux';
import  NUEVA  from '../../../redux/actions/nueva';
import Mynotesprint   from "./mynotesprint.js";

class myNotes extends Component {

  constructor() {
    super();
    
    this.state = {notesValues: 'No funcionó :-(', titles: [] , values: [] }
   
  }

  render() {
        
    console.log(this.props.navigation.state.routeName)
    console.log("{ mynotesTEST:  235}")


      

     
     
      // let notes = []
      // let i = 0
      
      // firestore.collection("notes").where("note.id_user", "==", 1)
      // .get()
      // .then(function(querySnapshot) {
      //     querySnapshot.forEach(function(doc) {
      //         // doc.data() is never undefined for query doc snapshots
      //         // console.log(doc.id, " => ", doc.data());

      //         notes[i] = {

      //           id: doc.id,

      //           note: doc.data().note.value,

      //           title: doc.data().note.title

      //         }

      //         i++
      //     });

      // })
      // .catch(function(error) {
      //     console.log("Error getting documents: ", error);
      // });
           


      
      const _getNormalData = () => {
        
        return new Promise(function(resolve, reject) {

          


        let notes = new Array()
              let i = 0
              
              firestore.collection("notes").where("note.id_user", "==", 1)
              .get()
              .then(function(querySnapshot) {
                  querySnapshot.forEach(function(doc) {
                      // doc.data() is never undefined for query doc snapshots
                      // console.log(doc.id, " => ", doc.data());

                      notes[i] = {

                        id: doc.id,

                        note: doc.data().note.value,

                        title: doc.data().note.title

                      }

                      i++
                  });
                  return resolve(notes) 
              })
              .catch(function(error) {
                  console.log("Error getting documents: ", error);
              });





        });  

      }

      _getNormalData()
      .then(param => {

          

         
          // console.log("El param es un : " + typeof(param))
          let parametros = JSON.stringify(param)
          this.props.NUEVA(parametros)
          // console.log("Esto viene de la function despues del mapDispatchToProps" + param[0].note)
         // console.log("Estado de notesValues " + this.state.notesValues) 

         // console.log(this.state) 


      })
    
        if(this.props.reducidor == "hola mundo"){
          

          console.log("Estado undefined")
         

         // console.log("Estado de notesValues (afuera de la function) " + this.state.notesValues) 
        } else{



          // console.log(this.props.reducidor)
          let notas = JSON.parse(this.props.reducidor)




          console.log("Reducidor me trae el estado: " + typeof(notas))
           // console.log(notas[1].title)

          this.state.notesValues = notas

          console.log(this.state.notesValues.length)
          

          for (var i = this.state.notesValues.length - 1; i >= 0; i--) {




            this.state.titles[i] =  this.state.notesValues[i]
            // this.state.values[i] =  this.state.notesValues[i].note
            console.log(this.state.titles[i])
            // console.log(this.state.values[i])
                
          }
          console.log("TITLES: " + this.state.titles[0].note)

          


        }




         








    




    
    
    return (
       <Container>
        
        <Header style={styles.header} >
        </Header>
        
        <Content padder contentContainerStyle={styles.content}>
          <Text style={styles.textCenter} >BIENVENIDO A MYNOTES</Text>


          


           

         {

            this.state.titles.map((notes) => {

              return <Mynotesprint values={notes.note} titles={notes.title}    />

           })
            

         } 

        

  



          
          
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

})
const mapStateToProps = (state) =>{



          return{


            reducidor: state.reducidor,


          } 




         }
const mapDispatchToProps = {

  

    NUEVA,
    


}



         



export default connect(mapStateToProps, mapDispatchToProps)(myNotes)