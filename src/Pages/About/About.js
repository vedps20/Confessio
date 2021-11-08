import * as React from "react";
import {ScrollView, StyleSheet, View, Text, Image} from "react-native";
import {Container, Context, Form, Input, Button, Item, Label} from 'native-base';

import Header from '../../Components/Header/Header';
import Middle from './Middle';
import Footer from '../../Components/Footer/Footer';


export default class About extends React.Component{
    render(){
        return(
            <ScrollView style={style.container}>
                <Header navigator={this.props.navigation}/>
                <Middle navigator={this.props.navigation}/>
                <Footer navigator={this.props.navigation}/>
            </ScrollView>
        );
    }
}

const style = StyleSheet.create({
    container:{
        flexDirection:'column',
        backgroundColor:"#ffffff"
    }
});