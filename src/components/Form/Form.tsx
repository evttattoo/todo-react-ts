import { useState } from "react";
import "./Form.css";

import React from "react";

const Form = (props: any) => {
  const [value, setValue] = useState<string | undefined>(undefined);
  return (
    <form
      id="addTodo"
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        props.putTodo(value);
        setValue("");
      }}
    >
      <input
        type="text"
        placeholder="Пополните список ..."
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
};

export default Form;
