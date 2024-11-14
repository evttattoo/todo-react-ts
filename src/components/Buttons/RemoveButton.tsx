import React from "react";
import { Todo } from "../App/App";
import { IoMdClose } from "react-icons/io";
import "./Buttons.css";

interface Props {
  todo: Todo;
  removeTodo(id: number): void;
}

const RemoveButton: React.FC<Props> = ({ todo, removeTodo }) => {
  return (
    <IoMdClose
      className="button remove-button"
      onClick={(e) => {
        e.stopPropagation();
        removeTodo(todo.id);
      }}
    />
  );
};

export default RemoveButton;
