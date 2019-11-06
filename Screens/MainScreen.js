import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button, Image, TouchableOpacity } from 'react-native';
import IDPW from '../Components/IDPW';
import CustomBotton from '../Components/Custombutton';

export default class MainScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    
    render(){
        return (
            <View style={styles.container}>
              <View style={styles.select}>
                <Text style={{fontSize:20, fontWeight:'bold', marginLeft:40}}>과목 선택</Text>
                <Text style={{fontSize:14, marginLeft:40}}>각 과목을 클릭하시면 테스트를 볼 수 있습니다.</Text>
                <ScrollView 
                  style={styles.selectImage}
                  horizontal={true}>
                  <TouchableOpacity onPress={() => {this.props.navigation.navigate('TestExplain')}}>
                    <Image style={styles.imageitems} source={require('../assets/english.png')}/>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => {this.props.navigation.navigate('TestExplain')}}>
                    <Image style={styles.imageitems} source={require('../assets/english.png')}/>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => {this.props.navigation.navigate('TestExplain')}}>
                    <Image style={styles.imageitems} source={require('../assets/english.png')}/>
                  </TouchableOpacity>
                </ScrollView>
                {/*<Button 
                  title = 'Start Test'
                  onPress = {() => this.props.navigation.navigate('TestExplain')}/>*/}
              </View>
              <View style={styles.plan}>
                <Text style={{fontSize:20, fontWeight:'bold', marginLeft:40}}>학습 계획</Text>
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
  select: {
    flex:1,

  },
  plan: {
    flex:1,
    //marginTop:150,
  },
  selectImage: {
    flexDirection: 'row',
    backgroundColor:'#ece6cc',
    //
  },
  imageitems: {
    //resizeMode:'center',
    transform:[{scale:0.6}],
    //marginBottom:100,
    //paddingBottom:100,
    alignItems: 'center',
  },
});
