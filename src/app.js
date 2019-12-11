import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import Login from './modules/Login/containers/login';
import Register from './modules/Register/containers/register';


const LoginNavigator= createStackNavigator({


  Login : {

    screen: Login,

    


  },

Register : {

    screen: Register,

    


  }




},{  headerMode:  'none'});


export default createAppContainer(LoginNavigator)