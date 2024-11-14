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
const Current: React.FC<Props> = ({ todos, toggleTodo, moveToTrash }) => {
  return (
    <ul className="todos">
      {todos.map((todo) => {
        if (!todo.deleted && !todo.done)
          return (
            <li className="todo" key={todo.id}>
              <span className="todo-span">{todo.text}</span>{" "}
              <CompleteButton todo={todo} toggleTodo={toggleTodo} />
              <DeleteButton todo={todo} moveToTrash={moveToTrash} />
            </li>
          );
        else return null;
      })}
    </ul>
  );
};

export default Current;
