import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger'
import cakeReducer from "../redux/cake/cakeReducer";
import iceCreamReducer from "../redux/icecream/iceCreamReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer
});

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(logger)));
console.log("Initial state is", store.getState());

export default store;
