

let initialState = {
    firstname: '',
    lastname: '',
    email: ''
}
export default(state = initialState, payload) => {
    switch (payload.type) {
        case 'RECEIVE_USER_DATA':
            return Object.assign({}, state, payload.data);
        default:
            return state;
    }
};
