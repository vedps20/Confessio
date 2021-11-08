import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import {Button} from 'native-base';

import Header from "../../Components/Header/Header";
import Middle from "./Middle";

import * as firebase from 'firebase';
import { ScrollView } from "react-native-gesture-handler";


export default class ContactUs extends React.Component {
    render(){
      return (
        <ScrollView>
      <View style={style.main}>
      <Header navigator={this.props.navigation}/>
        <Middle navigator={this.props.navigation}/>
      </View>
      </ScrollView>
    );
  }
  }

  const style = StyleSheet.create({
        main:{
            flexDirection:'column',
            justifyContent:"center",
            backgroundColor:'#ffffff'
        },
    })


  

