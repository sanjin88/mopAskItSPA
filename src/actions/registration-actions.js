import {
    browserHistory
} from 'react-router'
import axios from 'axios'

export function registerUser(data) {
    console.log('registration called:');


    return function (dispatch) {
            dispatch(registrationInProgress());
        axios.post("/users", {
            Email: data.email,
            Firstname: data.firstName,
            Lastname: data.lastName,
            Password: data.password
        }).then(function (response) {
            console.log(response)
            dispatch(handleUserRegisterSuccess());        
            browserHistory.push('/login')
        }).catch(function (err) {
            console.log(err)
        })

    };
}


function registrationInProgress() {
    return {
        type: "REGISTRATION_IN_PROGRESS"
    };
}

function handleUserRegisterSuccess() {
    return {
        type: "HANDLE_REGISTER_SUCCESS"
    };
}