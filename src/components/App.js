import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [tasks, setTasks] = useState(TASKS)
  const [selectedCategory, setSelectedCategory] = useState("All")
  //remove specific task from tasks
  /*
    PARAM task => { category: 'test', text: 'testtwo' }
  */
  function handleDelete(task) {
    //destructure tasks so that we make a new array with tasks elements
    //but not directly referencing tasks state
    const taskFilter = [...tasks].filter(el => {
      //check if el.text == task.text
      return el.text !== task.text
    })
    //setTasks with updated array, causing the page to re-render
    setTasks(taskFilter)
  }

  function handleCategoryChange(cat) {
    setSelectedCategory(cat)
  }

  function addNewTask(task) {
    setTasks([...tasks, task])
  }

  //[...tasks] creates new copy of state tasks
  let filteredTasks = [...tasks].filter(el => {
    //if current tasks' category === category passed in
    //if current category passed in is 'all'
    return el.category === selectedCategory || selectedCategory === "All"
  })

  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter selectedCategory={selectedCategory} handleCategoryChange={handleCategoryChange} categories={CATEGORIES} />
      <NewTaskForm categories={CATEGORIES} addNewTask={addNewTask} />
      { /* demonstrate if tasks={TASKS} */ }
      <TaskList tasks={filteredTasks} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
