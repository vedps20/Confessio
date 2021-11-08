import React from "react";
import {
  CheckBox,
  Image,
  StyleSheet,
  View,
  Text,
  ImageBackground,
} from "react-native";
import {
  Container,
  Form,
  Picker,
  Input,
  Item,
  Button,
  Content,
  Radio,
  Right,
  Left,
  ListItem,
  Body,
  Icon,
} from "native-base";
import * as firebase from "firebase";
// import { TextInput } from "react-native-gesture-handler";
import firestore from "@react-native-firebase/firestore";
import VerificationScreen from "../InteractivePages/VerificationScreen";
import Header from "../../Components/Header/Header";

export default class Index extends React.Component {
  render() {
    return <Text>Youa are here!</Text>;
  }
}
