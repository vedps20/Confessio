import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import {
  Container,
  Context,
  Form,
  Input,
  Item,
  Button,
  Label,
} from "native-base";
import Signup_form from "../Pages/Signup/Signup_1";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default class Middle extends React.Component {
  render() {
    return (
      <View style={style.middle}>
        <Container style={style.container}>
          <View></View>
          <Button
          onPress={() => this.props.navigator.navigate("Login")}
           full 
           rounded
            success style={{ marginTop: 100 }}
          >
            <Text>LogIn</Text>
          </Button>

          <Button
            full
            rounded
            success
            style={{ marginTop: 100 }}
            onPress={() => this.props.navigator.navigate("Signup_form")}
          >
            <Text>Sign Up</Text>
          </Button>
          <View></View>
        </Container>
      </View>
    );
  }
}

const style = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch",
  },
  headerField: {
    flex: 4,
    shadowRadius: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingEnd: 10,
    paddingStart: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#3949ab",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 20,
    alignItems: "center",
  },
  middle: {
    flex: 8,
  },

  toolbar: {
    position: "relative",
    alignSelf: "flex-end",
    alignItems: "flex-end",
    height: 30,
    width: 30,
    backgroundColor: "tomato",
  },

  buttons: {
    width: 300,
    height: 60,
  },
});
