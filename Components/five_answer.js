import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, FlatList } from 'react-native';
import {AntDesign, Feather, MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons"
//feather circle , sim check
import Answer from './answer'

export default class Five_answer extends React.Component {
    static defaultprops = {
        
        // title:'default',
        // buttonColor:'#000',
        // titleColor: '#fff',
        // onPress:()=>null,
    }

    constructor(props) {
        super(props);
        this.state = {
            
            //answers: props.answers,
            answers:[   // 임시 test용
                {content:'', checked:false},
                {content:'', checked:false},
                {content:'', checked:false},
                {content:'', checked:false},
                {content:'', checked:false},
            ],
            picked:0,
        };
    }

    _makeAnswer = ({item, index}) => {
        return (
            <Answer 
                content={item.content} 
                checked = {item.checked}
                pickAnswer = {() => {
                    //
                    const newAnswers = [...this.state.answers];
                    // index 이외에 나머지 checked = false로 바꿔야 함.
                    for(let i=0; i<5; i++){
                        newAnswers[i].checked = false;
                    }
                    newAnswers[index].checked = !newAnswers[index].checked;
                     
                    this.setState({answers:newAnswers, picked:index});
                }}
            />
        )
    };
    

    componentWillMount() {
        // props로 받은 answer content를 setState로 바꾸기
        let newAnswers = [
            {content:this.props.answers.first, checked:false},
            {content:this.props.answers.second, checked:false},
            {content:this.props.answers.third, checked:false},
            {content:this.props.answers.fourth, checked:false},
            {content:this.props.answers.fifth, checked:false},
        ]
        this.setState({answers:newAnswers});
    }

    setContent = () => {
        // props로 받은 answer content를 setState로 바꾸기
        // console.log(this.props.answers)
        let newAnswers = [
            {content:this.props.answers.first, checked:this.state.answers[0].checked},
            {content:this.props.answers.second, checked:this.state.answers[1].checked},
            {content:this.props.answers.third, checked:this.state.answers[2].checked},
            {content:this.props.answers.fourth, checked:this.state.answers[3].checked},
            {content:this.props.answers.fifth, checked:this.state.answers[4].checked},
        ]
        this.setState({answers:newAnswers});
    }
    
    render() {
        setTimeout(()=>{
            this.setContent();
        },1000)
        
        return (
            <View style={styles.answers}>
                <FlatList 
                    data={this.state.answers}
                    renderItem={this._makeAnswer}
                    keyExtractor={(item, index) => {return `${index}`}} 
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10,
      borderRadius: 5,
      paddingHorizontal:10,
      height:10,
    },
    title: {
      fontSize: 15,
    },
    answers: {
        //
        height:150
    },
    makerow:{
        flexDirection:'row',
    },
  });