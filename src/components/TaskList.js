import Task from './Task'

function TaskList({ tasks, deleteTask }) {
  return (
    <div className="tasks">
      {tasks.map((curTask, i) => {
        return <Task key={i} index={i} task={curTask} deleteTask={deleteTask} />
      })}
    </div>
  );
}

export default TaskList;
