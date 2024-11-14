import React from "react";
import { Todo } from "../App/App";
import { FaCheck } from "react-icons/fa";

interface Props {
  todo: Todo;
  toggleTodo: (id: number) => void;
}

const CompleteButton: React.FC<Props> = ({ todo, toggleTodo }) => {
  return (
    <FaCheck
      className="button"
      onClick={(e) => {
        e.stopPropagation();
        toggleTodo(todo.id);
      }}
    />
  );
};

export default CompleteButton;
