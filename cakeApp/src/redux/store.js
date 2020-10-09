import { createStore } from "redux";
import cakeReducer from "../redux/cake/cakeReducer";
import iceCreamReducer from "../redux/icecream/iceCreamReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer
});

const store = createStore(rootReducer);
console.log("Initial state is", store.getState());

export default store;
