// import * as React from "react";

import React from "react";
import { StyleSheet, View, Text } from "react-native";
import {
  Container,
  Form,
  Input,
  Item,
  Button,
  Content,
  Icon,
} from "native-base";
import firebase from "firebase";
import firestore from "@react-native-firebase/firestore";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { ScrollView } from "react-native-gesture-handler";
// import ValidationComponent from 'react-native-form-validator';
// import { FielderProvider, useForm } from 'fielder';

export default class Signup extends React.Component {
  //   onLogin(){

  //     if(firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password)){
  //       this.props.navigation.navigate("Login")
  //     }
  //    else {
  //      console.log('not signed in')
  //    }
  // }

  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      emailError: "",
      passwordError: "",
    };
  }

  emailValidator = () => {
    let min = "^.{8,}$";
    let num = "(?=.*\\d)";
    let upper = "(?=.*[A-Z])";
    let special = "(?=.[!@#$%^&*])";
    let pass = this.state.password.toString();
    let mail = this.state.email.toString();

    if (
      pass.match(min) &&
      pass.match(num) &&
      pass.match(upper) &&
      pass.match(special)
    ) {
      // console.log("yeah! ");
      this.setState({ passwordError: "Successfully validated" });
      // console.log(pass);
    } else {
      this.setState({
        passwordError:
          "Password must have Minimum eight characters, at least one letter and one number and a special character ",
      });
    }

    if (mail.match(special) || mail == " ") {
      // console.log("yeah! ");
      this.setState({ emailError: "Successfully validated" });
      // console.log(pass);
    } else {
      this.setState({ emailError: "Enter a valid mail" });
    }
  };

  onSubmit() {
    const data = {
      emailV: this.state.email,
      passV: this.state.password,
    };
    // console.log(this.props);
    if (
      this.state.passwordError == "Successfully validated" &&
      this.state.emailError == "Successfully validated"
    ) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        // console.log(firebase.auth().currentUser)
        .then(() => {
          this.props.navigation.navigate("Email Verification", { data });
        })
        .catch((error) => {
          if (error.code === "auth/email-already-in-use") {
            alert("That email address is already in use!");
          }

          if (error.code === "auth/invalid-email") {
            alert("That email address is invalid!");
          }

          alert(error);
        });
    } else {
      alert("Sign up properly bitch :)");
    }
  }

  render() {
    return (
      <ScrollView>
        <Header navigator={this.props.navigation}/>
        <Content style={{ padding: 6, flex:1 ,marginBottom:70}}>

          <Text style={
            {
              textAlign:'center',
              fontSize:24,
              fontWeight:'bold',
              marginVertical:13,
              letterSpacing:2,
              marginBottom:30,
            }
          }>Sign Up</Text>
          <Form>
            <Item
              success={this.state.emailError == "Successfully validated"}
              style={{ padding: 10, borderRadius: 20,marginTop:20,marginLeft:5, }}
            >
              <Icon name="person" />
              <Input
                keyboardType="email-address"
                required
                onBlur={() => this.emailValidator()}
                onChangeText={(email) => this.setState({ email })}
                value={this.state.email}
                placeholder="Email"
              />
              <Icon style={{ marginLeft: 50 }} name="checkmark-circle" />
            </Item>

            <Text
              style={{
                color:
                  this.state.emailError == "Successfully validated"
                    ? "green"
                    : "red",
                padding: 10,
                marginLeft: 10,
              }}
            >
              {this.state.emailError}
            </Text>
            <Item
              success={this.state.passwordError == "Successfully validated"}
              style={{
                marginTop: 20,
                marginLeft: 5,
                borderRadius: 20,
                padding: 20,
              }}
            >
              <Icon name="lock" />
              <Input
                required
                secureTextEntry={true}
                onBlur={() => this.emailValidator()}
                onChangeText={(password) => this.setState({ password })}
                placeholder="Password"
              />
              <Icon style={{ marginLeft: 50 }} name="checkmark-circle" />
            </Item>

            <Text
              style={{
                color:
                  this.state.passwordError == "Successfully validated"
                    ? "green"
                    : "red",
                padding: 10,
                marginLeft: 10,
              }}
            >
              {this.state.passwordError}
            </Text>

            <View
              style={{
                padding: 60,
                justifyContent: "space-around",
                flexWrap: "wrap",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Button
                onPress={() => {
                  this.onSubmit();
                }}
                style={styles.but2}
                outlined
                primary
              >
                <Text
                  style={{
                    color: "white",
                    letterSpacing: 2,
                    textAlign: "center",
                    marginVertical: 10,
                  }}
                >
                  Submit Details
                </Text>
              </Button>

            </View>
          </Form>
        </Content>
        <Footer />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  but2: {
    flex: 1,
    alignItems: "center",
    height: 60,
    marginHorizontal: 60,
    borderRadius: 20,
    justifyContent: "center",
    backgroundColor: "#3949ab",
    paddingHorizontal: 12,
    paddingVertical: 26,
  },
});
