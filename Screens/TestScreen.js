import React from 'react';
import { StyleSheet, Text, View, Button, Image, StatusBar, TouchableOpacity, Dimensions  } from 'react-native';
import {Header, Left, Right, Body} from 'native-base';
import {AntDesign, Feather, MaterialCommunityIcons, Ionicons} from "@expo/vector-icons"
//feather circle , sim check
import CustomBotton from '../Components/Custombutton';
import Five_Answer from '../Components/five_answer';

export default class TestScreen extends React.Component {
    static navigationOptions = {
      header : null,
    };

    constructor(props){
        super(props);
        this.state = {};
    }
    
    render(){
        return (
            <View style={styles.container}>
              {/*<StatusBar 
                animated={true}
                backgroundColor='blue'
                barStyle='default'
                style={{backgroundColor:'green'}}
              />*/}
              <Header style={styles.header}>
                <Left>
                  <TouchableOpacity onPress={() => {this.props.navigation.navigate('TestExplain')}}>
                    <Ionicons name='ios-arrow-round-back' size={30}/>
                  </TouchableOpacity>
                </Left>
                <Body><Text style={{color:'white', fontSize:20}}>     남은 시간 00:00</Text></Body>
                <Right><Text style={{color:'white', fontSize:20}}>15 / 15</Text></Right>
              </Header>


              <Image 
                style={styles.problem}
                source={require('../assets/problem.png')}
              />

              <View style={styles.answers}>
                <Five_Answer />
              </View>

              <View style={styles.button}>
                <CustomBotton 
                  title = 'Finish'
                  buttonColor = '#45c97a'
                  titleColor = '#fff'
                  onPress = {() => {this.props.navigation.navigate('Result')}}
                />
              </View>
              {/*<Button 
                title = 'Finish'
                onPress = {() => this.props.navigation.navigate('Result')}/>*/}
            </View>
        );
    }
}

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderWidth:1,
  },
  header: {
    //
    //borderWidth:1,
    width:width,
    backgroundColor:'#097234',
    marginTop:23,
  },
  problem: {
    //
  },
  answers: {
    //
  },
  makerow: {
    flexDirection:'row',
  },
  button: {
    //
    //borderWidth:1,
    height:50,
    alignSelf:'flex-end',
    marginTop:50,
    marginRight:20,
  },
});
