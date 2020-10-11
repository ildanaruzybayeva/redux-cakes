import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger'
import cakeReducer from "../redux/cake/cakeReducer";
import iceCreamReducer from "../redux/icecream/iceCreamReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers } from "redux";
import todoReducer from "./todo/todoReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  todo: todoReducer
});

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(logger)));
console.log("Initial state is", store.getState());

export default store;
