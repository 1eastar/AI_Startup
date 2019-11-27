import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import CustomBotton from '../Components/Custombutton';
import {FontAwesome} from "@expo/vector-icons";

export default class MypageScreen extends React.Component {
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <FontAwesome name="user-o" size={25} style={{ color:tintColor }} />
        ),
        tabBaronPress: ({navigation}) => {
            navigation.navigate('Mypage');
        }
    }

    constructor(props){
        super(props);
        this.state = {};
    }
    
    render(){
        return (
            <View style={styles.container}>
                <Text>My page</Text>
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
