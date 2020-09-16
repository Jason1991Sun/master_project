const loggedInReducer = (state = false, action) => {
    switch(action.type) {
        case 'login':
            //TODO: need to implement database operation to check user's credentials
            return true;
        case 'logout':
            return false;
        default:
            return state;
    }
};

export default loggedInReducer;