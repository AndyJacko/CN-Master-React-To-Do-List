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

  const onAddHandler = (e) => {
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

  const onCheckedHandler = (id) => {
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
      <div id="instructions">
        <h2>Instructions</h2>
        <p>Add To-Do by entering details and clicking "Add To-Do".</p>
        <p>
          Click <i className="fa-solid fa-pen todo-icon todo-edit"></i> to
          modify To-Do. Click{" "}
          <i className="fa-solid fa-floppy-disk todo-icon todo-save"></i> to
          save changes.
        </p>
        <p>
          Click{" "}
          <i className="fa-regular fa-trash-can todo-icon todo-delete"></i> to
          remove a To-Do.
        </p>
        <p>Click To-Do item to toggle completed status.</p>
      </div>

      <AddToDo rf={addToDo_ref} ah={onAddHandler} />
      {todos.map((todo) => (
        <ToDoListItem
          key={todo.id}
          id={todo.id}
          txt={todo.text}
          cmp={todo.complete}
          sh={onSaveHandler}
          dh={onDeleteHandler}
          ch={onCheckedHandler}
        />
      ))}
    </div>
  );
};

export default ToDoList;
