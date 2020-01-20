 import React from "react";
import { StyleSheet, Text, View } from 'react-native';
// import * as firebase from 'firebase';
// import 'firebase/firestore';
// import { config, settings } from "./firebase/FirebaseConfig";
import Setup from "./src/boot/setup";
import {Provider} from 'react-redux';
// import {createStore} from 'redux';
import store from './src/redux/store.js';


export default class App extends React.Component {

  render() {
    
    return (
      
      <Provider store={store}>
     
        <Setup />
     
      </Provider>

    );

  }
}


