import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Input, Form, Item, Label, Icon, Content, Textarea, Button} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator ,StackNavigationProp} from '@react-navigation/stack';
import * as firebase from 'firebase';

export default class Middle extends React.Component {

    constructor(props){
        super(props);
        this.state={
            emailAddress:"",
            password:"",
            err:""
        }
    }

    render(){
      return (
      <View style={style.main}>
          <Text style={{
              fontSize:40,
              textAlign:'center'
          }}>Log In</Text>
          <View
            style={style.line}
            />
            <Form>
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

            <Text style={style.formHeaderText}>Password</Text>
            <Item 
            last >
                <Icon active name='lock' />
                <Input 
                placeholder="Enter Your Password" 
                style={style.input}
                secureTextEntry
                textContentType="password" 
                onChangeText={(text)=>this.setState({password:text})}/>
            </Item>


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
                    <Text style={{color:"#fff", fontWeight:"bold",textAlign:'center', letterSpacing:2}}>Log In</Text>
            </Button>

            <Text style={{
                letterSpacing:2,
                fontSize:16,
                marginTop:10,
                textAlign:'center',
            }}
            onPress={()=>this.props.navigator.navigate("SignUp")}>Don't have an account? Create one here</Text>
            </Form>
      </View>
    );
  }
    onsubmit(){
        let mail = this.state.emailAddress;
        let pass = this.state.password
        let empty = "";
        let error1 = "All Fields must not be empty";
        let error2 = "Email should be valid";
        let error3 = "Sign In failed. Make sure your e-mail address and password are correct.";
        let mailreg = "(?=.[@])";
        if(mail.trim()==""||pass.trim()==""){
            this.setState({err : error1});
        }else{
            if(mail.match(mailreg)){
                this.setState({err : empty});
                
                firebase.auth().signInWithEmailAndPassword(mail,pass)
                .then(()=>
                    {console.log("Logged in")
                })
                .catch(error=>{
                    this.setState({err : error3})
                })
            
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
            margin:40,
            padding:40,
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


  

