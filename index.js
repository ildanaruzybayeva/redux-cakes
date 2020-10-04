const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

//Action (describe intention)

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "first redux action"
  };
}

function buyIceCream() {
  return {
    type: BUY_ICECREAM,
    info: "second redux action"
  };
}
//Reducer is a fn that takes in action and prev state as arg and returns new state (prevState, action) => newState

const initialCakeState = {
  numOfCakes: 10
};

const initialIceCreamState = {
  numOfIceCreams: 20
};

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1
      };
    default:
      return state;
  }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1
      };
    default:
      return state;
  }
};

//Store - holds app's state. GET: getState(), UPDATE: dispatch(action), register listener: subscribe(listener)

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer
});

const store = createStore(rootReducer);
console.log("Initial state is", store.getState());
const unsibscribe = store.subscribe(() =>
  console.log("New store is", store.getState())
);
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyCake());
unsibscribe();
