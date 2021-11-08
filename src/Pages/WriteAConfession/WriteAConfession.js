import * as React from "react";
import { StyleSheet, View, Text, Image, Picker } from "react-native";
import {Button, Input, Textarea} from 'native-base';

import firebase from 'firebase';
import 'firebase/firestore';

import Header from '../../Components/Header/Header';
import { ScrollView } from "react-native-gesture-handler";

import MultiSelect from 'react-native-multiple-select';



export default class WriteAConfession extends React.Component {
    items = [
        { id: '1', name: "BoyFriend" },
        { id: '2', name: "GirlFriend" },
        { id: '3', name: "Uncle" },
        { id: '4', name: "Aunt" },
        { id: '5', name: "Husband" },
        { id: '6', name: "Wife" },
        { id: '7', name: "Brother" },
        { id: '8', name: "Sister" },
        { id: '9', name: "Father" },
        { id: '10', name: "Mother" },
        { id: '11', name: "Son" },
        { id: '12', name: "Daughter" },
        { id: '13', name: "GrandFather" },
        { id: '14', name: "GrandMother" },
        { id: '15', name: "MenFriends" },
        { id: '16', name: "FemaleFriends" },
        { id: '17', name: "GrandChildren" },
        { id: '18', name: "GrandDaughter" }
      ];
    
    constructor(props){
        super(props);

        
        this.state={
            title:"",
            description:"",
            attributes:[],
            selectedAttribute:"",
            writingTo:[],
            err:"",
        }
        var a = [];

        firebase.firestore()
        .collection("Users")
        .doc(firebase.auth().currentUser.uid)
        .get().then(
            function(doc){
                if(doc.exists){
                    a = doc.data().Attributes;
                }else{
                    console.log("data not found");
                }
            }
        ).catch(function(error) {
            console.log("Error getting document:", error);
        });
        setTimeout(() => {this.setState({attributes:a})}, 5000)
        
        
    }
    

    onSelectedItemsChange =  selectedItems => {
        this.setState({ writingTo : selectedItems });
      };
    

    render(){
        const writingToConst = this.state.writingTo;

      return (
          <ScrollView>
      <View style={style.main}>
        <Header navigator={this.props.navigation}/>
        <View style={style.middle}>
        <Text
        style={{
            textAlign:'center',
            marginBottom:30,
            letterSpacing:1,
            fontSize:30,
            marginTop:8,
        }}>Write A Confession</Text>

        <Text
        style={{
            fontSize:18,
            marginLeft:5,
            marginBottom:10,
            letterSpacing:1,
            fontWeight:'bold'
        }}>TITLE</Text>

        <Input
        placeholder="Enter a Title"
        style={{
            height:40,
            padding:5,
            borderWidth:1,
            borderRadius:4,
            borderColor:"#ced4da",
            marginBottom:22,
            
        }}
        onChangeText={(text)=>this.setState({title:text})}/>

        <View
        style={style.pickerViews}>
            <View
            style={style.insidePickerView}>
                <Text
                style={
                    {
                        letterSpacing:1,
                        fontSize:16,
                        fontWeight:"bold",
                        marginBottom:15,
                    }
                }>YOU ARE</Text>
            <Picker
            style={style.picker}
            selectedValue={this.state.selectedAttribute}
            onValueChange={(value)=>(this.setState({selectedAttribute : value}))}
            >
                {selectAttributes(this.state.attributes)}
            </Picker>
            </View>

            <View
            style={style.insidePickerView}>
                <Text
                style={
                    {
                        letterSpacing:1,
                        fontSize:16,
                        fontWeight:"bold",
                        marginBottom:15,
                    }
                }>WRITING TO</Text>
            <MultiSelect
                hideTags
                items={this.items}
                ref={component => {
                    this.multiSelect = component;
                }}
                style={{
                    borderColor:'#fff',
                    borderWidth:0
                }}
                uniqueKey="name"
                onSelectedItemsChange={this.onSelectedItemsChange}
                selectedItems={writingToConst}
                selectText="Select roles"
                searchInputPlaceholderText="Search Roles..."
                onChangeInput={text => console.log(text)}
                tagRemoveIconColor="#CCC"
                tagBorderColor="#CCC"
                tagTextColor="#CCC"
                selectedItemTextColor="#CCC"
                selectedItemIconColor="#CCC"
                itemTextColor="#000"
                displayKey="name"
                searchInputStyle={{ color: '#CCC' }}
                submitButtonColor="#48d22b"
                submitButtonText="Done"/>
            </View>
        </View>

        <Text
        style={{
            fontSize:22,
            marginLeft:5,
            marginBottom:10,
            marginTop:20,
            letterSpacing:1,
            fontSize:16,
            fontWeight:'bold',
        }}>DESCRIPTION</Text>

        <Textarea
            rowSpan={9} bordered 
            placeholder="Your Message"
            style={{
                padding:5,
                borderRadius:4,
                fontSize:16,
            }}
            onChangeText={(text)=>this.setState({description:text})}
            />

            <Text style={
                    {   marginTop:15,
                        color:"red",
                        textAlign:"center",
                        letterSpacing:2,
                        fontSize:18
                    }

                }>{this.state.err}</Text>

            <Button
            primary
            full
            style={{
                justifyContent:'center',
                marginTop:20,
                borderRadius:5,
            }}
            onPress={()=>this.onSubmit()}>
                <Text
                style={{
                    color:'#fff',
                    textAlign:'center',
                    letterSpacing:2,
                }}>Post</Text>
            </Button>


        
    </View>
        
      </View>
      </ScrollView>
    );
  }

  onSubmit(){

    let title = this.state.title;
    let youAre = this.state.selectedAttribute;
    let description = this.state.description;
    let writingTo = this.state.writingTo;
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    let details={value:0};

    let error = "All Fields must not be empty";
    let noError = "";

    if(youAre.trim()==""){
        youAre = this.state.attributes[0];
    }

    let userId = firebase.auth().currentUser.uid;
    if(title.trim()==""||youAre.trim()==""||description.trim()==""||writingTo.length==0){
      this.setState({err : error});
      }else{

          this.setState({err : noError});
            const Confession = {
                By : userId,
                Title : title,
                From : youAre,
                To : writingTo,
                Confession : description,
                Date : ""+year+"-"+month+"-"+date,
                Likes:0,
                Views:0,
                Comments:0,
                Popularity:0,
            }
          firebase.firestore()
          .collection("Confessions")
          .add(Confession).then()
          .catch();
            this.props.navigation.navigate("Home");
      }
  }

  
}

const selectAttributes = (attributes) =>{
    let attribute = attributes;
    return(attribute.map( (i,j)=>{
        return(<Picker.Item 
                  label={i}
                  key={j}
                  value={i}/>)
    }));
} 

  
  const style = StyleSheet.create({
        main:{
            flexDirection:'column',
            justifyContent:"center",
        },
        middle:{
            margin: 20,
            padding:15,
            backgroundColor:"#fff"
        },
        pickerViews:{
            flex:1,
            justifyContent:"space-between",
            flexDirection:'row',
            marginVertical:10,
            paddingHorizontal:5,
        },
        insidePickerView:{
            flexDirection:'column',
            flex:1,
        },  
        picker:{
            height:30,
            margin:4,
            fontSize:8,
            borderColor:"#e9e9e9",
            borderWidth:0,
        },
    })


  

