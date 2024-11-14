import React from "react";
import { Todo } from "../App/App";
import "./Views.css";
import ReturnButton from "../Buttons/ReturnButton";
import RemoveButton from "../Buttons/RemoveButton";

interface Props {
  todos: Todo[];
  moveToTrash: (id: number) => void;
  removeTodo: (id: number) => void;
}

const Deleted: React.FC<Props> = ({ todos, moveToTrash, removeTodo }) => {
  return (
    <ul className="todos">
      {todos.map((todo: any) => {
        if (todo.deleted)
          return (
            <li className="todo" key={todo.id}>
              <span className="todo-span">{todo.text}</span>{" "}
              <ReturnButton todo={todo} moveToTrash={moveToTrash} />
              <RemoveButton todo={todo} removeTodo={removeTodo} />
            </li>
          );
        else return null;
      })}
    </ul>
  );
};

export default Deleted;
