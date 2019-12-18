import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import Login from './modules/Login/containers/login';
import Register from './modules/Register/containers/register';
import Home from './modules/Home/containers/home';


const LoginNavigator= createStackNavigator({


  Login : {

    screen: Login,

    


  },

  Home : {

    screen: Home,

    


  },

Register : {
 
    screen: Register,

    


  }




},{  headerMode:  'none'});


export default createAppContainer(LoginNavigator)