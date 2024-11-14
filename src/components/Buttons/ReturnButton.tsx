import React from "react";
import { Todo } from "../App/App";
import { TbArrowBackUp } from "react-icons/tb";
import "./Buttons.css";

interface Props {
  todo: Todo;
  moveToTrash: (id: number) => void;
}

const ReturnButton: React.FC<Props> = ({ todo, moveToTrash }) => {
  return (
    <TbArrowBackUp
      className="button return-button"
      onClick={(e) => {
        e.stopPropagation();
        moveToTrash(todo.id);
      }}
    />
  );
};

export default ReturnButton;
