import React from "react";
import Task from './Task';

function TaskList({ tasks, deleteTask }) {
  return (
    <div className="tasks">
      {tasks.map((curTask, index) => <Task key={index} text={curTask.text} category={curTask.category} deleteTask={deleteTask} />)}
    </div>
  );
}

export default TaskList;
