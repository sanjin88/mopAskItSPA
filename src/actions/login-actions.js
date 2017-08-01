import {
    browserHistory
} from 'react-router'
import axios from 'axios'

export function loginUser(data) {
    return function (dispatch) {
        axios.post("/users/login", {
            Email: data.email,
            Password: data.password
        }).then(function (response) {
            localStorage.setItem('ask-it-token', response.data.token);
            browserHistory.push('/questions');
        }).catch(function (err) {
            console.log(err)
        })
    };
}

