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

export default class ButtonsFemale extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            data: [],
            selectedText: '',
            buttons: [
                {
                    text: "GirlFriend",
                    uri:
                      "https://firebasestorage.googleapis.com/v0/b/confess-karo.appspot.com/o/Confess%20Karo%20Images%2Flover.png?alt=media&token=348c1f15-cddb-49a0-8cf6-12cc5c974e1c",
                  },
                  {
                    text: "Aunt",
                    uri:
                      "https://firebasestorage.googleapis.com/v0/b/confess-karo.appspot.com/o/Confess%20Karo%20Images%2Faunt.png?alt=media&token=6a9cf443-7f7e-416c-8f88-1c5f76b44d1d",
                  },
                  {
                    text: "Wife",
                    uri:
                      "https://firebasestorage.googleapis.com/v0/b/confess-karo.appspot.com/o/Confess%20Karo%20Images%2Fmarried.png?alt=media&token=c4c15adf-218a-41ff-944e-354e0f75fef3",
                  },
                  {
                    text: "Sister",
                    uri:
                      "https://firebasestorage.googleapis.com/v0/b/confess-karo.appspot.com/o/Confess%20Karo%20Images%2Fgirl.png?alt=media&token=f2af4041-884d-4294-aad1-c8745deb1fb0",
                  },
                  {
                    text: "Mother",
                    uri:
                      "https://firebasestorage.googleapis.com/v0/b/confess-karo.appspot.com/o/Confess%20Karo%20Images%2Fmother.png?alt=media&token=6550924d-bcf0-4ccd-861b-9bbb9ce96d55",
                  },
                  {
                    text: "Daughter",
                    uri:
                      "https://firebasestorage.googleapis.com/v0/b/confess-karo.appspot.com/o/Confess%20Karo%20Images%2Fdaughter.png?alt=media&token=77d78a7f-7c71-4904-8e92-4a6dcb45afdf",
                  },
                  {
                    text: "GrandMother",
                    uri:
                      "https://firebasestorage.googleapis.com/v0/b/confess-karo.appspot.com/o/Confess%20Karo%20Images%2Fgrandmother.png?alt=media&token=f537c705-a929-4936-b4e2-185652555a23",
                  },
                  {
                    text: "Friends",
                    uri:
                      "https://firebasestorage.googleapis.com/v0/b/confess-karo.appspot.com/o/Confess%20Karo%20Images%2Ffriends.png?alt=media&token=620ae4d1-2644-457e-b20d-3853f6699a22",
                  },
                  {
                    text: "GrandDaughter",
                    uri:
                      "https://firebasestorage.googleapis.com/v0/b/confess-karo.appspot.com/o/Confess%20Karo%20Images%2Fgranddaughter.png?alt=media&token=f7ad1d09-0f3d-4cf3-a1c3-304f6a8a800a",
                  },
            ]
        }
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
        <Button onPress={()=>{this.tagList(b.text)}} style={styles.button} transparent>
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
