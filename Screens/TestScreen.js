import React from 'react';
import { StyleSheet, Text, View, Button, Image, StatusBar, TouchableOpacity, Dimensions } from 'react-native';
import {Header, Left, Right, Body} from 'native-base';
import {AntDesign, Feather, MaterialCommunityIcons, Ionicons} from "@expo/vector-icons"
//feather circle , sim check
import CustomBotton from '../Components/Custombutton';
import Five_answer from '../Components/five_answer';

const fetch = require('node-fetch');

export default class TestScreen extends React.Component {
    static navigationOptions = {
      header : null,
    };

    constructor(props){
        super(props);
        this.state = {
          problemNum:0, // 0번째 문제

          problem:{
            answers: {first:'', second:'', third:'', fourth:'', fifth:''}, //props.answers,
            answer:0,
            problemImage:'',
            problemID:'',
          },

          problemResult : { // 각 문제당 걸린시간(초), T/F

          },
          

          startTime: new Date(),
          timelimit:30*60-1, // 30분
          // mins:Math.floor(timelimit/60),
          // secs:timelimit - mins*60,
        };
    }

    /// html로 fetch되는 현상 어떻게??????????????????????????????
    getProblemInfo = () => {
      const newProblemNum = this.state.problemNum + 1;
      let bodyValue = {schema: 'team_seven'};
      this.setState({problemNum: newProblemNum});
      fetch('https://m27jbkwsc0.execute-api.ap-northeast-2.amazonaws.com/Prod/getproblem', {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
          },
          body: JSON.stringify(bodyValue)
      })
      .then(response => response.json())
      .then(response => {
          let result = response.results[0];
          if (result.length === 0) {
              console.log('empty result came back from API call')
          } else {
              this.setState({
                  problem: {
                      answer: result.answer,
                      answers: {
                          first: result.ex1,
                          second: result.ex2,
                          third: result.ex3,
                          fourth: result.ex4,
                          fifth: result.ex5
                      },
                      problemImage: result.img,
                      problemID: result.ID,
                  }
              });
          }
          console.log('problem', this.state.problem);
      })
  }

    postProblemInfo = () => {
      fetch(url, {  // url 어떤 값 넣어줘야할지?????????? 
        method : "POST",
        headers : {
          "Content-type" : "application/json",
          "Accept" : "application/json",
        },
        body : JSON.stringify() // dic type data 전달
      })
    }

    componentDidMount(){
      //
      this.timer = setInterval(
        () => this.tick(), 1000
      );
    }

    componentWillUnmount() {
      //
      clearInterval(this.timer);
      this.setState({
        timelimit:30*60-1, // 15분
      }); // 이거 필요없나???
    }

    tick(){
      let newTimelimit = this.state.timelimit;
      newTimelimit -= 1;
      this.setState({timelimit:newTimelimit});
      
      if(this.state.timelimit == 0){
        this.props.navigation.navigate('Result');
      }
    }

    componentWillMount() {
      this.getProblemInfo();
    }
    com
    
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
                  <TouchableOpacity 
                    onPress={() => {this.props.navigation.navigate('TestExplain')}}
                    style={{marginLeft:10}}>
                    <Ionicons name='ios-arrow-back' size={30} color={'#fff'}/>
                  </TouchableOpacity>
                </Left>
                <Body><Text style={{color:'white', fontSize:20, marginLeft:20, width:200}}>     남은 시간 {Math.floor(this.state.timelimit/60)}:{this.state.timelimit - Math.floor(this.state.timelimit/60)*60}</Text></Body>
                <Right><Text style={{color:'white', fontSize:20, marginRight:10}}>{this.state.problemNum} / 15</Text></Right>
              </Header>


              <Image 
                style={styles.problem}
                source={{url:this.state.problem.problemImage}}
              />

              <View style={styles.answers}>
                <Five_answer answers={this.state.problem.answers}/>
              </View>

              <View style={styles.button}>
                <CustomBotton 
                  title = {(this.state.problemNum == 15)?'Finish':'Next'}
                  buttonColor = '#45c97a'
                  titleColor = '#fff'
                  onPress = {() => {
                    if(this.state.problemNum == 15){
                      this.postProblemInfo();
                      this.props.navigation.navigate('Result');
                    }
                    else{
                      this.getProblemInfo();
                    }
                  }}
                />
              </View>
              {/* <Button 
                title = 'Finish'
                onPress = {() => this.props.navigation.navigate('Result')}/> */}
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
    justifyContent: 'space-between',
  },
  problem: {
    //
  },
  answers: {
    //
    //borderWidth:1
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
