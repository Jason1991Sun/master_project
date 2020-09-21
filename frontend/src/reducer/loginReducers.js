const loginReducers = (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN_REQUEST':
            return {loading: true};
        case 'LOGIN_SUCCESS':
            return {loading: false, userInfo: action.payload};
        case 'LOGIN_FAIL':
            return {loading: false};
        case 'LOGIN_ERR':
            return {loading: false, error: action.payload};
        default:
            return state;
    }
};

export default loginReducers;