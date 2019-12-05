import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';


function FooterLayout() {
    

     
    return (
        
        <View style={styles.footer}>

          <Text  style={styles.textColor}>CIAPFA</Text>
          <Text style={styles.textColor}>Hola CIAPFA </Text>
          <Image source={require('../../../assets/menu-login.png')} style={styles.logo2} /> 
         
            
        </View>



    );
}






const styles = StyleSheet.create({
  
  

  footer: {
    flex: 1,
    flexDirection: 'row',
   
  
  justifyContent: 'space-around'
    
  },

  textColor: {
    
   color: 'white',
   

  },

  logo2: {
    
    width: 100,
    height: 100,
    marginTop: -50
   

  },


  
});








export default FooterLayout;
