import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Input, Form, Item, Label, Icon, Content, Textarea, Button} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator ,StackNavigationProp} from '@react-navigation/stack';
import firebase from 'firebase';
import 'firebase/firestore';

export default class Middle extends React.Component {

    constructor(props){
        super(props);
        this.state={
            fullName:"",
            emailAddress:"",
            contactNumber:"",
            message:"",
            err:""
        }
    }

    render(){
      return (
      <View style={style.main}>
          <Text style={{
              fontSize:40,
              textAlign:'center'
          }}>Contact Us</Text>
          <View
            style={style.line}
            />
            <Form>
            <Text style={style.formHeaderText}>Full Name</Text>
            <Item 
            last >
                <Icon active name='person' />
                <Input 
                placeholder="Your Name"
                textContentType="name" 
                style={style.input}
                onChangeText={(text)=>this.setState({fullName:text})}
                />
            </Item>
            <Text style={style.formHeaderText}>Email</Text>
            <Item 
            last >
                <Icon active name='md-mail' />
                <Input 
                placeholder="Enter Email" 
                style={style.input}
                textContentType="emailAddress" 
                onChangeText={(text)=>this.setState({emailAddress:text})}/>
            </Item>
            <Text style={style.formHeaderText}>Contact Number</Text>
            <Item 
            last >
                <Icon active name='phone-landscape' />
                <Input 
                placeholder="Enter Contact Number" 
                style={style.input}
                textContentType="telephoneNumber" 
                onChangeText={(text)=>this.setState({contactNumber:text})}/>
            </Item>
            <Text style={style.formHeaderText}>Message</Text>
            <Textarea
                rowSpan={5} bordered 
                placeholder="Your Message"
                style={style.input}
                onChangeText={(text)=>this.setState({message:text})}/>

                <Text style={
                    {   marginTop:5,
                        marginBottom:-2,
                        color:"red",
                        textAlign:"center",
                        letterSpacing:2,
                        fontSize:18
                    }

                }>{this.state.err}</Text>
            
            <Button
            outline
                style={style.submitButton}
                onPress={()=>this.onsubmit()}

                >
                    <Text style={{color:"#fff", fontWeight:"bold",textAlign:'center', letterSpacing:2}}>Submit</Text>
            </Button>
            </Form>
      </View>
    );
  }
    onsubmit(){
        let name = this.state.fullName;
        let phone = this.state.contactNumber;
        let mail = this.state.emailAddress;
        let message = this.state.message;
        let error1 = "All Fields must not be empty";
        let error2 = "Email should be valid";
        let error3 = "Phone number must contain 10 numbers only"
        let mailreg = "(?=.[@])";
        let phonereg = "[0-9]{1}[0-9]{9}";
        if(name.trim()==""||phone.trim()==""||mail.trim()==""||message==""){
            this.setState({err : error1});
        }else{
            if(mail.match(mailreg)){
                if(phone.match(phonereg)){
                    firebase.firestore().collection("Contact Us").add({
                        FullName : name,
                        EmailAddress : mail,
                        ContactNumber : phone,
                        Message : message
                    });
                    this.props.navigator.navigate('Home');
                    console.log("name: " + this.state.fullName + "\n"+
                    "email: " + this.state.emailAddress + "\n"+
                    "contactNumber: " + this.state.contactNumber + "\n"+
                    "message: " + this.state.message + "\n" )
                }else{
                    this.setState({err : error3});
                }
            }else{
                this.setState({err : error2});
            }

            
         }
    }
  }

  

  const style = StyleSheet.create({
        main:{
            flexDirection:'column',
            justifyContent:"center",
            margin:10,
            padding:10,
            borderColor:"#e0e0e0",
            borderWidth:1,
            borderRadius:4

        },
        line:{
            borderBottomColor: '#f1f1f1',
            borderBottomWidth: 1,
            marginTop:10,
            borderWidth:1,
            borderColor:"#f1f1f1",
        },
        formHeaderText:{
            fontWeight:'bold',
            letterSpacing:2,
            marginTop:30,
        },
        input:{
            paddingHorizontal:5,
        },
        submitButton:{
            justifyContent:'center',
            backgroundColor:"#3949ab",
            paddingHorizontal:12,
            marginTop:40 ,
            borderRadius:5

        }
    })


  

