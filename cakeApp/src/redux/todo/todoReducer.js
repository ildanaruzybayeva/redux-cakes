import { ADD_TODO } from "./todoTypes";

const initialState = [];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = {
        text: action.payload,
        status: false
      };
      return [...state, newTodo];
    default:
      return state;
  }
};

export default todoReducer;
