import React from 'react';
import { StyleSheet, View, Button, Image, ScrollView } from 'react-native';


function HeaderLayout() {
    
    return (
        

        <View style={styles.header}>

                <Image source={require('./assets/ciapfa.jpg')} style={styles.logo} /> 
                
                <Button title={log} onPress= {  () => {this.setState({login: 0})}  }  />
              
              
        </View>



    );
}






const styles = StyleSheet.create({
  
  header: {
    flex: 1,
    
   flexDirection: 'row',
   
    alignItems: 'flex-end',
    padding: 20,
    justifyContent: 'space-between'
    
  },

  
});








export default HeaderLayout;
