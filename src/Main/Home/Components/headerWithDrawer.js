import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";

export default class HeaderWithDrawer extends React.Component{
    render(){
        return(
            <View >
            <View style={style.headerField}>
              <View>
              </View>
              <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
        
              <Image 
                  source={{uri: "https://firebasestorage.googleapis.com/v0/b/confess-karo.appspot.com/o/Confess%20Karo%20Images%2Flogo3.png?alt=media&token=99f2baf4-902c-43af-811a-2500082324a7"}} 
                  style={{width:100, height: 50,  resizeMode:"contain",justifyContent:'center', alignItems:'center' }}
                  />
            
                
              </View>
              <View>
              <TouchableHighlight onPress={() => this.props.navigator.openDrawer()}>
                <Image 
                  source={{uri: "https://firebasestorage.googleapis.com/v0/b/confess-karo.appspot.com/o/Confess%20Karo%20Images%2Ficons8-menu-26.png?alt=media&token=0ed6050a-d295-4971-879b-ec623e12feca"}} 
                  style={{width:26, height: 26,  resizeMode:"contain",justifyContent:'center', alignItems:'center' }}
                  />
                  </TouchableHighlight>
              </View>
            
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
    paddingEnd:20,
    paddingStart:10,
    flexDirection:"row",
    alignItems:'center',
    justifyContent:'space-between',
    backgroundColor: "#3949ab",
  },
  
  });