import React, {createContext} from 'react';

const context = createContext();
const {Provider, Consumer:AnswerConsumer} = context;

class AnswerProvider extends React.Component{
    constructor(props){
        super(props);
        this.state={
            
        };
        this.state2 = {
            //
            answers:[   // 임시 
                {content:'', checked:false},
                {content:'', checked:false},
                {content:'', checked:false},
                {content:'', checked:false},
                {content:'', checked:false},
            ],
            picked:[],
            nothingChecked:true,
        }

        this.action={
            //
            checkPicked : () => {
                //
                for(let i=0;i<5;i++){
                    if(this.state2.nothingChecked){
                        let newpicked = [...this.state2.picked];
                        newpicked = newpicked.concat(0);
                        this.state2.picked = newpicked;
                    }
                    else{
                        if(this.state2.answers[i].checked){
                            let newpicked = [...this.state2.picked];
                            newpicked = newpicked.concat(i);
                            this.state2.picked = newpicked;
                        }
                    }
                }
            },

            pick1 : () => {
                //
                let newanswers = [...this.state2.answers];
                for(let i=0;i<5;i++){
                    if(i=0){
                        newanswers[i].checked = true;
                    }
                    else{
                        newanswers[i].checked = false;
                    }
                }
                
                this.state2.answers = newanswers;
            },
            pick2 : () => {
                //
                let newanswers = [...this.state2.answers];
                for(let i=0;i<5;i++){
                    if(i=1){
                        newanswers[i].checked = true;
                    }
                    else{
                        newanswers[i].checked = false;
                    }
                }
                
                this.state2.answers = newanswers;
            },
            pick3 : () => {
                //
                let newanswers = [...this.state2.answers];
                for(let i=0;i<5;i++){
                    if(i=2){
                        newanswers[i].checked = true;
                    }
                    else{
                        newanswers[i].checked = false;
                    }
                }
                
                this.state2.answers = newanswers;
            },
            pick4 : () => {
                //
                let newanswers = [...this.state2.answers];
                for(let i=0;i<5;i++){
                    if(i=3){
                        newanswers[i].checked = true;
                    }
                    else{
                        newanswers[i].checked = false;
                    }
                }
                
                this.state2.answers = newanswers;
            },
            pick5 : () => {
                //
                let newanswers = [...this.state2.answers];
                for(let i=0;i<5;i++){
                    if(i=4){
                        newanswers[i].checked = true;
                    }
                    else{
                        newanswers[i].checked = false;
                    }
                }
                
                this.state2.answers = newanswers;
            },
        };
    }

    render(){
        const {state2, action} = this;
        const value = {state2, action};

        return <Provider value={value}>{this.props.children}</Provider>
    }
}

export {AnswerConsumer, AnswerProvider};