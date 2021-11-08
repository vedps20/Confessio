import * as React from "react";
import { StyleSheet, View, Text, Image ,ActivityIndicator} from "react-native";

import HeaderWithDrawer from '../../Home/Components/headerWithDrawer';

import firebase  from 'firebase';

export default class LogOut extends React.Component {
    
    constructor(){
        super();

        firebase.auth().signOut().then(()=>{
            this.props.navigation.navigate("Home");
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


  


