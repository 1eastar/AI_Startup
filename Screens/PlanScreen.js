import React from 'react';
import { StyleSheet, Text, View,FlatList, Dimensions } from 'react-native';
import {FontAwesome} from "@expo/vector-icons";
import CustomHeader from '../Components/CustomHeader';
import Input from '../Components/Inputbox';
import Plan from '../Components/Plan';
import {Header, Left, Right, Body} from 'native-base';
import {HeaderoverlayConsumer} from '../contexts/Headerovelay';

class PlanScreen extends React.Component {
    static navigationOptions = {
        header:null,
        tabBarIcon: ({tintColor}) => (
            <FontAwesome name="sticky-note-o" size={25} style={{ color:tintColor }} />
        ),
        tabBaronPress: ({navigation}) => {
            navigation.navigate('Plan');
        }
    }

    constructor(props){
        
        super(props);
        this.state = {
            inputValue:"",
            plans:[
                {
                    title: '밥 먹기', isChecked:false,
                },
                {
                    title: '숨 쉬기', isChecked:false,
                },
            ]
        };
    }

    _makePlan = ({item, index}) => {
        return(
            <Plan 
                text={item.title}
                isChecked={item.isChecked}
                checked={()=>{
                    const newPlans = [...this.state.plans];
                    newPlans[index].isChecked = !newPlans[index].isChecked;
                    this.setState({plans:newPlans});
                }}
                deleted={()=>{
                    const newPlans = [...this.state.plans];
                    newPlans.splice(index,1);
                    this.setState({plans:newPlans});
                }} 
                />
        );
    }

    _changeText= (value) =>{
        this.setState({inputValue : value});
    }

    _addPlan= () => {
        if(this.state.inputValue != ""){
            const nowPlans = this.state.plans;
            const newPlans = {title:this.state.inputValue, isChecked:false};

            this.setState({
                inputValue:"",
                plans: nowPlans.concat(newPlans),
            });
        }
    }
    
    render(){
        return (
            <View style={(this.props.modalVisible)?styles.container:styles.Opacitycontainer}>
                <CustomHeader modalVisible={this.props.modalVisible} setModalVisible={(visible)=>this.props.setModalVisible(visible)}/>
                <View style={styles.contentContainer}>

                    <View style={styles.subtitleposition}>
                        <Text style={{fontSize:21, fontWeight:'bold'}}>일정 추가</Text>
                        <Input
                            message="할 일을 입력해주세요."
                            value={this.state.inputValue}
                            changeText={this._changeText}
                            addPlan={this._addPlan} />
                    </View>
                    <View style={styles.subtitleposition, {marginTop:30, alignItems:'center'}}>
                        <Text style={{fontSize:21, fontWeight:'bold'}}>일정 목록</Text>
                        {/* <Plan text="gggggggggggg" isChecked="false" /> */}
                        <FlatList 
                            data={this.state.plans}
                            renderItem={this._makePlan}
                            keyExtractor={(item, index) => {return `${index}`}}/>
                    </View>
                </View>
            </View>
        );
    }
}

const HeaderoverlayContainer = () => (
    <HeaderoverlayConsumer>
        {
            ({state, action}) => (
                <PlanScreen
                    modalVisible={state.modalVisible}
                    setModalVisible={action.setModalVisible}
                    />
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
    contentContainer:{
        width:width-60,
    },
    buttonitem:{
        flex:1,
        marginBottom:70,
        marginRight:50,
        alignSelf:'flex-end',
        //borderWidth:1
    },
    subtitleposition:{
        //
        width:width-80,
        marginLeft:10,
        marginTop:25,
    }
});


export default HeaderoverlayContainer;