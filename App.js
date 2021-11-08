import * as React from "react";
import { StyleSheet, View, Text, Image, SafeAreaView } from "react-native";


import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator } from '@react-navigation/stack';
import {createDrawerNavigator } from '@react-navigation/drawer';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import IndexPage from './src/Pages/Index/IndexPage';
import About from './src/Pages/About/About';
import ContactUs from './src/Pages/ContactUs/ContactUs';
import Disclaimer from './src/Pages/Disclaimer/Disclaimer';
import TermsAndConditions from './src/Pages/TermsAndConditions/TermsAndConditions';
import PrivacyPolicy from './src/Pages/PrivacyPolicy/PrivacyPolicy';
import LogIn from './src/Pages/Login/Login';
import SignUp from './src/Pages/SignUp/SignUp';
import SignUp2  from './src/Pages/SignUp2/SignUp2';
import EmailVerification from './src/Pages/InteractivePages/VerificationScreen';
import Home from './src/Pages/Home/Home';
import InspirationalStory from './src/Pages/InspirationalStory/InspirationalStory';
import ContactUsHome from './src/Pages/ContactUsHome/ContactUsHome';
import Notifications from './src/Pages/Notifications/Notifications';
import LogOut from './src/Pages/LogOut/LogOut';
import MyConfessions from './src/Pages/MyConfessions/MyConfessions';
import MyStories from './src/Pages/MyStories/MyStories';
import TagView from './src/Pages/Tags/tagView';
import MainTag from './src/Pages/Tags/mainTag';
import ConfessionView from './src/Pages/ConfessionView/ConfessionView';
import InspirationalStoryView from './src/Pages/InspirationalStoryView/InspirationalStoryView'
import WriteAConfession from './src/Pages/WriteAConfession/WriteAConfession';
import WriteAnInspirationalStory from './src/Pages/WriteAnInspirationalStory/WriteAnInspirationalStory';


import * as firebase  from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCrvMG8_1SZx9OH6HtvlAlT6IifcuOroXc",
  authDomain: "confessio-8ce5d.firebaseapp.com",
  projectId: "confessio-8ce5d",
  storageBucket: "confessio-8ce5d.appspot.com",
  messagingSenderId: "733585399410",
  appId: "1:733585399410:web:637040d83461d708572ceb",
  measurementId: "G-TB7ST6KBLW"
};

const app = firebase.initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();



export default class App extends React.Component {

  HomeDrawerLayout = ()=>
  <Drawer.Navigator
  drawerPosition="right"
  drawerType="back"
  
  >
    <Drawer.Screen name="Home" component={Home} />  
    <Drawer.Screen name="Inspirational Story" component={InspirationalStory} />
    {/* <Drawer.Screen name="Notifications" component={Notifications} />   */}
    <Drawer.Screen name="Contact Us" component={ContactUsHome} />
    <Drawer.Screen name="Log Out" component={LogOut} />  
    
    
  </Drawer.Navigator>

  render(){
    return (

      
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index Page" 
      screenOptions={{
        headerShown: false
      }}>
          <Stack.Screen name="Index Page" component={IndexPage} />
          <Stack.Screen name="Home" children={this.HomeDrawerLayout}/>
          
          <Stack.Screen name="SignUp" component={SignUp}/>
          <Stack.Screen name="About" component={About}/>
          <Stack.Screen name="ContactUs" component={ContactUs}/>
          <Stack.Screen name="Disclaimer" component={Disclaimer}/>
          <Stack.Screen name="TermsAndConditions" component={TermsAndConditions}/>
          <Stack.Screen name="Privacy Policy" component={PrivacyPolicy}/>
          <Stack.Screen name="Log In" component={LogIn}/>
          <Stack.Screen name="SignUp2" component={SignUp2}/>
          <Stack.Screen name="Confession View" component={ConfessionView}/>
          <Stack.Screen name="Inspirational Story View" component={InspirationalStoryView}/>
          <Stack.Screen name="Email Verification" component={EmailVerification}/>
          <Stack.Screen name="Write A Confession" component={WriteAConfession}/>
          <Stack.Screen name="Write An Inspirational Story" component={WriteAnInspirationalStory}/>
          <Stack.Screen name="My Confessions" component={MyConfessions}/>
          <Stack.Screen name="Main Tag" component={MainTag}/>
          <Stack.Screen name="TagView" component={TagView}/>
          <Stack.Screen name="My Stories" component={MyStories}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
}

const style = StyleSheet.create({
  main:{
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'stretch'
  }

});
