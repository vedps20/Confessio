import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

export default class Header extends React.Component{
    render(){
        return(
            <View >
            <View style={style.headerField}>
              <View></View>
              <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                <Image 
                  source={{uri: ""}} 
                  style={{width:100, height: 600,  resizeMode:"contain",justifyContent:'center', alignItems:'center' }}
                  />
              </View>
              <View></View>
            
            </View>
            </View>
          );
    }
}

const style = StyleSheet.create({
  headerField:{
    shadowRadius:10,
    paddingTop:10,
    paddingBottom:10,
    paddingEnd:10,
    paddingStart:10,
    flexDirection:"row",
    justifyContent:'space-between',
    backgroundColor: "#3949ab",
  },
    container:{
      flex:1,
      backgroundColor:'#fff',
      justifyContent:"center",
      padding:20,
      alignItems:'center'
    },
    about:{
      color:"#fff",
      fontSize:20
    }
  
  });