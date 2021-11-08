import * as React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { Button, Icon, ListItem, Item, Card } from "native-base";

import HeaderWithDrawer from "../Home/Components/headerWithDrawer";
import HomeFooter from "../Home/Components/homeFooter";

import BelowHeader from "../../Main/Home/Components/belowHeader";

import firebase from "firebase";
import "firebase/firestore";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class InspirationalStory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      stories: [],
      limit: 2,
      loadingFooter: true,
      max: 0,
      reachedEnd: false,
    };
  }

  componentDidMount() {
    this.setState({ loadingFooter: false });

    firebase
      .firestore()
      .collection("Inspirational Stories")
      .get()
      .then((snap) => {
        this.setState({ max: snap.size }, () => {
          if (this.state.limit >= this.state.max) {
            this.setState({ reachedEnd: true });
          }

          const story = firebase
            .firestore()
            .collection("Inspirational Stories")
            .limit(
              this.state.limit <= this.state.max
                ? this.state.limit
                : this.state.max
            )
            .orderBy("Date", "desc")
            .onSnapshot((querySnapshot) => {
              const storyTemp = [];

              querySnapshot.forEach((documentSnapshot) => {
                storyTemp.push({
                  ...documentSnapshot.data(),
                  key: documentSnapshot.id,
                });
              });

              this.setState({ stories: storyTemp });
              this.setState({ loading: false });
            });
          return () => story;
        });
      });
  }

  render() {
    if (this.state.loading) {
      return (
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: 100,
          }}
        >
          <ActivityIndicator />
          <Text style={{ textAlign: "center", letterSpacing: 2, margin: 40 }}>
            Please wait, Stories are loading...
          </Text>
        </View>
      );
    } else {
      return (
        <ScrollView>
          <View style={style.main}>
            <HeaderWithDrawer navigator={this.props.navigation} />
            <BelowHeader navigator={this.props.navigation} />
            <View
              style={{
                justifyContent: "center",
                alignItems: "stretch",
                marginVertical: 5,
                padding: 5,
              }}
            >
              <FlatList
                data={this.state.stories}
                renderItem={this.renderItem}
                keyExtractor={(item) => item.key}
                ListFooterComponent={this.renderFooter}
              />
            </View>
            <HomeFooter />
          </View>
        </ScrollView>
      );
    }
  }

  renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        console.log(item);
        this.props.navigation.navigate("InspirationView", { item });
      }}
    >
      <Card
        style={{
          flex: 1,
          marginTop: 10,
          margin: 2,
          padding: 10,
          borderRadius: 5,
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 16,
            marginLeft: 7,
            marginBottom: 10,
            letterSpacing: 1,
          }}
        >
          {item.Title}
        </Text>

        <View
          style={{
            flexDirection: "row",
            marginBottom: 25,
            marginHorizontal: 3,
          }}
        >
          <Icon style={{ fontSize: 20 }} name="calendar"></Icon>
          <Text style={{ marginHorizontal: 5 }}>{item.Date}</Text>
        </View>

        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={{
            fontSize: 16,
            letterSpacing: 1,
            marginBottom: 30,
          }}
        >
          {item.Story}
        </Text>

        <View
          style={{
            borderBottomWidth: 1,
            borderColor: "#000",
            marginHorizontal: 6,
            marginVertical: 13,
          }}
        />

        <View
          style={{
            flexDirection: "row",
            marginLeft: 5,
            marginTop: 10,
          }}
        >
          <Text>10</Text>
          <Icon style={style.likeTexts} name="heart"></Icon>
          <Text>0</Text>
          <Icon style={style.likeTexts} name="eye"></Icon>
          <Text>0</Text>
          <Icon style={style.likeTexts} name="paper"></Icon>
        </View>
      </Card>
    </TouchableOpacity>
  );

  renderFooter = () => {
    if (this.state.reachedEnd) {
      return (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginHorizontal: 5,
          }}
        >
          <View
            style={{
              height: 1,
              backgroundColor: "#000",
              flex: 1,
            }}
          />
          <Text
            style={{
              textAlign: "center",
              letterSpacing: 2,
              margin: 40,
            }}
          >
            Reached End
          </Text>
          <View
            style={{
              height: 1,
              backgroundColor: "#000",
              flex: 1,
            }}
          />
        </View>
      );
    } else if (this.state.loadingFooter == true) {
      return (
        <View
          style={{ alignItems: "center", justifyContent: "center", margin: 20 }}
        >
          <ActivityIndicator />
          <Text style={{ textAlign: "center", letterSpacing: 2, margin: 40 }}>
            getting more for you...
          </Text>
        </View>
      );
    } else {
      return (
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            margin: 20,
          }}
        >
          <Button
            style={{
              paddingHorizontal: 10,
            }}
            onPress={this.loadMore}
          >
            <Text
              style={{
                color: "#fff",
                marginHorizontal: 10,
                textAlign: "center",
              }}
            >
              Load More
            </Text>
          </Button>
        </View>
      );
    }
  };

  loadMore = () => {
    let newLimit = this.state.limit;
    newLimit = newLimit + 2;

    this.setState({ loadingFooter: true });

    this.setState({ loadingFooter: true }, () => {
      if (this.state.limit >= this.state.max) {
        this.setState({ reachedEnd: true });
      }

      this.setState(
        { limit: newLimit < this.state.max ? newLimit : this.state.max },
        () => {
          firebase
            .firestore()
            .collection("Inspirational Stories")
            .limit(this.state.limit)
            .orderBy("Date", "desc")
            .onSnapshot((querySnapshot) => {
              const storyTemp = [];

              querySnapshot.forEach((documentSnapshot) => {
                storyTemp.push({
                  ...documentSnapshot.data(),
                  key: documentSnapshot.id,
                });
              });

              this.setState({ stories: storyTemp });
              this.setState({ loadingFooter: false });
            });
        }
      );
    });
  };
}

const style = StyleSheet.create({
  main: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch",
    backgroundColor: "#fff",
  },
  belowHeader: {
    shadowRadius: 2,
    backgroundColor: "#f5f5f5",
    marginBottom: 5,
  },
  view1: {
    flexWrap: "wrap",
    marginTop: 15,
    marginHorizontal: 5,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  view2: {
    flexWrap: "wrap",
    marginTop: 7,
    paddingBottom: 5,
    marginHorizontal: 5,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  buttonHeader: {
    flexWrap: "wrap",
    flex: 1,
    margin: 5,
    borderRadius: 5,
    paddingHorizontal: 5,
  },
  headerButtonText: {
    textAlign: "center",
    letterSpacing: 1,
    marginLeft: 5,
  },
  confession: {
    margin: 5,
    borderRadius: 3,
    alignItems: "center",
    justifyContent: "center",
    shadowRadius: 3,
  },
  likeTexts: {
    fontSize: 20,
    marginHorizontal: 7,
    marginRight: 15,
    marginBottom: 10,
  },
});
