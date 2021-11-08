import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

import Header from '../../Components/Header/Header';
import Unorderedlist from 'react-native-unordered-list';
import { ScrollView } from "react-native-gesture-handler";

export default class Disclaimer extends React.Component {
  render(){
    const disc = "To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website and the use of this website. Nothing in this disclaimer will:";
    const theLimit = "The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.\n\nAs long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.";
    return (
      <ScrollView>
  <View style={style.main}>
    <Header navigator={this.props.navigation}/>
    <View style={style.body}>
        <Text style={style.textTopHeading}>Disclaimer</Text>
        <Text style={style.normalText}>{disc}</Text>
        <ListItems/>
        <Text style={style.normalText}>{theLimit}</Text>
    </View>
  </View>
  </ScrollView>
);
}


}

function ListItems(){
  let t1 = "limit or exclude our or your liability for death or personal injury;";
  let t2 = "limit or exclude our or your liability for fraud or fraudulent misrepresentation;";
  let t3 = "limit any of our or your liabilities in any way that is not permitted under applicable law; or";
  let t4 = "exclude any of our or your liabilities that may not be excluded under applicable law.";

  return(
    <View>
      <Unorderedlist style={style.bullet}><Text style={style.bulletText}>{t1}</Text></Unorderedlist>
      <Unorderedlist style={style.bullet}><Text style={style.bulletText}>{t2}</Text></Unorderedlist>
      <Unorderedlist style={style.bullet}><Text style={style.bulletText}>{t3}</Text></Unorderedlist>
      <Unorderedlist style={style.bullet}><Text style={style.bulletText}>{t4}</Text></Unorderedlist>
    </View>
  );
}

const style = StyleSheet.create({
    main:{
        flexDirection:'column',
        justifyContent:"center",
        backgroundColor:'#ffffff'
    },
    body:{
        flexDirection:'column',
        justifyContent:"center",
        margin:10,
        padding:10,
        borderColor:"#e0e0e0",
        borderWidth:1,
        borderRadius:4
    },
    textTopHeading:{
        fontSize: 34,
    },
    textHeading:{
        marginTop:12,
        fontSize:24,
    },
    normalText:{
        marginTop:12,
        fontSize:16,
    },
    bullet:{
      marginLeft:15,
      fontSize: 20,
    },
    bulletText:{
      marginTop:5,
      fontSize:16,
    }
})