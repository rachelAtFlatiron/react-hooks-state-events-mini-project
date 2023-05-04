import React, { useState } from "react";

function NewTaskForm({ categories, addNewTask }) {
  const formOutline = {
    category: "Code", 
    text: ""
  }
  const [form , setForm] = useState(formOutline)
  
  const handleChange = (e) => {
    console.log(e.target.value)
    setForm({...form, [e.target.name]: e.target.value})

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addNewTask(form)
    setForm(formOutline)
  }

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input onChange={(e) => handleChange(e)} type="text" value={form.text} name="text" />
      </label>
      <label>
        Category
        <select name="category" onChange={e => handleChange(e)}>
          {
            categories.map((el, i) => {
              //is el "All"
              if(el !== 'All'){
                return <option key={i} >{el}</option>
              }
            })
          }
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
