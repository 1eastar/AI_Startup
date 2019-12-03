import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Custombotton from '../Components/Custombutton';
import CustomHeader from "../Components/CustomHeader";
import {HeaderoverlayConsumer} from '../contexts/Headerovelay';

class ResultScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          
          userID:"me",
          schema:"team_seven",
          lst:[],
        };
    }

    componentWillMount() {
      //
      let results = this.props.navigation.getParam('data');
      let sublst = this.state.lst;
      for(let i=1;i<=15;i++){
        if(!results[i].correctness){
          sublst = sublst.concat(i+' ');
        }
      }
      this.setState({lst:sublst});
    }
    
    render(){
        return (
          <View style={(this.props.modalVisible)?styles.container:styles.Opacitycontainer}>
              <CustomHeader modalVisible={this.props.modalVisible} setModalVisible={(visible)=>this.props.setModalVisible(visible)}/>
              <Text style={{fontSize:20, marginLeft:30}}>수고하셨습니다!</Text>
              <View style={styles.makerow}>
                <Text style={{fontSize:100, fontWeight:'bold', marginLeft:30}}>{15 - this.state.lst.length}/15</Text>
                <Text style={{fontSize:30}}>정답</Text>
              </View>
              <Text style={{fontSize:25, marginLeft:40, alignSelf:'flex-end', marginBottom:10}}>오답 문항 : {this.state.lst}</Text>
              <View style={styles.button}>
                <Custombotton title='오답문항' titleColor='#fff' buttonColor='#000' onPress={() => null}/>
              </View>
              <View style={styles.ai}>
                <Text style={{fontSize:25, fontWeight:'bold',marginBottom:20}}>인공지능 분석 결과</Text>
                <View style={{flexDirection:'row'}}>
                  <Text style={{fontSize:20,marginLeft:20}}>예상 등급   : </Text>
                  <Text style={{fontSize:50, fontWeight:'bold',marginLeft:10}}>1 등급</Text>
                </View>
              </View>
              <View style={styles.button}>
                <Custombotton title='go Home' titleColor='#fff' buttonColor='#097234' onPress={()=>this.props.navigation.navigate('Main')}/>
              </View>
            </View>
        );
    }
}

const HeaderoverlayContainer = ({navigation}) => (
  <HeaderoverlayConsumer>
      {
          ({state, action}) => (
              <ResultScreen
                  modalVisible={state.modalVisible}
                  setModalVisible={action.setModalVisible}
                  navigation={navigation}
                  />
          )
      }
  </HeaderoverlayConsumer>
)



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  Opacitycontainer: {
    flex: 1,
    backgroundColor: 'rgb(255,255,255)',
    //alignItems: 'flex-start',
    //justifyContent: 'flex-start',
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


export default HeaderoverlayContainer;