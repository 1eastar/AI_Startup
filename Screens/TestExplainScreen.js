import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity,Dimensions } from 'react-native';
import CustomBotton from '../Components/Custombutton';
import {Header, Left, Right, Body} from 'native-base';
import {Ionicons,FontAwesome} from '@expo/vector-icons';
import CustomHeader from "../Components/CustomHeader";
import {HeaderoverlayConsumer} from '../contexts/Headerovelay';
import {CorrectConsumer} from '../contexts/Correct';

class TestExplainScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }


    _next() {
        for(let i=0;i<15;i++){
            this.props.getprob().then((result) => {
                this.props.storeProblem(result);
            })
        }
        this.props.navigation.navigate('Test');
        //this._getProblemInfo().then(result => this.props.navigation.navigate('Test', {data:result}))
    }

    render(){
        return (
            <View style={(this.props.modalVisible)?styles.container:styles.Opacitycontainer}>
                <CustomHeader modalVisible={this.props.modalVisible} setModalVisible={(visible)=>this.props.setModalVisible(visible)}/>

              <View style={styles.buttonitem}>
                  <CustomBotton title='start Test' buttonColor='#030' titleColor='#fff' onPress={()=>this._next()}/>
                  {/*<Button 
                      title = 'Start A+i'
                  onPress = {() => this.props.navigation.navigate('Main')}/>*/}
              </View>
              <View style={styles.text1}>
                  <Text style={{fontWeight:'bold', fontSize:24}}>영어 테스트를 시작합니다.</Text>
              </View>
              <View style={styles.text2}>
                  <Text style={{fontWeight:'bold', fontSize:13}}>다음 버튼을 누르면 다음 문제로 넘어가며, 마지막 문제의 Finish 버튼을 누르게 되면 테스트가 종료됩니다.</Text>
              </View>
              <View style={styles.text3}>
                  <Text style={{fontWeight:'bold', fontSize:13}}>문제는 총 15문항이며 시간 제한은 30분 입니다.</Text>
              </View>
            </View>
        );
    }
}

const HeaderoverlayContainer = ({navigation}) => (
    <HeaderoverlayConsumer>
        {
            ({state, action}) => (
                <CorrectConsumer>
                    {
                        ({state2, action2}) => (
                            <TestExplainScreen
                                modalVisible={state.modalVisible}
                                setModalVisible={action.setModalVisible}
                                navigation={navigation}
                                getprob={action2._getProblemInfo}
                                storeprob={actions2.storeProblem}
                                storeresult={}
                                />
                        )
                    }
                </CorrectConsumer>
                
            )
        }
    </HeaderoverlayConsumer>
  )



const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.7)',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    Opacitycontainer: {
        flex: 1,
        backgroundColor: 'rgb(255,255,255)',
        alignItems: 'center',
        justifyContent: 'flex-start',
      },  
    text1:{
        flex:2,
        // margin:40,
        // borderWidth:1,
    },
    text2:{
        flex:2,
        marginHorizontal:40,
        //paddingBottom:100,
        // borderWidth:1,
    },
    text3:{
        flex:2,
        marginBottom:100,
        // borderWidth:1,
    },
    buttonitem:{
        flex:1,
        marginTop:20,
        marginBottom:70,
        marginRight:50,
        alignSelf:'flex-end',
        // borderWidth:1,
    },
    header: {
        //
        // borderWidth:1,
        width:width,
        backgroundColor:'#097234',
        marginTop:23,
    },
});

export default HeaderoverlayContainer;