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

export default class ButtonsMale extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      buttons: [
        {
          text: "BoyFriend",
          uri:
            "https://firebasestorage.googleapis.com/v0/b/confess-karo.appspot.com/o/Confess%20Karo%20Images%2Flover.png?alt=media&token=348c1f15-cddb-49a0-8cf6-12cc5c974e1c",
        },
        {
          text: "Uncle",
          uri:
            "https://firebasestorage.googleapis.com/v0/b/confess-karo.appspot.com/o/Confess%20Karo%20Images%2Funcle.png?alt=media&token=ed4fbc88-f657-44aa-b57d-d41267f16c09",
        },
        {
          text: "Husband",
          uri:
            "https://firebasestorage.googleapis.com/v0/b/confess-karo.appspot.com/o/Confess%20Karo%20Images%2Fmarried.png?alt=media&token=c4c15adf-218a-41ff-944e-354e0f75fef3",
        },
        {
          text: "Brother",
          uri:
            "https://firebasestorage.googleapis.com/v0/b/confess-karo.appspot.com/o/Confess%20Karo%20Images%2Fbrother.png?alt=media&token=97d3947e-d670-4fda-b993-f6b0d94c8a2e",
        },
        {
          text: "Father",
          uri:
            "https://firebasestorage.googleapis.com/v0/b/confess-karo.appspot.com/o/Confess%20Karo%20Images%2Fdad.png?alt=media&token=524624d0-1960-486e-bea4-66b064254ad1",
        },
        {
          text: "Son",
          uri:
            "https://firebasestorage.googleapis.com/v0/b/confess-karo.appspot.com/o/Confess%20Karo%20Images%2Fson.png?alt=media&token=b01327ed-85eb-4b41-a979-32ede2da3248",
        },
        {
          text: "GrandFather",
          uri:
            "https://firebasestorage.googleapis.com/v0/b/confess-karo.appspot.com/o/Confess%20Karo%20Images%2Fold-man.png?alt=media&token=38c06778-792d-4c27-8676-b805c1a06821",
        },
        {
          text: "Friends",
          uri:
            "https://firebasestorage.googleapis.com/v0/b/confess-karo.appspot.com/o/Confess%20Karo%20Images%2Ffriends.png?alt=media&token=620ae4d1-2644-457e-b20d-3853f6699a22",
        },
        {
          text: "GrandChildren",
          uri:
            "https://firebasestorage.googleapis.com/v0/b/confess-karo.appspot.com/o/Confess%20Karo%20Images%2Fgrandson.png?alt=media&token=4f1c1bee-626c-4d09-b44f-965214356dfe",
        },
      ],
    };
  }

  tagList(text) {
    if (text) {
      let name = text;
      this.props.navigator.navigate('Main Tag',{name}) 
    } else {console.log('cant navigate')}
  }

  render() {
    const renderedButtons = this.state.buttons.map((b) => {
      return (
        <Button
          onPress={() => {
            this.tagList(b.text);
          }}
          style={styles.button}
          transparent
        >
          <Text style={styles.text}>{b.text}</Text>
          <Image style={styles.image} source={{ uri: b.uri }}></Image>
        </Button>
      );
    });
    return <View>{renderedButtons}</View>;
  }
}
const styles = StyleSheet.create({
  button: {
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  image: {
    height: 35,
    width: 35,
    resizeMode: "contain",
    marginHorizontal: 10,
  },
});
