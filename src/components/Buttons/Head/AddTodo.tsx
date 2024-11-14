import React from "react";

export function AddTodo() {
  return (
    <button className="btn btn-add" type="submit" form="addTodo">
      <img src="/plus.svg" alt="Добавить задачу" className="img" />
      ДОБАВИТЬ
    </button>
  );
}
