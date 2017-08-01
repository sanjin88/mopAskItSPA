

let initialState = [];
export default(state = initialState, payload) => {
    switch (payload.type) {
        case 'RECEIVE_MY_QUESTIONS':
           return payload.data;
        default:
            return state;
    }
};
