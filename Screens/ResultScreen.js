import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Custombotton from '../Components/Custombutton';

export default class ResultScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    
    render(){
        return (
            <View style={styles.container}>
              <Text style={{fontSize:20, marginLeft:30}}>수고하셨습니다!</Text>
              <View style={styles.makerow}>
                <Text style={{fontSize:100, fontWeight:'bold', marginLeft:30}}>12/15</Text>
                <Text style={{fontSize:30}}>정답</Text>
              </View>
              <Text style={{fontSize:25, marginLeft:40, alignSelf:'flex-end', marginBottom:10}}>오답 문항 : 3, 5, 13번 </Text>
              <View style={styles.button}>
                <Custombotton title='오답문항 보러가기' titleColor='#fff' buttonColor='#000' onPress={() => null}/>
              </View>
              <View style={styles.ai}>
                <Text style={{fontSize:20, fontWeight:'bold',marginBottom:20}}>인공지능 분석 결과</Text>
                <Text>정답 문항, 걸린 시간, 오답 문항 선택 답안, 학년 등을 고려한 수능 성적 예측 결과는
                <Text>~점 입니다.</Text></Text>
                <Text>취약한 파트는 ~~~이고, 평균보다 뛰어난 파트는 ~~~ 입니다.</Text>
              </View>
              <View style={styles.button}>
                <Custombotton title='go Home' titleColor='#fff' buttonColor='#097234' onPress={() => {this.props.navigation.navigate('Main')}}/>
              </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  makerow: {
    flexDirection:'row',
  },
  ai: {
    marginHorizontal:30,
    marginTop:30,
    marginBottom:50,
  },
  button: {
    alignItems:'flex-end',
    height:40,
    marginRight:40,
  },
});
