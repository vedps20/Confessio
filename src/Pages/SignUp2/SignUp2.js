import React from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  ImageBackground,
  FlatList,
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
import { CheckBox } from "react-native-elements";
import {
  TextInput,
  TouchableOpacity,
  
  ScrollView,
} from "react-native-gesture-handler";
import firebase  from 'firebase';
import 'firebase/firestore';
import Footer from '../../Components/Footer/Footer'
import HeaderAll from "../../Components/Header/Header";

export default class Signup2 extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          id: 1,
          key: "Uncle",
          checked: false,
          uri:
            "https://firebasestorage.googleapis.com/v0/b/confess-karo.appspot.com/o/Confess%20Karo%20Images%2FUncle.jpg?alt=media&token=c7245044-1fac-4910-b9f6-421ec5abc3cc",
        },

        {
          id: 2,
          key: "Boyfriend",
          checked: false,
          uri:
            "https://firebasestorage.googleapis.com/v0/b/confess-karo.appspot.com/o/Confess%20Karo%20Images%2FBoyFriend.jpg?alt=media&token=a9660a77-4b17-4b33-a724-1b5f0d0b2a4a",
        },

        {
          id: 3,
          key: "Brother",
          checked: false,
          uri:
            "https://firebasestorage.googleapis.com/v0/b/confess-karo.appspot.com/o/Confess%20Karo%20Images%2FBrother.jpg?alt=media&token=2e3c4d97-31fb-4826-973b-cc7a137b2188",
        },

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

        {
          id: 6,
          key: "Son",
          checked: false,
          uri:
            "https://firebasestorage.googleapis.com/v0/b/confess-karo.appspot.com/o/Confess%20Karo%20Images%2FCousionBrother.jpg?alt=media&token=23191f85-04d7-4301-819d-d186fd79edca",
        },

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

        {
          id: 9,
          key: "Father",
          checked: false,
          uri:
            "https://firebasestorage.googleapis.com/v0/b/confess-karo.appspot.com/o/Confess%20Karo%20Images%2FFather.jpg?alt=media&token=3665c9a5-e302-47d7-a108-7e47319ee483",
        },
      ],
      dataF: [
        {
          id: 10,
          key: "Aunt",
          checked: false,
          uri:
            "https://firebasestorage.googleapis.com/v0/b/confess-karo.appspot.com/o/Confess%20Karo%20Images%2FAunt.jpg?alt=media&token=ed4e1e91-01ef-4efe-b59a-0bc22770c95d",
        },

        {
          id: 11,
          key: "Girlfriend",
          checked: false,
          uri:
            "https://firebasestorage.googleapis.com/v0/b/confess-karo.appspot.com/o/Confess%20Karo%20Images%2FBoyFriend.jpg?alt=media&token=a9660a77-4b17-4b33-a724-1b5f0d0b2a4a",
        },

        {
          id: 12,
          key: "Sister",
          checked: false,
          uri:
            "https://firebasestorage.googleapis.com/v0/b/confess-karo.appspot.com/o/Confess%20Karo%20Images%2FSister.jpg?alt=media&token=c27c9bd8-0a23-47d2-ac20-2b14dbb850a2",
        },
        {
          id: 13,
          key: "Grandmother",
          checked: false,
          uri:
            "https://firebasestorage.googleapis.com/v0/b/confess-karo.appspot.com/o/Confess%20Karo%20Images%2FGrandmother.jpg?alt=media&token=d5b3bb16-06fb-4f8d-82f7-5d17bf673f28",
        },

        {
          id: 14,
          key: "Grandaughter",
          checked: false,
          uri:
            "https://firebasestorage.googleapis.com/v0/b/confess-karo.appspot.com/o/Confess%20Karo%20Images%2FGranddaughter.jpg?alt=media&token=936a07d8-462c-49c0-9e5f-cece363aa70c",
        },

        {
          id: 15,
          key: "Daughter",
          checked: false,
          uri:
            "https://firebasestorage.googleapis.com/v0/b/confess-karo.appspot.com/o/Confess%20Karo%20Images%2FDaughter.jpg?alt=media&token=25094d8b-d212-43ec-ae25-27f0372d1251",
        },
        {
          id: 16,
          key: "Friend",
          checked: false,
          uri:
            "https://firebasestorage.googleapis.com/v0/b/confess-karo.appspot.com/o/Confess%20Karo%20Images%2FFemaleFriends.jpg?alt=media&token=1ec8b283-d2bd-44f3-bae5-9f43620ca784",
        },

        {
          id: 17,
          key: "CousinSister",
          checked: false,
          uri:
            "https://firebasestorage.googleapis.com/v0/b/confess-karo.appspot.com/o/Confess%20Karo%20Images%2FGrandChildren.jpg?alt=media&token=c238a698-c36c-4cd7-afb3-c271200e55ed",
        },

        {
          id: 18,
          key: "Mother",
          checked: false,
          uri:
            "https://firebasestorage.googleapis.com/v0/b/confess-karo.appspot.com/o/Confess%20Karo%20Images%2FMother.jpg?alt=media&token=834b546f-cee8-448d-b767-3a322b038e21",
        },
      ],
      radioItem: [
        { label: "Female", value: "female" },
        { label: "Male", value: "male" },
      ],
      radioValue: "female",
      name: "",
      dob: "",
      errName: "",
      errDob: "",
      err: "",
    };
    // console.log(this.props.route.data.emailV)
  }

  onCheckChanged(id, state) {
    if (state === "male") {
      const data = this.state.data;
      const index = data.findIndex((x) => x.id === id);
      data[index].checked = !data[index].checked;
      this.setState({ data: data });
      const item = this.state.data.filter((datas) => datas.checked);

      console.log(item);
    } else if (state === "female") {
      const dataF = this.state.dataF;
      const index = dataF.findIndex((x) => x.id === id);
      dataF[index].checked = !dataF[index].checked;
      this.setState({ dataF: dataF });
    }
  }

  renderItem = ({ item, key }) => (
    <TouchableOpacity
      style={styles.apple}
      onPress={() => {
        const state = this.state.radioValue;

        this.onCheckChanged(item.id, state);
      }}
    >
      <ImageBackground style={styles.image} source={{ uri: item.uri }}>
        <CheckBox
          style={styles.check}
          title={item.key}
          key={key}
          checked={item.checked}
        />
      </ImageBackground>
    </TouchableOpacity>
  );

  roleScreen() {
    if (this.state.radioValue === "male") {
      return (
        <View style={{
          flex:1,
          alignItems:'center',
          justifyContent:'center'
        }}>
        <FlatList
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.key}
          numColumns={2}
        />
        </View>
      );
    } else if (this.state.radioValue === "female") {
      return (
        <View style={{
          flex:1,
          alignItems:'center',
          justifyContent:'center'
        }}>
        <FlatList
          style={{
            flex:1,
          }}
          data={this.state.dataF}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.key}
          numColumns={2}
        />
        
          </View>
      );
    }
  }

  Validator = () => {
    let special = "(?=.[!@#$%^&*])";
    let empty = "/^(\w+\S+)/";
    let dobreg = "^(3[01]|[12][0-9]|0[1-9])/(1[0-2]|0[1-9])/[0-9]{4}$";
    let nameV = this.state.name;
    let dobV = this.state.dob;

    if (nameV === "") {
      this.setState({ errName: "Name cannot be empty" });
    } else {
      this.setState({ errName: "Successfully Validated" });
    }
    if (dobV.match(dobreg)) {
      this.setState({ errDob: "Successfully Validated" });
    } else {
      this.setState({ errDob: "Please write your D.O.B in dd/mm/yyyy format" });
    }
  };

  onSubmit() {
    const nameV = this.state.name;
    const item = this.state.data.filter((datas) => datas.checked);
    const keys = item.map((b) => b.key);
    const items = this.state.dataF.filter((datas) => datas.checked);
    const keyss = items.map((b) => b.key);
    if (keys.length == 0 && keyss.length == 0 && nameV === "") {
      this.setState({ err: "Make sure you have selected at least one role and filled all fields correctly" });
    } else {
      const gender = this.state.radioValue;

      if (this.state.radioValue === "male") {
        const { emailVerified } = this.props.route.params.data;

        firebase
          .firestore()
          .collection("Users")
          .doc(firebase.auth().currentUser.uid)
          .set({
            fullName: this.state.name,
            flag: true,
            dateOfBirth: this.state.dob,
            email: emailVerified,
            gender: gender,
            Attributes: keys,
          })
          .then(() => {
            this.props.navigation.navigate("Home");
          })
          .catch(() => {});
      } else {
        this.setState(() => {
          !this.state.flag;
        });
        const { emailVerified } = this.props.route.params.data;

        firebase
          .firestore()
          .collection("Users")
          .doc(firebase.auth().currentUser.uid)
          .set({
            fullName: this.state.name,
            flag: true,
            dateOfBirth: this.state.dob,
            email: emailVerified,
            gender: gender,
            Attributes: keyss,
          })
          .then(() => {
            this.props.navigation.navigate("Home");
          })
          .catch(() => {});
      }
    }
  }

  render() {
    return (
      <ScrollView>
      
        <HeaderAll navigator={this.props.navigation}/>
        <View>
          <View>
            <Text style={styles.text1}>You're Almost done here</Text>
            <Text style={{
              textAlign:'center',
              marginHorizontal:10,
            }}>
              Tell us a little more about yourself so that you can make your
              confession specifically.{"\n"}
              {"\n"}
              "We won’t display this we are taking this only for our security
              purposes"
            </Text>
          </View>
          <View>
            <Form style={{
              paddingHorizontal:10,
            }}>
              <Item
                success={this.state.errName == "Successfully Validated"}
                style={{ padding: 10, borderRadius: 20 }}
              >
                <Icon name="person" />
                <Input
                  required
                  value={this.state.name}
                  onBlur={() => this.Validator()}
                  onChangeText={(name) => this.setState({ name })}
                  placeholder="Enter your Name"
                />
                <Icon name="checkmark-circle" />
              </Item>
              <Text
                style={{
                  color:
                    this.state.errName == "Successfully Validated"
                      ? "green"
                      : "red",
                }}
              >
                {this.state.errName}
              </Text>
              <Item
                success={this.state.errDob == "Successfully Validated"}
                style={{ padding: 10, borderRadius: 20 }}
              >
                <Icon name="calendar" />
                <Input
                  required
                  value={this.state.dob}
                  onBlur={() => this.Validator()}
                  onChangeText={(dob) => this.setState({ dob })}
                  placeholder="Date of Birth - DD/MM/YYYY"
                />
                <Icon name="checkmark-circle" />
              </Item>
              <Text
                style={{
                  color:
                    this.state.errDob == "Successfully Validated"
                      ? "green"
                      : "red",
                }}
              >
                {this.state.errDob}
              </Text>
              <View
              style={{
                paddingHorizontal:10,
              }}>
              {this.state.radioItem.map((data, key) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({ radioValue: data.value });
                      console.log(data.value);
                    }}
                  >
                    <ListItem key={key}>
                      <Left>
                        <Text>{data.label}</Text>
                      </Left>
                      <Right>
                        <Radio
                          color={"gray"}
                          selectedColor={"green"}
                          selected={data.value === this.state.radioValue}
                        />
                      </Right>
                    </ListItem>
                  </TouchableOpacity>
                );
              })}
              </View>
            </Form>
          </View>
          {/* attributes */}
        </View>
        <View
          style={{
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <View style={{ marginBottom:40 ,marginTop:50,}}>
            <Text style={styles.text1}>
              Roles you play in your personal life
            </Text>
          </View>
            {this.roleScreen()}
            <View>
        <View >
            <Button
              onPress={() => {
                this.onSubmit();
              }}
              style={styles.but2}
              outlined
              full
              primary
            >
              <Text
                style={{
                  color: "white",
                  letterSpacing: 2,
                  textAlign: "center",
                }}
              >
                Submit Details
              </Text>
            </Button>
          </View>
          <Text
            style={{
              color:
                this.state.err == "Successfully Validated" ? "green" : "red",
            }}
          >
            {this.state.err}
          </Text>
          </View>

          
        </View>
        <Footer />
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  text1: {
    padding: 4,
    margin:12,
    textAlign: "center",
    fontSize: 19,
    color: "#003399",
    fontWeight: "bold",
    fontSize: 25,
  },
  but2: {
    alignItems: "center", 
    paddingHorizontal:40,
    marginVertical: 7,
    borderRadius: 20,
    justifyContent: "center",
    backgroundColor: "#3949ab",
  },
  image: {
    height:160,
    width:160,
    margin:10,
    justifyContent: "flex-end",
    borderRadius: 20,
    overflow: "hidden",
    borderColor: "black",
    shadowOpacity: 1,
    shadowColor: "black",
    shadowRadius: 10,
  },
});
