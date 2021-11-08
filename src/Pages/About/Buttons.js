import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Button } from "native-base";

export default class Buttons extends React.Component{
    render(){
        return(
            <Button 
                outline
                style={{
                    borderRadius:20,
                    backgroundColor:"#3949ab",
                    marginHorizontal:11,
                    marginVertical:8,
                    justifyContent:'center',
                    alignItems:'center',
                    padding:2,
                    paddingHorizontal:8
                }}>
                <Text style={{
                    letterSpacing:2,
                    color:"#fff",
                    fontSize:12,
                    margin:10
                }}>{this.props.name}</Text>
            </Button>
        );
    }

}