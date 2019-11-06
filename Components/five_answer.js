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

    constructor(props){
        super(props);
        this.state = {
            
            answers: props.answers,
            // answers:[
            //     {content:'content1', checked:false},
            //     {content:'content2', checked:false},
            //     {content:'content3', checked:false},
            //     {content:'content4', checked:false},
            //     {content:'content5', checked:false},
            // ],
            checked:[false, false, false, false, false],
        };
    }

    _makeAnswer = ({item, index}) => {
        return (
            <Answer 
                content={item.content}  // this.props.content로 해서 TestScreen.js에서 props로 리스트 넘겨주기
                checked = {item.checked}
                pickAnswer = {() => {
                    //
                    const newAnswers = [...this.state.answers];
                    // index 이외에 나머지 checked = false로 바꿔야 함.
                    for(let i=0;i<5;i++){
                        newAnswers[i].checked = false;
                    }
                    newAnswers[index].checked = !newAnswers[index].checked;
                     
                    this.setState({answers:newAnswers});
                }}
            />
        )
    }

    setContent = () => {
        // props로 받은 answer content를 setState로 바꾸기
        let newAnswers = this.state.answers;
        newAnswers[0] = { content: 'newContent', checked: false };
        this.setState({answers:newAnswers})
    }
    
    render(){
        this.setContent();
        return (
            <FlatList 
                data={this.state.answers}
                renderItem={this._makeAnswer}
                keyExtractor={(item, index) => {return `${index}`}} 
            />
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
    answer: {
        //
    },
    makerow:{
        flexDirection:'row',
    },
  });