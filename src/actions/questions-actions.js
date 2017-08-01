import {
    browserHistory
} from 'react-router'
import axios from 'axios'

export function getMyQuestions(data) {
    return function (dispatch) {
        axios.get("/myquestions/1",  { 'headers': { 'Authorization': localStorage.getItem('ask-it-token') } })
        .then(function (response) {
            dispatch(receiveMyQuestions(response.data))
        }).catch(function (err) {
            console.log(err)
        })
    };
}

export function getQuestions(data) {
    return function (dispatch) {
        axios.get("/questions/1",  { 'headers': { 'Authorization': localStorage.getItem('ask-it-token') } })
        .then(function (response) {
           dispatch(receiveQuestions(response.data))
        }).catch(function (err) {
            console.log(err)
        })
    };
}

export function vote(questionId, vote) {
    return function (dispatch) {
        axios.post(`/questions/${questionId}/vote`,  { value: vote }, {'headers': { 'Authorization': localStorage.getItem('ask-it-token') }})
        .then(function (response) {
            dispatch(getQuestions());
        }).catch(function (err) {
            console.log(err)
        })
    };
}   


export function createQuestion(questionText) {
    return function (dispatch) {
        axios.post(`/questions`,  { Content: questionText }, {'headers': { 'Authorization': localStorage.getItem('ask-it-token') }})
        .then(function (response) {
            dispatch(getQuestions());
        }).catch(function (err) {
            console.log(err)
        })
    };
}   



export function createReply(questionId, replyText) {
    return function (dispatch) {
        axios.post(`/questions/${questionId}/response`,  { Content: replyText }, {'headers': { 'Authorization': localStorage.getItem('ask-it-token') }})
        .then(function (response) {
            dispatch(getQuestions());
            dispatch(getMyQuestions());
        }).catch(function (err) {
            console.log(err)
        })
    };
}   


function receiveQuestions(data) {
    return {
        type: "RECEIVE_QUESTIONS",
        data
    };
}



function receiveMyQuestions(data) {
    return {
        type: "RECEIVE_MY_QUESTIONS",
        data
    };
}
