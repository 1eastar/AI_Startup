import React from 'react';
import { StyleSheet, Text, View, Button, Image, StatusBar, TouchableOpacity,  } from 'react-native';
import {Header, Left, Right, Body} from 'native-base';
import {AntDesign, Feather, MaterialCommunityIcons, Ionicons} from "@expo/vector-icons"
//feather circle , sim check
import CustomBotton from '../Components/Custombutton';

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
                <Left><Ionicons name='ios-arrow-round-back'/></Left>
                <Body><Text>남은 시간 00:00</Text></Body>
                <Right><Text>15 / 15</Text></Right>
              </Header>

              <View>
                <Text>TestScreen</Text>
              </View>

              <Image 
                style={styles.problem}
                source={require('../assets/problem.png')}
              />

              <View style={styles.answers}>
                <View style={styles.makerow}>
                  <TouchableOpacity>
                    <Feather name="circle" size={20}/>
                  </TouchableOpacity>
                  <Text>a reflection of the prevailing literary trends</Text>
                </View>
                <View style={styles.makerow}>
                  <TouchableOpacity>
                    <Feather name="circle" size={20}/>
                  </TouchableOpacity>
                  <Text>something that leaves no room for alternative ideas</Text>
                </View>
                <View style={styles.makerow}>
                  <TouchableOpacity>
                    <Feather name="circle" size={20}/>
                  </TouchableOpacity>
                  <Text>an insufficient explanation that misleads the readers</Text>
                </View>
                <View style={styles.makerow}>
                  <TouchableOpacity>
                    <MaterialCommunityIcons name="checkbox-marked-circle" size={20}/>
                  </TouchableOpacity>
                  <Text>one more interpretation of the text among many others</Text>
                </View>
                <View style={styles.makerow}>
                  <TouchableOpacity>
                    <Feather name="circle" size={20}/>
                  </TouchableOpacity>
                  <Text>another example of authors caring less about being original</Text>
                </View>
              </View>

              <CustomBotton 
                title = 'Finish'
                buttonColor = '#45c97a'
                titleColor = '#fff'
                onPress = {() => {this.props.navigation.navigate('Result')}}
                style={{height:20}}
              />
              {/*<Button 
                title = 'Finish'
                onPress = {() => this.props.navigation.navigate('Result')}/>*/}
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth:1,
  },
  header: {
    //
    borderWidth:1,
  },
  problem: {
    //
  },
  answers: {
    //
  },
  makerow: {
    flexDirection:'row',
  }
});
