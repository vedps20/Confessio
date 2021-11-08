import * as React from "react";
import { StyleSheet, View, Text, Image ,ActivityIndicator} from "react-native";
import { StackActions, NavigationActions } from '@react-navigation/native';

import HeaderWithDrawer from '../../Components/Header/HeaderWithDrawer';

import firebase  from 'firebase';

export default class LogOut extends React.Component {
    
    constructor(props){
        super(props);
        firebase.auth().signOut().then(()=>{
          console.log("wait");
          this.props.navigation.navigate("Index Page");
        });
        
    }

    render(){
      return (
      <View style={style.main}>
          <HeaderWithDrawer navigator={this.props.navigation}/>
            <View style={{alignItems:'center',justifyContent:'center',marginTop:100}}>
            <ActivityIndicator/>
            <Text style={{textAlign:'center',letterSpacing:2,margin:40,}}>Please wait, Logging you out...</Text>
            </View>
      </View>
    );
  }

}
  

const style = StyleSheet.create({
    main:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'stretch'
    }

})


  

