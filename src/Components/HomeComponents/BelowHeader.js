import * as React from "react";
import { ScrollView,StyleSheet, View, Text, Image} from "react-native";
import {Button, Icon, ListItem, Item, Card} from 'native-base';

export default function BelowHeader({navigator}){
    return(
      <View style={style.belowHeader}>
        <View style={style.view1}>
          <Button
          primary
          bordered
          full
          style={
            style.buttonHeader
          }
          onPress={()=>navigator.navigate("Write A Confession")}>
            <Text style={{
              textAlign:'center',
              letterSpacing:1,
            }}>Write A Confession</Text>
          </Button>
          <Button
          primary
          bordered
          full
          style={
            style.buttonHeader
          }
          onPress={()=>navigator.navigate("Write An Inspirational Story")}>
            <Text style={{
              textAlign:'center',
              letterSpacing:1,
            }}>Write Your Story</Text>
          </Button>
        </View>
  
        <View style={{
          marginTop:5,
          borderWidth:1,
          borderColor:"#666666",
          marginHorizontal:10,
        }}/>
        <View style={style.view2}>
          <Button
          primary
          transparent
          full
          iconLeft
          style={
            style.buttonHeader
          }
          onPress={()=>navigator.navigate("My Confessions")}>
            <Image
            style={{
              height:25,
              width:25,
              resizeMode:'contain',
            }} 
            source={{uri:"https://firebasestorage.googleapis.com/v0/b/confess-karo.appspot.com/o/Confess%20Karo%20Images%2Fconfessions.png?alt=media&token=345d3c33-f0bf-4f0d-8f85-bf4e87e4b5e1"}}/>
            <Text style={style.headerButtonText}>My Confessions</Text>
          </Button>
          <Button
          primary
          transparent
          full
          iconLeft
          style={
            style.buttonHeader
          }
          onPress={()=>navigator.navigate("TagView")}>
            
            <Image
            style={{
              height:25,
              width:25,
              resizeMode:'contain',
            }} 
            source={{uri:"https://firebasestorage.googleapis.com/v0/b/confess-karo.appspot.com/o/Confess%20Karo%20Images%2Ftags.png?alt=media&token=5b821c0a-cc55-40a5-8c42-2314d6f7500a"}}/>
            <Text style={style.headerButtonText}>Tags</Text>
          </Button>
          <Button
          primary
          transparent
          full
          iconLeft
          style={
            style.buttonHeader
          }
          onPress={()=>navigator.navigate("My Stories")}>
            
            <Image
            style={{
              height:25,
              width:25,
              resizeMode:'contain',
            }} 
            source={{uri:"https://firebasestorage.googleapis.com/v0/b/confess-karo.appspot.com/o/Confess%20Karo%20Images%2Fstories.png?alt=media&token=156ae88b-043d-4377-ad49-9ea7a5ff808d"}}/>
            <Text style={style.headerButtonText}>My Stories</Text>
          </Button>
        </View>
      </View>
    );
  }

  const style = StyleSheet.create({
    main:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'stretch',
        backgroundColor:"#fff"
    },
    belowHeader:{
      shadowRadius:2,
      backgroundColor:"#f5f5f5",
      marginBottom:5,
    },
    view1: {
      flexWrap:'wrap',
      marginTop:15,
      marginHorizontal:5,
      flexDirection:'row',
      justifyContent:'space-around',
      alignItems:'center',
    },
    view2: {
      flexWrap:'wrap',
      marginTop:7,
      paddingBottom:5,
      marginHorizontal:5,
      flexDirection:'row',
      justifyContent:'space-around',
      alignItems:'center',
    },
    buttonHeader:{
      flexWrap:'wrap',
      flex:1,
      margin:5,
      borderRadius:5,
      paddingHorizontal:5,

    },
    headerButtonText:{
      textAlign:'center',
      letterSpacing:1,
      marginLeft:5
    },
    confession:{ 
      margin:5,
      borderRadius:3, 
      alignItems: 'center',
      justifyContent: 'center',
      shadowRadius:3,
    },
    likeTexts:{ 
      fontSize: 20,
      marginHorizontal:7,
      marginRight:15,
      marginBottom:10,}

})