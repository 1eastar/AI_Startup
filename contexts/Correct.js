import React, {createContext} from 'react';

const context = createContext();
const {Provider, Consumer:CorrectConsumer} = context;

class CorrectProvider extends React.Component{
    constructor(props){
        super(props);
        this.state={
            //
            problemNum:0, // 0번째 문제

            problem:[
                {
                    answers: {first:'', second:'', third:'', fourth:'', fifth:''}, //props.answers,
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
        };
        this.action={
            //
            storeResult : (id, time, correct) => {    // 문제고유번호, 걸린시간(초), TF
                let newResultset = [...this.state.problemResults];
                let newResult = {
                    id:id,
                    time:time,
                    correct:correct,
                }
                newResultset = newResultset.concat(newResult);
                this.setState({problemResults : newResultset});
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
                            answers: {
                                first: result.ex1,
                                second: result.ex2,
                                third: result.ex3,
                                fourth: result.ex4,
                                fifth: result.ex5
                            },
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