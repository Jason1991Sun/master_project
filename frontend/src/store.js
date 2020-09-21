import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import Cookie from "js-cookie";

import { itemListReducer, itemDetailsReducer } from "./reducer/itemReducers";
import loginReducers from "./reducer/loginReducers";
import cartReducer from "./reducer/cartReducers";

// check if there are cart items in the cookie
const cartItems = Cookie.getJSON("cartItems") || [];
// TODO: add more initial states from Cookie

// set initial state for redux
const initialState = { cart: { cartItems } };

/*
combine all the reducers：
{ name_of_state: state}
*/
const allReducers = combineReducers({
  itemList: itemListReducer,
  itemDetails: itemDetailsReducer,
  cart: cartReducer,
  loggedIn: loginReducers,
});

// detect whether the browser has redux extension installed
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create the redux store
const store = createStore(
  allReducers,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
