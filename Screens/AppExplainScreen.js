import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import CustomBotton from '../Components/Custombutton';

export default class AppExplainScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.text1}>
                    <Text style={{fontWeight:'bold', fontSize:18}}>A+i에 오신 것을 환영합니다.</Text>
                </View>
                <View style={styles.text2}>
                    <Text style={{fontWeight:'bold', fontSize:13}}>A+i는 여러분의 생활패턴, 공부습관 등을 분석하여 최적의 학습계획과 시험 성적 예측 서비스를 제공해 드립니다.</Text>
                </View>
                <View style={styles.text3}>
                    <Text style={{fontWeight:'bold', fontSize:13}}>인공지능 ~~~~~~ 쏼라쏼라 ~~~~~~</Text>
                </View>
                <View style={styles.buttonitem}>
                    <CustomBotton title='start A+i' buttonColor='#097234' titleColor='#fff' onPress={() => this.props.navigation.navigate('Tab')}/>
                    {/*<Button 
                        title = 'Start A+i'
                    onPress = {() => this.props.navigation.navigate('Main')}/>*/}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    text1:{
        flex:1,
        margin:40,
    },
    text2:{
        flex:1,
        marginHorizontal:40,
        paddingBottom:100,
    },
    text3:{
        flex:1,
        margin:40,
    },
    buttonitem:{
        flex:1,
        marginBottom:70,
        padding:0,
        //height:10,
    }
});
