import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ActivityIndicator,
  FlatList,
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
import HomeFooter from "../../Components/Footer/HomeFooter";
import { ScrollView } from "react-native-gesture-handler";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class MainTag extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      confessions: [],
      limit: 2,
      loadingFooter: true,
      max: 0,
      reachedEnd: false,
      totalLikes: [],
      totalViews: [],
      viewName:this.props.route.params.name,
      views: {},
    };
  }

  componentDidMount(){

    const confession = firebase.firestore().collection("Confessions");
      confession
        .where("To", "array-contains-any", [this.state.viewName])
        .get()
        .then((querySnapshot) => {
          const temp = [];
          querySnapshot.forEach((doc) => {
           temp.push({...doc.data(), key: doc.id, text:this.state.viewName})
         });
         this.setState({views: temp})
        });
    
  }
 
  render() {
    const view = this.state.views;
    // const data = view[0].text;
    return (
      
        <View style={style.main}>
          <Header navigator={this.props.navigation} />
          <ScrollView>
          <BelowHeader navigator={this.props.navigation} />
          <Text style={style.titleTxT}>{this.state.viewName}</Text>
          <View
            style={{
              justifyContent: "center",
              alignItems: "stretch",
              marginVertical: 5,
              padding: 5,
            }}
          >
            <FlatList
              data={this.state.views}
              renderItem={this.renderItem}
              keyExtractor={(item) => item.key}
            />
          </View>
          <HomeFooter navigator={this.props.navigation}/>
          </ScrollView>
        </View>
    );
  }

  renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        console.log(item);
        this.props.navigation.navigate("Confession View", { item });
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
          {item.Confession}
        </Text>

        <FlatList
          style={{
            flex: 1,
          }}
          data={item.To}
          renderItem={this.renderTag}
          horizontal
          keyExtractor={(item) => item.toString()}
        />

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
          <Text>{this.state.totalLikes.length.toString()}</Text>
          <Icon style={style.likeTexts} name="heart"></Icon>
          <Text>{this.state.totalViews.length.toString()}</Text>
          <Icon style={style.likeTexts} name="eye"></Icon>
          <Text>{this.state.totalViews.length.toString()}</Text>
          <Icon style={style.likeTexts} name="paper"></Icon>
        </View>
      </Card>
    </TouchableOpacity>
  );

  renderTag = ({ item }) => (
    <Button
    onPress={()=>{this.onTag()}}
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
          textAlign: "center",
        }}
      >
        {item}
      </Text>
    </Button>
  );

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
            .collection("Confessions")
            .limit(this.state.limit)
            .orderBy("Date", "desc")
            .onSnapshot((querySnapshot) => {
              const confessionTemp = [];

              querySnapshot.forEach((documentSnapshot) => {
                confessionTemp.push({
                  ...documentSnapshot.data(),
                  key: documentSnapshot.id,
                });
              });

              this.setState({ confessions: confessionTemp });
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
  titleTxT: {
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 30,
  },
});
