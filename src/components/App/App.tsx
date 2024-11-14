import React from "react";
import "./App.css";
import { useState } from "react";
import Form from "../Form/Form";
import Deleted from "../Views/Deleted";
import Done from "../Views/Done";
import { AddTodo } from "../Buttons/Head/AddTodo";
import ClearTodos from "../Buttons/Head/ClearTodos";
import AllTodos from "../Views/AllTodos";
import Current from "../Views/Current";
import Nav from "../Nav/Nav";

export interface Todo {
  id: number;
  text: string;
  done: boolean;
  deleted: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [allTodos, setAllTodos] = useState(0);

  const [view, setView] = useState("all");

  const putTodo = (value: string): void => {
    if (value) {
      setTodos([
        ...todos,
        { id: Date.now(), text: value, done: false, deleted: false },
      ]);
      setAllTodos(allTodos + 1);
    } else {
      alert("Введите текст");
    }
  };

  const toggleTodo = (id: number): void => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo;
        return {
          ...todo,
          done: !todo.done,
        };
      })
    );
  };

  const removeTodo = (id: number): void => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const moveToTrash = (id: number): void => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo;
        return {
          ...todo,
          deleted: !todo.deleted,
          done: (todo.done = false),
        };
      })
    );
    setAllTodos(allTodos - 1);
  };

  function moveAllToTrash(arr: Array<Todo>) {
    setTodos(
      arr.map((todo) => ({
        ...todo,
        deleted: true,
      }))
    );
  }

  const completedTodosCount: number = todos.reduce(
    (acc, task) => acc + (task.done ? 1 : 0),
    0
  );
  const deletedTodosCount: number = todos.reduce(
    (acc, task) => acc + (task.deleted ? 1 : 0),
    0
  );
  const currentTodosCount: number =
    todos.length - deletedTodosCount - completedTodosCount;
  const allTodosCount: number = todos.length - deletedTodosCount;

  return (
    <div className="wrapper">
      <div className="container">
        <h1 className="header-title">TO DO</h1>

        <div className="header">
          <AddTodo />
          <Form putTodo={putTodo} />
          <ClearTodos todos={todos} moveAllToTrash={moveAllToTrash} />
        </div>

        <div className="main">
          <Nav
            view={view}
            setView={setView}
            currentTodosCount={currentTodosCount}
            allTodosCount={allTodosCount}
            completedTodosCount={completedTodosCount}
          />
          {view === "current" && (
            <Current
              todos={todos}
              toggleTodo={toggleTodo}
              moveToTrash={moveToTrash}
            />
          )}
          {view === "all" && (
            <AllTodos
              todos={todos}
              toggleTodo={toggleTodo}
              moveToTrash={moveToTrash}
            />
          )}{" "}
          {view === "done" && <Done todos={todos} moveToTrash={moveToTrash} />}
          {view === "trash" && (
            <Deleted
              todos={todos}
              moveToTrash={moveToTrash}
              removeTodo={removeTodo}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
