let initialState = {
    isInProgress: false
}
export default(state = initialState, payload) => {
    switch (payload.type) {
        case 'REGISTRATION_IN_PROGRESS':
            return Object.assign({}, state, {isInProgress: true});
        case 'HANDLE_REGISTER_SUCCESS':
            // save token here
            localStorage.setItem('id_token', 'fefeafea');
            return Object.assign({}, state, { isInProgress: false });
        default:
            return state;
    }
};
