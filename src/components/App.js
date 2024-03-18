import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [allTasks, setAllTasks] = useState(TASKS)
  const [filter, setFilter] = useState("All");

  const deleteTask = (task) => {
    //filter out task from allTasks
    setAllTasks(allTasks.filter((el) => {
      //return el !== task
      if(el.text === task.text && el.category === task.category){
        return false
      } else {
        return true
      }
    }))
  }

  const onTaskFormSubmit = (newTask) => {
    setAllTasks([...allTasks, newTask])
  }

  const updateFilter = (category) => {
    setFilter(category)
  }

  const filteredTasks = allTasks.filter(task => {
    //return task.category === filter || filter === "All"
    if(task.category === filter || filter === "All"){
      return true 
    } else {
      return false
    }
  })
  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} filter={filter} updateFilter={updateFilter} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList deleteTask={deleteTask} tasks={filteredTasks} />
    </div>
  );
}

export default App;
