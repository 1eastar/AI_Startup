import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default class CustomBotton extends React.Component {
    static defaultprops = {
        title:'default',
        buttonColor:'#000',
        titleColor: '#fff',
        onPress:()=>null,
    }

    constructor(props){
        super(props);
        this.state = {};
    }
    
    render(){
        return (
                <TouchableOpacity style={[styles.button, {backgroundColor: this.props.buttonColor}]} onPress={this.props.onPress}>
                    <Text style={[styles.title,{color: this.props.titleColor}]}>{this.props.title}</Text>
                </TouchableOpacity>
            
        );
    }
}

const styles = StyleSheet.create({
    button: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10,
      borderRadius: 5,
      paddingHorizontal:10,
      height:10
    },
    title: {
      fontSize: 15,
    },
  });