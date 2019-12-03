import React from 'react';
import {StyleSheet, Text, View, Button, Image, StatusBar, TouchableOpacity, Dimensions} from 'react-native';
import {Header, Left, Right, Body} from 'native-base';
import {AntDesign, Feather, MaterialCommunityIcons, Ionicons} from "@expo/vector-icons"
//feather circle , sim check
import CustomBotton from '../Components/Custombutton';
import Five_answer from '../Components/five_answer';
import {CorrectConsumer} from '../contexts/Correct';
import { AnswerConsumer } from '../contexts/answer';

class TestScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
          problemNum:1, // 0번째 문제

          
          

          startTime:30*60-1,  // 그 문제가 시작한 시간
          timelimit:30*60-1, // 30분
          // mins:Math.floor(timelimit/60),
          // secs:timelimit - mins*60,
        };
    }

    componentDidMount() {
        this.timer = setInterval(
            () => this.tick(), 1000
        );
    }



    // storeTempData = () => {
    //   let newProblemResult = [...this.state.problemResult];
    //   const nowProblemData = {
    //     id:this.state.problem.problemID, 
    //     time:30*60-1 - this.state.timelimit,
    //     correctness:false,
    //   }

    //   newProblemResult = newProblemResult.concat(nowProblemData);
    //   this.setState({
    //     problem:newProblemResult,
    //     startTime:nowProblemData.time,
    //   });
    // }

    // componentWillUnmount() {
    //     //
    //     clearInterval(this.timer);
    //     this.setState({
    //         timelimit: 30 * 60 - 1, // 15분
    //     }); // 이거 필요없나???
    // }

    tick() {
        let newTimelimit = this.state.timelimit;
        newTimelimit -= 1;
        this.setState({timelimit: newTimelimit});

        if (this.state.timelimit == 0) {
            this.props.navigation.navigate('Result');
        }
    }

    addProblemNum() {
      let nextNum = this.state.problemNum + 1;
      this.setState({problemNum:nextNum});
    }

    // componentWillMount() {
    //   this.setState({...this.props.navigation.getParam('data')});
    //   setTimeout(()=>{
    //     console.log(this.state)
    //   },3000)
    // }

    // componentWillUnmount() {
    //   this.props.resetState();  // resultscreen 에서 홈 눌렀을 때 쓸 것 =======================================
    // }
    
    
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
                source={{uri:this.props.allprob[this.props.probindexnow].problemImage}}
                resizeMode={'contain'}
              />

              <View style={styles.answers}>
                <Five_answer 
                  answers={this.props.allprob[this.props.probindexnow].answers}
                  pick1={this.props.pick1}
                  pick2={this.props.pick2}
                  pick3={this.props.pick3}
                  pick4={this.props.pick4}
                  pick5={this.props.pick5}
                />
              </View>

              <View style={styles.button}>
                <CustomBotton 
                  title = {(this.state.problemNum == 15)?'Finish':'Next'}
                  buttonColor = '#45c97a'
                  titleColor = '#fff'
                  onPress = {() => {
                    this.props.checkPicked();
                    if(this.state.problemNum == 15){
                      let time = this.state.startTime - this.state.timelimit;
                      this.setState({startTime:this.state.timelimit});
                      let id = this.props.allprob[this.props.probindexnow].problemID;
                      let ans = this.props.allprob[this.props.probindexnow].answer;
                      let tf = ans === this.props.picked[this.props.probindexnow];
                      this.props.storeResult(id,time,tf);
                      setTimeout(() => {
                        //console.log(this.props.problemResult)
                        this.props.navigation.navigate('Result', {data:this.props.problemResult});
                      },2000);
                    }
                    else{
                      let time = this.state.startTime - this.state.timelimit;
                      this.setState({startTime:this.state.timelimit});
                      let id = this.props.allprob[this.props.probindexnow].problemID;
                      let ans = this.props.allprob[this.props.probindexnow].answer;
                      let tf = ans === this.props.picked[this.props.probindexnow];
                      this.props.storeResult(id,time,tf);
                      this.addProblemNum();
                      this.props.addNum();
                      //this._getProblemInfo().then(r => this.setState({...r}));
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

const CorrectContainer = ({navigation}) => (
  <CorrectConsumer>
    {
      ({state, action2}) => (
        <TestScreen 
          navigation={navigation}
          addNum={action2.addProblemNum}
          allprob={state.problem}
          probindexnow={state.problemNum}
          answers={state.answers}
          pick1={action2.pick1}
          pick2={action2.pick2}
          pick3={action2.pick3}
          pick4={action2.pick4}
          pick5={action2.pick5}
          checkPicked={action2.checkPicked}
          storeResult={action2.storeResult}
          picked = {state.picked}
          problemResult = {state.problemResult}
          />
      )
    }
  </CorrectConsumer>
)

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
    width:'100%',
    height:'50%',
  },
  answers: {
    //
    //borderWidth:1
    alignSelf:'flex-start',
    marginLeft:25,
    width:width-55,
    height:'20%'
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

export default CorrectContainer;