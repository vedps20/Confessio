import * as React from "react";
import { StyleSheet, View, Text, Image ,SafeAreaView, StatusBar, Platform  } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";

export default class Header extends React.Component{

      render(){
        return(
          <SafeAreaView style={{
            backgroundColor: "#3949ab",
            paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0}}>
            
            <View style={style.headerField}>
              <View style={{justifyContent:'center'}}
              >
                <TouchableHighlight style={{justifyContent:'center'}}
                onPress={()=>this.props.navigator.goBack()}>
                <Image 
                    source={{uri: "https://firebasestorage.googleapis.com/v0/b/confess-karo.appspot.com/o/Confess%20Karo%20Images%2Fleft.png?alt=media&token=b08000a5-fe01-4d3e-a303-01fec24540f2"}} 
                    style={{width:30, height: 60,  resizeMode:"contain",justifyContent:'center', alignItems:'center' }}
                    
                    />
                  </TouchableHighlight>
              </View>
              <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                <Text style={{width:100, height: 60,  resizeMode:"contain",justifyContent:'center', alignItems:'center' }} >Confessio</Text>
              </View>
              <View></View>
            
            </View>
            </SafeAreaView>
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