import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import Cookie from "js-cookie";

import { itemListReducer, itemDetailsReducer } from "./reducer/itemReducers";
import loggedInReducer from "./reducer/loggedInReducer";
import cartReducer from "./reducer/cartReducers";

// check if there are cart items in the cookie
const cartItems = Cookie.getJSON("cartItems") || [];

const initialState = { cart: { cartItems } };

// combine all the reducers
const allReducers = combineReducers({
  itemList: itemListReducer,
  itemDetails: itemDetailsReducer,
  cart: cartReducer,
  loggedIn: loggedInReducer,
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
