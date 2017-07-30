let initialState = {
    isInProgress: false
}
export default(state = initialState, payload) => {
    switch (payload.type) {
        case 'REGISTRATION_IN_PROGRESS':
            return Object.assign({}, state, {isInProgress: true});
        case 'HANDLE_REGISTER_SUCCESS':
            return Object.assign({}, state, {isInProgress: false});
        default:
            return state;
    }
};
