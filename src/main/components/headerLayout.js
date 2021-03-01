import React from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';

function HeaderLayout() {  
  return (
    <View style={styles.header}>               
      <Image source={require('../../../assets/ciapfa.jpg')} style={styles.logo} /> 
      <Button title="LOGIN"  />
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
 
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 500
  }, 

});

export default HeaderLayout;
