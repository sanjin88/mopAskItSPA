export function registerUser(data) {
    console.log('registration called:');
    return function(dispatch) {
        dispatch(registrationInProgress());
        setTimeout(function() {
            dispatch(handleUserRegisterSuccess());
        }, 3000);
    };
}


function registrationInProgress() {
    console.log("registrationInProgress called")
    return {
        type: "REGISTRATION_IN_PROGRESS"
    };
}

function handleUserRegisterSuccess() {
    console.log("handleUserRegisterSuccess called")
    return {
        type: "HANDLE_REGISTER_SUCCESS"
    };
}