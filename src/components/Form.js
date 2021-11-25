import React, { useState } from "react";
import Task from "./Task";
import "./Form.css";

const Form = () => {
  const [value, setValue] = useState("");
  const [task, setTask] = useState([]);
  const [id, setId] = useState(0);

  const addTask = (e) => {
    e.preventDefault();
    const safeValue = value.trim();
    if (!safeValue) return;
    const item = { id, text: safeValue, done: false, edit: false };
    setId(id + 1);
    setValue("");
    setTask([...task, item]);
    console.log(task);
  };

  const toggleDoneTask = (id) => {
    const mapped = task.map((item) => ({
      ...item,
      done: id === item.id ? !item.done : item.done,
    }));
    setTask(mapped);
  };

  const toggleEdit = (id) => {
    setTask((task) =>
      task.map((item) => ({
        ...item,
        edit: id === item.id ? !item.edit : item.edit,
      }))
    );
  };

  const changeText = (id, newText) => {
    setTask((task) =>
      task.map((item) => ({
        ...item,
        text: id === item.id ? newText : item.text,
      }))
    );
  };

  const removeTask = (id) => {
    const filterd = task.filter((item) => item.id !== id);
    setTask(filterd);
  };

  const removeAll = () => setTask([]);

  const removeDone = () => {
    const filtered = task.filter((item) => item.done === false);
    setTask(filtered);
  };

  return (
    <>
      <div className="add__purshase">
        <form onSubmit={addTask}>
          <div className="add__purhase-data">
            <input
              onChange={(e) => setValue(e.target.value)}
              style={{ display: "block" }}
              type="text"
              value={value}
              className="purshase"
              placeholder="Овсяное печенье"
            />
            <button className="btn btn-dark">Добавить</button>
          </div>
        </form>
        <div className="added__purshases">
          {task.map((item) => (
            <Task
              {...item}
              key={item.id}
              toggleDoneTask={toggleDoneTask}
              toggleEdit={toggleEdit}
              removeTask={removeTask}
              changeText={changeText}
            />
          ))}
        </div>
      </div>

      <div className="row">
        <div className="col">
          <button
            className="btn btn-secondary"
            type="button"
            onClick={removeDone}
          >
            Удалить выполненные
          </button>
        </div>
        <div
          className="col"
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <button className="btn btn-danger" type="button" onClick={removeAll}>
            Удалить все
          </button>
        </div>
      </div>
    </>
  );
};

export default Form;
