import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import {
  Container,
  Input,
  Form,
  Item,
  Label,
  Icon,
  Content,
  Textarea,
  Button,
} from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import * as firebase from "firebase";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { ScrollView } from "react-native-gesture-handler";

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      err: "",
      flag: false,
    };
  }

  onsubmit() {
    let empty = "";
    let error1 = "Can you Log in without details?";
    let error2 = "Email should be valid";
    let error3 =
      "Sign In failed. Make sure your e-mail address and password are correct.";
    let mailreg = "(?=.[@])";
    if (this.state.email.trim() == "" || this.state.password.trim() == "") {
      this.setState({ err: error1 });
    } else {
      if (this.state.email.match(mailreg)) {
        this.setState({ err: empty });
        firebase
          .auth()
          .signInWithEmailAndPassword(this.state.email, this.state.password)
          .then(() => {
            const Verified = firebase
              .auth()
              .currentUser.emailVerified.valueOf();
            if (Verified == true) {
              const id = firebase.auth().currentUser.uid;
              firebase
                .firestore()
                .collection("Users")
                .doc(id)
                .get()
                .then((doc) => {
                  if (doc.data().flag == true) {
                    this.props.navigation.navigate("Home");
                  } else if (doc.data().flag == false) {
                    this.props.navigation.navigate("SignUp2");
                  }
                });
            } else {
              firebase
                .auth()
                .signOut()
                .then(() => alert("User not verified"))
                .catch(() => {});
            }
          })
          .catch((error) => {
            this.setState({ err: error3 });
          });
      } else {
        this.setState({ err: error2 });
      }
    }
  }

  render() {
    return (
      <View > 
      <Header navigator={this.props.navigation}/>
      <ScrollView >
        
      <View style={style.main}>
        <Text
          style={{
            fontSize: 40,
            textAlign: "center",
          }}
        >
          Log In
        </Text>
        <View style={style.line} />
        <Form>
          <Text style={style.formHeaderText}>Email</Text>
          <Item last>
            <Icon active name="md-mail" />
            <Input
              placeholder="Enter Email"
              style={style.input}
              textContentType="emailAddress"
              onChangeText={(text) => this.setState({ email: text })}
            />
          </Item>

          <Text style={style.formHeaderText}>Password</Text>
          <Item last>
            <Icon active name="lock" />
            <Input
              placeholder="Enter Your Password"
              style={style.input}
              secureTextEntry
              textContentType="password"
              onChangeText={(text) => this.setState({ password: text })}
            />
          </Item>

          <Text
            style={{
              marginTop: 5,
              marginBottom: -2,
              color: "red",
              textAlign: "center",
              letterSpacing: 2,
              fontSize: 18,
            }}
          >
            {this.state.err}
          </Text>

          <Button
            outline
            style={style.submitButton}
            onPress={() => this.onsubmit()}
          >
            <Text
              style={{
                color: "#fff",
                fontWeight: "bold",
                textAlign: "center",
                letterSpacing: 2,
              }}
            >
              Log In
            </Text>
          </Button>

          <Text
            style={{
              letterSpacing: 2,
              fontSize: 16,
              marginTop: 10,
              textAlign: "center",
            }}
            onPress={() => this.props.navigation.navigate("SignUp")}
          >
            Don't have an account? Create one here
          </Text>
        </Form>
      </View>
      <Footer />
      </ScrollView>
      
      </View>
    );
  }
}

const style = StyleSheet.create({
  main: {
    flexDirection: "column",
    justifyContent: "center",
    margin: 20,
    padding: 20,
    marginBottom:200,
    borderColor: "#e0e0e0",
    borderWidth: 1,
    borderRadius: 4,
  },
  line: {
    borderBottomColor: "#f1f1f1",
    borderBottomWidth: 1,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#f1f1f1",
  },
  formHeaderText: {
    fontWeight: "bold",
    letterSpacing: 2,
    marginTop: 30,
  },
  input: {
    paddingHorizontal: 5,
  },
  submitButton: {
    justifyContent: "center",
    backgroundColor: "#3949ab",
    paddingHorizontal: 12,
    marginTop: 40,
    borderRadius: 5,
  },
});
