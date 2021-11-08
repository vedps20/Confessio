import * as React from "react";
import { StyleSheet, View, Text, Image ,FlatList} from "react-native";
import {Button, Icon, FooterTab} from 'native-base';

import firebase from 'firebase';
import 'firebase/firestore';

export default class HomeFooter extends React.Component {
  constructor(props){
    super(props);

    this.state={
      topStories:[],
      topConfessions:[],
      topTags: []
    }

  }

  componentDidMount(){
    firebase.firestore().
        collection("Confessions").limit(5).
        orderBy("Popularity", "desc").
        onSnapshot(querySnapshot=>{
          const confessionTemp = [];
          
          querySnapshot.forEach(documentSnapshot => {
            confessionTemp.push({
              ...documentSnapshot.data(),
              key: documentSnapshot.id,
            });
             
          });
    
          this.setState({topConfessions:confessionTemp});
    
        });

        firebase.firestore().
        collection("Inspirational Stories").limit(5).
        orderBy("Popularity", "desc").
        onSnapshot(querySnapshot=>{
          const confessionTemp = [];
          
          querySnapshot.forEach(documentSnapshot => {
            confessionTemp.push({
              ...documentSnapshot.data(),
              key: documentSnapshot.id,
            });
             
          });
    
          this.setState({topStories:confessionTemp});
    
        });

        firebase.firestore().
        collection("Tags").limit(3).
        orderBy("target", "desc").
        onSnapshot(querySnapshot=>{
          const tagsTemp = [];

          querySnapshot.forEach(documentSnapshot => {
            tagsTemp.push({
              ...documentSnapshot.data(),
              key: documentSnapshot.id
            })
          })
          
          this.setState({topTags: tagsTemp})
        })
        
  }

  render(){
    return(
      <View>
        <View style={style.footer}>
          <FooterComponentTag heading="MOST USED TAGS" dataItem={this.state.topTags} navigator={this.props.navigator}
           navigationTitle="Tag View"/>
          <FooterComponent heading="TOP IO STORIES"  dataItem={this.state.topStories} navigator={this.props.navigator}
           navigationTitle="Inspirational Story View"/>
          <FooterComponent heading="TOP CONFESSIONS"  dataItem={this.state.topConfessions} navigator={this.props.navigator}
           navigationTitle="Confession View"/>
        </View>

        <View style={{
          flexDirection:'row',
          justifyContent:'space-evenly',
          backgroundColor:'#f5f5f5',
          paddingBottom:20,
          alignItems:'center',
          paddingHorizontal:10,
        }}>
          <Text style={style.text} onPress={()=>this.props.navigator.navigate("TermsAndConditions")}>Terms and conditions   </Text>
          <Text style={style.text} onPress={()=>this.props.navigator.navigate("Disclaimer")}>Disclaimer   </Text>
          <Text style={style.text} onPress={()=>this.props.navigator.navigate("Privacy Policy")}>Privacy Policy   </Text>
        </View>
      </View>
      );
    }
}

function FooterComponent(props){ //only for top stories and confessions
 
  return(
      <View style={style.footerComponent}>
        <Text style={{fontSize:10}}>{props.heading}</Text>
        <View style={{
          marginTop:5,
          borderWidth:1,
          borderColor:"#666666",
        }}/>
        <FlatList
          data={props.dataItem}
          numColumns={5}
          columnWrapperStyle={{
            flexWrap:'wrap'
          }}
          horizontal={false}
          scrollEventThrottle={1900} 
          renderItem={(item)=>{
            return(
            <FooterTag data={item} navigator={props.navigator} Title={props.navigationTitle}/>);
          }}
          keyExtractor={item=>item.key}/>
      </View>
  );
}



function FooterTag(props){ //only for top stories and confessions

  let title = props.data.item.Title;

  let item = props.data.item;

  return(
    <Button
    style={style.footerTagButton}
    onPress={()=>{props.navigator.navigate(props.Title,{item})}}
    >
      <Text
      numberOfLines={1}
      ellipsizeMode='tail'
      style={{
        textAlign:'center',
        letterSpacing:1,
        color:'#fff',
        fontSize:8,
        
      }}>{title}</Text>
    </Button>
  );
}

function FooterComponentTag(props){ //only for top tags
  return(
      <View style={style.footerComponent}>
        <Text style={{fontSize:10}}>{props.heading}</Text>
        <View style={{
          marginTop:5,
          borderWidth:1,
          borderColor:"#666666",
        }}/>
        <View style={{
          flexWrap:'wrap',
          flexDirection:'row'
        }}>
        <FlatList
          data={props.dataItem}
          numColumns={5}
          columnWrapperStyle={{
            flexWrap:'wrap'
          }}
          horizontal={false}
          scrollEventThrottle={1900} 
          renderItem={(item)=>{
            return(
            <FooterTags data={item} navigator={props.navigator} Title={props.navigationTitle}/>);
          }}
          keyExtractor={item=>item.key}/>
        </View>
      </View>
  );
}

function FooterTags(props){  //only for top tags
  let name = props.data.item.name;

  let item = props.data.item;
  return(
    <Button
    style={style.footerTagButton}
    >
      <Text
      style={{
        textAlign:'center',
        letterSpacing:1,
        color:'#fff',
        fontSize:8,
      }}>{name}</Text>
    </Button>
  );
}

const style = StyleSheet.create({
    
    footer:{
      flexWrap:"wrap",
      flexDirection:'row',
      paddingTop:10,
      paddingBottom:20,
      justifyContent:'space-evenly',
      backgroundColor:'#f5f5f5',
    },
    footerComponent:{
      flex:1,
      paddingHorizontal:10,
    },
    footerTagButton:{ 
      margin:2,padding:5,height:15,
        paddingHorizontal:8,
        backgroundColor:"#343a40",
        borderRadius:5,
    },
    text:{
      textAlign:'center',
      flexWrap:'wrap',
      flex:1,
    }

  });