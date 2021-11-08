import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

class Footer extends React.Component{
  constructor(props){
    super();
  }
  render(){
    return(
        <View style={style.footer}>
          <Text onPress={()=>this.props.navigator.navigate("TermsAndConditions")}>Terms and conditions   </Text>
          <Text onPress={()=>this.props.navigator.navigate("Disclaimer")}>Disclaimer   </Text>
          <Text onPress={()=>this.props.navigator.navigate("Privacy Policy")}>Privacy Policy   </Text>
          <Text onPress={()=>this.props.navigator.navigate("ContactUs")}>Contact Us   </Text>
          <Text>FaceBook   </Text>
          <Text>Instagram   </Text>
          <Text>Twitter   </Text>
        </View>
      );
    }
}

const style = StyleSheet.create({
    
    footer:{
      flexWrap:"wrap",
      flexDirection:'row',
      paddingTop:20,
      height:80,
      marginTop:20,
      paddingHorizontal:20,
      alignItems:'center',
      justifyContent:'space-evenly',
      backgroundColor:'#f5f5f5'
    },

  });
  

export default Footer;