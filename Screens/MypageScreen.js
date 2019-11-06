import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import CustomBotton from '../Components/Custombutton';

export default class MypageScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    
    render(){
        return (
            <View style={styles.container}>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    text1:{
        flex:1,
        margin:40,
        //borderWidth:1
    },
    text2:{
        flex:1,
        marginHorizontal:40,
        //paddingBottom:100,
    },
    text3:{
        flex:1,
        margin:40,
    },
    buttonitem:{
        flex:1,
        marginBottom:70,
        marginRight:50,
        alignSelf:'flex-end',
        //borderWidth:1
    }
});
