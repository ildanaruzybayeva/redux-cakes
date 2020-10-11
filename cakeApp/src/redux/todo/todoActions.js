import { ADD_TODO } from "./todoTypes";

export const addTodo = (text, status = false) => {
  return {
    type: ADD_TODO,
    payload: text
  };
};
