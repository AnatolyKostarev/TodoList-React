import React from "react";
import Form from "./Form";
import "./Todo.css";

const Todo = ({ children }) => {
  return (
    <>
      <h1>{children}</h1>
      <div className="todo__list">
        <Form />
      </div>
    </>
  );
};

export default Todo;
