import {
    browserHistory
} from 'react-router'
import axios from 'axios'

export function getUserData(data) {
    return function (dispatch) {
        axios.get("/users/current",  { 'headers': { 'Authorization': localStorage.getItem('ask-it-token') } })
        .then(function (response) {
            dispatch(receiveUserData(response.data))
        }).catch(function (err) {
            console.log(err)
        })
    };
}

function receiveUserData(data) {
    return {
        type: "RECEIVE_USER_DATA",
        data
    };
}