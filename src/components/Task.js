import React from "react";

function Task({ deleteTask, task, index }) {
  return (
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button onClick={() => deleteTask(task.text)} className="delete">X</button>
    </div>
  );
}

export default Task;
