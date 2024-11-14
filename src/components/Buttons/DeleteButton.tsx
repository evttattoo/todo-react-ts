import React from "react";
import { Todo } from "../App/App";
import { MdDelete } from "react-icons/md";
import "./Buttons.css";

interface Props {
  todo: Todo;
  moveToTrash: (id: number) => void;
}

const DeleteButton: React.FC<Props> = ({ todo, moveToTrash }) => {
  return (
    <MdDelete
      className="button"
      onClick={(e) => {
        e.stopPropagation();
        moveToTrash(todo.id);
      }}
    />
  );
};

export default DeleteButton;
