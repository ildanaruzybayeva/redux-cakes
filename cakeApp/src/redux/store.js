import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger'
import cakeReducer from "../redux/cake/cakeReducer";
import iceCreamReducer from "../redux/icecream/iceCreamReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer
});

const store = createStore(rootReducer, applyMiddleware(logger));
console.log("Initial state is", store.getState());

export default store;
