import * as React from "react";
import { StyleSheet, View, Text, Image, SafeAreaView, StatusBar, Platform } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  MenuProvider,
  renderers
} from 'react-native-popup-menu';

export default class Header extends React.Component{
  
    render(){
        return(
          <SafeAreaView style={{flex: 1,
            backgroundColor: "#3949ab",
            paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0}}>
            <View style={{flex:1}}>
            <View style={style.headerField}>
              <View style={{flex:1}}></View>
              <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                <Text 
                  style={{width:100, height: 50,  resizeMode:"contain",justifyContent:'center', alignItems:'center' }}
                  >Confessio</Text>
              </View>
              <View style={{flex:1, alignItems:'flex-end'}}>
              <MenuProvider >
              <Menu
               renderer={renderers.SlideInMenu}
               rendererProps={{ preferredPlacement: 'bottom' }} 
               style={{
                 flex:1,
                 justifyContent:'center',
                 width:100,
                 height:100,
                 alignItems:'flex-end',
               }}>
                <MenuTrigger style={{
                  flexDirection:"column"
                }}>
                <Image 
                  source={{uri: "https://firebasestorage.googleapis.com/v0/b/confess-karo.appspot.com/o/Confess%20Karo%20Images%2Fdots.png?alt=media&token=213bc761-d9a3-4a9e-9f62-1cca4f622352"}} 
                  style={{width:30, height: 30,  resizeMode:"contain",justifyContent:'center', alignItems:'center' }}
                  />
                </MenuTrigger>
                <MenuOptions>
                  <MenuOption value={"About"}
                  onSelect={()=>this.props.navigator.navigate("About")}>
                    <Text 
                    style={{
                      fontSize:16,
                      letterSpacing:1,
                      margin:3,
                      }}>About</Text>

                  </MenuOption>
                </MenuOptions>
              </Menu>
              </MenuProvider>
              </View>
              
            </View>
            </View>
            </SafeAreaView>
          );
    }
}

const style = StyleSheet.create({
    headerField:{
      flex:1,
      shadowRadius:10,
      paddingTop:10,
      paddingBottom:10,
      paddingEnd:10,
      paddingStart:10,
      flexDirection:"row",
      justifyContent:'space-between',
      alignItems:'center',
      backgroundColor: "#3949ab",
    },
    container:{
      flex:1,
      backgroundColor:'#fff',
      justifyContent:"center",
      padding:20,
      alignItems:'center'
      
    },
  
  });