import React from "react";
import { StyleSheet, Text, View } from 'react-native';
// import * as firebase from 'firebase';
// import 'firebase/firestore';
// import { config, settings } from "./firebase/FirebaseConfig";
import Setup from "./src/boot/setup";

/*
firebase.initializeApp(config);

const firestore = firebase.firestore();
firestore.settings(settings);

console.disableYellowBox = ['Remote Debugger'];*/


export default class App extends React.Component {


  // componentDidMount(){

  //   // this._getRealTimeData();
  //   this._getNormalData();


  // }

  render() {
    return (
      
        <Setup />
     
    );
  }

    // _getRealTimeData = () => {
    	
    //     const realTimeDatabaseRef = firestore.collection("users").doc("hola mundo");

    //     realTimeDatabaseRef.onSnapshot( doc => {

    //         console.log('--------------- Realtime Database ---------------');

    //         if (doc.exists) console.log(doc.data());
    //         else console.log('El documento no existe');

    //         console.log('-----------------------------------------------');

    //     })



    // };

    // _getNormalData = () => {

    //     const normalDatabseRef = firestore.collection("users").doc("hola mundo");

    //     normalDatabseRef.get().then( doc => {

    //         console.log('--------------- Normal Database ---------------');

    //         if (doc.exists) console.log(doc.data());
    //          else console.log('El documento no existe');

    //         console.log('-----------------------------------------------');


    //     }).catch(function(error) {
    //         console.log("Error getting document:", error);
    //     });


    // }

}//class


