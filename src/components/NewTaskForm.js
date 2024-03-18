import React, { useState } from "react";
/*
1. create state for form
2. ~~~set input values to form values~~~
3. create onChange handlers that update form state
*/
function NewTaskForm({ categories, onTaskFormSubmit }) {

  const initialForm = {
    text: '',
    category: ''
  }
  const [form, setForm] = useState(initialForm)

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onTaskFormSubmit(form)
    setForm(initialForm)
  }

  return (
    <form className="new-task-form" onSubmit={(e) => handleSubmit(e)}>
      <label>
        Details
        <input type="text" name="text" value={form.text} onChange={(e) => handleChange(e)}/>
      </label>
      <label>
        Category
        <select name="category" value={form.category} onChange={(e) => handleChange(e)}>
          {
            categories.map((category, i) => <option value={category} key={category}>{category}</option>)
          }
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
