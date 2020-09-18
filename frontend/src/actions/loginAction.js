import axios from "axios";

export const login = user => async (dispatch) => {
    const res = await axios.post('http://localhost:5000/users/', user)
    if (user.password === res.data.password) {
        console.log('welcome back ' + res.data.username);
        dispatch({
            type: 'LOGIN'
        });
    } else {
        console.log('wrong password');
        dispatch({
            type: 'LOGOUT'
        });
    }
};

export const logout = () => {
  return {
      type: 'LOGOUT'
  };
};