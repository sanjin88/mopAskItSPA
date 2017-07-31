import { browserHistory } from 'react-router'

export function registerUser(data) {
    console.log('registration called:');
    return function(dispatch) {
        dispatch(registrationInProgress());
        setTimeout(function() {
            dispatch(handleUserRegisterSuccess());
            browserHistory.push('/login')
        }, 3000);
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