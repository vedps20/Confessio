import React from "react";
import {
  StyleSheet,
  StatusBar,
  TextInput,
  FlatList,
  TouchableOpacity,
  View,
  Text,
  AsyncStorage,
  Image,
} from "react-native";
import {
  Container,
  Form,
  Input,
  Item,
  CardSwiper,
  Body,
  CardItem,
  Card,
  Thumbnail,
  Button,
  Content,
  Picker,
  Fab,
  Icon,
  Textarea,
} from "native-base";
import firebase from "firebase";
import "firebase/firestore";
import Header from "../../Components/Header/Header";
import BelowHeader from "../../Components/HomeComponents/BelowHeader";
import { ScrollView } from "react-native-gesture-handler";
import ButtonsMale from "./buttonMale";
import ButtonsFemale from "./buttonFemale";

export default class TagView extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <View>
        <Header navigator={this.props.navigation} />
        <ScrollView>
        <BelowHeader navigator={this.props.navigation} />
        <View style={styles.cat}>
          <Text style={styles.catText}>Categorized Confessions</Text>
        </View>
        <View style={styles.container}>
          <View style={styles.male}>
            <Text style={styles.maletxt}>Male</Text>
            <ButtonsMale navigator={this.props.navigation} />
          </View>
          <View style={styles.female}>
            <Text style={styles.femaletxt}>Female</Text>
            <ButtonsFemale navigator={this.props.navigation} />
          </View>
        </View>
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cat: {
    justifyContent: "space-between",
    alignSelf: "center",
    flexDirection: "row",
    margin: 20,
  },
  catText: {
    fontWeight: "bold",
    fontSize: 25,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "nowrap",
  },
  male: {
    margin: 20,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  female: {
    margin: 20,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  maletxt: {
    fontWeight: "bold",
    fontSize: 15,
  },
  femaletxt: {
    fontWeight: "bold",
    fontSize: 15,
  },
});
