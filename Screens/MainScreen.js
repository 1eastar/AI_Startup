import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button, Image, TouchableOpacity, Dimensions } from 'react-native';
import IDPW from '../Components/IDPW';
import CustomBotton from '../Components/Custombutton';
import {AntDesign,Ionicons,FontAwesome} from "@expo/vector-icons";
import {Header, Left, Right, Body} from 'native-base';
import CustomHeader from "../Components/CustomHeader";

export default class MainScreen extends React.Component {
    static navigationOptions = {
      tabBarIcon: ({tintColor}) => (
        <AntDesign name="home" size={25} style={{ color:tintColor }} />
      ),
      tabBaronPress: ({navigation}) => {
          navigation.navigate('Main');
      }
    }
    constructor(props){
        super(props);
        this.state = {};
    }
    
    render(){
        return (
            <View style={styles.container}>
              <CustomHeader />

              <View style={styles.select}>
                <Text style={{fontSize:20, fontWeight:'bold', marginLeft:40}}>과목 선택</Text>
                <Text style={{fontSize:14, marginLeft:40}}>각 과목을 클릭하시면 테스트를 볼 수 있습니다.</Text>
                <ScrollView 
                  contentContainerStyle={{flexGrow: 1, justifyContent:'flex-start'}, styles.selectImage}
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

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    // backgroundColor:'#333',
  },
  select: {
    flex:1,
    marginTop:20,
  },
  plan: {
    flex:1,
    marginTop:10,
  },
  selectImage: {
    flexDirection: 'row',
    backgroundColor:'#ece6cc',
    // height:200,
    //alignItems: 'center',
    // justifyContent:'flex-start',
  },
  imageitems: {
    //resizeMode:'center',
    transform:[
      {scale:0.6},
      {translate:[-5,-65]}
    ],
    //marginBottom:100,
    //paddingBottom:100,
    alignItems: 'center',
    // marginBottom: 100,
    // justifyContent:'flex-start'
  },
  header: {
    //
    // borderWidth:1,
    width:width,
    backgroundColor:'#097234',
    marginTop:23,
  },
});
