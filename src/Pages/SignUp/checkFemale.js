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

export default class CheckFemale extends React.Component {
  constructor() {
    super();
    this.state = {
      images: [
        {},
        {
          uri:
            " https://firebasestorage.googleapis.com/v0/b/confess-karo.appspot.com/o/Confess%20Karo%20Images%2FAunt.jpg?alt=media&token=ed4e1e91-01ef-4efe-b59a-0bc22770c95d",
        },
      ],
      data: [
        // {id: 1, key: 'Uncle', checked: false,  uri:" https://firebasestorage.googleapis.com/v0/b/confess-karo.appspot.com/o/Confess%20Karo%20Images%2FAunt.jpg?alt=media&token=ed4e1e91-01ef-4efe-b59a-0bc22770c95d"},
        {
          id: 1,
          key: "Aunt",
          checked: false,
          uri:
            "https://firebasestorage.googleapis.com/v0/b/confess-karo.appspot.com/o/Confess%20Karo%20Images%2FAunt.jpg?alt=media&token=ed4e1e91-01ef-4efe-b59a-0bc22770c95d",
        },
        // {id: 3, key: 'Boyfriend', checked: false},
        {
          id: 2,
          key: "Girlfriend",
          checked: false,
          uri:
            "https://firebasestorage.googleapis.com/v0/b/confess-karo.appspot.com/o/Confess%20Karo%20Images%2FBoyFriend.jpg?alt=media&token=a9660a77-4b17-4b33-a724-1b5f0d0b2a4a",
        },
        // {id: 5, key: 'Brother', checked: false},
        {
          id: 3,
          key: "Sister",
          checked: false,
          uri:
            "https://firebasestorage.googleapis.com/v0/b/confess-karo.appspot.com/o/Confess%20Karo%20Images%2FSister.jpg?alt=media&token=c27c9bd8-0a23-47d2-ac20-2b14dbb850a2",
        },
        {
          id: 4,
          key: "Grandmother",
          checked: false,
          uri:
            "https://firebasestorage.googleapis.com/v0/b/confess-karo.appspot.com/o/Confess%20Karo%20Images%2FGrandmother.jpg?alt=media&token=d5b3bb16-06fb-4f8d-82f7-5d17bf673f28",
        },
        // {id: 8, key: 'Grandson', checked: false},
        {
          id: 5,
          key: "Grandaughter",
          checked: false,
          uri:
            "https://firebasestorage.googleapis.com/v0/b/confess-karo.appspot.com/o/Confess%20Karo%20Images%2FGranddaughter.jpg?alt=media&token=936a07d8-462c-49c0-9e5f-cece363aa70c",
        },
        // {id: 10, key: 'Son', checked: false},
        {
          id: 6,
          key: "Daughter",
          checked: false,
          uri:
            "https://firebasestorage.googleapis.com/v0/b/confess-karo.appspot.com/o/Confess%20Karo%20Images%2FDaughter.jpg?alt=media&token=25094d8b-d212-43ec-ae25-27f0372d1251",
        },
        {
          id: 7,
          key: "Friend",
          checked: false,
          uri:
            "https://firebasestorage.googleapis.com/v0/b/confess-karo.appspot.com/o/Confess%20Karo%20Images%2FFemaleFriends.jpg?alt=media&token=1ec8b283-d2bd-44f3-bae5-9f43620ca784",
        },
        // {id: 13, key: 'CousinBrother', checked: false},
        {
          id: 8,
          key: "CousinSister",
          checked: false,
          uri:
            "https://firebasestorage.googleapis.com/v0/b/confess-karo.appspot.com/o/Confess%20Karo%20Images%2FGrandChildren.jpg?alt=media&token=c238a698-c36c-4cd7-afb3-c271200e55ed",
        },
        // {id: 15, key: 'Father', checked: false},
        {
          id: 9,
          key: "Mother",
          checked: false,
          uri:
            "https://firebasestorage.googleapis.com/v0/b/confess-karo.appspot.com/o/Confess%20Karo%20Images%2FMother.jpg?alt=media&token=834b546f-cee8-448d-b767-3a322b038e21",
        },
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
    width: 700,
    justifyContent: "flex-start",
    flex: 1,
    alignContent: "space-between",
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
