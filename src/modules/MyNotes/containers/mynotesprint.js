import React, { Component } from 'react';
import {StyleSheet} from 'react-native'
import { Container, Header, Content, Text, FooterTab, Icon, Footer, Button, Card, CardItem } from 'native-base';

class Mynotesprint extends Component {

  render() {
    
    console.log("{ mynotesprintTEST:  3}")
        
    return (

           <Card>
      
            <CardItem header bordered>
      
              <Text style={styles.textCenter} >{ this.props.titles }</Text>
      
            </CardItem>
      
            <CardItem>
            
              <Text>
             
                { 
                  
                  this.props.values 

                }

              </Text>

            </CardItem>

            <CardItem footer bordered></CardItem>

          </Card>  
    );
  }
}

const styles= StyleSheet.create({

  textCenter: {

    textAlign: 'center',
    width: '100%'

  }
  
})         

export default Mynotesprint