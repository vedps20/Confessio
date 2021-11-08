import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Button } from "native-base";

import Buttons from './Buttons';

const text1 = "We present to you the perspective of the person in trouble, so you can see their life through their eyes.";

const text2 = "Your life is your story and the adventure ahead of you is the journey to fulfill your own purpose and potential.\n~ Kerry Washington";

export default class Middle extends React.Component{
    
    render(){
        return(
            <View style={{flexDirection:'column', flexWrap:'wrap', justifyContent:'center'}}>
                <View style={style.view1}>
                    <View style={style.view2}>
                        <View></View>
                    <Text style={style.text1}>{text1}</Text>
                    <Button
                    outline
                    style={{backgroundColor:"#3949ab",paddingHorizontal:12, marginTop:40 , borderRadius:5}}
                    onPress={()=>this.props.navigator.navigate('SignUp')}
                    >
                        <Text style={{color:"#fff", fontWeight:"bold", fontSize:12, letterSpacing:2}}>GET STARTED</Text>
                    </Button>
                    </View>

                <Image 
                  source={{uri: "https://firebasestorage.googleapis.com/v0/b/confess-karo.appspot.com/o/Confess%20Karo%20Images%2F1.png?alt=media&token=7c1832e1-76ee-4913-8923-9f07d897e328"}} 
                  style={{ marginTop:30, width:300, height:200, minWidth:0, minHeight:0, resizeMode:"contain",justifyContent:'center', alignItems:'center' }}
                  />
                </View>

                <View style={style.view3}>
                    <Text style={{color:"#fff", fontSize:15, marginLeft:13}}>How It Works?</Text>
                </View>

                <View style={style.view4}>
                    <View style={style.numbersRow}>
                        <Image
                        source={{uri: "https://firebasestorage.googleapis.com/v0/b/confess-karo.appspot.com/o/Confess%20Karo%20Images%2Fnumber1.png?alt=media&token=62f87519-7ce5-4bcb-8e64-d32fa735a808"}}
                        style={style.numbers}
                        />
                        <Text style={style.textNumbers}>Write a confession anonymously</Text>
                    </View>
                    <View style={style.numbersRow}>
                        <Image
                        source={{uri: "https://firebasestorage.googleapis.com/v0/b/confess-karo.appspot.com/o/Confess%20Karo%20Images%2Fnumber2.png?alt=media&token=effec38a-1b5b-4781-935d-d6d3ffee14b6"}}
                        style={style.numbers}
                        />
                        <Text style={style.textNumbers}>Get suitable suggestions from best people</Text>
                    </View>
                    <View style={style.numbersRow}>
                        <Image
                        source={{uri: "https://firebasestorage.googleapis.com/v0/b/confess-karo.appspot.com/o/Confess%20Karo%20Images%2Fnumber3.png?alt=media&token=66e95ee5-3082-490b-87e9-bfd220158f1c"}}
                        style={style.numbers}
                        />
                        <Text style={style.textNumbers}>Implement them in your life</Text>
                    </View>
                </View>

                <View style={style.view3}>
                    <Text style={{color:"#fff", fontSize:15, marginLeft:13}}>Confess your feelings to various relations</Text>
                </View>

                <View style={style.view5}>
                    <Buttons name="BOYFRIEND"/>
                    <Buttons name="AUNT"/>
                    <Buttons name="HUSBAND"/>
                    <Buttons name="BROTHER"/>
                    <Buttons name="FATHER"/>          
                    <Buttons name="UNCLE"/>
                    <Buttons name="GIRLFRIEND"/>
                    <Buttons name="SON"/>
                    <Buttons name="WIFE"/>
                    <Buttons name="SISTER"/>  
                    <Buttons name="MOTHER"/>
                    <Buttons name="DAUGHTER"/>      
                </View>
                <View style={{
                    justifyContent:'center',
                    alignItems:'center',
                    flexDirection:'column',
                    marginTop:10
                }}> 
                <Button
                outline
                style={{
                    borderRadius:25,
                    backgroundColor:'#d84315',
                    width:170,
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                    <Text style={{
                        color:"#fff",
                        letterSpacing:2,
                        fontSize:12,
                        margin:10
                        }}>AND MANY MORE</Text>
                </Button>

                <Image
                    source={{uri: "https://firebasestorage.googleapis.com/v0/b/confess-karo.appspot.com/o/Confess%20Karo%20Images%2FFamily%20Avatar%20Set.png?alt=media&token=dd9411c8-3438-4aab-87a6-e53b02accb25"}}
                    style={{
                        flex:1,
                        height:100,
                        width:300,
                        resizeMode:'contain',
                    }}
                    />
                </View>

                <View style={style.view3}>
                    <Text style={{color:"#fff", fontSize:15 ,marginLeft:13}}>Inspirational Story</Text>
                </View>

                <View style={style.viewbottom}>

                <Image 
                  source={{uri: "https://firebasestorage.googleapis.com/v0/b/confess-karo.appspot.com/o/Confess%20Karo%20Images%2Finspirational%20story.png?alt=media&token=44ce004b-2a41-41e3-81f0-9f1331a194b8"}} 
                  style={{ width:200, height:200, resizeMode:"stretch",justifyContent:'center', alignItems:'center' }}
                  />
                    <View style={style.view6}>
                    <Text style={style.text2}>{text2}</Text>
                    <Button
                    outline
                    style={{backgroundColor:"#3949ab",paddingHorizontal:12, marginTop:40 , borderRadius:5}}
                    onPress={()=>this.props.navigator.navigate('SignUp')}
                    >
                        <Text style={{color:"#fff", fontWeight:"bold",  letterSpacing:2}}>TELL YOUR STORY</Text>
                    </Button>
                    </View>

                
                </View>




            </View>
          );
    }
}

const style = StyleSheet.create({
    view1:{
        flexDirection:"row",
        flexWrap:'wrap',
        marginTop:40,
        justifyContent:'center',
        alignItems:'center'}
        ,
    view2:{
        flexDirection:'column',
        paddingVertical:10,
        marginHorizontal:15,
        justifyContent:'space-around',
        alignItems:'center' }
        ,
    view3:{
        height:57,
        shadowRadius:10,
        backgroundColor:"#3949ab",
        justifyContent:'center',
        alignItems:'center',
        flexWrap:'wrap'
        },
    view4:{
        flexWrap:'wrap',
        flexDirection:'row',
        paddingVertical:20,
        paddingHorizontal:10,
        marginBottom:40,
        margin:5,
        marginTop:20,
        justifyContent:'center'
    },
    view5:{
        flexDirection:'row',
        marginTop:50,
        padding:10,
        justifyContent:'space-around',
        alignItems:'center',
        flexWrap:'wrap'
    },
    view6:{
        flexDirection:'column',
        paddingVertical:20,
        paddingHorizontal:10,
        marginTop:15,
        justifyContent:'flex-start',
        alignItems:'center' 
    },
    viewbottom:{
        flexDirection:'row',
        flexWrap:'wrap',
        marginTop:10,
        justifyContent:'center'
    },
    numbersRow:{
        flex:1,
        marginHorizontal:5,
        flexWrap:'wrap',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    numbers:{
        height:60,
        width:60,
        marginRight:-10,
        resizeMode:'contain'
    },
    text1:{
        flexWrap:'wrap',
        fontSize:14,
        justifyContent:'center',
        textAlign:"center"
    },
    text2:{
        color:"#3949ab",
        flexWrap:'wrap',
        fontSize:19,
        fontWeight:"bold",
        justifyContent:'center',
        alignSelf:'center',
        textAlign:"center"
    },
    textNumbers:{
        textAlign:'center',
        fontSize:14,
        fontWeight:"normal",    
        color:"#000"

    }
  
  });