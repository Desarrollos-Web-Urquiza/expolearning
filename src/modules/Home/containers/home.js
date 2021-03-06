import React, { Component } from 'react';
import {StyleSheet} from 'react-native'
import { Container, Header, Content, Text, FooterTab, Icon, Footer, Button } from 'native-base';
import FooterTabs from "../../FooterTabs/containers/footerTabs.js"
import { firestore } from "../../../../firebase/FirebaseConfig";
import { connect } from 'react-redux';
import  NUEVA  from '../../../redux/actions/nueva';
import  ID_USER  from '../../../redux/actions/id_user';

class Home extends Component {

  componentWillMount() {

    _getNormalData = (esto) => {
      
      return new Promise(function(resolve, reject) {

        let notes = new Array()
        let i = 0
              
        firestore.collection("notes").where("note.id_user", "==", esto.props.id_user)
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

    let esto = this
    _getNormalData(esto)
      .then(param => {
        
        let parametros = JSON.stringify(param)
        //Mandamos los resultados de la BD a Redux
        this.props.NUEVA(parametros)

      })

  }
  
  render() {
  
    {

      console.log("Navegación Home: " + this.props.navigation)

      console.log("{ homeTEST:  9}")
  
      console.log(this.props.navigation.state.routeName)

    }
    
    return (
       <Container>
        
        <Header style={styles.header} >
        </Header>
        
        <Content padder contentContainerStyle={styles.content}>
          <Text style={styles.textCenter} >BIENVENIDO AL HOME</Text>
        </Content>
        
        <FooterTabs active="Home" row={this.props.navigation} />

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

export default connect(mapStateToProps, mapDispatchToProps)(Home)