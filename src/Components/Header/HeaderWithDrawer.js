import * as React from "react";
import { StyleSheet, View, Text, Image ,SafeAreaView, StatusBar, Platform} from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";

export default class HeaderWithDrawer extends React.Component{
    render(){
        return(
          <SafeAreaView style={{
            backgroundColor: "#3949ab",
            paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0}}>
            <View >
            <View style={style.headerField}>
              <View>
              </View>
              <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
        
              <Text  style={{width:100, height: 50,  resizeMode:"contain",justifyContent:'center', alignItems:'center' }} > Confessio </Text>
            
                
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
            </SafeAreaView>
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