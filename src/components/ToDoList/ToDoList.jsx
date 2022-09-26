import React, { useRef, useState } from "react";

import AddToDo from "./AddToDo/AddToDo";

import ToDoListItem from "./ToDoListItem/ToDoListItem";

const DUMMY_TODOS = [
  { id: 1, complete: false, text: "Eat Cheese" },
  { id: 2, complete: false, text: "Exercise On Wheel" },
  { id: 3, complete: false, text: "Find Pinky" },
  { id: 4, complete: false, text: "Take Over The World" },
];

const ToDoList = () => {
  const [todos, setTodos] = useState(DUMMY_TODOS);
  const addToDo_ref = useRef();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const addToDo = addToDo_ref.current.value;
    addToDo_ref.current.value = "";
    const addToDoID = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;

    if (!addToDo || addToDo.trim() === "") {
      return;
    }

    const newTodos = [...todos];
    newTodos.push({ id: addToDoID, complete: false, text: addToDo });
    setTodos(newTodos);
  };

  const onSaveHandler = (id, text) => {
    const newTodos = [...todos];

    newTodos.forEach((todo) => {
      if (todo.id === id) {
        todo.text = text;
      }
    });

    setTodos(newTodos);
  };

  const onDeleteHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const checkedHandler = (id) => {
    const newTodos = [...todos];

    newTodos.forEach((todo) => {
      if (todo.id === id) {
        todo.complete = !todo.complete;
      }
    });

    setTodos(newTodos);
  };

  return (
    <div id="todo-list">
      <AddToDo rf={addToDo_ref} osh={onSubmitHandler} />
      {todos.map((todo) => (
        <ToDoListItem
          key={todo.id}
          id={todo.id}
          txt={todo.text}
          cmp={todo.complete}
          sh={onSaveHandler}
          dh={onDeleteHandler}
          ch={checkedHandler}
        />
      ))}
    </div>
  );
};

export default ToDoList;
