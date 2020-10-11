import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../redux";

function HooksTodo() {
  const todosFromStore = useSelector(state => state.todo);
  const [newTodo, setNewTodo] = useState("");
  const dispatch = useDispatch();

  const sendToStore = (text) => {
    dispatch(addTodo(text));
    setNewTodo("");
  };

  return (
    <div>
      <input
        type="text"
        onChange={e => setNewTodo(e.target.value)}
        value={newTodo}
      />
      <button onClick={() => sendToStore(newTodo)}>Add todo</button>
      <ul>
        {todosFromStore.map(el => (
          <li>{el.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default HooksTodo;
