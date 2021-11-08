import * as React from "react";
import { StyleSheet, View } from "react-native";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Middle from "./Middle";


export default class Home extends React.Component {
  render() {
    return (
      <View style={style.main}>
        {/* <Header navigator={this.props.navigation} /> */}
        <Middle navigator={this.props.navigation} />
        <Footer />
      </View>
    );
  }
}

const style = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch",
  },
  headerField: {
    flex: 4,
    shadowRadius: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingEnd: 10,
    paddingStart: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#3949ab",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 20,
    alignItems: "center",
  },
  middle: {
    flex: 8,
  },

  toolbar: {
    position: "relative",
    alignSelf: "flex-end",
    alignItems: "flex-end",
    height: 30,
    width: 30,
    backgroundColor: "tomato",
  },

  buttons: {
    width: 300,
    height: 60,
  },
});
