import React from "react";
import { Image, StyleSheet, View, Text, ImageBackground } from "react-native";
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
import { CheckBox } from "react-native-elements";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import firestore from "@react-native-firebase/firestore";

export default class CheckMale extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          id: 1,
          key: "Uncle",
          checked: false,
          uri:
            " https://firebasestorage.googleapis.com/v0/b/confess-karo.appspot.com/o/Confess%20Karo%20Images%2FAunt.jpg?alt=media&token=ed4e1e91-01ef-4efe-b59a-0bc22770c95d",
        },
        // {id: 2, key: 'Aunt', checked: false},
        {
          id: 2,
          key: "Boyfriend",
          checked: false,
          uri:
            "https://firebasestorage.googleapis.com/v0/b/confess-karo.appspot.com/o/Confess%20Karo%20Images%2FBoyFriend.jpg?alt=media&token=a9660a77-4b17-4b33-a724-1b5f0d0b2a4a",
        },
        // {id: 4, key: 'Girlfriend', checked: false},
        {
          id: 3,
          key: "Brother",
          checked: false,
          uri:
            "https://firebasestorage.googleapis.com/v0/b/confess-karo.appspot.com/o/Confess%20Karo%20Images%2FBrother.jpg?alt=media&token=2e3c4d97-31fb-4826-973b-cc7a137b2188",
        },
        // {id: 6, key: 'Sister', checked: false},
        {
          id: 4,
          key: "Grandfather",
          checked: false,
          uri:
            "https://firebasestorage.googleapis.com/v0/b/confess-karo.appspot.com/o/Confess%20Karo%20Images%2FGrandFather.jpg?alt=media&token=3dc475c8-ba7c-43c8-954a-e56ca8b2a220",
        },
        {
          id: 5,
          key: "Grandson",
          checked: false,
          uri:
            "https://firebasestorage.googleapis.com/v0/b/confess-karo.appspot.com/o/Confess%20Karo%20Images%2FSon.jpg?alt=media&token=4baa51ce-178d-439c-8f68-abebf8d1083a",
        },
        // {id: 9, key: 'Grandaughter', checked: false},
        {
          id: 6,
          key: "Son",
          checked: false,
          uri:
            "https://firebasestorage.googleapis.com/v0/b/confess-karo.appspot.com/o/Confess%20Karo%20Images%2FCousionBrother.jpg?alt=media&token=23191f85-04d7-4301-819d-d186fd79edca",
        },
        // {id: 11, key: 'Daughter', checked: false},
        {
          id: 7,
          key: "Friend",
          checked: false,
          uri:
            "https://firebasestorage.googleapis.com/v0/b/confess-karo.appspot.com/o/Confess%20Karo%20Images%2FMenFriends.jpg?alt=media&token=6240afa2-a481-43f4-bb32-3d2e1cecea13",
        },
        {
          id: 8,
          key: "CousinBrother",
          checked: false,
          uri:
            "https://firebasestorage.googleapis.com/v0/b/confess-karo.appspot.com/o/Confess%20Karo%20Images%2FCousionBrother.jpg?alt=media&token=23191f85-04d7-4301-819d-d186fd79edca",
        },
        // {id: 14, key: 'CousinSister', checked: false},
        {
          id: 9,
          key: "Father",
          checked: false,
          uri:
            "https://firebasestorage.googleapis.com/v0/b/confess-karo.appspot.com/o/Confess%20Karo%20Images%2FFather.jpg?alt=media&token=3665c9a5-e302-47d7-a108-7e47319ee483",
        },
        // {id: 16, key: 'Mother', checked: false},
      ],
      //   selected: undefined,
      Male: false,
      Female: false,
      name: "",
      dob: "",
      errName: "",
      errDob: "",
    };
    // console.log(this.props.route.data.emailV)
  }
  onCheckChanged(id) {
    const data = this.state.data;
    console.log(data);
    const index = data.findIndex((x) => x.id === id);
    console.log(data[index]);
    data[index].checked = !data[index].checked;
    this.setState(data);
  }
  render() {
    const renderCheckbox = this.state.data.map((item, key) => {
      return (
        <View>
          <TouchableOpacity onPress={() => this.onCheckChanged(item.id)}>
            <ImageBackground style={styles.image} source={{ uri: item.uri }}>
              <CheckBox
                style={styles.check}
                title={item.key}
                key={key}
                checked={item.checked}
              />
            </ImageBackground>
          </TouchableOpacity>
        </View>
      );
    });
    return <View style={styles.box}>{renderCheckbox}</View>;
  }
}
const styles = StyleSheet.create({
  box: {
    justifyContent: "space-evenly",
    flex: 1,
    alignContent: "space-around",
    alignItems: "flex-start",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  check: {
    height: 40,
    width: 40,
  },
  image: {
    width: 200,
    height: 200,
    justifyContent: "flex-end",
  },
});
