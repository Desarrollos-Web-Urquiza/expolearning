import React, { Component } from 'react';
import {StyleSheet, ScrollView } from 'react-native'
import { Container, Header, Content, Text, FooterTab, Icon, Footer, Button, Card, CardItem } from 'native-base';
import FooterTabs from "../../FooterTabs/containers/footerTabs.js"
import { firestore } from "../../../../firebase/FirebaseConfig";
import { connect } from 'react-redux';
import  NUEVA  from '../../../redux/actions/nueva';
import Mynotesprint   from "./mynotesprint.js";

class myNotes extends Component {

  constructor() {
    super();
    
    this.state = {notesValues: 'No funcionó :´-(', arrayNotes: [], nuevoArray: [] }
   
    _getNormalData = () => {
      
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
          
          console.log("Consulta a BD  " + notes)
          return resolve(notes) 
      
        })
        .catch(function(error) {
        
          console.log("Error getting documents: ", error);
        
        });

      });  

    }
  }

  render() {
  
    console.log(this.props.navigation.state.routeName)
    console.log("{ mynotesTEST:  275}")
    
    _getNormalData()
    .then(param => {
      
      let parametros = JSON.stringify(param)
      //Mandamos los resultados de la BD a Redux
      this.props.NUEVA(parametros)

    })

    if(this.props.reducidor == "hola mundo"){
      
      console.log("Estado undefined")

    } else{
        //Traemos de Redux los resultados de la BD
        let notas = JSON.parse(this.props.reducidor)

        console.log("Reducidor me trae el estado: " + typeof(notas))
        
        this.state.notesValues = notas

        console.log(this.state.notesValues.length)
        
        if(this.state.notesValues.length == 0 ) { 
          //Si no hay notas, damos este mensaje
          this.state.arrayNotes[0] = { title: "No tiene notas aún", note: "" }
      
      } else{

          for (var i = this.state.notesValues.length - 1; i >= 0; i--) {

            
            this.state.arrayNotes[i] =  this.state.notesValues[i]

            console.log(this.state.arrayNotes[i])
              
          }
            
          console.log("TITLES: " + this.state.arrayNotes[0].title)

        }

    }
    
    return (
       <Container>
       	
       	<ScrollView>

	        <Header style={styles.header} ></Header>
	        
	        <Content padder contentContainerStyle={styles.content}>
	          
	          <Text style={styles.textCenter} >BIENVENIDO A MYNOTES</Text>

             {
                this.state.arrayNotes.map((notes) => {
                  
                return <Mynotesprint values={notes.note} titles={notes.title}  id={notes.id} row={this.props.navigation} rows={this.props}   />

                })
	          
             } 

          </Content>
	        
        </ScrollView>
	    
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

/*

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
qui officia deserunt mollit anim id est laborum.

*/

export default connect(mapStateToProps, mapDispatchToProps)(myNotes)