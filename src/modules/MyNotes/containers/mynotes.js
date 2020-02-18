import React, { Component } from 'react';
import {StyleSheet, ScrollView } from 'react-native'
import { Container, Header, Content, Text, FooterTab, Icon, Footer, Button, Card, CardItem } from 'native-base';
import FooterTabs from "../../FooterTabs/containers/footerTabs.js"
import { firestore } from "../../../../firebase/FirebaseConfig";
import { connect } from 'react-redux';
import  NUEVA  from '../../../redux/actions/nueva';
import Mynotesprint   from "./mynotesprint.js";
import  ID_USER  from '../../../redux/actions/id_user';

class myNotes extends Component {

  constructor() {
    super();
    
    this.state = { arrayNotas: [], nuevoArray: [] }  

  }

  componentDidMount() {

    _getNormalData = (esto) => {
      
      return new Promise(function(resolve, reject) {

        console.log("ID DEL USUARIO DESDE LA PROMISE " + esto.props.id_user)  
        
        let notes = new Array()
        let i = 0       
       
        firestore.collection("notes").where("note.id_user", "==", esto.props.id_user)
        .get()
        .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {

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
    //Instanciar "this" para poder usarlo dentro de la promesa
    let esto = this
    
    _getNormalData(esto)
      .then(param => {
        
        let parametros = JSON.stringify(param)
        //Mandamos los resultados de la BD a Redux

        console.log("RESOLUCIÓN DE PROMISE " + parametros)
        this.props.NUEVA(parametros)

      })
   
    console.log("REDUCIDOR " + this.props.reducidor)
    
    if(this.props.reducidor == "Estado undefined"){
      
      console.log("Estado undefined")

    } else{
        //Traemos de Redux los resultados de la BD
        let notas = JSON.parse(this.props.reducidor)

        console.log("Reducidor me trae el estado: " + typeof(notas))
        console.log("NOTAS !!! " + notas)
        
        // this.state.notesValues = notas
        let arrayNotes = []
        console.log("Length " + notas.length)
        
        if(notas.length == 0 ) { 
          //Si no hay notas, damos este mensaje
          arrayNotes[0] = { title: "No tiene notas aún", note: "" }
      
      } else{

          for (var i = notas.length - 1; i >= 0; i--) {
         
            arrayNotes[i] =  notas[i]

            console.log(arrayNotes[i])
              
          }
            
          console.log("TITLES: " + arrayNotes[0].title)

        }
        // this.setState({arrayNotas: arrayNotes })
        let nuevoArrayNotes
        nuevoArrayNotes = JSON.stringify(arrayNotes)
      
        // this.changeState()
        this.setState({arrayNotas: arrayNotes})
       
    }
  
  }

  render() {
  
    console.log(this.props.navigation.state.routeName)
    console.log("{ mynotesTEST:  394}")
    
    return (
       <Container>
       	
       	<ScrollView>

	        <Header style={styles.header} ></Header>
	        
	        <Content padder contentContainerStyle={styles.content}>
	          
	          <Text style={styles.textCenter} >BIENVENIDO A MYNOTES</Text>
   
            {

              console.log("ESTADO ARRAYNOTES " + this.state.arrayNotas)

            }

            {
              
              this.state.arrayNotas.map((notes) => {
                  
                return <Mynotesprint values={notes.note} titles={notes.title}  id={notes.id} row={this.props.navigation} rows={this.props} id_user={this.props.id_user} />

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
    id_user: state.id_user

  } 

}

const mapDispatchToProps = {

  NUEVA,
  ID_USER
}

/*

Lorem ipsum dolor sit amet

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
qui officia deserunt mollit anim id est laborum.

*/

export default connect(mapStateToProps, mapDispatchToProps)(myNotes)