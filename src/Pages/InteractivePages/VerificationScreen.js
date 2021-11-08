import * as React from "react";
import { View, StyleSheet, Text, Linking } from "react-native";
import * as firebase from "firebase";
import {
  Container,
  Form,
  Input,
  Item,
  Button,
  Content,
  Icon,
} from "native-base";
import firestore from "@react-native-firebase/firestore";
import { NavigationContainer } from "@react-navigation/native";
import HeaderAll from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

export default class VerificationScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      err: "",
      flag: false,
      ver: firebase.auth().currentUser.emailVerified.valueOf(),
    };

    if (firebase.auth().currentUser != null) {
      firebase
        .auth()
        .currentUser.sendEmailVerification()
        .then(() => {
          firebase
            .auth()
            .signOut()
            .then(() => {
              //   console.log("signout");
            })
            .catch((error) => {
              alert("Please go back to Signup, Something went wrong");
            });

          if (this.state.ver == true) {
            console.log("verification true");
            firebase.firestore().collection("Users").add({
              flag: true,
              EmailAdress: firebase.auth().currentUser.email,
            });
            this.props.navigation.navigate("Login");
          } else {
            console.log("not verified");
            console.log(this.state.ver);
          }
          alert("email sent!");
        })
        .catch((error) => {
          alert("Something went wrong please go back to signup page");
        });
    }
  }
  hell() {
    // const data = {
    //     emailV: this.state.email,
    //     passV: this.state.password
    //   }
    const x = this.props.route.params.data;

    return x.emailV.toString();
  }
  checkV() {
    const { emailV, passV } = this.props.route.params.data;

    firebase
      .auth()
      .signInWithEmailAndPassword(emailV, passV)
      .then(() => {
        const data = {
          emailVerified: emailV,
          flag: this.state.flag,
        };
        var user = firebase.auth().currentUser;
        // console.log(firebase.auth().currentUser.emailVerified.valueOf())
        if (firebase.auth().currentUser.emailVerified.valueOf() == true) {
          this.props.navigation.navigate("SignUp2", { data });
        } else {
          this.setState({ err: "Please check your mail again" });
          // console.log(emailV)
          // console.log(firebase.auth().currentUser.emailVerified.valueOf())
        }
      })
      .catch(() => {
        // console.log('nnot here ')
      });

    // this.props.navigation.navigate("DetailSignup", {data})
  }
  onGoBack() {
    const { emailV, passV } = this.props.route.params.data;
    firebase
      .auth()
      .signInWithEmailAndPassword(emailV, passV)
      .then(() => {
        var user = firebase.auth().currentUser;

        user.delete();
        this.props.navigation.goBack();
      })
      .catch(() => {
        alert("Something is wrong with the server Please refresh");
      });
  }

  render() {
    return (
      <Container>
      <HeaderAll />
      <Container style={styles.container}>
        
        <View style={styles.box}>
          <Text style={styles.text}>Verify Your email address</Text>
          <Text style={styles.text1}>Dear {this.hell()}</Text>
          <Text style={styles.text2}>
            We now need to verify your email address. We've sent an email to
            {this.hell()} to verify your address. Please click on the continue
          </Text>
          <Text style={styles.text3}>
            Click on the link below if you have verified yourself
          </Text>
          <Button
            onPress={() => this.checkV()}
            rounded
            full
            style={styles.button}
          >
            <Text style={{ color: "white" }}>Proceed</Text>
          </Button>
          
          
          <Button
            onPress={() => this.onGoBack()}
            rounded
            full
            style={styles.button}
          >
            <Text style={{ color: "white" }}>Go Back</Text>
          </Button>
          <Text style={{ color: "red", padding: 9 }}>{this.state.err}</Text>
        </View>
      </Container>
      <Footer />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontSize: 25,
    color: "#003399",
    fontWeight: "bold",
    textShadowColor: "black",
  },
  box: {
    borderWidth: 2,
    width: "auto",
    marginHorizontal:5,
    height: "auto",
    alignItems: "center",
    borderRadius: 8,
    borderColor: "grey",
    paddingBottom: 10,
  },
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    alignContent: "center",
    paddingTop: 60,
  },
  text1: {
    padding: 4,
    textAlign: "center",
    fontSize: 19,
    color: "black",
    textShadowColor: "black",
  },
  text2: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  text3: {
    padding: 20,
    paddingBottom: 15,
  },
  button: {
    padding: 10,
    borderWidth:1,
    borderColor:"#b3cbe2"
  },
});
