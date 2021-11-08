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
  TouchableHighlightBase,
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
import Header from "../../Components/Header/Header";
import * as firebase from "firebase";
import firestore from "@react-native-firebase/firestore";
import HeaderAll from "../../Components/Header/headerAll";
import Footer from "../../Components/Footer/Footer";
import TextareaAutosize from "react-textarea-autosize";
import { cos } from "react-native-reanimated";

export default class ConfessionView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      comment: "",
      attributes: [],
      selected: "Selected",
      date: "",
      Ucmnt: [],
      likes: 0,
      err: "",
      totalLikes: [],
      confessionId: "",
      totalViews: [],
    };
   
    var a = [];
    firebase
      .firestore()
      .collection("Users")
      .doc(firebase.auth().currentUser.uid)
      .get()
      .then((doc) => {
        if (doc.exists) {
          a = doc.data().Attributes;
        } else {
          // console.log("not here");
        }
      })
      .catch(function (error) {
        // console.log("Error getting document:", error);
      });
    setTimeout(() => {
      this.setState({ attributes: a });
    }, 2000);
    const x = firebase.auth().currentUser.uid;
    const data = this.props.route.params.item;
    // console.log(data)
    const userss = data.By
    console.log('here'+userss)
    const key = data.key;

    firebase
      .firestore()
      .collection("Views")
      .doc(key)
      .collection("userViews")
      .doc(x)
      .set({ flag: true });
  }

  onValueChange(value) {
    this.setState({
      selected: value,
    });
  }

  onLike() {
    const x = firebase.auth().currentUser.uid;
    const data = this.props.route.params.item;
    const key = data.key;
    const likeRef = firebase
      .firestore()
      .collection("Likes")
      .doc(key)
      .collection("userLike")
      .doc(x);
    likeRef.get().then((docSnapshot) => {
      if (docSnapshot.exists) {
        firebase
          .firestore()
          .collection("Likes")
          .doc(key)
          .collection("userLike")
          .doc(x)
          .delete()
          .then(() => {
            // console.log("user deleted");
          });
      } else {
        firebase
          .firestore()
          .collection("Likes")
          .doc(key)
          .collection("userLike")
          .doc(x)
          .set({ flag: true });
        // console.log("was here");
      }
    });
  }
  onCmntPost() {

    
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    let empty = "^(?!\s*$).+"
    let comment = this.state.comment.toString()
    const data = this.props.route.params.item;
    const key = data.key;
    
    
    if (comment.match(empty)) {
     
      firebase
      .firestore()
      .collection("Comments")
      .doc(key)
      .collection("Comment")
      .add({
        UserComment: this.state.comment,
        selectedAttribute: this.state.selected,
        Date: "" + year + "/" + month + "/" + date,
        User: firebase.auth().currentUser
      });
    this.setState({ comment: " " });
      
    } else {
      this.setState({ err: "Comment can not be empty" });
    }
  }



  componentDidMount() {
    const data = this.props.route.params.item;
    const keys = data.key;
    firebase
      .firestore()
      .collection("Comments")
      .doc(keys)
      .collection("Comment")
      .onSnapshot((querySnapshot) => {
        const temp = [];
        querySnapshot.forEach((documentSnapshot) => {
          temp.push({ ...documentSnapshot.data(), key: documentSnapshot.id });
        });
        this.setState({ Ucmnt: temp });
      });

    firebase
      .firestore()
      .collection("Likes")
      .doc(keys)
      .collection("userLike")
      .onSnapshot((querySnapshot) => {
        const temp = [];
        querySnapshot.forEach((doc) => {
          temp.push(doc.id);
          this.setState({ totalLikes: temp });
        });
      
      });
    firebase
      .firestore()
      .collection("Views")
      .doc(keys)
      .collection("userViews")
      .onSnapshot((querySnapshot) => {
        const temp = [];
        querySnapshot.forEach((doc) => {
          temp.push(doc.id);
          this.setState({ totalViews: temp });
        });
      });
  }
  renderTag = ({ item }) => (
    <Button
      style={{
        margin: 5,
        padding: 5,
        height: 25,
        paddingHorizontal: 8,
        backgroundColor: "#343a40",
        borderRadius: 5,
      }}
    >
      <Text
        style={{
          color: "#fff",
         
        }}
      >
        {item}
      </Text>
    </Button>
  );
  render() {
    
    const likes = this.state.totalLikes.length.toString()

    let totalComments = this.state.Ucmnt.length;

    const data = this.props.route.params.item;

    const renderItem = ({ item }) => (
      <Card>
        <CardItem bordered>
          <Body>
            <Text>{item.UserComment}</Text>
          </Body>
        </CardItem>
        <CardItem
          style={{
            borderTopWidth: 1,
            borderColor: "black",
            justifyContent: "space-between",
          }}
          footer
          bordered
        >
          <Text style={{ paddingLeft: 3 }}>
            <Icon style={{ padding: 7, fontSize: 20 }} name="calendar"></Icon>
            {item.Date}
          </Text>
          <Text style={{ paddingLeft: 3 }}>
            <Icon style={{ padding: 7, fontSize: 20 }} name="person"></Icon>
            {item.selectedAttribute}
          </Text>
        </CardItem>
      </Card>
    );

    const selectAttributes = (attributes) => {
      let attribute = attributes;
      // console.log(attribute)
      return attribute.map((i, j) => {
        return <Picker.Item label={i} key={j} value={i} />;
      });
    };
    return (
      <View>
        <Header />

        <View padder>
          <Card>
            <CardItem header style={{ justifyContent: "space-between" }}>
              <Text
                style={{
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                  fontWeight: "bold",
                }}
              >
                {data.Title}
              </Text>
            </CardItem>
            <View
              style={{
                flexDirection: "row",
                marginHorizontal: 3,
                paddingLeft: 12,
              }}
            >
              <Icon style={{ fontSize: 20 }} name="calendar"></Icon>
              <Text style={{ marginHorizontal: 1 }}>{data.Date}</Text>
            </View>
            <CardItem bordered>
              <Body>
                <Text>{data.Confession}</Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <FlatList
                data={data.To}
                renderItem={this.renderTag}
                horizontal  
                keyExtractor={(item) => item.toString()}
              />
              <View
                style={{
                  flexDirection: "row",
                  marginLeft: 5,
                  marginTop: 10,
                }}
              >
                <Text>{this.state.totalLikes.length.toString()}</Text>
                <Icon
                  onPress={() => this.onLike()}
                  style={styles.likeTexts}
                  name="heart"
                ></Icon>
                <Text>{this.state.totalViews.length.toString()}</Text>
                <Icon style={styles.likeTexts} name="eye"></Icon>
                <Text>{totalComments}</Text>
                <Icon style={styles.likeTexts} name="paper"></Icon>
              </View>
            </CardItem>
          </Card>
          <Text style={styles.cmnttxt}>Your Comment</Text>
          <View>
            <View>
              <Form>
                <View style={styles.txtarea}>
                  <Textarea
                    rowSpan={5}
                    bordered
                    placeholder="Your Message"
                    value={this.state.comment}
                    onChangeText={(text) => this.setState({ comment: text })}
                  />
                  <Text style={{ color: "red" }}>{this.state.err}</Text>
                </View>
                <View>
                  <Text style={styles.atttxt}>
                    Select Attribute
                    <View style={{ paddingLeft: 12, paddingTop: 3 }}>
                      <Picker
                        note
                        mode="dropdown"
                        style={{ width: 120 }}
                        value={this.state.selected}
                        onValueChange={this.onValueChange.bind(this)}
                      >
                        <Picker.Item label="Select" value="Select" />
                        {selectAttributes(this.state.attributes)}
                      </Picker>
                    </View>
                    <View style={styles.Button}>
                      <Button
                        style={{
                          height: null,
                          width: 50,
                          backgroundColor: "#75E6DA",
                          justifyContent: "center",
                        }}
                        onPress={() => this.onCmntPost()}
                      >
                        <Text style={{ color: "white" }}>Post</Text>
                      </Button>
                    </View>
                  </Text>
                  <View></View>
                </View>
              </Form>
            </View>
          </View>
          <Text style={styles.cmntalltxt}>Comments</Text>
          <View>
            <Content>
              <FlatList
                data={this.state.Ucmnt}
                keyExtractor={(item) => {
                  item.toString();
                }}
                renderItem={renderItem}
              />
            </Content>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header1: {
    backgroundColor: "grey",
  },
  popup: {
    borderWidth: 1,
  },
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: 50,
    backgroundColor: "#ecf0f1",
  },
  cmnttxt: {
    padding: 10,
    fontWeight: "bold",
    fontSize: 17,
  },
  txtarea: {
    paddingLeft: 5,
    width: "auto",
  },
  atttxt: {
    paddingTop: 12,
    paddingLeft: 10,
    fontSize: 16,
    fontWeight: "450",
  },
  Button: {
    paddingLeft: 20,
  },
  cmntalltxt: {
    fontSize: 25,
    padding: 10,
    paddingLeft: 6,
    fontWeight: "bold",
  },
  likeTexts: {
    fontSize: 20,
    marginHorizontal: 7,
    marginRight: 15,
    marginBottom: 10,
  },
});
