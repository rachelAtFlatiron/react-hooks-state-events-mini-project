import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {

  const [tasks, setTasks] = useState(TASKS)
  const [category, setCategory] = useState('All')

  const deleteTask = (text) => {
    //slice up the new array 
    //const newTasks = tasks.slice(0, i).append(tasks.slice(i+1))
    const newTasks = tasks.filter((el, i) => {
      return el.text !== text
    })
    setTasks(newTasks)
  }

  //just make sure newTask is in the form {category: '', text: ''}
  const addTask = (newTask) => {
    setTasks([...tasks, newTask])
  }

  const updateCategory = (newCategory) => {
    setCategory(newCategory)
  }

  const filteredTasks = tasks.filter((el, i) => {
    //if category is 'all', return true 
    // if(category === 'All'){
    //   return true 
    // } else if (category===el.category) {
    //   return true 
    // }
    // return false

    // if(category === 'All' || category === el.category){
    //   return true 
    // } else {
    //   return false 
    // }
    return (category === 'All' || category === el.category)
  })

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter category={category} updateCategory={updateCategory} categories={CATEGORIES} />
      <NewTaskForm addTask={addTask} categories={CATEGORIES} />
      <TaskList tasks={filteredTasks} deleteTask={deleteTask}/>
    </div>
  );
}

export default App;
