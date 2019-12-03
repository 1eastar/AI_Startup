import React, {createContext} from 'react';

const context = createContext();
const {Provider, Consumer:CorrectConsumer} = context;

class CorrectProvider extends React.Component{
    constructor(props){
        super(props);
        this.state={
            //
            problemNum:1, // index 1번째 문제

            problem:[
                {
                    answers: [
                        {content:'', checked:false},
                        {content:'', checked:false},
                        {content:'', checked:false},
                        {content:'', checked:false},
                        {content:'', checked:false},
                    ], //props.answers,
                    answer:0,
                    problemImage:'',
                    problemID:0,
                },
            ],

            // 문제 id, 각 문제당 걸린시간(초), T/F
            userID:"me",
            schema:"team_seven",
            problemResult : [ 
                { 
                    id:0,
                    time:0,
                    correctness:false,
                }, // 예시
            ],
            // answers:[   // 임시 
            //     {content:'', checked:false},
            //     {content:'', checked:false},
            //     {content:'', checked:false},
            //     {content:'', checked:false},
            //     {content:'', checked:false},
            // ],
            picked:[0],
            nothingChecked:true,
        };
        this.action2={
            //
            // setAnswers : (c1,c2,c3,c4,c5) => {
            //     let first = {content:c1, checked:false};
            //     let second = {content:c2, checked:false};
            //     let third = {content:c3, checked:false};
            //     let fourth = {content:c4, checked:false};
            //     let fifth = {content:c5, checked:false};
            //     let lst = [first, second, third, fourth, fifth];
            //     this.setState({answers:lst});
            // },
            
            resetState : () => {
                this.setState(
                    {
                        problemNum:1,
                        problem:[
                            {
                                answers: [
                                    {content:'', checked:false},
                                    {content:'', checked:false},
                                    {content:'', checked:false},
                                    {content:'', checked:false},
                                    {content:'', checked:false},
                                ], //props.answers,
                                answer:0,
                                problemImage:'',
                                problemID:0,
                            },
                        ],
                        userID:"me",
                        schema:"team_seven",
                        problemResult : [
                            { 
                                id:0,
                                time:0,
                                correctness:false,
                            }, // 예시
                        ],

                        answers:[   // 임시 test용
                            {content:'', checked:false},
                            {content:'', checked:false},
                            {content:'', checked:false},
                            {content:'', checked:false},
                            {content:'', checked:false},
                        ],
                        picked:[0],
                        nothingChecked:true,
                    }
                )
            },
            addProblemNum : () => {
                //
                let nextNum = this.state.problemNum + 1;
                this.setState({problemNum:nextNum});
            },

            storeResult : (id, time, correct) => {    // 문제고유번호, 걸린시간(초), TF
                let newResultset = this.state.problemResult;
                let newResult = {
                    id:id,
                    time:time,
                    correctness:correct,
                }
                newResultset = newResultset.concat(newResult);
                this.setState({problemResult : newResultset});
            },
            storeProblem : (param) => {
                let newProblemset = [...this.state.problem];
                let newProblem = {...param};
                newProblemset = newProblemset.concat(newProblem);
                this.setState({problem:newProblemset})
            },

            _getProblemInfo : async () => {
                let bodyValue = {schema: 'team_seven'};
                return await new Promise((resolve, reject) => {
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
                          console.log('empty result came back from API call');
                      } else {
                        const problemInfo = {
                            answer: result.answer,
                            answers: [
                                {content: result.ex1, checked:false},
                                {content: result.ex2, checked:false},
                                {content: result.ex3, checked:false},
                                {content: result.ex4, checked:false},
                                {content: result.ex5, checked:false}
                            ],
                            problemImage: result.img,
                            problemID: result.ID,
                          
                        }
                        resolve(problemInfo);
                      }
                  })
                  .catch((err) => {
                    console.log(err);
                  })
              })
            },

            
            postProblemInfo : async () => {
                let bodyValue = {
                    userID:this.state.userID,
                    schema:this.state.schema,
                    problemResult:this.state.problemResult,
                }
                return await new Promise((resolve, reject)=>{
                    fetch('https://m27jbkwsc0.execute-api.ap-northeast-2.amazonaws.com/second/gettest', {
                        method : "POST",
                        headers : {
                            "Content-type" : "application/json",
                            "Accept" : "application/json",
                        },
                        body : JSON.stringify(bodyValue) // dic type data 전달
                    })
                    .then(response => response.json())
                    .then(response => console.log(response))
                })
                
            },

            compareAnswers : () => {
                //
                let prob = [...this.state.problem];
                let input = this.state.picked;
                for(let i=1;i<=15;i++){
                    
                }
            },

            checkPicked : () => {
                //
                for(let i=0;i<5;i++){
                    if(this.state.nothingChecked){
                        let newpicked = [...this.state.picked];
                        newpicked = newpicked.concat(0);
                        this.setState({picked:newpicked});
                    }
                    else{
                        if(this.state.answers[i].checked){
                            let newpicked = [...this.state.picked];
                            newpicked = newpicked.concat(i);
                            this.setState({picked:newpicked});
                        }
                    }
                }
            },

            pick1 : () => {
                //
                let newanswers = this.state.problem[this.state.problemNum].answers;
                for(let i=0;i<5;i++){
                    if(i=0){
                        newanswers[i].checked = true;
                    }
                    else{
                        newanswers[i].checked = false;
                    }
                }
                let newprob = this.state.problem;
                newprob[this.state.problemNum] = newanswers;
                this.setState({problem:newprob});
            },
            pick2 : () => {
                //
                let newanswers = this.state.problem[this.state.problemNum].answers;
                for(let i=0;i<5;i++){
                    if(i=1){
                        newanswers[i].checked = true;
                    }
                    else{
                        newanswers[i].checked = false;
                    }
                }
                let newprob = this.state.problem;
                newprob[this.state.problemNum] = newanswers;
                this.setState({problem:newprob});
            },
            pick3 : () => {
                //
                let newanswers = this.state.problem[this.state.problemNum].answers;
                for(let i=0;i<5;i++){
                    if(i=2){
                        newanswers[i].checked = true;
                    }
                    else{
                        newanswers[i].checked = false;
                    }
                }
                let newprob = this.state.problem;
                newprob[this.state.problemNum] = newanswers;
                this.setState({problem:newprob});
            },
            pick4 : () => {
                //
                let newanswers = this.state.problem[this.state.problemNum].answers;
                for(let i=0;i<5;i++){
                    if(i=3){
                        newanswers[i].checked = true;
                    }
                    else{
                        newanswers[i].checked = false;
                    }
                }
                let newprob = this.state.problem;
                newprob[this.state.problemNum] = newanswers;
                this.setState({problem:newprob});
            },
            pick5 : () => {
                //
                let newanswers = this.state.problem[this.state.problemNum].answers;
                for(let i=0;i<5;i++){
                    if(i=4){
                        newanswers[i].checked = true;
                    }
                    else{
                        newanswers[i].checked = false;
                    }
                }
                let newprob = this.state.problem;
                newprob[this.state.problemNum] = newanswers;
                this.setState({problem:newprob});
            },
        };
    }

    render(){
        const {state, action2} = this;
        const value = {state, action2};

        return <Provider value={value}>{this.props.children}</Provider>
    }
}

export {CorrectConsumer, CorrectProvider};