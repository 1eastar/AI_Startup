import React, {createContext} from 'react';

const context = createContext();
const {Provider, Consumer:CorrectConsumer} = context;

class CorrectProvider extends React.Component{
    constructor(props){
        super(props);
        this.state={
            //
            schema:'team_seven',
            userid:'',
            problemResults:[
                {
                    id:0,
                    time:0,
                    correct:false,
                },  // 예시
            ],
        };
        this.action={
            //
            setResult : (id, time, correct) => {    // 문제고유번호, 걸린시간(초), TF
                let newResultset = [...this.state.problemResults];
                let newResult = {
                    id:id,
                    time:time,
                    correct:correct,
                }
                newResultset = newResultset.concat(newResult);
                this.setState({problemResults : newResultset});
            }
        };
    }

    render(){
        const {state, action} = this;
        const value = {state, action};

        return <Provider value={value}>{this.props.children}</Provider>
    }
}

export {CorrectConsumer, CorrectProvider};