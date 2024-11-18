import React from "react";
import CompleteButton from "../Buttons/CompleteButton";
import DeleteButton from "../Buttons/DeleteButton";
import { Todo } from "../App/App";
import "./Views.css";

interface Props {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  moveToTrash: (id: number) => void;
}

const AllTodos: React.FC<Props> = ({ todos, toggleTodo, moveToTrash }) => {
  return (
    <ul className="todos">
      {todos.map((todo: any) => {
        if (!todo.deleted)
          return (
            <li className={todo.done ? "todo todo-done" : "todo"} key={todo.id}>
              <span className={todo.done ? "todo-span done" : "todo-span"}>
                {todo.text}
              </span>{" "}
              <CompleteButton todo={todo} toggleTodo={toggleTodo} />
              <DeleteButton todo={todo} moveToTrash={moveToTrash} />
            </li>
          );
        else return null;
      })}
    </ul>
  );
};

export default AllTodos;
