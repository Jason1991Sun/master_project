import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { itemListReducer, itemDetailsReducer } from "./reducer/itemReducers";
import loggedInReducer from "./reducer/loggedInReducer";

const initialState = {};

// combine all the reducers
const allReducers = combineReducers({
  itemList: itemListReducer,
  itemDetails: itemDetailsReducer,
  loggedIn: loggedInReducer
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
