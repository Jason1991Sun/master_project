import axios from "axios";
import Cookie from 'js-cookie';

export const login = user => async (dispatch) => {
    dispatch({type: 'LOGIN_REQUEST', payload: user});
    try{
        const response = await axios.post('http://localhost:5000/users/signin', user);
        // the user entered the correct credentials
        if(response.status === 200){
            // make a copy of user information from the response's data and store it in Cookie
            const userInfo = {...response.data};
            console.log('welcome back! ' + userInfo.username);
            Cookie.set('userInfo', JSON.stringify(userInfo));
            dispatch({
                type: 'LOGIN_SUCCESS',
                payload: response.data
            });
        }
        // user entered wrong credentials
        else{
            console.log('wrong credentials entered');
            dispatch({type: 'LOGIN_FAIL'});
        }
    }catch(err){
        console.log('login action error');
        dispatch({type: 'LOGIN_ERR', payload: err.message});
    }
};

export const logout = () => {
  return {
      type: 'LOGOUT'
  };
};