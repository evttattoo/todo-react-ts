import React from "react";
import { Todo } from "../App/App";
import DeleteButton from "../Buttons/DeleteButton";
import "./Views.css";

interface Props {
  todos: Todo[];
  moveToTrash: (id: number) => void;
}

const Done: React.FC<Props> = ({ todos, moveToTrash }) => {
  return (
    <ul className="todos done">
      {todos.map((todo) => {
        if (todo.done)
          return (
            <li className="todo done" key={todo.id}>
              <span className="todo-span">{todo.text}</span>{" "}
              <DeleteButton todo={todo} moveToTrash={moveToTrash} />
            </li>
          );
        else return null;
      })}
    </ul>
  );
};

export default Done;
