import React, { useState } from "react";
import "./Task.css";

const Task = (props) => {
  const {
    id,
    text,
    done,
    edit,
    toggleDoneTask,
    toggleEdit,
    removeTask,
    changeText,
  } = props;

  const [value, setValue] = useState(text);

  const saveEdit = (e) => {
    e.preventDefault();
    toggleEdit(id);
    changeText(id, value);
  };

  return (
    <form className="input-group" onSubmit={saveEdit}>
      <div>
        <input
          id={id}
          type="checkbox"
          checked={done}
          onChange={() => toggleDoneTask(id)}
        />
        {edit ? (
          <input
            className="form-control"
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        ) : (
          <label
            htmlFor={id}
            style={{
              textDecoration: done ? "line-through" : "none",
              marginLeft: "10px",
            }}
            onClick={() => toggleDoneTask(id)}
          >
            {value}
          </label>
        )}
      </div>
      <div className="task-btn">
        {edit && (
          <button className="btn btn-link" color="link">
            ✅
          </button>
        )}
        {!edit && (
          <button className="btn btn-link" onClick={() => toggleEdit(id)}>
            ✏️
          </button>
        )}
        <button className="btn btn-link" onClick={() => removeTask(id)}>
          🗑
        </button>
      </div>
    </form>
  );
};

export default Task;
