import React from "react";
import Task from './Task'

function TaskList({ tasks, handleDelete }) {
  return (
    <div className="tasks">
      {
        tasks.map((el, i) => {
          return <Task key={i} task={el} handleDelete={handleDelete} />
        })
      }
    </div>
  );
}

export default TaskList;
