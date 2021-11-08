import * as React from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import {Button} from 'native-base';

import Header from "../../Components/Header/HeaderWithDrawer";
import Middle from "./Middle";

import * as firebase from 'firebase';


export default class ContactUsHome extends React.Component {
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



  

