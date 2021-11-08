import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

import Header from '../../Components/Header/Header';
import { ScrollView } from "react-native-gesture-handler";


export default class PrivacyPolicy extends React.Component {

    render(){
        const reservText = "We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amend these terms and conditions and it’s linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.";
        const removeText = "If you find any link on our Website that is offensive for any reason, you are free to contact and inform us at any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly. We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date. In case of revelation of identity threw any way the account of that person will be blocked.";
      return (
      <ScrollView >
          <View style={style.main}>
          <Header navigator={this.props.navigation}/>
        <View style={style.body}>
            <Text style={style.textTopHeading}>Your Privacy</Text>
            <Text style={style.normalText}> Please read Privacy Policy</Text>
            <Text style={style.textHeading}>Reservation of Rights</Text>
            <Text style={style.normalText}>{reservText}</Text>
            <Text style={style.textHeading}>Removal of links from our website</Text>
            <Text style={style.normalText}>{removeText}</Text>
        </View>
        </View>
      </ScrollView>
    );
  }
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
        }
    })