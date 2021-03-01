
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './modules/Login/containers/login';
import Register from './modules/Register/containers/register';
import Home from './modules/Home/containers/home';
import newNote from './modules/NewNote/containers/newnote';
import myNotes from './modules/MyNotes/containers/mynotes';
import editNote from './modules/EditNote/containers/editnote';
import FooterTabs from './modules/FooterTabs/containers/footerTabs';

const LoginNavigator= createStackNavigator({

Login : {
    screen: Login,
},

Home : {
    screen: Home,
},

Register : {
    screen: Register,
},

newNote : {
    screen: newNote,
},

myNotes : {
    screen: myNotes,
},

editNote : {
    screen: editNote,
},

FooterTabs : {
    screen: FooterTabs,
}    

},{  headerMode:  'none'});

export default createAppContainer(LoginNavigator)