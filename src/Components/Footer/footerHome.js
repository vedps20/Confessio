import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import {Button, Icon, FooterTab} from 'native-base';

export default class HomeFooter extends React.Component{
  render(){
    return(
        <View style={style.footer}>
          <FooterComponent heading="MOST USED TAGS" name1="tag 1" name2="tag 2" name3="tag 3"/>
          <FooterComponent heading="TOP IO STORIES" name1="tag 1" name2="tag 2" name3="tag 3"/>
          <FooterComponent heading="TOP STORIES" name1="tag 1" name2="tag 2" name3="tag 3"/>
        </View>
      );
    }
}

function FooterComponent(props){
  return(
      <View style={style.footerComponent}>
        <Text>{props.heading}</Text>
        <View style={{
          marginTop:5,
          borderWidth:1,
          borderColor:"#666666",
        }}/>
        <View style={{
          flexWrap:'wrap',
          flexDirection:'row'
        }}>
        <FooterTag name={props.name1}/>
        <FooterTag name={props.name2}/>
        <FooterTag name={props.name3}/>
        </View>
      </View>
  );
}

function FooterTag(props){
  return(
    <Button
    style={style.footerTagButton}
    >
      <Text
      style={{
        textAlign:'center',
        letterSpacing:1,
        color:'#fff',
        fontSize:10,
      }}>{props.name}</Text>
    </Button>
  );
}

const style = StyleSheet.create({
    
    footer:{
      flexWrap:"wrap",
      flexDirection:'row',
      paddingTop:10,
      paddingBottom:30,
      alignItems:'center',
      justifyContent:'space-evenly',
      backgroundColor:'#f5f5f5',
      shadowRadius:1,
    },
    footerComponent:{
      flex:1,
      flexDirection:'column',
      paddingHorizontal:10,
    },
    footerTagButton:{ 
      flexDirection:'row',
      flexWrap:'wrap',
      width:100,
      height:30,
      alignItems:'center',
      marginTop:5,
      marginHorizontal:3,
      justifyContent:'center',
      backgroundColor:"#343a40",
      borderRadius:6
    }

  });
  