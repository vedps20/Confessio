import * as React from "react";
import { StyleSheet, View, Text, Image} from "react-native";
import {Container, Context, Form, Input, Button, Item, Label} from 'native-base';

export default class Middle extends React.Component{
    render(){
        return(
            <View style={style.middle}>
        <Container style={style.container}>
          <View></View>
          <Button 
          full
          rounded
          success
          style={{marginTop:100}}
          onPress={()=> this.props.navigator.navigate('Log In')}
          >
            <Text>LogIn</Text>
          </Button>
          
          <Button 
          full
          rounded
          success
          style={{marginTop:100}}
          onPress={()=> this.props.navigator.navigate('SignUp')}
          >
            <Text>Sign Up</Text>
          </Button>
          <View></View>
        </Container>
      </View>
        );
    }
}

const style = StyleSheet.create({
    
    
    container:{
      flex:1,
      backgroundColor:'#fff',
      justifyContent:"center",
      padding:20,
      alignItems:'center'
      
    },

    middle:{
      flex:8,
    },
  
    buttons:{
      width:300,
      height:60,
    }
  
  });