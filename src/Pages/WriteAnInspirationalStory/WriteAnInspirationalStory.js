import * as React from "react";
import { StyleSheet, View, Text, Image, Picker } from "react-native";
import {Button, Input, Textarea} from 'native-base';

import firebase from 'firebase';
import 'firebase/firestore';

import Header from '../../Components/Header/Header';
import { ScrollView } from "react-native-gesture-handler";

export default class WriteAnInspirationalStory extends React.Component {
    constructor(props){
        super(props);
        this.state={
            title:"",
            description:"",
            err:"",
        }
        
    }
    

    render(){
        
      return (
          <ScrollView>
      <View style={style.main}>
        <Header navigator={this.props.navigation}/>
        <View style={style.middle}>
        <Text
        style={{
            textAlign:'center',
            marginBottom:30,
            letterSpacing:1,
            fontSize:30,
            marginTop:8,
        }}>Write An Inspirational Story</Text>
        <Text
        style={{
            fontSize:18,
            marginLeft:5,
            marginBottom:10,
            letterSpacing:1,
            fontWeight:'bold'
        }}>TITLE</Text>

        <Input
        placeholder="Enter a Title"
        style={{
            height:40,
            padding:5,
            borderWidth:1,
            borderRadius:4,
            borderColor:"#ced4da",
            marginBottom:22,
            
        }}
        onChangeText={(text)=>this.setState({title:text})}/>

        <Text
        style={{
            fontSize:22,
            marginLeft:5,
            marginBottom:10,
            marginTop:20,
            letterSpacing:1,
            fontSize:16,
            fontWeight:'bold',
        }}>DESCRIPTION</Text>

        <Textarea
            rowSpan={9} bordered 
            placeholder="Your story goes here..."
            style={{
                padding:5,
                borderRadius:4,
                fontSize:16,
            }}
            onChangeText={(text)=>this.setState({description:text})}
            />

            <Text style={
                    {   marginTop:15,
                        color:"red",
                        textAlign:"center",
                        letterSpacing:2,
                        fontSize:18
                    }

                }>{this.state.err}</Text>

            <Button
            primary
            full
            style={{
                justifyContent:'center',
                marginTop:20,
                borderRadius:5,
            }}
            onPress={()=>this.onSubmit()}>
                <Text
                style={{
                    color:'#fff',
                    textAlign:'center',
                    letterSpacing:2,
                }}>Post</Text>
            </Button>

    </View>
        
      </View>
      </ScrollView>
    );
  }

  onSubmit(){

    let title = this.state.title;
    let description = this.state.description;
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();

    let error = "All Fields must not be empty";
    let noError = "";

    let userId = firebase.auth().currentUser.uid;
    if(title.trim()==""||description.trim()==""){
      this.setState({err : error});
      }else{
          this.setState({err : noError});
            const Story = {
                By : userId,
                Title : title,
                Story : description,
                Date : ""+year+"-"+month+"-"+date,
                Likes:0,
                Views:0,
                Comments:0,
                Popularity:0,
            }
          firebase.firestore()
          .collection("Inspirational Stories")
          .add(Story).then()
          .catch();
            this.props.navigation.navigate("Home");
      }
  }

  
}
  
  const style = StyleSheet.create({
        main:{
            flexDirection:'column',
            justifyContent:"center",
        },
        middle:{
            margin: 20,
            padding:15,
            backgroundColor:"#fff"
        },
    })


  

