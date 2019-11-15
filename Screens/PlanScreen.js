import React from 'react';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import {FontAwesome} from "@expo/vector-icons";
import PlanHeader from '../Components/planHeader';
import Input from '../Components/Inputbox';
import Plan from '../Components/Plan';

export default class PlanScreen extends React.Component {
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
            <View style={styles.container}>
                <PlanHeader />

                <View style={styles.subtitleposition}>
                    <Text>해야 할 일</Text>
                    <Input
                        message="할 일을 입력해주세요."
                        value={this.state.inputValue}
                        changeText={this._changeText}
                        addPlan={this._addPlan} />
                </View>
                <View style={styles.subtitleposition}>
                    <Text>해야 할 일 목록</Text>
                    {/* <Plan text="gggggggggggg" isChecked="false" /> */}
                    <FlatList 
                        data={this.state.plans}
                        renderItem={this._makePlan}
                        keyExtractor={(item, index) => {return `${index}`}}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
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
    }
});
