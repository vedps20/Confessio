import * as React from "react";
import { ScrollView,StyleSheet, View, Text, Image, ActivityIndicator, FlatList} from "react-native";
import {Button, Icon, ListItem, Item, Card} from 'native-base';
import { TouchableOpacity } from "react-native-gesture-handler";

import HeaderWithDrawer from '../../Components/Header/HeaderWithDrawer';

import firebase  from 'firebase';
import 'firebase/firestore';

export default class Notifications extends React.Component {
    constructor(props){
        super(props);

        this.state={
            userId:firebase.auth().currentUser.uid,
            notifications:[],
            readNotifications:[],
            loading:true,
        }

    }

    componentDidMount(){

        firebase.firestore()
        .collection("Notifications")
        .doc("userNotification")
        .collection(this.state.userId)
        .where("active","==",false)
        .orderBy("created","desc")
        .onSnapshot(querySnapshot=>{
            const notification = [];

            querySnapshot.forEach(documentSnapshot => {
                notification.push({
                  ...documentSnapshot.data(),
                  key: documentSnapshot.id,
                });
                 
              });

              this.setState({readNotifications:notification});
              this.setState({loading:false});
        })
        firebase.firestore()
        .collection("Notifications")
        .doc("userNotification")
        .collection(this.state.userId)
        .where("active","==",true)
        .orderBy("created","desc")
        .onSnapshot(querySnapshot=>{
            const notification = [];

            querySnapshot.forEach(documentSnapshot => {
                notification.push({
                  ...documentSnapshot.data(),
                  key: documentSnapshot.id,
                });
                 
              });

              this.setState({notifications:notification});
              this.setState({loading:false});
        })

    }



  
    render(){
        if(this.state.loading){
            return( 
            <View style={{alignItems:'center',justifyContent:'center',marginTop:100}}>
              <ActivityIndicator/>
              <Text style={{textAlign:'center',letterSpacing:2,margin:40,}}>Please wait, Notifications are loading...</Text>
              </View>
              )
          }else{

            return (
            <ScrollView>
            <View style={style.main}>
                <HeaderWithDrawer navigator={this.props.navigation}/>

                <Text style={{
                    textAlign:'center',
                    marginTop:10,
                    fontSize:18,
                    fontWeight:'bold'
                }}>Notifications</Text>
                <View style={style.content}>
                    <FlatList
                    data={this.state.notifications}
                    renderItem={this.renderItem}
                    keyExtractor={item=>item.key}
                    />
                    <FlatList
                    data={this.state.readNotifications}
                    renderItem={this.renderItem}
                    keyExtractor={item=>item.key}
                    />
                </View>
            </View>
            </ScrollView>
            );
      }
  }

  renderItem = ({ item }) => {
    let likeText = item.Likes + " People liked your post " + item.Title;
    let commentText = item.Comments + " People commented on your post " + item.Title;
    let type = item.type;
    let active = item.active;
    let details = item.Data;
    let navigationTitle = item.navigation;
    let mainText = "";
    let iconName = "";
    if(type.toString().trim()=="comment"){
        mainText = commentText;
        iconName = "paper";
    }else{
        mainText = likeText;
        iconName = "heart";
    }
    return(
    <TouchableOpacity onPress={()=>{
        firebase.firestore()
        .collection("Notifications")
        .doc("userNotification")
        .collection(this.state.userId)
        .doc(item.key)
        .update({active:false});
        this.props.navigation.navigate(navigationTitle,{details})}}>
    <Card style={(active?style.active:style.nonActive)}>
        <Icon style={style.likeTexts} name={iconName}></Icon>
        <Text 
        numberOfLines={2}
        style={style.insideText}>{mainText}</Text>
    </Card>
    </TouchableOpacity>
    );
  }

}
  

const style = StyleSheet.create({
    
    main:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'stretch',
    },
    content:{
        marginTop:20,
        margin:5,
    },
    active:{
        backgroundColor:'#e1e3e2',
        margin:5,
        padding:10,
        shadowRadius:6,
        
    },
    likeTexts:{ 
        fontSize: 30,
        marginRight:10,
        marginLeft:5,
    },
    nonActive:{
        flexDirection:'row',
        backgroundColor:'#fff',
        margin:5,
        padding:10,
        shadowRadius:3,
        alignItems:'center'
    },
    insideText:{
        fontSize:14
    }

})


  

