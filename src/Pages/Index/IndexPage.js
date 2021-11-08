import * as React from "react";
import { StyleSheet, View, Text, Image, SafeAreaView } from "react-native";
import { StackActions, NavigationActions } from '@react-navigation/native';

import firebaseAuth from '@react-native-firebase/auth';

import * as firebase from 'firebase';

import Middle from './Middle';
import Header from '../../Components/Header/HeaderIndex';
import Footer from '../../Components/Footer/Footer';



export default class IndexPage extends React.Component {
  constructor(props){
    super(props);
    if(this.props.navigation.canGoBack()){
      this.props.navigation.dispatch(StackActions.popToTop());
    }
    if(firebase.auth().currentUser){
      this.props.navigation.navigate("Home");
    }
  }
  
    render(){
      return (

      <View style={style.main}>
          
        <Header navigator={this.props.navigation}/>
        <Middle navigator={this.props.navigation}/>
        <Footer navigator={this.props.navigation}/>
        
      </View>

    );
  }
  }
  

  const style = StyleSheet.create({
    main:{
      flex:1,
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'stretch'
    }
    })


  

