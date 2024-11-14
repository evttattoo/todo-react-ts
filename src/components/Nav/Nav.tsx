import React from "react";
import "./Nav.css";
interface Props {
  view: string;
  setView: React.Dispatch<React.SetStateAction<string>>;
  completedTodosCount: number;
  currentTodosCount: number;
  allTodosCount: number;
}

const Nav: React.FC<Props> = ({
  view,
  setView,
  currentTodosCount,
  allTodosCount,
  completedTodosCount,
}) => {
  return (
    <nav className="views">
      <ul className="ul-views">
        {}
        <li
          className={view === "current" ? "li-views selected" : "li-views"}
          onClick={() => setView("current")}
        >
          ТЕКУЩИЕ ДЕЛА
          {currentTodosCount > 0 ? " (" + currentTodosCount + ")" : null}
        </li>
        <li
          className={view === "all" ? "li-views selected" : "li-views"}
          onClick={() => setView("all")}
        >
          ВСЕ ДЕЛА
          {allTodosCount > 0 ? " (" + allTodosCount + ")" : null}
        </li>
        <li
          className={view === "done" ? "li-views selected" : "li-views"}
          onClick={() => setView("done")}
        >
          ВЫПОЛНЕННЫЕ ДЕЛА
          {completedTodosCount > 0 ? " (" + completedTodosCount + ")" : null}
        </li>
        <li
          className={view === "trash" ? "li-views selected" : "li-views"}
          onClick={() => setView("trash")}
        >
          КОРЗИНА
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
