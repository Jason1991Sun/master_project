const loggedInReducer = (state = false, action) => {
    switch(action.type) {
        case 'LOGIN':
            //TODO: need to implement database operation to check user's credentials
            return true;
        case 'LOGOUT':
            return false;
        default:
            return state;
    }
};

export default loggedInReducer;