import React from "react";
import { StyleSheet, FlatList, View, Text, Modal, Alert } from "react-native";
import {
  Form,
  Body,
  CardItem,
  Card,
  Button,
  Content,
  Picker,
  Icon,
  Textarea,
} from "native-base";
import Header from "../../Components/Header/Header";
import firebase from "firebase";
import "firebase/firestore";
import { ScrollView } from "react-native-gesture-handler";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  MenuProvider,
} from "react-native-popup-menu";

export default class ConfessionView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
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
          console.log("not here");
        }
      })
      .catch(function (error) {
        console.log("Error getting document:", error);
      });
    setTimeout(() => {
      this.setState({ attributes: a });
    }, 2000);
    const x = firebase.auth().currentUser.uid;
    const data = this.props.route.params.details;
    const key = data.key;

    firebase
      .firestore()
      .collection("Views")
      .doc(key)
      .collection("userViews")
      .doc(x)
      .set({ flag: true })
      .then(() => {
        var view = 0;

        firebase
          .firestore()
          .collection("Views")
          .doc(key)
          .collection("userViews")
          .get()
          .then((snap) => {
            view = snap.size;
            firebase
              .firestore()
              .collection("Confessions")
              .doc(key)
              .update({ Views: view });
          });
      });
  }

  displayModal(show) {
    this.setState({ isVisible: show });
  }

  onValueChange(value) {
    this.setState({
      selected: value,
    });
  }

  onLike() {
    const x = firebase.auth().currentUser.uid;
    const data = this.props.route.params.details;
    const key = data.key;
    const by = data.By;
    const title = data.Title;
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
            firebase
              .firestore()
              .collection("Likes")
              .doc(key)
              .collection("userLike")
              .get()
              .then((snap) => {
                firebase
                  .firestore()
                  .collection("Confessions")
                  .doc(key)
                  .update({ Likes: snap.size });
              });
            console.log("user deleted");
          });
      } else {
        firebase
          .firestore()
          .collection("Likes")
          .doc(key)
          .collection("userLike")
          .doc(x)
          .set({ flag: true })
          .then(() => {
            firebase
              .firestore()
              .collection("Likes")
              .doc(key)
              .collection("userLike")
              .get()
              .then((snap) => {
                firebase
                  .firestore()
                  .collection("Confessions")
                  .doc(key)
                  .update({ Likes: snap.size });

                let notification = {
                  Likes: snap.size,
                  Title: title,
                  Data: data,
                  type: "like",
                  active: true,
                  created: firebase.firestore.Timestamp.now(),
                  navigation: "Confession View",
                };

                firebase
                  .firestore()
                  .collection("Notifications")
                  .doc("userNotification")
                  .collection(by)
                  .doc(key + "l")
                  .set(notification);
              });
          });
        console.log("was here");
      }
    });
  }

  onDelete() {
    const data = this.props.route.params.details;
    const key = data.key;
    firebase.firestore().collection('Confessions').doc(key).delete().then(()=>{
      Alert.alert('Confession deleted successfully')
      this.props.navigation.navigate('Home')
    })
  }

  onUpdate() {
    const data = this.props.route.params.details;
    const key = data.key;
    this.props.navigation.navigate("Update", { key });
  }

  onCmntPost() {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    let empty = "^(?!s*$).+";
    let comment = this.state.comment;
    const data = this.props.route.params.details;
    const key = data.key;
    const by = data.By;
    const title = data.Title;

    if (comment !== "") {
      firebase
        .firestore()
        .collection("Comments")
        .doc(key)
        .collection("Comment")
        .add({
          UserComment: this.state.comment,
          selectedAttribute: this.state.selected,
          Date: "" + year + "/" + month + "/" + date,
          By: firebase.auth().currentUser.uid,
        })
        .then(() => {
          const data = this.props.route.params.details;
          const key = data.key;
          firebase
            .firestore()
            .collection("Comments")
            .doc(key)
            .collection("Comment")
            .get()
            .then((snap) => {
              firebase
                .firestore()
                .collection("Confessions")
                .doc(key)
                .update({ Comments: snap.size });

              let notification = {
                Comments: snap.size,
                Title: title,
                Data: data,
                type: "comment",
                active: true,
                created: firebase.firestore.Timestamp.now(),
                navigation: "Confession View",
              };

              firebase
                .firestore()
                .collection("Notifications")
                .doc("userNotification")
                .collection(by)
                .doc(key + "c")
                .set(notification);
            });
        });
      this.setState({ comment: " " });
    } else {
      this.setState({ err: "Comment can not be empty" });
    }
  }

  componentDidMount() {
    const data = this.props.route.params.details;
    const keys = data.key;
    const by = data.By;

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
        let temp = [];
        querySnapshot.forEach((doc) => {
          temp.push(doc.id);
        });
        this.setState({ totalViews: temp }, () => {
          setTimeout(() => {
            let likeCount = this.state.totalLikes.length;
            let viewCount = this.state.totalViews.length;
            let commentCount = this.state.Ucmnt.length;
            let popularity = likeCount * 2 + viewCount + commentCount * 3;
            firebase
              .firestore()
              .collection("Confessions")
              .doc(keys)
              .update({ Popularity: popularity });
          }, 1000);
        });
      });
  }
  renderTag = ({ item }) => (
    <ScrollView>
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
    </ScrollView>
  );

  render() {
    let totalComments = this.state.Ucmnt.length;

    const data = this.props.route.params.details;
    const by = data.By;

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
          {item.By == by ? (
            <Text style={{ paddingLeft: 3 }}>
              <Icon style={{ padding: 7, fontSize: 20 }} name="person"></Icon>
              Confessor
            </Text>
          ) : null}
          <Text style={{ paddingLeft: 3 }}>
            <Icon style={{ padding: 7, fontSize: 20 }} name="person"></Icon>
            {item.selectedAttribute}
          </Text>
        </CardItem>
      </Card>
    );

    const selectAttributes = (attributes) => {
      let attribute = attributes;
      return attribute.map((i, j) => {
        return <Picker.Item label={i} key={j} value={i} />;
      });
    };
    return (
      <ScrollView>
        <View>
          <Header navigator={this.props.navigation} />
          {/* <Modal
            animationType={"slide"}
            transparent={false}
            visible={this.state.isVisible}
            onRequestClose={() => {
              Alert.alert("Modal has now been closed.");
            }}
          >
            <Text style={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              eget tempus augue, a convallis velit.
            </Text>

            <Text
              style={styles.closeText}
              onPress={() => {
                this.displayModal(!this.state.isVisible);
              }}
            >
              Close Modal
            </Text>
          </Modal> */}
          <View padder>
            <Card>
              <CardItem
                header
                bordered
                style={{ justifyContent: "space-between" }}
              >
                <Text
                  style={{
                    justifyContent: "flex-end",
                    alignItems: "flex-end",
                    fontWeight: "bold",
                  }}
                >
                  {data.Title}
                </Text>
                <View>
                  <MenuProvider style={{ margin: 12 }}>
                    <Menu>
                      <MenuTrigger>
                        <Icon name="person" />
                      </MenuTrigger>
                      <MenuOptions>
                        {data.By == firebase.auth().currentUser.uid ? (
                          <MenuOption
                            onSelect={() => this.onUpdate()}
                            text="Edit"
                          />
                        ) : null}
                        {data.By == firebase.auth().currentUser.uid ? (
                          <MenuOption
                            onSelect={() => this.onDelete()}
                            text="Delete"
                          />
                        ) : null}
                        <MenuOption
                          onSelect={() => {
                            this.displayModal(true);
                          }}
                          text="Report"
                        ></MenuOption>
                      </MenuOptions>
                    </Menu>
                  </MenuProvider>
                </View>
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
              <CardItem footer>
                <FlatList
                  data={data.To}
                  renderItem={this.renderTag}
                  horizontal
                  keyExtractor={(item) => item.toString()}
                />
              </CardItem>
              <CardItem footer bordered>
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
                    <Text style={styles.atttxt}>Select Attribute</Text>
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
      </ScrollView>
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
  container: {
    padding: 25,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    display: "flex",
    height: 60,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#2AC062",
    shadowColor: "#2AC062",
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 10,
      width: 0,
    },
    shadowRadius: 25,
  },
  closeButton: {
    display: "flex",
    height: 60,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF3974",
    shadowColor: "#2AC062",
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 10,
      width: 0,
    },
    shadowRadius: 25,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 22,
  },
  image: {
    marginTop: 150,
    marginBottom: 10,
    width: "100%",
    height: 350,
  },
  text: {
    fontSize: 24,
    marginBottom: 30,
    padding: 40,
  },
  closeText: {
    fontSize: 24,
    color: "#00479e",
    textAlign: "center",
  },
});
