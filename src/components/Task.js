import React from "react";

function Task({ task, handleDelete }) {

  // let { category, text } = task

  return (
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button onClick={() => handleDelete(task)} className="delete">X</button>
    </div>
  );
}

export default Task;
