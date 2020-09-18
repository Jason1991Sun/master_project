import axios from 'axios'
const loggedInReducer = (state = false, action) => {
    switch(action.type) {
        case 'LOGIN':
            const user = action.payload;
            axios.post('http://localhost:5000/users/', user)
                .then(res => {
                    console.log('respond user: ');
                    console.log(res.data);
                    if(user.password === res.data.password) {
                        console.log('welcome back ' + res.data.username);
                        return true;
                    }
                    else{
                        console.log('wrong password');
                        return false
                    }
                })
                .catch(err => console.log('validating user failed: ' + err));
            return false;
        case 'LOGOUT':
            return false;
        default:
            return state;
    }
};

export default loggedInReducer;