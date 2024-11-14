import React from "react";
import { Todo } from "../../App/App";

interface Props {
  todos: Todo[];
  moveAllToTrash: (arr: Todo[]) => void;
}

const ClearTodos: React.FC<Props> = ({ todos, moveAllToTrash }) => {
  return (
    <button
      className="btn btn-delete-all"
      onClick={(e) => {
        e.stopPropagation();
        moveAllToTrash(todos);
      }}
    >
      ОЧИСТИТЬ
      <img src="/clear.svg" alt="Добавить задачу" className="img" />
    </button>
  );
};

export default ClearTodos;
