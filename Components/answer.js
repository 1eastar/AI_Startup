import React from 'react';
import { StyleSheet, Text, View, Button, Image, StatusBar, TouchableOpacity, Dimensions  } from 'react-native';
import {Header, Left, Right, Body} from 'native-base';
import { MaterialIcons } from "@expo/vector-icons"
//feather circle , sim check

export default class Answer extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    
    render(){
        return (
            <View style={styles.makerow}>
                <TouchableOpacity onPress={this.props.pickAnswer}>
                    <MaterialIcons name={(this.props.checked)?"check-box":"check-box-outline-blank"} size={20}/>
                </TouchableOpacity>
                <Text>{this.props.content}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  answers: {
    //
  },
  makerow: {
    flexDirection:'row',
  },
});
