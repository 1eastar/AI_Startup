// js file for test

const fetch = require('node-fetch');
getProblemInfo = () => {
    fetch("https://m27jbkwsc0.execute-api.ap-northeast-2.amazonaws.com/Prod/getproblem?schema=team_seven")
    .then(response => response.text())
    .then(json => console.log(json))
    .catch(err => console.log(err))
}
getProblemInfo();